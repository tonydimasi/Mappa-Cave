/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Site, Trip, Aqueduct } from './types.ts';

export const SITES_DATA: Site[] = [
  {
    id: 1,
    category: 'acqua',
    name: 'Napoli Sotterranea (Piazza San Gaetano)',
    coords: [14.257436, 40.850926],
    depth: 40,
    desc: "Situato a circa 40 metri di profondità sotto il cuore pulsante del centro antico, questo sito è il fulcro dell'archeologia ipogea cittadina. Il percorso si snoda attraverso i resti del primo acquedotto di Neapolis, scavato dai Greci nel IV secolo a.C. per l'estrazione del tufo necessario alle mura e poi potenziato dai Romani con la rete augustea. Le enormi cisterne furono riconvertite dal Genio Militare in rifugi antiaerei durante il secondo conflitto mondiale, dotandole di scale monumentali, impianti elettrici a 12 watt e servizi igienici per ospitare migliaia di civili durante i 100 bombardamenti subiti. Il complesso comprende anche i resti del Teatro Romano (Teatro di Nerone), le cui arcate della cavea sono oggi inglobate in abitazioni private e accessibili tramite botole poste sotto pavimenti di tipici 'bassi'.",
    source: "Paola in Viaggio - Itinerari Sottosuolo"
  },
  {
    id: 2,
    category: 'rifugio',
    name: 'Galleria Borbonica (Tunnel Borbonico)',
    coords: [14.243423, 40.832847],
    depth: 35,
    desc: "Progettata nel 1853 dall'architetto Errico Alvino per ordine di Ferdinando II di Borbone, questa imponente opera di ingegneria civile doveva fungere da via di fuga per la famiglia reale verso il mare e da rapido collegamento militare per le truppe stanziate nelle caserme di Chiaia. La galleria attraversa le colossali 'Cave Carafa' del XVI secolo e interseca tratti seicenteschi dell'acquedotto della Bolla. Durante la guerra divenne il rifugio antiaereo più profondo e attrezzato, mentre nel dopoguerra fu utilizzata come Deposito Giudiziario Comunale, accumulando carcasse di veicoli d'epoca, statue monumentali e cimeli vintage oggi parte integrante del percorso turistico.",
    source: "Wikipedia - Galleria Borbonica"
  },
  {
    id: 3,
    category: 'ipogeo',
    name: 'Neapolis Sotterrata (San Lorenzo Maggiore)',
    coords: [14.253935, 40.849883],
    depth: 6,
    desc: "Situato a circa 6 metri di profondità sotto le navate della Basilica di San Lorenzo Maggiore, il sito rivela l'antico cuore civile della Neapolis romana, edificato sopra l'agorà greca. I visitatori possono percorrere l'antico cardo stradale romano, pavimentato in basoli, e ammirare il macellum (mercato coperto) con le sue tabernae (botteghe), caratterizzate da strutture murarie in opus reticulatum. La stratificazione visibile documenta millenni di storia, mostrando anche resti medievali e mosaici paleocristiani che testimoniano la continuità dell'uso di questo spazio urbano cruciale.",
    source: "La Neapolis Sotterrata - Blog"
  },
  {
    id: 4,
    category: 'ipogeo',
    name: 'Cappella Sansevero (Camera Sotterranea)',
    coords: [14.254933, 40.849299],
    depth: 8,
    desc: "Progettata nel XVIII secolo dal principe scienziato Raimondo di Sangro come mausoleo familiare ellittico, la cripta doveva ospitare otto cappelle ad arco per i sarcofagi dei discendenti. Attualmente è celebre per custodire le 'Macchine Anatomiche': due corpi umani, un uomo e una donna, scarnificati per mostrare l'intero sistema circolatorio arterioso e venoso, ricostruito con precisione millimetrica dal medico Giuseppe Salerno tramite l'uso di composti chimici e metallizzanti brevettati dal principe. Il sito rappresenta una delle vette del simbolismo alchemico e della ricerca scientifica del Settecento napoletano.",
    source: "Museo Cappella Sansevero - Underground chamber"
  },
  {
    id: 5,
    category: 'catacomba',
    name: 'Catacombe di San Gennaro',
    coords: [14.247146, 40.865374],
    depth: 15,
    desc: "Il più importante complesso catacombale dell'Italia meridionale, disposto su due livelli non sovrapposti scavati nel banco di tufo giallo. Il nucleo originario del II-III secolo si sviluppò attorno alla tomba di una famiglia nobile, diventando meta di pellegrinaggio universale dopo la traslazione dei resti di San Gennaro nel V secolo. Ospita la Cripta dei Vescovi e la Basilica Ipogea di Sant'Agrippino, con preziosi affreschi e mosaici che documentano l'iconografia cristiana dal III al X secolo, incluso il famoso ritratto del vescovo africano Quodvultdeus.",
    source: "Sito Ufficiale Catacombe di Napoli"
  },
  {
    id: 6,
    category: 'catacomba',
    name: 'Cimitero delle Fontanelle',
    coords: [14.238764, 40.858842],
    depth: 12,
    desc: "Vasta cava di tufo (oltre 3.000 mq) situata nel Vallone della Sanità, riconvertita in ossario monumentale a partire dal XVII secolo per accogliere le migliaia di vittime della peste del 1656 e del colera del 1837. Il sito è il centro del culto delle 'anime pezzentelle', dove i cittadini adottano e curano teschi anonimi (capuzzelle) chiedendo grazie e protezione in cambio di preghiere. È diviso in tre grandi gallerie trapezoidali definite 'navata dei preti', 'degli appestati' e 'dei pezzentelli', offrendo uno spaccato unico del rapporto della città con la morte.",
    source: "Wikipedia - Cimitero delle Fontanelle"
  },
  {
    id: 7,
    category: 'catacomba',
    name: 'Catacombe di San Gaudioso',
    coords: [14.249435, 40.859502],
    depth: 10,
    desc: "Situate sotto la Basilica di Santa Maria della Sanità, risalgono al V secolo d.C. e custodiscono i resti del vescovo Gaudioso. Sono note per la pratica della 'scolatura' dei cadaveri introdotta dai Domenicani nel XVII secolo: i corpi dei nobili venivano posti in seditoi di tufo (cantarelle) per favorire l'essiccazione prima della tumulazione. Caratteristici sono gli affreschi parietali dove i crani reali dei defunti venivano incassati nel muro, con i corpi dipinti a descriverne il rango e le professioni esercitate in vita.",
    source: "Google Arts & Culture - San Gaudioso"
  },
  {
    id: 8,
    category: 'ipogeo',
    name: 'Ipogeo dei Cristallini',
    coords: [14.253870, 40.857758],
    depth: 12,
    desc: "Eccezionale testimonianza di necropoli ellenistica greca della fine del IV sec. a.C. situata a 12 metri di profondità nel Rione Sanità. Si compone di quattro tombe a camera indipendenti con letti-sarcofagi (klinai) scolpiti nel tufo e pareti decorate da pitture dai colori vividi (rosso pompeiano, azzurro egizio) che rappresentano ghirlande e scene rituali. Di particolare rilievo didattico è la Tomba C, che presenta un timpano ornato e una testa di Medusa in rilievo sulla parete di fondo, posta come guardiana simbolica del sepolcro.",
    source: "Campania Secrets - Ipogeo Cristallini"
  },
  {
    id: 9,
    category: 'rifugio',
    name: 'Museo del Sottosuolo (Piazza Cavour)',
    coords: [14.253611, 40.854400],
    depth: 25,
    desc: "Sviluppato in cavità comunicanti originate dal taglio del tufo giallo e successivamente collegate a rami dell'acquedotto della Bolla. Durante la Seconda Guerra Mondiale fu uno dei principali rifugi civili della zona, preservando ancora oggi graffiti storici, impianti elettrici d'epoca e resti di suppellettili. Gli ambienti, mantenuti a temperatura costante di 17 gradi, ospitano oggi rappresentazioni teatrali itineranti, come l'Inferno di Dante Alighieri, e fungono da centro di documentazione sulle cavità artificiali della città.",
    source: "Campania e Dintorni - Cavità Visitabili"
  },
  {
    id: 10,
    category: 'rifugio',
    name: 'LAES - Napoli Sotterranea (Quartieri Spagnoli)',
    coords: [14.245436, 40.837319],
    depth: 35,
    desc: "Questo percorso esplora i rifugi antiaerei scavati sotto i Quartieri Spagnoli nel XVI secolo per l'estrazione dei materiali edili. Attraverso una scala di 75 gradini si scende a circa 35 metri di profondità in un labirinto di cavità che ospitò migliaia di persone durante i bombardamenti della Seconda Guerra Mondiale. Il sito conserva graffiti originali lasciati dai rifugiati e reperti del periodo bellico, documentando la resistenza civile napoletana e l'antico sistema di distribuzione idrica dell'acquedotto del Carmignano.",
    source: "Paola in Viaggio - Napoli Sotterranea"
  },
  {
    id: 11,
    category: 'acqua',
    name: "Lapis Museum (Museo dell'Acqua)",
    coords: [14.254622, 40.850226],
    depth: 20,
    desc: "Situato sotto la Basilica di Santa Maria Maggiore alla Pietrasanta, il museo espone le infrastrutture degli antichi acquedotti napoletani, dal sistema greco-romano alle cisterne rinascimentali del Carmignano. Il percorso valorizza le canalizzazioni seicentesche che si sono mantenute intatte, offrendo allestimenti multimediali che spiegano il fluire dell'acqua nel ventre di tufo della città attraverso i secoli e la maestria degli antichi pozzari.",
    source: "Wikipedia - Sottosuolo di Napoli"
  },
  {
    id: 12,
    category: 'ipogeo',
    name: 'Ipogeo dei Togati',
    coords: [14.251887, 40.859598],
    depth: 10,
    desc: "Rara tomba a camera greca risalente alla fine del IV sec. a.C., situata a circa 8-12 metri sotto il piano stradale del Rione Sanità. Deve il nome a un raffinato altorilievo scolpito nel tufo che ritrae una coppia di defunti vestiti con la toga greca, testimonianza dell'elevato rango sociale della Neapolis ellenistica. Originariamente situato in superficie, il monumento fu gradualmente sommerso dai detriti alluvionali (le 'Lave dei Vergini') ma preserva perfettamente le sue decorazioni architettoniche greche.",
    source: "Campania e Dintorni - Cavità Visitabili"
  },
  {
    id: 13,
    category: 'ipogeo',
    name: 'Mitreo di Carminiello ai Mannesi',
    coords: [14.259877, 40.851074],
    depth: 7,
    desc: "Area archeologica che rivela un complesso sistema di terme romane del I sec. d.C., i cui ambienti inferiori furono convertiti in un Mitreo dedicato al dio Mitra nel II secolo d.C. Il sito conserva un importante rilievo in stucco raffigurante la 'tauroctonia' (Mitra che sacrifica il toro) e tracce di decorazioni parietali. Rappresenta una delle poche prove dirette del culto mitraico nel cuore del centro urbano antico e testimonia la sovrapposizione tra domus, terme e luoghi di culto misterico.",
    source: "Mithraeum.eu - Monument 358"
  },
  {
    id: 14,
    category: 'rifugio',
    name: 'Palazzo Cellammare (Cave e Rifugi)',
    coords: [14.242950, 40.835956],
    depth: 22,
    desc: "Sotto lo storico palazzo situato nel quartiere Chiaia si estende una vasta rete di cavità artificiali nate dall'estrazione del tufo litoide per l'edilizia nobiliare. Con una superficie rilevata di oltre 6.000 mq, il complesso fu adattato durante la Seconda Guerra Mondiale come rifugio antiaereo attrezzato per la popolazione locale, collegato da gallerie tecniche ad altri ambienti ipogei sotto il cinema Metropolitan. Le cavità mostrano segni di interventi di rinforzo strutturale eseguiti nel corso dei secoli.",
    source: "Relazione Geologica - Comune di Napoli"
  },
  {
    id: 15,
    category: 'ipogeo',
    name: 'Crypta Neapolitana (Grotta di Pozzuoli)',
    coords: [14.218278, 40.830553],
    depth: 45,
    desc: "Imponente galleria stradale romana lunga 705 metri, scavata interamente nel tufo sotto la collina di Posillipo nel 37 a.C. dall'architetto Lucius Cocceius Auctus. Collegava Mergellina con Fuorigrotta ed è avvolta dal mito di Virgilio Mago, che l'avrebbe creata in una notte grazie alla magia. In epoca vicereale fu ampliata abbassando il piano di calpestio, operazione che ne compromise parzialmente la stabilità statica. Oggi è parte del Parco Vergiliano, situata tra la presunta Tomba di Virgilio e quella di Giacomo Leopardi.",
    source: "NapoliForMe - Crypta Neapolitana"
  },
  {
    id: 16,
    category: 'ipogeo',
    name: 'Fossa del Grano (Via Broggia)',
    coords: [14.250854, 40.852038],
    depth: 14,
    desc: "Serie di enormi cavità scavate nel XVII secolo sotto il regno di Filippo III per lo stoccaggio pubblico dei cereali in previsione di carestie. Successivamente, queste strutture furono incorporate nel sistema acquedottistico del Carmignano e, nel XX secolo, adattate come rifugi antiaerei WWII con il livellamento dei pavimenti e murature di rinforzo. Presenta una superficie rilevata di circa 2.520 mq e un volume di 12.600 mc.",
    source: "Relazione Geologica - Comune di Napoli"
  },
  {
    id: 17,
    category: 'ipogeo',
    name: "Teatro Romano di Neapolis (L'Anticaglia)",
    coords: [14.257027, 40.851858],
    depth: 5,
    desc: "I resti monumentali del teatro di epoca imperiale dove si esibì l'imperatore Nerone cantando le sue composizioni greche. Le imponenti strutture della cavea e del proscenio sono oggi parzialmente inglobate nelle fondamenta degli edifici del centro antico e visibili attraverso i pavimenti di abitazioni private nel cuore del decumano superiore. Rappresenta un eccezionale esempio di 'archeologia diffusa', dove l'antico funge da base statica per la città moderna.",
    source: "Wikipedia - Sottosuolo di Napoli"
  },
  {
    id: 18,
    category: 'ipogeo',
    name: 'Ipogeo dei Melograni',
    coords: [14.251570, 40.860957],
    depth: 11,
    desc: "Sito archeologico appartenente alla necropoli ellenistica extra-moenia di Neapolis (IV-III secolo a.C.), scoperto nel Vallone della Sanità. Caratterizzato da un'architettura funeraria a camera scavata nel tufo, deve il suo nome alle raffinate decorazioni dipinte che ritraggono melograni, simbolo greco della fecondità spirituale e del passaggio all'oltretomba. È stato recentemente oggetto di studi geofisici muonucleari per mappare eventuali camere non ancora scavate.",
    source: "Nature Portfolio - Discovery by Muography"
  },
  {
    id: 19,
    category: 'acqua',
    name: 'Acquedotto del Serino (Sottosuolo)',
    coords: [14.265766, 40.872165],
    depth: 18,
    desc: "Conosciuto come Aqua Augusta, fu costruito in epoca augustea (27 a.C. - 14 d.C.) per portare l'acqua dalle sorgenti del Serino a Napoli e Miseno, con un percorso complessivo di oltre 80 km. I suoi condotti sotterranei, spesso rivestiti in opus reticulatum o scavati nella roccia nuda, attraversano l'intero sottosuolo cittadino alimentando le cisterne dei palazzi fino all'entrata in funzione dell'acquedotto moderno nel 1885.",
    source: "Lo Speakers Corner - Gli Antichi Acquedotti"
  },
  {
    id: 20,
    category: 'rifugio',
    name: 'Ipogeo di Piazza del Plebiscito',
    coords: [14.248565, 40.835856],
    depth: 30,
    desc: "Complesso sistema di ambienti ipogei, cisterne idriche e gallerie situati sotto il colonnato monumentale e la Basilica di San Francesco di Paola. Le strutture si intersecano con il tracciato della Galleria Borbonica e furono parzialmente riutilizzate come rifugi antiaerei per i dipendenti del Palazzo del Governo (Prefettura) durante la Seconda Guerra Mondiale. Il sito è stato oggetto di monitoraggio durante i lavori per la mai completata Linea Tranviaria Rapida (LTR).",
    source: "Wikipedia - Sottosuolo di Napoli"
  },
  {
    id: 21,
    category: 'acqua',
    name: 'Sito 21 (Via Avvocata 25)',
    coords: [14.249386, 40.850250],
    depth: 25,
    desc: "Tratto di antico acquedotto sotterraneo esteso per circa 2.045 mq sotto il rione Avvocata, censito tecnicamente per fini di monitoraggio sismico dell'edificabilità, prevenzione dello stress idrico dei terreni sovrastanti e catalogazione del demanio ipogeo.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 22,
    category: 'ipogeo',
    name: 'Sito 22 (Via L. Bianchi)',
    coords: [14.213320, 40.868081],
    depth: 30,
    desc: "Complesso di cave monumentali a Chiaiano rilevato per monitorare continuamente la stabilità del suolo e gli impatti dell'attività estrattiva storica di tufo sul sovrastante tessuto urbano.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 23,
    category: 'ipogeo',
    name: 'Cavità Bosco Capodimonte 17/22',
    coords: [14.250257, 40.867283],
    depth: 18,
    desc: "Vasta cava adiacente al Real Bosco. Monitorata geotecnicamente per la stabilità del piano stradale, esempio di attività estrattiva privata nel database del censimento continuo per la sicurezza geotecnica.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 24,
    category: 'ipogeo',
    name: 'Cavità Via Filippo Maria Briganti',
    coords: [14.270008, 40.868004],
    depth: 15,
    desc: "Imponente complesso caveale con superficie di 2.500 mq. Uno dei vuoti artificiali più vasti della zona orientale, scavato per il prelievo di materiali edili.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 25,
    category: 'ipogeo',
    name: 'Cavità Vico della Calce 1',
    coords: [14.247022, 40.857613],
    depth: 25,
    desc: "Situata nel Rione Stella, con volume di 25.360 mc. Caratterizzata da una fitta maglia di pilastri residui per sostenere l'abitato circostante e per prevenire fenomeni di sprofondamento.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 26,
    category: 'ipogeo',
    name: 'Cavità Vico Calce a Materdei 30',
    coords: [14.247022, 40.857613],
    depth: 14,
    desc: "Documenta la stratificazione delle attività estrattive private effettuate sotto i palazzi del XVII secolo a Materdei. Volume: 5.215 mc.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 27,
    category: 'ipogeo',
    name: 'Cavità Salita Vecchia di Capodimonte 60',
    coords: [14.252018, 40.862874],
    depth: 12,
    desc: "Cava storica situata lungo l'antico asse di collegamento verso la collina. Caratterizzata da pareti alte circa 10 metri e un soffitto piano.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 28,
    category: 'acqua',
    name: 'Cisterna Piazza Cavour 74',
    coords: [14.251641, 40.853297],
    depth: 8,
    desc: "Ambiente idrico di accumulo situato sotto piazza Cavour. Faceva parte del sistema di distribuzione dell'acquedotto della Bolla.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 29,
    category: 'ipogeo',
    name: 'Cavità Vico Centogradi 10',
    coords: [14.254512, 40.858043],
    depth: 15,
    desc: "Una delle cavità più imponenti censite tecnicamente nel quartiere Stella. Occupa una superficie di 6.478 mq e una volumetria di 64.780 mc.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 30,
    category: 'ipogeo',
    name: 'Cavità Via Chiaia 87',
    coords: [14.245534, 40.836105],
    depth: 15,
    desc: "Vasta cavità tecnica situata sotto l'asse stradale di via Chiaia. Testimonia l'attività estrattiva tra XVII e XVIII secolo per i palazzi della nobiltà.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 31,
    category: 'ipogeo',
    name: 'Cavità Via Chiaia 123',
    coords: [14.245534, 40.836105],
    depth: 10,
    desc: "Ulteriore ambiente ipogeo nel quartiere San Ferdinando. Cavità 'di prestito' scavata per l'edificazione del quartiere tra il XVII e il XVIII secolo.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 32,
    category: 'ipogeo',
    name: 'Cavità Via Chiaia 179',
    coords: [14.245534, 40.836105],
    depth: 10,
    desc: "Ambiente ipogeo nel cuore di Chiaia. Il sito è censito per fini di controllo della stabilità e monitoraggio delle infiltrazioni idriche profonde.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 33,
    category: 'ipogeo',
    name: 'Cavità Salita dei Cinesi 68',
    coords: [14.251567, 40.861245],
    depth: 8,
    desc: "Ex cava di tufo situata nel quartiere Stella, attualmente riutilizzata come autorimessa privata (garage).",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 34,
    category: 'ipogeo',
    name: 'Sito 34 (Viale Colli Aminei 36)',
    coords: [14.239335, 40.870998],
    depth: 35,
    desc: "Colossale sistema di estrazione di oltre 200.000 mc (esattamente 206.000 mc rilevati dal Comune) scavato sulla collina di Capodimonte, essenziale per saggiare la stabilità geomeccanica delle colline.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 35,
    category: 'acqua',
    name: 'Acquedotto Vico I Concezione',
    coords: [14.246873, 40.843248],
    depth: 10,
    desc: "Tratto di condotta idrica storica situata nei Quartieri Spagnoli. Documenta la densità della rete di distribuzione ipogea seicentesca.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 36,
    category: 'ipogeo',
    name: 'Cavità Via Confalone 7',
    coords: [14.237086, 40.854068],
    depth: 15,
    desc: "Cava di modesta estensione situata nel quartiere Arenella. Testimonianza delle attività estrattive locali effettuate sui fianchi del Vomero.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 37,
    category: 'ipogeo',
    name: 'Cavità Via Francesco Saverio Correra 29',
    coords: [14.247059, 40.851316],
    depth: 18,
    desc: "Ampia cava nel rione Avvocata con superficie di 3.806 mq. Localizzata in area ad alta densità abitativa per studi sismologici.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 38,
    category: 'acqua',
    name: 'Cisterna Via Michele D\'Amelio 82',
    coords: [14.227844, 40.852285],
    depth: 6,
    desc: "Piccola camera idrica di accumulo situata nel quartiere Arenella. Faceva parte delle infrastrutture per l'approvvigionamento dei casali.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 39,
    category: 'rifugio',
    name: 'Sito 39 (Via Trinità degli Spagnoli 31)',
    coords: [14.247656, 40.840198],
    depth: 26,
    desc: "Uno dei rifugi antiaerei più grandi e conosciuti della città. Con una superficie areale di circa 32.000 mq, si sviluppa sotto i Quartieri Spagnoli. È accessibile tramite una scala monumentale di 135 gradini che scende fino a 26 metri sotto il livello stradale. All'interno conserva graffiti storici, resti del sistema di illuminazione bellico e sedili in muratura per la popolazione rifugiata.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 40,
    category: 'ipogeo',
    name: 'Cavità Via Carlo De Marco',
    coords: [14.264591, 40.867724],
    depth: 6,
    desc: "Cava censita nel quartiere San Carlo all'Arena. Documenta l'attività estrattiva eseguita lungo le pendici esterne di Capodimonte.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 41,
    category: 'acqua',
    name: 'Calata San Mattia 23',
    coords: [14.244824, 40.839417],
    depth: 40,
    desc: "Scoperto nel luglio 1982 dal Gruppo Speleologico CAI Napoli, questo sito custodisce il più vasto tratto intatto dell'acquedotto del Carmignano (1627-1629) mai trovato in città. Il sistema si sviluppa per oltre 2.000 metri di cunicoli scavati nel tufo e comprende ben 30 maestose cisterne comunicanti, alcune delle quali superano i 40 metri di altezza. Contrariamente ad altri settori, non ha subito modifiche belliche, conservando marciapiedi di servizio e archi di sostegno originali del XVII secolo.",
    source: "Lo Speakers Corner - Gli Antichi Acquedotti"
  },
  {
    id: 42,
    category: 'acqua',
    name: 'Palazzo Serra di Cassano',
    coords: [14.245786, 40.833656],
    depth: 30,
    desc: "Sito storico che integra condotte dell'acquedotto rinascimentale e un rifugio antiaereo WWII sulla collina di Pizzofalcone. Il sito è fisicamente connesso al sistema della Galleria Borbonica tramite una scala monumentale che scende dal cortile del palazzo nobiliare. Durante la guerra, fu un centro di coordinamento civile e sede di attività antifasciste clandestine.",
    source: "Wikipedia - Sottosuolo di Napoli"
  },
  {
    id: 43,
    category: 'ipogeo',
    name: 'Grotta di Seiano',
    coords: [14.176524, 40.800182],
    depth: 45,
    desc: "Tunnel stradale romano lungo 770 metri scavato nel I secolo a.C. sotto la collina di Posillipo. Accesso al Parco del Pausilypon. Presenta archi di rinforzo in opus reticulatum e massicce volte borboniche del XIX secolo. Durante la Seconda Guerra Mondiale fu utilizzato come rifugio sicuro per migliaia di abitanti della zona di Bagnoli.",
    source: "Wikipedia - Sottosuolo di Napoli"
  },
  {
    id: 44,
    category: 'ipogeo',
    name: 'Grotta di Cocceio',
    coords: [14.048830, 40.849137],
    depth: 30,
    desc: "Galleria militare romana che collegava il lago d'Averno con Cuma. Costruita da Lucio Cocceio Aucto nel 37 a.C., presenta aerofori verticali colossali per la luce ed è dotata di marciapiedi rialzati per i carri adibiti alla difesa militare della Classis Misenensis.",
    source: "Wikipedia - Sottosuolo di Napoli"
  },
  {
    id: 45,
    category: 'ipogeo',
    name: 'Grotte Platomonie (Monte Echia)',
    coords: [14.245923, 40.830488],
    depth: 10,
    desc: "Antichissime cavità situate ai piedi del Monte Echia, ritenute sede di un mitreo pagano o di antichi cenobi monastici basiliani. Queste cave fornirono i blocchi di tufo litoide per l'edificazione del Borgo di Chiaia e del Palazzo Reale nel XVI secolo. Rappresentano i primi siti estrattivi documentati della Partenope greca.",
    source: "Lapegna - Escursioni Sottosuolo (FSC)"
  },
  {
    id: 46,
    category: 'ipogeo',
    name: 'Cavità Via Vergini 19',
    coords: [14.254500, 40.856500],
    depth: 25,
    desc: "Cava monumentale con superficie di 437 mq. Rappresenta una prova della pressione estrattiva estrema subita dal sottosuolo della Sanità, con pilastri originatori lasciati a presidio geotecnico.",
    source: "Campania e Dintorni - Cavità Visitabili"
  },
  {
    id: 47,
    category: 'acqua',
    name: 'Cavità Via Duomo 142',
    coords: [14.261095, 40.848989],
    depth: 15,
    desc: "Cisterna monumentale dell'acquedotto greco-romano (Bolla). Presenta tracce storiche di riadattamento per il Convento dei Gerolomini risalente al XVI-XVII secolo.",
    source: "Wikipedia - Sottosuolo di Napoli"
  },
  {
    id: 48,
    category: 'acqua',
    name: 'Cavità Vico Carafa 14',
    coords: [14.248567, 40.845798],
    depth: 18,
    desc: "Vasto sistema ipogeo situato sotto lo storico Palazzo Albertini di Ciolla a Vico Carafa 14 nel Rione Stella, connesso all'antico sistema di distribuzione idrica e censito per fini di controllo geotecnico.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 49,
    category: 'acqua',
    name: 'Cavità Vico Carcere Sanfelice 7',
    coords: [14.247200, 40.845600],
    depth: 20,
    desc: "Complesso di cisterne dell'acquedotto greco-romano con volume di 9.520 mc. Mostra segni di degrado nei rivestimenti in muratura ma preserva intonaci idraulici tardo-imperiali d'inestimabile valore didattico.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 50,
    category: 'acqua',
    name: 'Serbatoio Amedeo di Savoia',
    coords: [14.248527, 40.860540],
    depth: 35,
    desc: "Noto come 'Serbatoio AMAN'. Imponente bacino di accumulo idrico profondo con una volumetria colossale di 371.925 mc, scavato interamente in era sabauda per supportare il fabbisogno idrico della città.",
    source: "Relazione Geologica - Comune di Napoli"
  },
  {
    id: 51,
    category: 'rifugio',
    name: 'Trinità degli Spagnoli 31',
    coords: [14.247148, 40.839888],
    depth: 26,
    desc: "Rifugio antiaereo monumentale (50.000 mc) ricavato da un antico acquedotto, accessibile tramite una scala di 135 gradini sotto i Quartieri Spagnoli. Conserva scritte storiche originali tracciate dai rifugiati.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 52,
    category: 'ipogeo',
    name: 'Via S. M. Antesaecula 126',
    coords: [14.251887, 40.859598],
    depth: 12,
    desc: "Tomba a camera greca distinta dall'Ipogeo dei Togati. Testimonianza della necropoli ellenistica extra-moenia di Neapolis con pregevoli incisioni architettoniche a timpano.",
    source: "Campania e Dintorni - Cavità Visitabili"
  },
  {
    id: 53,
    category: 'acqua',
    name: 'Cavità Via Chiaia 216',
    coords: [14.246505, 40.836595],
    depth: 28,
    desc: "Vasta cavità tecnica collegata al sistema idrico dei Quartieri Spagnoli. Uno dei vuoti artificiali più ampi documentati sotto Chiaia per fini di distribuzione idrica seicentesca.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 54,
    category: 'ipogeo',
    name: 'Via Arenaccia (Gussone)',
    coords: [14.270444, 40.861029],
    depth: 28,
    desc: "Sito stratigrafico identificato tramite sondaggi geologici profondi che hanno intercettato il banco di tufo a 28 metri sotto i sedimenti stradali dell'Arenaccia.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 55,
    category: 'ipogeo',
    name: 'Piazza S. Maria della Fede',
    coords: [14.268552, 40.858237],
    depth: 38,
    desc: "Sito di eccezionale interesse stratigrafico dove il tufo giallo viene intercettato a 38 metri dal piano campagna. Sondaggi profondi hanno rivelato che al di sotto del banco tufaceo (74 m) sono presenti depositi marnosi e argille marine con conchiglie, documentando antiche invasioni marine del territorio partenopeo.",
    source: "Relazione Geologica Comune 1967 (Il Sottosuolo)"
  },
  {
    id: 56,
    category: 'acqua',
    name: 'Cavità Via Giovanni Nicotera (Cisterna)',
    coords: [14.244680, 40.835786],
    depth: 20,
    desc: "Ambiente ipogeo appartenente all'acquedotto del Carmignano. Caratterizzato da cisterne a quote differenziate per l'attingimento sicuro presso i contrafforti di Pizzofalcone.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 57,
    category: 'ipogeo',
    name: 'Complesso dello Scudillo',
    coords: [14.238256, 40.866076],
    depth: 45,
    desc: "Il sistema caveale più maestoso di Napoli (838.000 mc). Durante la guerra fu enorme deposito di munizioni alleato, teatro di una tragica esplosione nel 1944.",
    source: "Relazione Geologica Integrale - Comune di Napoli"
  },
  {
    id: 58,
    category: 'rifugio',
    name: 'Giardino di Babuk',
    coords: [14.259075, 40.858598],
    depth: 15,
    desc: "Singola cavità antiaerea situata sotto un giardino storico nobiliare in zona via Foria. Originata dall'estrazione del tufo nel XVIII secolo, è oggi riqualificata come sede di manifestazioni culturali, concerti e spettacoli teatrali ambientati nel suggestivo scenario ipogeo.",
    source: "Campania e Dintorni - Cavità Visitabili"
  },
  {
    id: 59,
    category: 'acqua',
    name: 'Piscina Mirabilis',
    coords: [14.080284, 40.795203],
    depth: 15,
    desc: "Definita la 'Piscina Mirabilis', ovvero la 'Cattedrale dell'Acqua', è il terminale monumentale dell'acquedotto Augusteo del Serino scavato nel tufo a Bacoli. Ha una capacità di 12.000 mc ed era destinata all'approvvigionamento della flotta imperiale Classis Misenensis. La sua architettura a cinque navate sorrette da 48 pilastri rappresenta l'apice dell'ingegneria idraulica romana.",
    source: "Naples Life, Death & Miracle - Aqueduct"
  },
  {
    id: 60,
    category: 'ipogeo',
    name: 'Tombe a Forno di Materdei',
    coords: [14.247059, 40.851316],
    depth: 6,
    desc: "I più antichi esempi di cavità artificiali di Napoli (4.500 anni fa), attribuiti alla cultura eneolitica del Gaudo. Sepolture a camera scavate nel tufo.",
    source: "Sito Ufficiale Catacombe di Napoli"
  }
];

