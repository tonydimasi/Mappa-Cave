/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Site {
  id: number;
  category: 'acqua' | 'catacomba' | 'rifugio' | 'ipogeo';
  name: string;
  coords: [number, number]; // [Longitude, Latitude]
  depth: number;
  desc: string;
  address?: string;
  quarter?: string;
  source?: string;
}

export interface Trip {
  path: [number, number][]; // Array of [Lng, Lat] coordinates
  timestamps: number[];
  color: [number, number, number]; // [R, G, B]
}

export interface AqueductHotspot {
  id: string;
  name: string;
  label: string;
  coords: [number, number];
  desc: string;
}

export interface Aqueduct {
  id: string;
  name: string;
  color: [number, number, number];
  hexColor: string;
  description: string;
  path: [number, number][];
  hotspots: AqueductHotspot[];
}
