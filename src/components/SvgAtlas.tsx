/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

// 1. ACQUA (Acquedotti Romani) - Elegant sequential stone aqueduct arches with wave lines
export const IconAcqua: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    {...props}
  >
    {/* Aqueduct Structure */}
    <rect x="15" y="45" width="70" height="8" rx="1" fill="currentColor" opacity="0.3" />
    <path
      d="M20 45V25H80V45"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 45H35V58C35 63 39 67 44 67H46V45"
      stroke="currentColor"
      strokeWidth="3.5"
    />
    <path
      d="M46 45H61V58C61 63 65 67 70 67H72V45"
      stroke="currentColor"
      strokeWidth="3.5"
    />
    {/* Foundations */}
    <line x1="20" y1="45" x2="20" y2="75" stroke="currentColor" strokeWidth="4.5" />
    <line x1="46" y1="45" x2="46" y2="75" stroke="currentColor" strokeWidth="4.5" />
    <line x1="72" y1="45" x2="72" y2="75" stroke="currentColor" strokeWidth="4.5" />
    {/* Water waves at the bottom */}
    <path
      d="M10 82C15 80 20 80 25 82C30 84 35 84 40 82C45 80 50 80 55 82C60 84 65 84 70 82C75 80 80 80 85 82"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M15 88C20 86 25 86 30 88C35 90 40 90 45 88C50 86 55 86 60 88C65 90 70 90 75 88C80 86 85 86 90 88"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.7"
    />
  </svg>
);

// 2. CATACOMBA (Necropoli/Cripte) - Semi-circular tomb arches, an altar niche, and a flickering torch of remembrance
export const IconCatacomba: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    {...props}
  >
    {/* Main Archway Niche */}
    <path
      d="M20 85V45C20 30 33 18 50 18C67 18 80 30 80 45V85"
      stroke="currentColor"
      strokeWidth="4.5"
      strokeLinecap="round"
    />
    {/* Inner Arched Altar */}
    <path
      d="M32 85V55C32 45 40 37 50 37C60 37 68 45 68 55V85"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.8"
    />
    {/* Horizontal Stone Layers indicator */}
    <line x1="20" y1="52" x2="32" y2="52" stroke="currentColor" strokeWidth="2" />
    <line x1="68" y1="52" x2="80" y2="52" stroke="currentColor" strokeWidth="2" />
    <line x1="20" y1="68" x2="32" y2="68" stroke="currentColor" strokeWidth="2" />
    <line x1="68" y1="68" x2="80" y2="68" stroke="currentColor" strokeWidth="2" />
    {/* Altar base slab */}
    <rect x="28" y="72" width="44" height="13" fill="currentColor" opacity="0.25" />
    <line x1="28" y1="72" x2="72" y2="72" stroke="currentColor" strokeWidth="3" />
    {/* Memorial candle/torch flame inside altar */}
    <path
      d="M50 58C52 58 54 62 50 67C46 62 48 58 50 58Z"
      fill="currentColor"
    />
    <line x1="50" y1="67" x2="50" y2="72" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// 3. RIFUGIO (Rifugi Antiaerei del Secolo XX) - Underground secure chamber steps with heavy concrete vault
export const IconRifugio: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    {...props}
  >
    {/* Heavy Fortified Vault Outline */}
    <path
      d="M15 82H85V60C85 40 70 25 50 25C30 25 15 40 15 60V82Z"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    {/* Descending Stone Staircase (Historical escape steps) */}
    <path
      d="M25 80H75V70H55V60H35V50H25"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Vault reinforce ribs */}
    <path d="M50 25V12" stroke="currentColor" strokeWidth="3" />
    <path d="M28 34L18 24" stroke="currentColor" strokeWidth="3" />
    <path d="M72 34L82 24" stroke="currentColor" strokeWidth="3" />
    {/* Underground support pillar hatch */}
    <line x1="15" y1="82" x2="85" y2="82" stroke="currentColor" strokeWidth="5" />
  </svg>
);

// 4. IPOGEO (Ipogei Ellenistici / Greci) - Tomb Chambers with classical pediments and columns
export const IconIpogeo: React.FC<IconProps> = ({ size = 24, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    {...props}
  >
    {/* Classic Hellenistic Temple Pediment (Gable) */}
    <path
      d="M15 40L50 18L85 40H15Z"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <rect x="22" y="34" width="56" height="4" fill="currentColor" />
    {/* Classic Columns (underground chambers) */}
    <line x1="30" y1="40" x2="30" y2="80" stroke="currentColor" strokeWidth="4.5" />
    <line x1="50" y1="40" x2="50" y2="80" stroke="currentColor" strokeWidth="4.5" />
    <line x1="70" y1="40" x2="70" y2="80" stroke="currentColor" strokeWidth="4.5" />
    {/* Column bases and capitals */}
    <line x1="25" y1="43" x2="35" y2="43" stroke="currentColor" strokeWidth="2.5" />
    <line x1="45" y1="43" x2="55" y2="43" stroke="currentColor" strokeWidth="2.5" />
    <line x1="65" y1="43" x2="75" y2="43" stroke="currentColor" strokeWidth="2.5" />
    <line x1="25" y1="77" x2="35" y2="77" stroke="currentColor" strokeWidth="2.5" />
    <line x1="45" y1="77" x2="55" y2="77" stroke="currentColor" strokeWidth="2.5" />
    <line x1="65" y1="77" x2="75" y2="77" stroke="currentColor" strokeWidth="2.5" />
    {/* Base underground step platform */}
    <rect x="10" y="80" width="80" height="7" rx="1" fill="currentColor" opacity="0.34" />
    <line x1="10" y1="80" x2="90" y2="80" stroke="currentColor" strokeWidth="4" />
  </svg>
);

// Dynamic component loader for category types
export const CategoryIcon: React.FC<{ category: string; size?: number; className?: string }> = ({
  category,
  size = 22,
  className = '',
}) => {
  switch (category) {
    case 'acqua':
      return <IconAcqua size={size} className={className} />;
    case 'catacomba':
      return <IconCatacomba size={size} className={className} />;
    case 'rifugio':
      return <IconRifugio size={size} className={className} />;
    case 'ipogeo':
    default:
      return <IconIpogeo size={size} className={className} />;
  }
};
