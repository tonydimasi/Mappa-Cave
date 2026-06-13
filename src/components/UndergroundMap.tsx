/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { Site, Aqueduct, AqueductHotspot } from '../types.ts';
import { SITES_DATA, AQUEDUCTS_DATA } from '../data.ts';

interface UndergroundMapProps {
  selectedSite: Site | null;
  categoryFilter: string;
  searchQuery: string;
  onSelectSite: (site: Site) => void;
  selectedAqueduct: Aqueduct | null;
  onSelectAqueduct: (aqueduct: Aqueduct | null) => void;
  selectedHotspot: AqueductHotspot | null;
  onSelectHotspot: (hotspot: AqueductHotspot | null) => void;
}

export const UndergroundMap: React.FC<UndergroundMapProps> = ({
  selectedSite,
  categoryFilter,
  searchQuery,
  onSelectSite,
  selectedAqueduct,
  onSelectAqueduct,
  selectedHotspot,
  onSelectHotspot,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const deckInstanceRef = useRef<any>(null);
  const viewStateRef = useRef<any>({
    longitude: 14.250,
    latitude: 40.848,
    zoom: 14.3,
    pitch: 55,
    bearing: -5,
  });

  // Create state references to bypass stale closures in the animation render loop
  const categoryFilterRef = useRef(categoryFilter);
  const searchQueryRef = useRef(searchQuery);
  const selectedSiteRef = useRef(selectedSite);
  const selectedAqueductRef = useRef(selectedAqueduct);
  const selectedHotspotRef = useRef(selectedHotspot);
  const isTransitioningRef = useRef(false);

  // Hover states and reference tracking to drive real-time opacity updates
  const [hoveredSiteId, setHoveredSiteId] = React.useState<number | null>(null);
  const [hoveredHotspotId, setHoveredHotspotId] = React.useState<string | null>(null);
  const hoveredSiteIdRef = useRef<number | null>(null);
  const hoveredHotspotIdRef = useRef<string | null>(null);

  // Keep references continuously synchronized
  categoryFilterRef.current = categoryFilter;
  searchQueryRef.current = searchQuery;
  selectedSiteRef.current = selectedSite;
  selectedAqueductRef.current = selectedAqueduct;
  selectedHotspotRef.current = selectedHotspot;
  hoveredSiteIdRef.current = hoveredSiteId;
  hoveredHotspotIdRef.current = hoveredHotspotId;

  // Master layer renderer
  const updateLayers = () => {
    if (!deckInstanceRef.current) return;
    const { ScatterplotLayer, TextLayer, PathLayer, TripsLayer } = (window as any).deck;
    if (!ScatterplotLayer || !TextLayer || !PathLayer || !TripsLayer) return;

    const activeFilter = categoryFilterRef.current;
    const activeSearch = searchQueryRef.current;
    const activeSelected = selectedSiteRef.current;
    const activeSelectedAq = selectedAqueductRef.current;
    const activeSelectedHs = selectedHotspotRef.current;

    // Apply active filtration params
    const filtered = SITES_DATA.filter((s) => {
      const matchesCat = activeFilter === 'all' || s.category === activeFilter;
      const matchesSearch =
        s.name.toLowerCase().includes(activeSearch.toLowerCase()) ||
        s.desc.toLowerCase().includes(activeSearch.toLowerCase());
      return matchesCat && matchesSearch;
    });

    const showAqueducts = activeFilter === 'all' || activeFilter === 'acqua';

    const allHotspots = AQUEDUCTS_DATA.flatMap((aq) =>
      aq.hotspots.map((hs) => ({
        ...hs,
        parentAq: aq,
      }))
    );

    // Map static paths of aqueducts into dynamic sequential progress routes for the Trips anim engine
    const tripsData = showAqueducts
      ? AQUEDUCTS_DATA.map((aq) => {
          const totalPoints = aq.path.length;
          const timestamps = aq.path.map((_, idx) => (idx / (totalPoints - 1 || 1)) * 1000);
          const isAqSelected = activeSelectedAq && activeSelectedAq.id === aq.id;
          return {
            id: aq.id,
            path: aq.path,
            timestamps,
            color: aq.color,
            isAqSelected,
          };
        })
      : [];

    const layers = [
      // 1. Core Aqueduct Paths
      ...(showAqueducts
        ? AQUEDUCTS_DATA.map((aq) => {
            const isAqSelected = activeSelectedAq && activeSelectedAq.id === aq.id;
            return new PathLayer({
              id: `aq-path-${aq.id}`,
              data: [aq],
              getPath: (d: any) => d.path,
              getColor: aq.color,
              widthMinPixels: isAqSelected ? 5.5 : 3.5,
              widthMaxPixels: isAqSelected ? 9 : 6,
              rounded: true,
              opacity: isAqSelected ? 0.46 : 0.22,
              pickable: true,
              onClick: () => {
                onSelectAqueduct(aq);
                onSelectHotspot(null);
                onSelectSite({
                  id: 9999,
                  category: 'acqua',
                  name: aq.name,
                  coords: aq.path[Math.floor(aq.path.length / 2)],
                  depth: 25,
                  desc: aq.description,
                  address: "Tracciato Storico, Campania-Napoli",
                  quarter: "Sito Lineare"
                } as any);
              }
            });
          })
        : []),

      // 2. Underlying static alignment line (shows conduit background)
      ...(showAqueducts
        ? AQUEDUCTS_DATA.map((aq) => {
            const isAqSelected = activeSelectedAq && activeSelectedAq.id === aq.id;
            return new PathLayer({
              id: `aq-inner-${aq.id}`,
              data: [aq],
              getPath: (d: any) => d.path,
              getColor: [255, 237, 221, 100],
              widthMinPixels: 1.0,
              widthMaxPixels: 1.8,
              rounded: true,
              opacity: isAqSelected ? 0.36 : 0.20,
            });
          })
        : []),

      // 3. Fluid Flow Animation - Primary Glowing Pulses
      ...(showAqueducts
        ? [
            new TripsLayer({
              id: 'aq-flows',
              data: tripsData,
              getPath: (d: any) => d.path,
              getTimestamps: (d: any) => d.timestamps,
              getColor: (d: any) => d.color,
              opacity: 0.44,
              widthMinPixels: 3.5,
              widthMaxPixels: 6.5,
              trailLength: 220,
              currentTime: (Date.now() / 2.2) % 1000,
            }),
            // Fast highlight core flows (like flowing neon sparks)
            new TripsLayer({
              id: 'aq-flows-sparkle',
              data: tripsData,
              getPath: (d: any) => d.path,
              getTimestamps: (d: any) => d.timestamps,
              getColor: () => [255, 255, 255, 255],
              opacity: 0.46,
              widthMinPixels: 1.2,
              widthMaxPixels: 2.2,
              trailLength: 90,
              currentTime: (Date.now() / 2.2) % 1000,
            }),
          ]
        : []),

      // 4. Hotspot Pins / Coordinates nodes
      ...(showAqueducts
        ? [
            new ScatterplotLayer({
              id: 'aq-hotspots',
              data: allHotspots,
              getPosition: (d: any) => d.coords,
              getFillColor: (d: any) => {
                const isHovered = d.id === hoveredHotspotIdRef.current;
                const isSelected = activeSelectedHs && activeSelectedHs.id === d.id;
                const alpha = (isHovered || isSelected) ? 255 : 76;
                const rgb = d.parentAq.color || [101, 64, 0];
                return [rgb[0], rgb[1], rgb[2], alpha];
              },
              getRadius: 25,
              radiusMinPixels: 5.5,
              radiusMaxPixels: 11,
              pickable: true,
              stroked: true,
              lineWidthMinPixels: 1.5,
              getLineColor: (d: any) => {
                const isHovered = d.id === hoveredHotspotIdRef.current;
                const isSelected = activeSelectedHs && activeSelectedHs.id === d.id;
                const alpha = (isHovered || isSelected) ? 255 : 76;
                if (activeSelectedHs && activeSelectedHs.id === d.id) {
                  return [255, 255, 255, alpha]; // Bright white border when selected
                }
                return [223, 224, 223, alpha]; // Sand-gray boundary
              },
              onHover: (info: any) => {
                setHoveredHotspotId(info.object ? info.object.id : null);
              },
              onClick: (info: any) => {
                if (info && info.object) {
                  const hs = info.object;
                  onSelectAqueduct(hs.parentAq);
                  onSelectHotspot(hs);
                  onSelectSite({
                    id: 9000 + hs.id.charCodeAt(0) + hs.id.charCodeAt(hs.id.length - 1),
                    category: 'acqua',
                    name: `${hs.parentAq.name} - ${hs.name}`,
                    coords: hs.coords,
                    depth: 18,
                    desc: hs.desc,
                    address: hs.name,
                    quarter: "Nodo di Collegamento"
                  } as any);
                }
              }
            })
          ]
        : []),

      // 4. Hotspot Text Labels
      ...(showAqueducts
        ? [
            new TextLayer({
              id: 'aq-hotspot-labels',
              data: allHotspots,
              getPosition: (d: any) => d.coords,
              getText: (d: any) => d.label,
              getSize: 9,
              getPixelOffset: [0, 14],
              getColor: (d: any) => {
                if (activeSelectedHs && activeSelectedHs.id === d.id) {
                  return [58, 0, 0, 255]; // Active wine text
                }
                return [146, 64, 14, 180]; // Classic warm brown/terracotta
              },
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              textAnchor: 'middle',
              alignmentBaseline: 'top',
            })
          ]
        : []),

      // 5. Active Hotspot Aura Glow
      ...(showAqueducts && activeSelectedHs
        ? [
            new ScatterplotLayer({
              id: 'hs-selected-aura',
              data: [activeSelectedHs],
              getPosition: (d: any) => d.coords,
              getRadius: 100,
              radiusMinPixels: 15,
              radiusMaxPixels: 40,
              getFillColor: [...activeSelectedHs.parentAq.color, 45], // Translucent active aqueduct tint
              stroked: true,
              lineWidthMinPixels: 1.5,
              getLineColor: [...activeSelectedHs.parentAq.color, 180],
            }),
          ]
        : []),

      // 6. Focused Site Aura Glow
      ...(activeSelected
        ? [
            new ScatterplotLayer({
              id: 'marker-selected-aura',
              data: [activeSelected],
              getPosition: (d: any) => d.coords,
              getRadius: 80,
              radiusMinPixels: 14,
              radiusMaxPixels: 35,
              getFillColor: [101, 64, 0, 25], // Deep bronze aura glow
              stroked: true,
              lineWidthMinPixels: 1.2,
              getLineColor: [101, 64, 0, 140],
            }),
          ]
        : []),

      // 7. Miniaturized Thematic Pinpoint Markers
      new ScatterplotLayer({
        id: 'markers-primary',
        data: filtered,
        getPosition: (d: any) => d.coords,
        getFillColor: (d: any) => {
          const isHovered = d.id === hoveredSiteIdRef.current;
          const isSelected = activeSelected && d.id === activeSelected.id;
          const alpha = (isHovered || isSelected) ? 255 : 76; // 30% opacity when not hovered (decreased by 70%)
          
          if (d.category === 'acqua') return [14, 116, 144, alpha];      // Acquedotti - Ocean Blue
          if (d.category === 'catacomba') return [101, 64, 0, alpha];    // Necropoli - Deep Bronze
          if (d.category === 'rifugio') return [13, 148, 136, alpha];     // Rifugi - Deep Teal
          return [181, 152, 102, alpha];                                 // Ipogei - Golden Sand
        },
        getRadius: 18,
        radiusMinPixels: 5,
        radiusMaxPixels: 10,
        pickable: true,
        stroked: true,
        lineWidthMinPixels: 1.5,
        getLineColor: (d: any) => {
          const isHovered = d.id === hoveredSiteIdRef.current;
          const isSelected = activeSelected && d.id === activeSelected.id;
          const alpha = (isHovered || isSelected) ? 255 : 76;
          if (activeSelected && d.id === activeSelected.id) {
            return [64, 46, 50, alpha]; // Deep chocolate/wine border for the active selection
          }
          return [223, 224, 223, alpha]; // Light gray border
        },
        onHover: (info: any) => {
          setHoveredSiteId(info.object ? info.object.id : null);
        },
        onClick: (info: any) => {
          if (info && info.object) {
            onSelectSite(info.object);
            onSelectAqueduct(null);
            onSelectHotspot(null);
          }
        },
      }),

      // 8. Elegant site titles
      new TextLayer({
        id: 'map-labels',
        data: filtered,
        getPosition: (d: any) => d.coords,
        getText: (d: any) => d.name.split(' (')[0],
        getSize: 10,
        getPixelOffset: [0, -16],
        getColor: (d: any) => {
          if (activeSelected && d.id === activeSelected.id) {
            return [64, 46, 50, 255]; // Active text is solid high-contrast dark chocolate slate
          }
          return [101, 64, 0, 190]; // Off-active is deep bronze
        },
        fontFamily: 'EB Garamond, serif',
        fontWeight: 600,
        textAnchor: 'middle',
        alignmentBaseline: 'bottom',
      }),
    ];

    deckInstanceRef.current.setProps({ layers });
  };

  // Instantiation of DeckGL + MapLibre GL integration
  useEffect(() => {
    if (!mapContainerRef.current) return;
    const { DeckGL } = (window as any).deck;
    if (!DeckGL) return;

    const deckInstance = new DeckGL({
      container: mapContainerRef.current,
      mapStyle: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json', // Antique light gray layout fits style image perfectly
      maplibregl: (window as any).maplibregl, // Synchronize cameras correctly to eliminate coordinate shifting/drift
      initialViewState: viewStateRef.current,
      controller: true,
      onViewStateChange: ({ viewState: vs }: any) => {
        viewStateRef.current = vs;
        deckInstance.setProps({ viewState: vs });
        updateLayers();
      },
      getCursor: ({ isHovering }: any) => (isHovering ? 'pointer' : 'grab'),
      getTooltip: ({ object }: any) => {
        if (!object) return null;
        
        // Custom interactive tooltip for Aqueduct Hotspots
        if (object.id && typeof object.id === 'string' && (object.id.includes('augusteo') || object.id.includes('bolla') || object.id.includes('carmignano'))) {
          return {
            html: `
              <div style="font-family:'EB Garamond', serif; border-bottom: 1px solid ${object.parentAq?.hexColor || '#FFB580'}; padding-bottom: 6px; margin-bottom: 6px;">
                <span style="color:#3A0000; font-weight:700; font-size:15px">${object.name}</span>
              </div>
              <div style="font-family:'Inter', sans-serif; font-size:11px; color:#333333; max-width:240px; line-height:1.45; margin-bottom: 6px;">
                ${object.desc}
              </div>
              <div style="font-family:'DM Mono', monospace; font-size:9px; color:${object.parentAq?.hexColor || '#92400E'};">
                SISTEMA: <strong style="text-transform:uppercase">${object.parentAq?.name || 'ACQUEDOTTO'}</strong>
              </div>
            `,
            className: 'deck-tooltip',
          };
        }

        return {
          html: `
            <div style="font-family:'EB Garamond', serif; border-bottom: 1.5px solid #FFB580; padding-bottom: 6px; margin-bottom: 6px;">
              <span style="color:#3A0000; font-weight:700; font-size:15px">${object.name}</span>
            </div>
            <div style="font-family:'DM Mono', monospace; font-size:11px; color:#92400E; display:flex; justify-content:space-between; gap:20px">
              <span>Profondità: <strong style="color:#3A0000">-${object.depth}.00 MT</strong></span>
              <span style="text-transform:uppercase; color:#771700; font-weight:600">${object.category}</span>
            </div>
          `,
          className: 'deck-tooltip',
        };
      },
    } as any);

    deckInstanceRef.current = deckInstance;

    // Smooth real-time render loops
    let animationFrameId: number;
    const renderLoop = () => {
      updateLayers();
      animationFrameId = requestAnimationFrame(renderLoop);
    };
    renderLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (deckInstanceRef.current) {
        deckInstanceRef.current.finalize();
      }
    };
  }, []);

  // Hot updates when filters re-trigger
  useEffect(() => {
    if (deckInstanceRef.current) {
      updateLayers();
    }
  }, [categoryFilter, searchQuery, selectedSite, selectedAqueduct, selectedHotspot]);

  // Cinematic focus flight
  useEffect(() => {
    let targetCoords = null;
    let targetZoom = 16.2;
    let id = 0;

    if (selectedSite) {
      targetCoords = selectedSite.coords;
      targetZoom = selectedSite.id >= 9999 ? 12.0 : 16.2;
      id = selectedSite.id;
    } else if (selectedHotspot) {
      targetCoords = selectedHotspot.coords;
      targetZoom = 16.5;
      id = 8888;
    }

    if (targetCoords && deckInstanceRef.current) {
      const { FlyToInterpolator } = (window as any).deck;
      if (!FlyToInterpolator) return;

      isTransitioningRef.current = true;

      viewStateRef.current = {
        ...viewStateRef.current,
        longitude: targetCoords[0],
        latitude: targetCoords[1],
        zoom: targetZoom,
        pitch: id >= 9999 ? 42 : 58,
        bearing: viewStateRef.current.bearing + 25, // Add cinematic rotational panning on fly focus
        transitionDuration: 2200, // Premium smooth transition speed
        transitionInterpolator: new FlyToInterpolator({ curve: 1.3 }), // Soft, elegant ease-out curvature
        onTransitionEnd: () => {
          isTransitioningRef.current = false;
        }
      };

      deckInstanceRef.current.setProps({
        viewState: viewStateRef.current,
      });
    }
  }, [selectedSite, selectedHotspot]);


  return (
    <div className="w-full h-full relative" style={{ backgroundColor: '#DFE0DF' }}>
      {/* Underlying map frame element target */}
      <div id="map-wrapper" ref={mapContainerRef} className="w-full h-full" />

      {/* Floating Legend Panel styled in white surface and soft terracotta border */}
      <div className="absolute bottom-6 right-6 p-5 bg-brand-surface border-2 border-brand-border rounded-none shadow-lg flex flex-col gap-3.5 max-w-[280px] pointer-events-auto z-50 select-none">
        <h4 className="font-serif text-[15px] tracking-wider text-brand-text uppercase border-b border-brand-border/30 pb-2 font-bold">
          Legenda Unicum
        </h4>
        <div className="flex flex-col gap-2.5 font-sans text-[11px] text-brand-text/80">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0E7490] border border-white/45 shadow-sm flex-shrink-0" />
            <span className="font-medium">Acquedotti e Cisterne</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#771700] border border-white/45 shadow-sm flex-shrink-0" />
            <span className="font-medium">Necropoli e Catacombe</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0D9488] border border-white/45 shadow-sm flex-shrink-0" />
            <span className="font-medium">Rifugi Antiaerei WWII</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#92400E] border border-white/45 shadow-sm flex-shrink-0" />
            <span className="font-medium">Ipogei Ellenistici Greci</span>
          </div>
          <div className="border-t border-brand-border/20 pt-2 mt-1">
            <span className="font-mono text-[9.5px] uppercase tracking-wider text-[#771700] font-bold block mb-1.5 opacity-85">
              Tracciati Acquedotti
            </span>
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => {
                  const aq = AQUEDUCTS_DATA.find(a => a.id === 'augusteo');
                  if (aq) {
                    onSelectAqueduct(aq);
                    onSelectHotspot(null);
                    onSelectSite({
                      id: 9999,
                      category: 'acqua',
                      name: aq.name,
                      coords: aq.path[Math.floor(aq.path.length / 2)],
                      depth: 25,
                      desc: aq.description,
                      address: "Tracciato Storico, Campania-Napoli",
                      quarter: "Sito Lineare"
                    } as any);
                  }
                }}
                className={`flex items-center gap-2.5 text-left text-[10px] cursor-pointer hover:bg-brand-primary/5 p-1 -m-1 rounded transition-colors w-full ${selectedAqueduct?.id === 'augusteo' ? 'bg-brand-primary/10 font-bold' : ''}`}
              >
                <span className="w-4 h-1 bg-[#0E7490] flex-shrink-0 rounded-full" />
                <span className="truncate text-brand-text/90 font-medium select-none">Augusteo (del Serino)</span>
              </button>
              <button 
                onClick={() => {
                  const aq = AQUEDUCTS_DATA.find(a => a.id === 'bolla');
                  if (aq) {
                    onSelectAqueduct(aq);
                    onSelectHotspot(null);
                    onSelectSite({
                      id: 9999,
                      category: 'acqua',
                      name: aq.name,
                      coords: aq.path[Math.floor(aq.path.length / 2)],
                      depth: 15,
                      desc: aq.description,
                      address: "Tracciato Storico, Campania-Napoli",
                      quarter: "Sito Lineare"
                    } as any);
                  }
                }}
                className={`flex items-center gap-2.5 text-left text-[10px] cursor-pointer hover:bg-brand-primary/5 p-1 -m-1 rounded transition-colors w-full ${selectedAqueduct?.id === 'bolla' ? 'bg-brand-primary/10 font-bold' : ''}`}
              >
                <span className="w-4 h-1 bg-[#C2410C] flex-shrink-0 rounded-full" />
                <span className="truncate text-brand-text/90 font-medium select-none">Della Bolla (Volla)</span>
              </button>
              <button 
                onClick={() => {
                  const aq = AQUEDUCTS_DATA.find(a => a.id === 'carmignano');
                  if (aq) {
                    onSelectAqueduct(aq);
                    onSelectHotspot(null);
                    onSelectSite({
                      id: 9999,
                      category: 'acqua',
                      name: aq.name,
                      coords: aq.path[Math.floor(aq.path.length / 2)],
                      depth: 20,
                      desc: aq.description,
                      address: "Tracciato Storico, Campania-Napoli",
                      quarter: "Sito Lineare"
                    } as any);
                  }
                }}
                className={`flex items-center gap-2.5 text-left text-[10px] cursor-pointer hover:bg-brand-primary/5 p-1 -m-1 rounded transition-colors w-full ${selectedAqueduct?.id === 'carmignano' ? 'bg-brand-primary/10 font-bold' : ''}`}
              >
                <span className="w-4 h-1 bg-[#0D9488] flex-shrink-0 rounded-full" />
                <span className="truncate text-brand-text/90 font-medium select-none">Del Carmignano</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