export const TRIPS_DATA: Trip[] = [
  { path: [[14.265, 40.855], [14.260, 40.852], [14.256, 40.850], [14.250, 40.848]], timestamps: [0, 300, 600, 1000], color: [74, 139, 201] },
  { path: [[14.256, 40.850], [14.254, 40.844], [14.248, 40.838], [14.243, 40.833]], timestamps: [200, 500, 800, 1000], color: [201, 168, 76] }
];

export const AQUEDUCTS_DATA: Aqueduct[] = [
  {
    id: 'augusteo',
    name: 'Acquedotto Augusteo (del Serino)',
    color: [14, 116, 144], // Cyan Blue
    hexColor: '#0E7490',
    description: "Monumentale opera idraulica romana di età augustea (fine I sec. a.C.) che portava l'acqua dalle sorgenti del Serino (AV) fino alla Piscina Mirabilis di Bacoli per rifornire la flotta imperiale Misenensis, coprendo circa 100 km.",
    path: [
      [14.8732, 40.8495],
      [14.3920, 40.9110],
      [14.2638, 40.8653],
      [14.2547, 40.8577],
      [14.2520, 40.8521],
      [14.2455, 40.8344],
      [14.217550, 40.829595],
      [14.1950, 40.8248],
      [14.0815, 40.7950]
    ],
    hotspots: [
      { id: 'augusteo-a', name: 'Sorgente d\'Acqua (Serino)', label: 'Augusteo: Sorgente', coords: [14.8732, 40.8495], desc: "Sorgenti dell'Acquaro-Pelosi nel comune di Serino (AV), captate dai romani ad un'altitudine di circa 376 metri s.l.m." },
      { id: 'augusteo-b', name: 'Canale di Avvicinamento', label: 'Augusteo: Avvicinamento', coords: [14.3920, 40.9110], desc: 'Sezione collinare di passaggio dell\'acquedotto prima dell\'ingresso nella pianura campana.' },
      { id: 'augusteo-c', name: 'Ponti Rossi (Ingresso Urbano)', label: 'Augusteo: Ingresso Urbano', coords: [14.2638, 40.8653], desc: 'Celebri arcate romane in tufo e mattoni rossi adibite a viadotto per superare la vallata e immettere l\'acqua in città.' },
      { id: 'augusteo-d', name: 'Sottosuolo Capodimonte', label: 'Augusteo: Sottosuolo Capodimonte', coords: [14.2547, 40.8577], desc: 'Condotto sotterraneo che attraversa la collina di Capodimonte e scende verso il rione Sanità.' },
      { id: 'augusteo-e', name: 'Centro Antico', label: 'Augusteo: Centro Antico', coords: [14.2520, 40.8521], desc: 'Diramazione principale nel cuore della parte antica (Decumani) collegata alle cisterne di Piazza San Gaetano.' },
      { id: 'augusteo-f', name: 'Distribuzione Pizzofalcone', label: 'Augusteo: Distribuzione', coords: [14.2455, 40.8344], desc: 'Tracciato di distribuzione verso l\'antico insediamento meridionale di Pizzofalcone.' },
      { id: 'augusteo-g', name: 'Crypta Neapolitana (Traforo)', label: 'Augusteo: Traforo', coords: [14.217550, 40.829595], desc: 'Il condotto attraversa la colina di Posillipo parallelamente alla galleria romana della Crypta Neapolitana.' },
      { id: 'augusteo-h', name: 'Biforcazione Flegrea', label: 'Augusteo: Biforcazione', coords: [14.1950, 40.8248], desc: 'Punto di snodo della condotta principale verso i centri dei Campi Flegrei (Pozzuoli e Nisida).' },
      { id: 'augusteo-i', name: 'Piscina Mirabilis (Terminale)', label: 'Augusteo: Terminale', coords: [14.0815, 40.7950], desc: 'La "Cattedrale dell\'Acqua": colossale cisterna terminale scavata nel tufo a Bacoli, destinata ad approvvigionare la flotta di Miseno.' }
    ]
  },
  {
    id: 'bolla',
    name: 'Acquedotto della Bolla (o Volla)',
    color: [194, 65, 12], // Warm Orange-Rust
    hexColor: '#C2410C',
    description: "Il più antico acquedotto di Napoli, di origine greco-romana. Sfruttava la falda freatica del monte Somma e l'alveo del Volla, distribuendo l'acqua per gravità al centro storico e alla zona dell'antica Neapolis.",
    path: [
      [14.3980, 40.8875],
      [14.3520, 40.8812],
      [14.2644, 40.8530],
      [14.2568, 40.8507],
      [14.2635, 40.8465],
      [14.2515, 40.8405]
    ],
    hotspots: [
      { id: 'bolla-a', name: 'Sorgente del Volla', label: 'Bolla: Sorgente', coords: [14.3980, 40.8875], desc: 'Antiche sorgenti e conche imbrifere nella piana del Volla, ai piedi del Somma-Vesuvio.' },
      { id: 'bolla-b', name: 'Filtrazione delle Acque', label: 'Bolla: Filtrazione', coords: [14.3520, 40.8812], desc: 'Impianti di purificazione e canalizzazioni interrate nella piana tra Volla e Poggioreale.' },
      { id: 'bolla-c', name: 'Ingresso Urbano (Porta Capuana)', label: 'Bolla: Ingresso Urbano', coords: [14.2644, 40.8530], desc: 'Punto in cui il flusso idrico scavalcava le mura orientali in prossimità della zona di Porta Capuana.' },
      { id: 'bolla-d', name: 'Asse Decumano Maggiore', label: 'Bolla: Asse Decumano', coords: [14.2568, 40.8507], desc: 'Condotto sotterraneo passante sotto via dei Tribunali, alimentando una fitta rete di pozzi condominiali.' },
      { id: 'bolla-e', name: 'Quartieri Bassi / Mercato', label: 'Bolla: Quartieri Bassi', coords: [14.2635, 40.8465], desc: 'Diramazione meridionale destinata al popoloso quartiere del Mercato e alle attività artigianali del porto.' },
      { id: 'bolla-f', name: 'Termine (Piazza Municipio)', label: 'Bolla: Termine', coords: [14.2515, 40.8405], desc: 'Punto terminale più meridionale documentato in prossimità del Castel Nuovo.' }
    ]
  },
  {
    id: 'carmignano',
    name: 'Acquedotto del Carmignano',
    color: [13, 148, 136], // Teal
    hexColor: '#0D9488',
    description: "Costruito all'inizio del XVII secolo (1629) grazie al contributo del medico e mecenate Cesare Carmignano, per rimediare alle siccità della città. Captava le acque del fiume Faenza nel beneventano fino a Napoli.",
    path: [
      [14.5015, 41.0880],
      [14.3820, 41.0340],
      [14.2865, 40.8845],
      [14.2625, 40.8614],
      [14.2505, 40.8525],
      [14.2486, 40.8436],
      [14.246410, 40.838350]
    ],
    hotspots: [
      { id: 'carmignano-a', name: 'Sorgenti del Faenza (Airola)', label: 'Carmignano: Sorgente', coords: [14.5015, 41.0880], desc: 'Sorgenti captate alle pendici del Taburno nel territory del comune di Airola (BN).' },
      { id: 'carmignano-b', name: 'Transito Valle di Maddaloni', label: 'Carmignano: Transito', coords: [14.3820, 41.0340], desc: 'Tratto collinare di passaggio dell\'acquedotto prima dell\'ingresso nella pianura a nord di Napoli.' },
      { id: 'carmignano-c', name: 'Ingresso Settentrionale (Capodichino)', label: 'Carmignano: Ingresso Urbano', coords: [14.2865, 40.8845], desc: 'Punto di ingresso della condotta monumentale proveniente dalle colline settentrionali di Capodichino.' },
      { id: 'carmignano-d', name: 'Distribuzione San Carlo all\'Arena', label: 'Carmignano: Distribuzione', coords: [14.2625, 40.8614], desc: 'Bacini di decantazione e distribuzione primari situati fuori le mura medievali della città.' },
      { id: 'carmignano-e', name: 'Canale Asse Principale (Toledo)', label: 'Carmignano: Asse Principale', coords: [14.2505, 40.8525], desc: 'Condotta sotterranea ad alta pressione parallela alla nascente Via Toledo per servire i nuovi quartieri.' },
      { id: 'carmignano-f', name: 'Biforcazione Chiaia / Reale', label: 'Carmignano: Biforcazione', coords: [14.2486, 40.8436], desc: 'Diramazione cruciale per servire il Palazzo Reale e i rioni costieri occidentali.' },
      { id: 'carmignano-g', name: 'Tratto Intatto (Calata San Mattia)', label: 'Carmignano: Tratto Intatto', coords: [14.246410, 40.838350], desc: 'Il più grande tratto intatto dell\'acquedotto conservato sotto i Quartieri Spagnoli, con 30 cisterne monumentali collegate di 40m di altezza.' }
    ]
  }
];

