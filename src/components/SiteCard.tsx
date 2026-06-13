/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Site } from '../types.ts';
import { CategoryIcon } from './SvgAtlas.tsx';

interface SiteCardProps {
  site: Site;
  isActive: boolean;
  onSelect: (site: Site) => void;
}

export const SiteCard: React.FC<SiteCardProps> = ({ site, isActive, onSelect }) => {
  // Translate categories to Italian descriptive text for the visual metadata
  const getCategoryLabelShort = (cat: string) => {
    switch (cat) {
      case 'acqua':
        return 'Acquedotto';
      case 'catacomba':
        return 'Necropoli';
      case 'rifugio':
        return 'Rifugio';
      case 'ipogeo':
      default:
        return 'Ipogeo';
    }
  };

  return (
    <div
      id={`card-${site.id}`}
      onClick={() => onSelect(site)}
      className={`group site-card-transition p-6 cursor-pointer border-b border-brand-border/30 flex flex-col gap-2 relative overflow-hidden select-none
        ${isActive 
          ? 'bg-brand-surface border-l-4 border-l-brand-primary shadow-sm' 
          : 'hover:bg-brand-surface/40 border-l-4 border-l-transparent'
        }`}
    >
      {/* Category Glyph + Coordinate metadata */}
      <div className="flex justify-between items-start text-[10px] uppercase tracking-wider mb-0.5 font-mono">
        <span className={`flex items-center gap-1.5 font-bold transition-all ${isActive ? 'text-brand-accent' : 'text-brand-primary'}`}>
          <CategoryIcon category={site.category} size={11} className="flex-shrink-0" />
          <span>Sito #{String(site.id).padStart(2, '0')} · {getCategoryLabelShort(site.category)}</span>
        </span>
        <span className="text-[10px] text-brand-text/50">
          {site.coords[1].toFixed(2)}° N / {site.coords[0].toFixed(2)}° E
        </span>
      </div>

      {/* Site Name and Initial Snippet */}
      <div className="flex flex-col gap-1.5">
        <h3 className={`font-display text-[14px] md:text-[15px] font-bold leading-snug tracking-wide transition-colors
          ${isActive ? 'text-brand-text' : 'text-brand-text/85 group-hover:text-brand-primary'}`}>
          {site.name}
        </h3>
        <p className={`font-sans text-[12.5px] leading-relaxed line-clamp-2 transition-opacity
          ${isActive ? 'text-brand-text/90' : 'text-brand-text/60 group-hover:text-brand-text/80'}`}>
          {site.desc}
        </p>
      </div>

      {/* Depth Indicator Badge */}
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-brand-border/25">
        <span className="font-sans text-[10px] text-brand-text/40 uppercase tracking-widest font-light">
          Registro Geotecnico
        </span>
        <span className={`font-mono text-[11px] font-bold px-1.5 py-0.5 rounded-sm bg-brand-bg border border-brand-border/40
          ${isActive ? 'text-brand-accent' : 'text-brand-primary'}`}>
          -{site.depth}.00 MT
        </span>
      </div>
    </div>
  );
};
