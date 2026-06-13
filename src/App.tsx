/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { Search, X, Layers, Compass, TrendingDown, BookOpen, ExternalLink } from 'lucide-react';
import { SITES_DATA, AQUEDUCTS_DATA } from './data.ts';
import { Site, Aqueduct, AqueductHotspot } from './types.ts';
import { SiteCard } from './components/SiteCard.tsx';
import { UndergroundMap } from './components/UndergroundMap.tsx';
import { CategoryIcon } from './components/SvgAtlas.tsx';

export default function App() {
  const [selectedSite, setSelectedSite] = useState<Site | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedAqueduct, setSelectedAqueduct] = useState<Aqueduct | null>(null);
  const [selectedHotspot, setSelectedHotspot] = useState<AqueductHotspot | null>(null);

  // Sieve the Unicum catalog based on active filters
  const filteredSites = useMemo(() => {
    return SITES_DATA.filter((site) => {
      const matchesCat = categoryFilter === 'all' || site.category === categoryFilter;
      const matchesSearch =
        site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [categoryFilter, searchQuery]);

  // Compute authentic catalog statistics
  const stats = useMemo(() => {
    if (filteredSites.length === 0) return { count: 0, avgDepth: 0, maxDepth: 0 };
    const depths = filteredSites.map((s) => s.depth);
    const sum = depths.reduce((acc, d) => acc + d, 0);
    return {
      count: filteredSites.length,
      avgDepth: Math.round(sum / filteredSites.length),
      maxDepth: Math.max(...depths),
    };
  }, [filteredSites]);

  // Handle active selection and smooth list alignment scroll
  const handleSelectSite = (site: Site) => {
    setSelectedSite(site);
    if (site && site.id < 9000) {
      setSelectedAqueduct(null);
      setSelectedHotspot(null);
    }
    const cardElement = document.getElementById(`card-${site.id}`);
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  // Human category labels
  const getCategoryTitle = (cat: string) => {
    switch (cat) {
      case 'acqua':
        return 'Acqua';
      case 'catacomba':
        return 'Cripte';
      case 'rifugio':
        return 'Rifugi';
      case 'ipogeo':
        return 'Ipogei';
      default:
        return 'Tutto';
    }
  };

  const getCategoryShortLabel = (cat: string) => {
    switch (cat) {
      case 'acqua':
        return 'Acquedotto';
      case 'catacomba':
        return 'Necropoli';
      case 'rifugio':
        return 'Rifugio WWII';
      case 'ipogeo':
        return 'Ipogeo Ellenico';
      default:
        return 'Generale';
    }
  };

  return (
    <div className="flex w-screen h-screen relative bg-brand-bg text-brand-text font-sans overflow-hidden">
      {/* SIDEBAR (Fixed 420px width aligned with Design HTML / style card) */}
      <aside 
        id="ns-sidebar" 
        className="w-[420px] h-full bg-brand-bg border-r border-brand-border/40 flex flex-col z-20 text-brand-text relative flex-shrink-0"
      >
        {/* SIDEBAR HEADER */}
        <header id="ns-header" className="p-8 border-b border-brand-border/30 select-none">
          <div className="text-brand-primary text-[11px] tracking-[0.25em] uppercase mb-2 font-mono font-bold">
            Progetto Città di Sotto
          </div>
          <h1 id="ns-title" className="text-2xl md:text-3xl font-display leading-tight font-extrabold text-brand-text tracking-wide">
            Visualizzazione generale <span className="italic text-brand-primary font-serif lowercase">degli ambienti</span>
          </h1>
          <p className="mt-4 text-xs opacity-75 font-sans leading-relaxed text-brand-text/80">
            Catalogazione scientifica e mappatura dei complessi ipogei di Napoli. Esplorazione stratigrafica dell'acquedotto e delle necropoli.
          </p>
        </header>

        {/* INPUTS / TABS CONTROL CORNER (Styled matching image color palette) */}
        <section className="px-8 py-6 bg-brand-surface border-b border-brand-border/30">
          
          {/* Tabs Filter Grid - Highly optimized short labels to fit the narrow space perfectly */}
          <nav id="ns-tabs" className="grid grid-cols-5 gap-1.5 mb-6 select-none font-mono">
            {(['all', 'acqua', 'catacomba', 'rifugio', 'ipogeo'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setCategoryFilter(cat);
                  setSelectedSite(null); // Clear selected for a pristine detail intro state
                }}
                className={`py-2 text-[9px] uppercase tracking-wider border transition-all cursor-pointer font-bold text-center flex flex-col items-center justify-center gap-1 rounded-none
                  ${categoryFilter === cat
                    ? 'border-brand-primary bg-brand-primary text-white'
                    : 'border-brand-border/50 text-brand-primary hover:bg-brand-primary/10'
                  }`}
              >
                <span className="text-[10px]">
                  {cat !== 'all' ? (
                    <CategoryIcon category={cat} size={11} />
                  ) : (
                    <Layers size={10} />
                  )}
                </span>
                <span className="text-[9px] truncate w-full">{getCategoryTitle(cat)}</span>
              </button>
            ))}
          </nav>

          {/* Styled search input bottom line */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cerca sito archeologico..."
              className="w-full bg-transparent border-b border-brand-border py-2.5 pr-8 text-sm focus:outline-none focus:border-brand-primary placeholder:text-brand-text/30 text-brand-text outline-none font-sans"
            />
            <div className="absolute right-0 top-3 opacity-60 text-brand-primary">
              {searchQuery ? (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="hover:text-brand-accent transition-colors"
                >
                  <X size={14} />
                </button>
              ) : (
                <Search size={14} />
              )}
            </div>
          </div>
        </section>

        {/* STATIC GEOTECHNICAL LEDGER RATIOS */}
        <div className="px-8 py-3 bg-brand-bg border-b border-brand-border/30 flex items-center justify-between text-[11px] text-brand-text/80 select-none font-sans">
          <div className="flex items-center gap-1.5">
            <Compass size={11} className="text-brand-primary" />
            <span>Siti: <strong className="text-brand-accent font-mono font-bold">{stats.count}</strong></span>
          </div>
          <div className="flex items-center gap-1.5 flex-1 justify-center">
            <TrendingDown size={11} className="text-brand-primary" />
            <span>Quota Media: <strong className="text-brand-accent font-mono font-bold">-{stats.avgDepth}m</strong></span>
          </div>
          <div className="font-mono text-[9px] text-brand-primary/60 font-semibold">
            REGISTRO GENERALE
          </div>
        </div>

        {/* SCROLLABLE SITES GRID LIST */}
        <section 
          id="ns-list" 
          className="flex-1 overflow-y-auto custom-scroll bg-brand-surface/20"
        >
          {/* AUSTERE AQUEDUCTS SUMMARY RAIL (Visible when looking at 'acqua' or 'all') */}
          {(categoryFilter === 'all' || categoryFilter === 'acqua') && (
            <div className="p-6 border-b border-brand-border/20 bg-brand-surface pb-5">
              <h3 className="text-[10px] uppercase tracking-[0.18em] text-brand-primary font-mono font-bold mb-3">
                Sistema Acquedottistico Storico
              </h3>
              <div className="flex flex-col gap-2.5">
                {AQUEDUCTS_DATA.map((aq) => {
                  const isAqSelected = selectedAqueduct?.id === aq.id;
                  return (
                    <div
                      key={aq.id}
                      className={`group p-3 border rounded-none transition-all flex flex-col relative ${
                        isAqSelected
                          ? 'border-brand-primary bg-brand-border/10'
                          : 'border-brand-border/45 hover:border-brand-primary/50 hover:bg-brand-surface/60'
                      }`}
                    >
                      <button
                        onClick={() => {
                          setSelectedAqueduct(aq);
                          setSelectedHotspot(null);
                          handleSelectSite({
                            id: 9999,
                            category: 'acqua',
                            name: aq.name,
                            coords: aq.path[Math.floor(aq.path.length / 2)],
                            depth: 25,
                            desc: aq.description,
                            address: "Tracciato Storico, Campania-Napoli",
                            quarter: "Sito Lineare"
                          } as any);
                        }}
                        className="text-left w-full cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span 
                            className="w-2.5 h-2.5 rounded-full flex-shrink-0" 
                            style={{ backgroundColor: aq.hexColor }} 
                          />
                          <span className="font-display text-[12px] font-bold text-brand-text group-hover:text-brand-primary transition-colors tracking-wide">
                            {aq.name}
                          </span>
                        </div>
                        <p className="mt-1.5 text-[10.5px] opacity-75 leading-relaxed truncate-2-lines line-clamp-2">
                          {aq.description}
                        </p>
                      </button>
                      
                      {/* Interactive indicator for list of hotspots under active Aqueduct */}
                      {isAqSelected && (
                        <div className="mt-3 pt-2.5 border-t border-brand-border/30">
                          <div className="text-[9px] uppercase tracking-wider font-mono text-brand-primary mb-1.5 font-bold">Punti di Rilievo (Hotspots):</div>
                          <div className="flex flex-wrap gap-1">
                            {aq.hotspots.map((hs) => {
                              const isHsSelected = selectedHotspot?.id === hs.id;
                              return (
                                <button
                                  key={hs.id}
                                  onClick={() => {
                                    setSelectedHotspot(hs);
                                    handleSelectSite({
                                      id: 9000 + hs.id.charCodeAt(0) + hs.id.charCodeAt(hs.id.length - 1),
                                      category: 'acqua',
                                      name: `${aq.name} - ${hs.name}`,
                                      coords: hs.coords,
                                      depth: 18,
                                      desc: hs.desc,
                                      address: hs.name,
                                      quarter: "Nodo di Collegamento"
                                    } as any);
                                  }}
                                  className={`px-2 py-1 text-[9px] font-mono rounded-none transition-all cursor-pointer ${
                                    isHsSelected
                                      ? 'bg-brand-primary text-white font-bold'
                                      : 'bg-brand-border/20 text-brand-text hover:bg-brand-primary/10'
                                  }`}
                                  title={hs.name}
                                >
                                  {hs.id.split('-')[1].toUpperCase()}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {filteredSites.length > 0 ? (
            filteredSites.map((site) => (
              <SiteCard
                key={site.id}
                site={site}
                isActive={selectedSite !== null && selectedSite.id === site.id}
                onSelect={handleSelectSite}
              />
            ))
          ) : (
            <div className="p-10 text-center select-none">
              <BookOpen className="mx-auto w-10 h-10 stroke-[1.2] text-brand-primary/30 mb-3 animate-pulse" />
              <p className="font-display text-base text-brand-text/80 mb-1 font-bold tracking-wider">
                Nessun Reperto
              </p>
              <p className="font-sans text-[12px] opacity-60 max-w-[240px] mx-auto leading-relaxed">
                Nessun fascicolo o reperto corrisponde ai parametri inseriti.
              </p>
            </div>
          )}
        </section>

        {/* FIXED FOOTER REGISTRY BRANDING */}
        <div className="p-4 bg-brand-bg text-[9.5px] text-center uppercase tracking-widest text-brand-text/60 border-t border-brand-border/25 font-mono select-none font-semibold">
          Napoli Sotterranea © 2026 · Registro Geocentrico
        </div>
      </aside>

      {/* COMPACT COMBINATION OF MAP & HIGH-CONTRAST PARCHMENT FOOTER DETAIL */}
      <main className="flex-1 h-full flex flex-col relative bg-brand-bg">
        
        {/* MAP DISPLAY FRAME */}
        <section id="map-height-wrapper" className="flex-1 relative overflow-hidden bg-white">
          <UndergroundMap
            selectedSite={selectedSite}
            categoryFilter={categoryFilter}
            searchQuery={searchQuery}
            onSelectSite={handleSelectSite}
            selectedAqueduct={selectedAqueduct}
            onSelectAqueduct={setSelectedAqueduct}
            selectedHotspot={selectedHotspot}
            onSelectHotspot={setSelectedHotspot}
          />
        </section>

        {/* DETAILED HIGH-CONTRAST REGISTER (Parchment bg, dark ink txt) */}
        <footer 
          id="ns-detail" 
          className="h-[250px] bg-brand-bg border-t-2 border-brand-text flex relative z-10 text-brand-text select-none"
        >
          {/* LEFT CONTAINER (40% width, metadata summaries) */}
          <div className="w-[40%] p-8 border-r border-brand-border/40 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-start md:items-center gap-3 mb-2.5 flex-col md:flex-row">
                <h2 id="det-name" className="text-lg md:text-xl font-display font-bold text-brand-text leading-snug tracking-wide" title={selectedSite ? selectedSite.name : 'Unicum'}>
                  {selectedSite ? selectedSite.name : 'SITO NON SELEZIONATO'}
                </h2>
                <span className="px-2 py-0.5 bg-brand-primary text-white text-[9px] uppercase font-mono font-bold tracking-wider flex-shrink-0">
                  {selectedSite ? getCategoryShortLabel(selectedSite.category) : 'Generale'}
                </span>
              </div>

              {/* Archeological Metrics indicators */}
              <div className="flex gap-5 mt-4">
                <div className="flex flex-col border-l-2 border-brand-primary pl-3 select-none">
                  <span className="text-[10px] uppercase opacity-70 font-bold tracking-wider font-mono text-brand-primary">Profondità Rilevata</span>
                  <span className="text-xl font-sans font-black text-brand-text tracking-wide mt-0.5">
                    {selectedSite ? `-${selectedSite.depth}.00` : '––'} MT
                  </span>
                </div>
              </div>

              {/* Surgical Coordinates verification with Google Maps */}
              {selectedSite && (
                <div className="mt-3.5 p-2 bg-brand-border/10 border border-brand-border/30 flex items-center justify-between gap-3 select-none">
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-[9px] uppercase font-bold tracking-wider font-mono text-brand-primary">Riscontro Geodetico</span>
                    <span className="text-[10px] font-sans text-brand-text/90 truncate font-semibold" title={selectedSite.address}>
                      {selectedSite.address || "Centro Storico, Napoli"}
                    </span>
                    <span className="text-[9px] font-mono text-brand-accent/90">
                      {selectedSite.quarter ? `${selectedSite.quarter} · ` : ''}GPS: {selectedSite.coords[1].toFixed(6)}°, {selectedSite.coords[0].toFixed(6)}°
                    </span>
                  </div>
                  <a
                    href={
                      selectedSite.id >= 9000
                        ? `https://www.google.com/maps/search/?api=1&query=${selectedSite.coords[1]},${selectedSite.coords[0]}`
                        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            selectedSite.name.toLowerCase().startsWith('cavità') || selectedSite.name.toLowerCase().startsWith('cisterna')
                              ? `${selectedSite.address}, Napoli, Italia`
                              : `${selectedSite.name}, ${selectedSite.address || ''}, Napoli, Italia`
                          )}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center gap-1 px-2.5 py-1.5 border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white text-[9.5px] uppercase font-mono tracking-widest font-bold transition-all text-center"
                    title="Verifica indirizzo e rilievi su Google Maps"
                  >
                    <span>MAPS</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              )}
            </div>

            {/* Project Research Notice */}
            <p className="text-[12px] leading-relaxed text-brand-text/75 italic border-l-2 border-brand-primary/60 pl-3">
              Lo studio amatoriale di questo progetto si basa sulla ricerca di documenti trovati tramite deep research. Il lavoro si propone come idea per avere una visione generale della città di sotto.
            </p>
          </div>
          
          {/* RIGHT CONTAINER (Dossier narrative with luxury serif alignment) */}
          <div className="flex-1 p-8 overflow-y-auto custom-scroll bg-gradient-to-r from-transparent to-brand-border/10 flex flex-col justify-between">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest opacity-60 mb-2 font-mono font-bold text-brand-primary">
                Dossier Tecnico / Archivio Storico
              </h4>
              <p id="det-desc" className="text-[15.5px] leading-relaxed text-brand-text/90 font-serif text-justify overflow-y-auto pr-1">
                {selectedSite 
                  ? selectedSite.desc 
                  : "Il Sistema Geospaziale Unicum costituisce la mappatura ufficiale delle cavità ipogee e dei condotti idrici storici della città di Napoli. Esplora il catalogo di Complesso Napoli Sotterranea mediante i filtri tipologici superiori o seleziona un punto sulla mappa orbitale tridimensionale per consultare la sismologia, la stratigrafia e i metri esatti di profondità dal piano stradale."}
              </p>
            </div>
            {selectedSite && selectedSite.source && (
              <div id="det-source" className="mt-4 pt-3 border-t border-brand-border/25 flex items-center gap-1.5 text-[10.5px] font-mono text-brand-primary/80">
                <span className="font-bold uppercase tracking-wider">Fonte Rilevamento:</span>
                <span className="italic select-all">{selectedSite.source}</span>
              </div>
            )}
          </div>
        </footer>
      </main>
    </div>
  );
}
