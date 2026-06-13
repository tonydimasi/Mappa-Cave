import { writeFileSync, readFileSync, existsSync } from 'fs';

const SITES_TO_GEOCODE = [
  { id: 1, query: "Piazza San Gaetano, 68, Napoli" },
  { id: 2, query: "Via Domenico Morelli, 61, Napoli" },
  { id: 3, query: "Via dei Tribunali, 316, Napoli" },
  { id: 4, query: "Via Francesco De Sanctis, 19, Napoli" },
  { id: 5, query: "Via Capodimonte, 13, Napoli" },
  { id: 6, query: "Via delle Fontanelle, 80, Napoli" },
  { id: 7, query: "Piazza Sanità, 14, Napoli" }, 
  { id: 8, query: "Via dei Cristallini, 133, Napoli" },
  { id: 9, query: "Piazza Cavour, 140, Napoli" },
  { id: 10, query: "Vico Sant'Anna di Palazzo, 52, Napoli" },
  { id: 11, query: "Piazzetta Pietrasanta, Napoli" },
  { id: 12, query: "Via Santa Maria Antesaecula, 126, Napoli" },
  { id: 13, query: "Vico Carminiello ai Mannesi, Napoli" },
  { id: 14, query: "Via Chiaia, 149, Napoli" },
  { id: 15, query: "Salita della Grotta, Napoli" },
  { id: 16, query: "Via Broggia, 11, Napoli" },
  { id: 17, query: "Vico Cinquesanti, Napoli" },
  { id: 18, query: "Via San Severo Fuori le Mura, Napoli" }, 
  { id: 19, query: "Ponti Rossi, Napoli" }, 
  { id: 20, query: "Piazza del Plebiscito, Napoli" },
  { id: 21, query: "Via dell'Avvocata, 25, Napoli" },
  { id: 22, query: "Via Leonardo Bianchi, Napoli" },
  { id: 23, query: "Via Miano, 2, Napoli" },
  { id: 24, query: "Via Filippo Maria Briganti, Napoli" },
  { id: 25, query: "Vico della Calce, 1, Napoli" },
  { id: 26, query: "Vico Calce a Materdei, 30, Napoli" },
  { id: 27, query: "Salita Vecchia di Capodimonte, 60, Napoli" },
  { id: 28, query: "Piazza Cavour, 74, Napoli" },
  { id: 29, query: "Vico Centogradi, 10, Napoli" },
  { id: 30, query: "Via Chiaia, 87, Napoli" },
  { id: 31, query: "Via Chiaia, 123, Napoli" },
  { id: 32, query: "Via Chiaia, 179, Napoli" },
  { id: 33, query: "Salita dei Cinesi, 68, Napoli" },
  { id: 34, query: "Viale Colli Aminei, 36, Napoli" },
  { id: 35, query: "Vico I Concezione a Montecalvario, Napoli" },
  { id: 36, query: "Via Confalone, 7, Napoli" },
  { id: 37, query: "Via Francesco Saverio Correra, 29, Napoli" },
  { id: 38, query: "Via Michele D'Amelio, 82, Napoli" },
  { id: 39, query: "Vico Tofa, 1, Napoli" },
  { id: 40, query: "Via Carlo De Marco, Napoli" },
  { id: 41, query: "Calata San Mattia, 23, Napoli" },
  { id: 42, query: "Via Monte di Dio, 14, Napoli" },
  { id: 43, query: "Discesa Coroglio, 6, Napoli" },
  { id: 44, query: "Cuma, Pozzuoli" },
  { id: 45, query: "Via Chiatamone, Napoli" },
  { id: 46, query: "Via Vergini, 19, Napoli" },
  { id: 47, query: "Via Duomo, 142, Napoli" },
  { id: 48, query: "Vico Carifa, 14, Napoli" },
  { id: 49, query: "Vico Carcere Sanfelice, 7, Napoli" },
  { id: 50, query: "Corso Amedeo di Savoia, 216, Napoli" },
  { id: 51, query: "Via Trinità degli Spagnoli, 31, Napoli" },
  { id: 52, query: "Via Santa Maria Antesaecula, 126, Napoli" },
  { id: 53, query: "Via Chiaia, 216, Napoli" },
  { id: 54, query: "Via Arenaccia, Napoli" },
  { id: 55, query: "Piazza Santa Maria della Fede, Napoli" },
  { id: 56, query: "Via Giovanni Nicotera, 26, Napoli" },
  { id: 57, query: "Salita dello Scudillo, Napoli" },
  { id: 58, query: "Via Giuseppe Piazzi, 55, Napoli" },
  { id: 59, query: "Via Piscina Mirabilis, Bacoli" },
  { id: 60, query: "Via Francesco Saverio Correra, Napoli" },
];

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  const startId = parseInt(process.argv[2] || '1');
  const endId = parseInt(process.argv[3] || '60');
  console.log(`Geocoding range from ID ${startId} to ${endId}...`);

  let results: Record<number, [number, number]> = {};
  if (existsSync('geocoded_coords.json')) {
    try {
      results = JSON.parse(readFileSync('geocoded_coords.json', 'utf8'));
    } catch (e) {
      // ignore
    }
  }

  const targets = SITES_TO_GEOCODE.filter(s => s.id >= startId && s.id <= endId);

  for (const site of targets) {
    try {
      console.log(`Geocoding Site ${site.id}: "${site.query}"...`);
      // Add "Italy" to help Nominatim pinpoint it reliably
      const queryStr = site.query.includes("Bacoli") || site.query.includes("Pozzuoli") ? `${site.query}, Italy` : `${site.query}, Italy`;
      const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(queryStr)}&format=json&limit=1`;
      
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'NaplesSubterraneaExplorerClient/3.0 (tony.dimasi92@gmail.com)'
        }
      });
      if (!response.ok) {
        console.error(`Error for ${site.id}: status ${response.status}`);
        await delay(1600);
        continue;
      }
      const data = await response.json() as any[];
      if (data && data.length > 0) {
        const place = data[0];
        const lat = parseFloat(place.lat);
        const lon = parseFloat(place.lon);
        results[site.id] = [lon, lat];
        console.log(`✅ MATCH! [${lon.toFixed(6)}, ${lat.toFixed(6)}] for ${site.query}`);
      } else {
        console.log(`❌ No result for ${site.query}`);
      }
    } catch (error: any) {
      console.error(`Exception for ${site.id}:`, error.message);
    }
    // High sleep to respect Nominatim limits perfectly
    await delay(1600);
  }

  writeFileSync('geocoded_coords.json', JSON.stringify(results, null, 2));
  console.log("Range finished. Saved.");
}

run();