export const SITE_ADDRESSES: Record<number, { address: string; quarter: string }> = {
  1: { address: 'Piazza San Gaetano, 68', quarter: 'San Lorenzo' },
  2: { address: 'Via Domenico Morelli, 61 / Vico del Grottone, 4', quarter: 'San Ferdinando' },
  3: { address: 'Via dei Tribunali, 316', quarter: 'San Lorenzo' },
  4: { address: 'Via Francesco De Sanctis, 19/21', quarter: 'San Giuseppe' },
  5: { address: 'Via Capodimonte, 13', quarter: 'Stella' },
  6: { address: 'Via delle Fontanelle, 80', quarter: 'Stella' },
  7: { address: 'Piazza Sanità, 123', quarter: 'Stella' },
  8: { address: 'Via dei Cristallini, 133', quarter: 'Stella' },
  9: { address: 'Piazza Cavour, 140', quarter: 'Stella' },
  10: { address: "Vico Sant'Anna di Palazzo, 52", quarter: 'Montecalvario' },
  11: { address: 'Piazzetta Pietrasanta', quarter: 'San Lorenzo' },
  12: { address: 'Via Santa Maria Antesaecula, 126/129', quarter: 'Stella' },
  13: { address: 'Vico Carminiello ai Mannesi', quarter: 'San Lorenzo' },
  14: { address: 'Via Chiaia, 149', quarter: 'San Ferdinando' },
  15: { address: 'Salita della Grotta (Piedigrotta)', quarter: 'Chiaia' },
  16: { address: 'Via Broggia, 11/18', quarter: 'San Lorenzo' },
  17: { address: 'Vico Cinquesanti / Via Anticaglia', quarter: 'San Lorenzo' },
  18: { address: 'Area Vergini', quarter: 'Stella' },
  19: { address: 'Tracciato urbano (Ponti Rossi - Mergellina)', quarter: 'San Lorenzo' },
  20: { address: 'Piazza del Plebiscito', quarter: 'San Ferdinando' },
  21: { address: 'Via dell\'Avvocata, 25', quarter: 'Avvocata' },
  22: { address: 'Via Leonardo Bianchi', quarter: 'Chiaiano' },
  23: { address: 'Via Miano, 2 (Real Bosco di Capodimonte)', quarter: 'San Carlo all\'Arena' },
  24: { address: 'Via Filippo Maria Briganti', quarter: 'San Carlo all\'Arena' },
  25: { address: 'Vico della Calce, 1', quarter: 'Stella' },
  26: { address: 'Vico Calce a Materdei, 30', quarter: 'Avvocata' },
  27: { address: 'Salita Vecchia di Capodimonte, 60', quarter: 'Stella' },
  28: { address: 'Piazza Cavour, 74', quarter: 'Stella' },
  29: { address: 'Vico Centogradi, 10', quarter: 'Stella' },
  30: { address: 'Via Chiaia, 87', quarter: 'San Ferdinando' },
  31: { address: 'Via Chiaia, 123', quarter: 'San Ferdinando' },
  32: { address: 'Via Chiaia, 179', quarter: 'San Ferdinando' },
  33: { address: 'Salita dei Cinesi, 68', quarter: 'Stella' },
  34: { address: 'Viale Colli Aminei, 36', quarter: 'San Carlo all\'Arena' },
  35: { address: 'Vico I Concezione a Montecalvario', quarter: 'Montecalvario' },
  36: { address: 'Via Confalone, 7', quarter: 'Arenella' },
  37: { address: 'Via Francesco Saverio Correra, 29', quarter: 'Avvocata' },
  38: { address: 'Via Michele D\'Amelio, 82', quarter: 'Arenella' },
  39: { address: 'Vico Tofa, 1', quarter: 'Montecalvario' },
  40: { address: 'Via Carlo De Marco', quarter: 'San Carlo all\'Arena' },
  41: { address: 'Calata San Mattia, 23', quarter: 'Montecalvario' },
  42: { address: 'Via Monte di Dio, 14', quarter: 'San Ferdinando' },
  43: { address: 'Discesa Coroglio, 6', quarter: 'Posillipo' },
  44: { address: 'Monte Grillo, Cuma', quarter: 'Area Flegrea' },
  45: { address: 'Via Chiatamone', quarter: 'San Ferdinando' },
  46: { address: 'Via Vergini, 19', quarter: 'Stella' },
  47: { address: 'Via Duomo, 142', quarter: 'San Lorenzo' },
  48: { address: 'Vico Carafa, 14', quarter: 'Stella' },
  49: { address: 'Vico Carcere Sanfelice, 7', quarter: 'Montecalvario' },
  50: { address: 'Corso Amedeo di Savoia, 216', quarter: 'Stella' },
  51: { address: 'Via Trinità degli Spagnoli, 31', quarter: 'Montecalvario' },
  52: { address: 'Via Santa Maria Antesaecula, 126', quarter: 'Stella' },
  53: { address: 'Via Chiaia, 216', quarter: 'San Ferdinando' },
  54: { address: 'Via Arenaccia, ang. Via Giovanni Gussone', quarter: 'San Carlo all\'Arena' },
  55: { address: 'Piazza Santa Maria della Fede', quarter: 'San Lorenzo' },
  56: { address: 'Via Giovanni Nicotera, 26', quarter: 'Chiaia' },
  57: { address: 'Salita dello Scudillo', quarter: 'Stella' },
  58: { address: 'Via Giuseppe Piazzi, 55', quarter: 'San Carlo all\'Arena' },
  59: { address: 'Via Piscina Mirabilis (Bacoli)', quarter: 'Bacoli (Area Flegrea)' },
  60: { address: 'Rione Materdei (Via S. Saverio Correra)', quarter: 'Avvocata' },
};

// Automatically map addresses/quarters to SITES_DATA arrays
SITES_DATA.forEach(site => {
  const meta = SITE_ADDRESSES[site.id];
  if (meta) {
    site.address = meta.address;
    site.quarter = meta.quarter;
  }
});
