/**
 * ===================================================================
 * L'ABYSSE — HAUTE OCEANOGRAPHIC EXHIBITION SCRIPT ENGINE
 * Comprehensive Deep Sea Biology Database (0m to 10,928m)
 * 100% Local High-Resolution Specimen Photography in assets/
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  renderDeepSeaLifeTimeline();
  initMarineSnow();
  initFloodlightControl();
  initHydrophoneAudio();
  initLifeFilters();
  initQuickJump();
});

/* ===================================================================
   1. COMPREHENSIVE DEEP-SEA SPECIES & MILESTONES DATABASE
   =================================================================== */
const deepSeaDatabase = [
  // --- EPIPELAGIC ZONE (0m - 200m) ---
  {
    id: 'atlantic-salmon',
    depth: 12,
    depthStr: '12 METERS',
    zone: 'EPIPELAGIC',
    category: 'fish',
    name: 'Atlantic Salmon',
    latin: 'Salmo salar',
    order: 'SALMONIFORMES • SALMONIDAE',
    icon: 'fa-fish-fins',
    img: 'assets/specimen-salmon.jpg',
    lum: 'Non-Bioluminescent',
    isLum: false,
    fact: 'Equipped with olfactory imprinting that detects home river amino acids at 1 part per billion.',
    desc: 'An anadromous ocean traveler navigating thousands of kilometers using magnetite crystals in its skull that align with Earth\'s geomagnetic fields.',
    breakdowns: [
      'Magnetoreception: Specialized cranial cells detect micro-variations in the planetary magnetic field.',
      'Smoltification: Hormonal metamorphosis shifts kidney osmosis from freshwater to hyper-saline ocean water.',
      'Muscle Composition: High proportion of pink myoglobin-rich muscle fibers for trans-oceanic stamina.'
    ]
  },
  {
    id: 'recreational-scuba',
    depth: 40,
    depthStr: '40 METERS',
    zone: 'EPIPELAGIC',
    category: 'milestone',
    name: 'Recreational Scuba Dive Limit',
    latin: 'Homo sapiens (Hydrostatic Boundary)',
    order: 'HUMAN EXPLORATION MILESTONE',
    icon: 'fa-person-swimming',
    img: 'assets/specimen-scuba.jpg',
    lum: 'Diver Torches Required',
    isLum: false,
    fact: 'Beyond 40 meters, compressed nitrogen dissolves into neural lipid membranes, causing nitrogen narcosis ("rapture of the deep").',
    desc: 'The international safety threshold for recreational compressed-air scuba. Below this point, decompression sickness and oxygen toxicity require trimix helium gas blends.',
    breakdowns: [
      'Ambient Pressure: 5.0 atmospheres (5x surface pressure) acting on lung alveoli.',
      'Martini\'s Law: Every 15 meters below 30m induces mental impairment equivalent to one dry martini on an empty stomach.',
      'Gas Absorption: Tissues absorb nitrogen under pressure, demanding staged decompression stops during ascent.'
    ]
  },
  {
    id: 'polar-bear',
    depth: 72,
    depthStr: '72 METERS',
    zone: 'EPIPELAGIC',
    category: 'mammal',
    name: 'Beluga Whale',
    latin: 'Delphinapterus leucas',
    order: 'CETACEA • MONODONTIDAE',
    icon: 'fa-water',
    img: 'assets/specimen-beluga.jpg',
    lum: 'Acoustic Echolocation',
    isLum: false,
    fact: 'The "Canary of the Sea" possesses a flexible melon forehead that changes shape to focus high-frequency sonar clicks.',
    desc: 'Arctic odontocetes capable of diving to 72+ meters through dense sea ice pack, using sophisticated biosonar to detect leads in freezing waters.',
    breakdowns: [
      'Flexible Cervical Vertebrae: Unlike most whales, neck vertebrae are unfused, allowing 90-degree head rotation.',
      'Acoustic Lens: Acoustic lipids in the melon project echolocation beams to track Arctic cod under pack ice.',
      'Dorsal Ridge: Replaced dorsal fin with a tough dorsal ridge to break through 8cm thick surface ice.'
    ]
  },
  {
    id: 'green-sea-turtle',
    depth: 110,
    depthStr: '110 METERS',
    zone: 'EPIPELAGIC',
    category: 'reptile',
    name: 'Green Sea Turtle',
    latin: 'Chelonia mydas',
    order: 'TESTUDINES • CHELONIIDAE',
    icon: 'fa-shield',
    img: 'assets/specimen-turtle.jpg',
    lum: 'Non-Bioluminescent',
    isLum: false,
    fact: 'Can slow its heartbeat to one beat every nine minutes during deep foraging dives to conserve arterial oxygen.',
    desc: 'Ancient oceanic navigators that dive through the epipelagic photic zone to forage on benthic seagrass beds and jellyfish.',
    breakdowns: [
      'Bradycardia Modulation: Voluntarily depresses metabolic rate by 90% during resting deep dives.',
      'Nitrogen Tolerance: Reinforced cartilaginous airway prevents alveolar collapse at 11 atmospheres.',
      'Natal Homing: Migrates over 2,600 km to deposit eggs on the exact beach where it hatched 30 years prior.'
    ]
  },
  {
    id: 'giant-pacific-octopus',
    depth: 160,
    depthStr: '160 METERS',
    zone: 'EPIPELAGIC',
    category: 'cephalopod',
    name: 'Giant Pacific Octopus',
    latin: 'Enteroctopus dofleini',
    order: 'OCTOPODA • ENTEROCTOPODIDAE',
    icon: 'fa-sun',
    img: 'assets/specimen-octopus.jpg',
    lum: 'Chromatophore Camouflage',
    isLum: false,
    fact: 'Features three hearts, blue hemocyanin blood, and two-thirds of its 500 million neurons distributed throughout its eight arms.',
    desc: 'The largest octopus species on Earth, weighing up to 50 kg with an arm span exceeding 6 meters, hunting crabs and spiny dogfish sharks in sub-surface reefs.',
    breakdowns: [
      'Decentralized Nervous System: Each arm possesses autonomous sensory ganglia capable of smelling, tasting, and tactile problem-solving.',
      'Hemocyanin Circulation: Copper-based blood remains fluid and oxygen-absorptive in near-freezing North Pacific waters.',
      'Dynamic Skin Papillae: Muscles in the skin contract within 200 milliseconds to mirror the texture of surrounding kelp and granite.'
    ]
  },
  {
    id: 'oarfish',
    depth: 195,
    depthStr: '195 METERS',
    zone: 'EPIPELAGIC',
    category: 'fish',
    name: 'Giant Oarfish (King of Herrings)',
    latin: 'Regalecus glesne',
    order: 'LAMPRIFORMES • REGALECIDAE',
    icon: 'fa-dragon',
    img: 'assets/specimen-oarfish.jpg',
    lum: 'Silver Guanine Reflectance',
    isLum: false,
    fact: 'The longest bony fish in the world (up to 11 meters), inspiring ancient myths of colossal sea serpents.',
    desc: 'Glides vertically in the water column at the boundary of the sunlit zone, undulating its crimson dorsal crest while filtering krill through needle-like gill rakers.',
    breakdowns: [
      'Vertical Orientation: Hovers head-upward in the water column to silhouette prey against incoming downwelling light.',
      'Autotomy Mechanism: Can deliberately jettison the posterior portion of its body without damaging vital organs when bitten.',
      'Scaleless Guanine Skin: Covered in silver guanine crystals creating a mirror finish that renders it virtually invisible from lateral view.'
    ]
  },

  // --- MESOPELAGIC ZONE (200m - 1,000m) ---
  {
    id: 'twilight-boundary',
    depth: 200,
    depthStr: '200 METERS',
    zone: 'MESOPELAGIC',
    category: 'milestone',
    name: 'The Mesopelagic Photoperiod Threshold',
    latin: 'Boundary of the Photic Zone',
    order: 'OCEANOGRAPHIC THRESHOLD',
    icon: 'fa-cloud-moon',
    img: 'assets/specimen-threshold-twilight.jpg',
    lum: 'End of Photosynthesis',
    isLum: false,
    fact: 'Below 200 meters, insufficient photons remain for plant photosynthesis. 100% of ecosystem energy is imported from above.',
    desc: 'The critical planetary transition where sunlight dims to a spectral monochrome indigo. Here begins the greatest animal migration on Earth: the Diel Vertical Migration.',
    breakdowns: [
      'Downwelling Light: Less than 1% of surface solar radiation penetrates this boundary.',
      'Diel Vertical Migration: Billions of tonnes of mesopelagic fish rise to feed under cover of night and descend at dawn.',
      'Carbon Export: Sinking organic matter through this boundary locks billions of tons of carbon into deep oceanic reserves.'
    ]
  },
  {
    id: 'japanese-spider-crab',
    depth: 350,
    depthStr: '350 METERS',
    zone: 'MESOPELAGIC',
    category: 'crustacean',
    name: 'Japanese Spider Crab',
    latin: 'Macrocheira kaempferi',
    order: 'DECAPODA • INACHIDAE',
    icon: 'fa-spider',
    img: 'assets/specimen-spider-crab.jpg',
    lum: 'Non-Bioluminescent',
    isLum: false,
    fact: 'Possesses the greatest leg span of any living arthropod on Earth—up to 3.8 meters from claw tip to claw tip.',
    desc: 'An armored giant walking slowly across Pacific submarine vents and continental slopes off the coast of Honshu, scavenging detritus with elongated chelipeds.',
    breakdowns: [
      'Chitinous Exoskeleton: Reinforced with calcium carbonate to withstand 35 atmospheres of hydrostatic pressure.',
      'Slow Metabolism: Heart rate slows to under 15 beats per minute, allowing lifespans estimated over 100 years.',
      'Sponge Camouflage: Younger specimens attach sponges, algae, and bryozoans to their carapace to evade predator detection.'
    ]
  },
  {
    id: 'coelacanth',
    depth: 480,
    depthStr: '480 METERS',
    zone: 'MESOPELAGIC',
    category: 'fish',
    name: 'West Indian Ocean Coelacanth',
    latin: 'Latimeria chalumnae',
    order: 'COELACANTHIFORMES • LATIMERIIDAE',
    icon: 'fa-shield-halved',
    img: 'assets/specimen-coelacanth.jpg',
    lum: 'Tapetum Lucidum Reflectance',
    isLum: false,
    fact: 'Believed extinct since the late Cretaceous 66 million years ago until a living specimen was hauled up by a fisherman in 1938.',
    desc: 'A living evolutionary enigma featuring lobed fins with skeletal articulations analogous to the limbs of terrestrial tetrapods.',
    breakdowns: [
      'Intracranial Joint: Possesses a unique hinged skull joint allowing it to open its upper jaw independently.',
      'Rostral Organ: Large gel-filled cavity in snout used as an electro-receptive navigation compass in pitch darkness.',
      'Lobed Fins: Paired fins move synchronously like the legs of a trotting quadruped mammal.'
    ]
  },
  {
    id: 'emperor-penguin',
    depth: 565,
    depthStr: '565 METERS',
    zone: 'MESOPELAGIC',
    category: 'avian',
    name: 'Emperor Penguin (Max Dive)',
    latin: 'Aptenodytes forsteri',
    order: 'SPHENISCIFORMES • SPHENISCIDAE',
    icon: 'fa-feather',
    img: 'assets/specimen-penguin.jpg',
    lum: 'Non-Bioluminescent',
    isLum: false,
    fact: 'Holds the absolute diving record for any bird on Earth: 565 meters into pitch-black Antarctic waters for over 32 minutes.',
    desc: 'Engineered for extreme sub-zero ocean dives, their solid non-pneumatic bones resist hydrostatic crushing and their blood packs unprecedented myoglobin concentrations.',
    breakdowns: [
      'Solid Osteology: Unlike flying birds with hollow bones, their dense bones resist crushing hydrostatic implosion.',
      'Sub-Zero Hemoglobin: Hemoglobin mutations enable oxygen transport at freezing core body temperatures.',
      'Feather Insulation: Possesses 100 feathers per square inch, locking an insulating air layer that compresses under pressure.'
    ]
  },
  {
    id: 'vampire-squid',
    depth: 750,
    depthStr: '750 METERS',
    zone: 'MESOPELAGIC',
    category: 'cephalopod',
    name: 'Vampire Squid from Hell',
    latin: 'Vampyroteuthis infernalis',
    order: 'VAMPYROMORPHA • VAMPYROTEUTHIDAE',
    icon: 'fa-ghost',
    img: 'assets/specimen-vampire-squid.jpg',
    lum: 'Luciferin Mucus Bomb',
    isLum: true,
    fact: 'Does not drink blood or hunt live prey; it feeds on "marine snow" using two ultra-thin retractile sensory velar filaments.',
    desc: 'Neither true squid nor octopus, but the sole survivor of an ancient 300-million-year-old order. Capable of surviving inside the Oxygen Minimum Zone.',
    breakdowns: [
      'Pineapple Defense: Inverts its dark red webbed cape over its head, exposing menacing soft cirri spines.',
      'Luminescent Cloud: Lacking an ink sac, fires clouds of glowing bioluminescent sparks from arm tips to blind predators.',
      'Oxygen Affinity: Hemocyanin binds oxygen molecules with five times greater tenacity than surface squids.'
    ]
  },
  {
    id: 'nautilus',
    depth: 820,
    depthStr: '820 METERS',
    zone: 'MESOPELAGIC',
    category: 'cephalopod',
    name: 'Chambered Nautilus',
    latin: 'Nautilus pompilius',
    order: 'NAUTILIDA • NAUTILIDAE',
    icon: 'fa-circle-notch',
    img: 'assets/specimen-nautilus.jpg',
    lum: 'Non-Bioluminescent',
    isLum: false,
    fact: 'Controls buoyancy via an internal siphuncle duct that pumps nitrogen gas into sealed logarithmic spiral chambers.',
    desc: 'Unchanged for over 450 million years, pre-dating trees and dinosaurs. Survives depth limits up to 800m before its fragile aragonite shell implodes from hydrostatic pressure.',
    breakdowns: [
      'Aragonite Implosion Limit: Shell structurally collapses at ~830 meters under 84 atmospheres of pressure.',
      'Siphuncle Fluid Pump: Capillary vascular strand extracts salt to osmotically drain fluid from closed chambers.',
      'Pinhole Camera Eye: Lacks a lens; forms crude optical images through a tiny aperture open directly to seawater.'
    ]
  },
  {
    id: 'sperm-whale',
    depth: 980,
    depthStr: '980 METERS',
    zone: 'MESOPELAGIC',
    category: 'mammal',
    name: 'Sperm Whale (Deep Hunting)',
    latin: 'Physeter macrocephalus',
    order: 'CETACEA • PHYSETERIDAE',
    icon: 'fa-compass',
    img: 'assets/specimen-sperm-whale.jpg',
    lum: 'Biosonar Click Train',
    isLum: false,
    fact: 'Emits 236-decibel echolocation clicks—the loudest sound generated by any animal on Earth—capable of acoustically mapping giant squids 2 km away.',
    desc: 'The undisputed mammalian titan of the deep ocean. Dives into the abyss for up to 90 minutes to battle giant and colossal squids in complete darkness.',
    breakdowns: [
      'Spermaceti Organ: 2,000 liters of wax in head solidifies when cold to alter buoyancy during deep descents.',
      'Collapsible Ribcage: Flexible cartilage joints allow lungs to completely collapse without breaking under 100+ atm.',
      'Myoglobin Saturation: Muscles store 10 times more oxygen per gram than human tissue, turning meat almost pitch black.'
    ]
  },

  // --- BATHYPELAGIC ZONE (1,000m - 4,000m) ---
  {
    id: 'midnight-point',
    depth: 1000,
    depthStr: '1,000 METERS',
    zone: 'BATHYPELAGIC',
    category: 'milestone',
    name: 'The Midnight Boundary (Aphotic Zone)',
    latin: 'Solar Extinction Threshold',
    order: 'OCEANOGRAPHIC THRESHOLD',
    icon: 'fa-moon',
    img: 'assets/specimen-threshold-midnight.jpg',
    lum: '100% Bioluminescence Reliance',
    isLum: true,
    fact: 'Total, eternal darkness begins. Zero solar photons ever penetrate below this depth on planet Earth.',
    desc: 'The beginning of the bathypelagic realm. Over 76% of all deep-sea life living below this line generates its own living light through luciferin chemical reactions.',
    breakdowns: [
      'Zero Photic Penetration: Even with hypersensitive camera sensors, natural daylight is mathematically zero.',
      'Water Temperature: Drops rapidly to a stable, uniform 4°C to 1°C across all global oceans.',
      'Luciferin-Luciferase Chemistry: Substrates oxidize to release energy almost entirely as cold light without thermal waste.'
    ]
  },
  {
    id: 'giant-squid',
    depth: 1250,
    depthStr: '1,250 METERS',
    zone: 'BATHYPELAGIC',
    category: 'cephalopod',
    name: 'Giant Squid',
    latin: 'Architeuthis dux',
    order: 'OEGOPSIDA • ARCHITEUTHIDAE',
    icon: 'fa-ring',
    img: 'assets/specimen-giant-squid.jpg',
    lum: 'Non-Bioluminescent Body',
    isLum: false,
    fact: 'Possesses the largest eyes in the animal kingdom—up to 27 cm across (the size of a dinner plate)—designed to spot faint silhouettes of diving sperm whales.',
    desc: 'A colossal predatory cephalopod reaching 13 meters in length, armed with feeding tentacles lined with sharp serrated chitinous suckers.',
    breakdowns: [
      'Dinner-Plate Eyes: Huge pupils capture rare bioluminescent flashes triggered by approaching predators.',
      'Ammonium Chloride Buoyancy: Neutral buoyancy maintained by concentrated ammonium ions in body tissues rather than heavy swim bladders.',
      'Toothed Tentacle Rings: Sucker rims feature serrated denticle teeth that leave indelible scars on the jaws of sperm whales.'
    ]
  },
  {
    id: 'telescope-octopus',
    depth: 1450,
    depthStr: '1,450 METERS',
    zone: 'BATHYPELAGIC',
    category: 'cephalopod',
    name: 'Telescope Octopus',
    latin: 'Amphitretus pelagicus',
    order: 'OCTOPODA • AMPHITRETIDAE',
    icon: 'fa-binoculars',
    img: 'assets/specimen-telescope-octopus.jpg',
    lum: 'Translucent Glass Body',
    isLum: false,
    fact: 'Possesses tubular, rotating binocular eyes that look directly upward to detect the faintest outlines of organisms against the upper darkness.',
    desc: 'A ghost-like, transparent cephalopod floating vertically through the midnight column, so clear that internal organs and nervous fibers are completely visible.',
    breakdowns: [
      'Tubular Binocular Eyes: Gives true stereoscopic 3D depth perception in near-zero light conditions.',
      'Glass Camouflage: Tissue refractive index nearly identical to seawater, making it invisible to passing predators.',
      'Vertical Posture: Drifts vertically with arms trailing downward like tentacles of a siphonophore.'
    ]
  },
  {
    id: 'goblin-shark',
    depth: 1700,
    depthStr: '1,700 METERS',
    zone: 'BATHYPELAGIC',
    category: 'fish',
    name: 'Goblin Shark',
    latin: 'Mitsukurina owstoni',
    order: 'LAMNIFORMES • MITSUKURINIDAE',
    icon: 'fa-skull',
    img: 'assets/specimen-shark.jpg',
    lum: 'Non-Bioluminescent',
    isLum: false,
    fact: 'Features slingshot jaws that project forward at 3.1 meters per second to snap up prey in under 100 milliseconds.',
    desc: 'A 125-million-year-old "living fossil" with translucent pink skin through which oxygenated blood vessels are visible, topped by an elongated rostrum.',
    breakdowns: [
      'Slingshot Jaw Protrusion: Ligaments store elastic energy, shooting jaws outward to 8% of body length.',
      'Ampullae of Lorenzini: Underside of blade-like snout packed with electroreceptive pores that detect micro-volt neural signals.',
      'Low-Density Liver: Enormous fatty liver comprising up to 25% of body weight provides neutral buoyancy without bone density.'
    ]
  },
  {
    id: 'anglerfish-specimen',
    depth: 2100,
    depthStr: '2,100 METERS',
    zone: 'BATHYPELAGIC',
    category: 'fish',
    name: 'Humpback Blackdevil Angler',
    latin: 'Melanocetus johnsonii',
    order: 'LOPHIIFORMES • MELANOCETIDAE',
    icon: 'fa-lightbulb',
    img: 'assets/specimen-anglerfish.jpg',
    lum: 'Bacterial Esca Lantern',
    isLum: true,
    fact: 'Females grow up to 18 cm, while males are tiny dwarfs (2.9 cm) lacking feeding jaws, evolutionary parasites born only to find a mate.',
    desc: 'The iconic nightmare of the bathypelagic abyss. Armed with a glowing dorsal fishing rod that flashes cyan luciferin light to summon prey directly into its gaping maw.',
    breakdowns: [
      'Esca Symbiosis: Cultivates bioluminescent Aliivibrio fischeri bacteria inside a light-emitting photophore bulb.',
      'Needle Translucent Dentition: Inward-angled teeth lock shut like a steel trap; prey cannot back out.',
      'Distensible Abdomen: Stomach stretches like a rubber balloon to swallow fish up to twice its own size.'
    ]
  },
  {
    id: 'gulper-eel',
    depth: 2600,
    depthStr: '2,600 METERS',
    zone: 'BATHYPELAGIC',
    category: 'fish',
    name: 'Pelican Gulper Eel',
    latin: 'Eurypharynx pelecanoides',
    order: 'SACCOPHARYNGIFORMES • EURYPHARYNGIDAE',
    icon: 'fa-drumstick-bite',
    img: 'assets/specimen-gulper-eel.jpg',
    lum: 'Caudal Tail Organ',
    isLum: true,
    fact: 'Its mouth is loosely hinged and can expand to over 11 times its body volume, resembling a pelican pouch.',
    desc: 'Possesses a slender whip-like tail that terminates in a complex bioluminescent organ that glows pink and produces occasional red flashes.',
    breakdowns: [
      'Cavernous Pouch: Enormous jaws hinged loosely to skull allow it to engulf large schools of crustaceans whole.',
      'Caudal Photophore: The tip of its whip-like tail possesses an organ that glows with pink and bright red flashes.',
      'Skeletal Reduction: Bones are reduced to paper-thin cartilaginous struts to minimize metabolic growth costs.'
    ]
  },
  {
    id: 'fangtooth',
    depth: 3000,
    depthStr: '3,000 METERS',
    zone: 'BATHYPELAGIC',
    category: 'fish',
    name: 'Common Fangtooth (Ogre Fish)',
    latin: 'Anoplogaster cornuta',
    order: 'TRACHICHTHYIFORMES • ANOPLOGASTRIDAE',
    icon: 'fa-tooth',
    img: 'assets/specimen-fangtooth.jpg',
    lum: 'Non-Bioluminescent',
    isLum: false,
    fact: 'Has the largest teeth relative to body size of any marine species; its lower fangs are so long it has sockets inside its brain case to slide them into.',
    desc: 'An armored, soot-black predator capable of withstanding crushing pressures. Despite its ferocious appearance, it reaches a maximum length of only 16 cm.',
    breakdowns: [
      'Cranial Tooth Pockets: Two opposing cavities beside the brain prevent the lower jaw fangs from puncturing its skull when closed.',
      'Lateral Line Canals: Wide mucilage-filled sensory grooves detect infinitesimal pressure waves from swimming copepods.',
      'Hard Armored Scales: Covered in spiny, placoid-like scales that deflect the claws of predatory squids.'
    ]
  },
  {
    id: 'colossal-squid',
    depth: 3400,
    depthStr: '3,400 METERS',
    zone: 'BATHYPELAGIC',
    category: 'cephalopod',
    name: 'Colossal Squid',
    latin: 'Mesonychoteuthis hamiltoni',
    order: 'OEGOPSIDA • CRANCHIIDAE',
    icon: 'fa-anchor',
    img: 'assets/specimen-colossal-squid.jpg',
    lum: 'Photophores on Eyes',
    isLum: true,
    fact: 'Heavier than the giant squid (up to 500 kg), its tentacle clubs are armed with rotating, 3-pointed swiveling hooks instead of simple suction cups.',
    desc: 'The heavyweight sovereign of the Antarctic deep sea. Armed with swiveling talons on its tentacular clubs that slice through blubber and deep-sea fish.',
    breakdowns: [
      'Swiveling Talons: Clubs feature 25 sharp swiveling hooks that rotate 360 degrees to dig deep into thrashing prey.',
      'Massive Beak: Lower beak is larger than that of any other living cephalopod, capable of cleaving fish spines instantly.',
      'Metabolic Hibernation: Sits motionless in sub-zero circumpolar deep water, ambushing toothfish with explosive strikes.'
    ]
  },
  {
    id: 'titanic-wreck',
    depth: 3810,
    depthStr: '3,810 METERS',
    zone: 'BATHYPELAGIC',
    category: 'milestone',
    name: 'RMS Titanic Resting Ground',
    latin: 'Maritime Archaeological Monument',
    order: 'HUMAN HISTORICAL SITE',
    icon: 'fa-ship',
    img: 'assets/specimen-titanic.jpg',
    lum: 'Total Darkness / Rusticles',
    isLum: false,
    fact: 'Rests under 380 atmospheres of pressure. Being slowly digested by Halomonas titanicae, a bacterium that consumes 180 kg of iron daily.',
    desc: 'Discovered in 1985 by Dr. Robert Ballard at 3,810 meters depth in the North Atlantic. The bow and stern lie 600 meters apart in a vast debris field.',
    breakdowns: [
      'Hydrostatic Force: The water pressure on the hull is equivalent to 380 kg per square centimeter.',
      'Halomonas titanicae: Extremophilic iron-metabolizing bacteria creating fragile icicle-like structures called rusticles.',
      'Abyssal Preservation: Cold 1.2°C temperature and absence of wood-boring worms preserved leather shoes, boilers, and ceramics.'
    ]
  },

  // --- ABYSSOPELAGIC ZONE (4,000m - 6,000m) ---
  {
    id: 'abyssal-plain-start',
    depth: 4000,
    depthStr: '4,000 METERS',
    zone: 'ABYSSOPELAGIC',
    category: 'milestone',
    name: 'The Abyssal Plains Boundary',
    latin: 'Calcite Compensation Depth (CCD)',
    order: 'OCEANOGRAPHIC THRESHOLD',
    icon: 'fa-mountain',
    img: 'assets/specimen-threshold-abyssal.jpg',
    lum: 'Near-Zero Ambient Light',
    isLum: false,
    fact: 'The largest single habitat on Earth, covering over 60% of the planetary surface under 400 atmospheres of silent pressure.',
    desc: 'A vast expanse of soft pelagic sediment, manganese nodules, and bone-crushing silence. Here calcium carbonate dissolves faster than it can be deposited.',
    breakdowns: [
      'CCD Threshold: Below 4,000m, high CO2 and extreme pressure dissolve shells of dead plankton before reaching the seabed.',
      'Pelagic Clay: Sediment accumulates at the glacial rate of 1 millimeter every 1,000 years.',
      'Manganese Nodules: Millions of potato-sized polymetallic nodules rich in nickel, cobalt, and rare earth elements.'
    ]
  },
  {
    id: 'dumbo-octopus-specimen',
    depth: 4400,
    depthStr: '4,400 METERS',
    zone: 'ABYSSOPELAGIC',
    category: 'cephalopod',
    name: 'Abyssal Dumbo Octopus',
    latin: 'Grimpoteuthis bathypelagica',
    order: 'OCTOPODA • OPISTHOTEUTHIDAE',
    icon: 'fa-feather-pointed',
    img: 'assets/specimen-dumbo-octopus.jpg',
    lum: 'Non-Bioluminescent Glider',
    isLum: false,
    fact: 'The deepest-dwelling octopus known to humanity, observed gliding peacefully over abyssal plains at depths exceeding 5,000 meters.',
    desc: 'Flaps prominent ear-like fins located directly above its eyes, moving like a phantom with minimal expenditure of vital metabolic energy.',
    breakdowns: [
      'Ear-Like Fins: Propels its body using muscular mantle fins rather than metabolically expensive jet propulsion.',
      'Gelatinous Tissues: High water content prevents compressive cellular collapse under 450 atmospheres of pressure.',
      'Whole Ingestion: Swallows benthic isopods, amphipods, and polychaete bristle worms whole without radular mastication.'
    ]
  },
  {
    id: 'giant-isopod',
    depth: 4900,
    depthStr: '4,900 METERS',
    zone: 'ABYSSOPELAGIC',
    category: 'crustacean',
    name: 'Giant Abyssal Isopod',
    latin: 'Bathynomus giganteus',
    order: 'ISOPODA • CIROLANIDAE',
    icon: 'fa-shield-cat',
    img: 'assets/specimen-giant-isopod.jpg',
    lum: 'Reflective Compound Eyes',
    isLum: false,
    fact: 'A prime example of deep-sea gigantism: while terrestrial pillbugs measure 1 cm, this deep ocean cousin grows up to 50 cm and weighs 2 kg.',
    desc: 'A heavily armored benthic scavenger walking across abyssal mud on 14 clawed legs, capable of surviving for over five years without food in laboratory conditions.',
    breakdowns: [
      'Deep-Sea Gigantism: Higher cell volume and cold-induced slow growth yield colossal body sizes compared to shallow relatives.',
      'Compound Ommatidia: Possesses over 4,000 retinal facets with highly reflective tapetum lucidum layers.',
      'Fasting Longevity: One captive specimen in Toba Aquarium, Japan, survived 5 years and 43 days without consuming food.'
    ]
  },
  {
    id: 'faceless-cusk-eel',
    depth: 5400,
    depthStr: '5,400 METERS',
    zone: 'ABYSSOPELAGIC',
    category: 'fish',
    name: 'Faceless Cusk Eel',
    latin: 'Typhlonus nasus',
    order: 'OPHIDIIFORMES • OPHIDIIDAE',
    icon: 'fa-mask',
    img: 'assets/specimen-faceless-cusk-eel.jpg',
    lum: 'Non-Bioluminescent',
    isLum: false,
    fact: 'Lacks visible external eyes; its mouth is positioned on the underside of its head, creating a surreal, featureless blank face.',
    desc: 'First dredged in 1873 by HMS Challenger and rediscovered in 2017 off eastern Australia at 5,400 meters depth. Its vestigial eyes are buried beneath dense skin.',
    breakdowns: [
      'Subcutaneous Eyes: Degenerate vestigial eyes buried deep under thick skin tissue; light detection is entirely abandoned.',
      'Inferior Ventral Mouth: Protrusible vacuum-like mouth sweeps soft benthic mud for crustacean larvae.',
      'Gelatinous Cranium: Enormous bulbous head composed mostly of gelatinous fluid and sensory pores.'
    ]
  },
  {
    id: 'hydrothermal-smoker',
    depth: 5850,
    depthStr: '5,850 METERS',
    zone: 'ABYSSOPELAGIC',
    category: 'milestone',
    name: 'Beebe Hydrothermal Vent Field',
    latin: 'Deepest Hydrothermal "Black Smokers"',
    order: 'GEOLOGICAL EXTREMUM',
    icon: 'fa-volcano',
    img: 'assets/specimen-hydrothermal-vent.jpg',
    lum: 'Superheated Geothermal Radiance',
    isLum: true,
    fact: 'Vents mineral-laden black fluid at 450°C (842°F). The water does not boil due to 585 atmospheres of hydrostatic pressure.',
    desc: 'Located in the Cayman Trough, these hydrothermal chimneys support chemosynthetic ecosystems completely independent of the sun, fueled by hydrogen sulfide.',
    breakdowns: [
      'Supercritical Fluid: Pressure prevents boiling, producing superheated fluid saturated with copper and iron sulfides.',
      'Chemosynthesis: Chemotrophic bacteria oxidize hydrogen sulfide to synthesize sugars, forming base of food chain.',
      'Riftia Tubeworms: Host billions of endosymbiotic bacteria inside a specialized organ called a trophosome.'
    ]
  },

  // --- HADOPELAGIC ZONE (6,000m - 10,928m) ---
  {
    id: 'hadal-trench-entry',
    depth: 6000,
    depthStr: '6,000 METERS',
    zone: 'HADOPELAGIC',
    category: 'milestone',
    name: 'The Hadal Trench Inception',
    latin: 'Realm of Hades (Deepest Oceanic Chasms)',
    order: 'OCEANOGRAPHIC THRESHOLD',
    icon: 'fa-dungeon',
    img: 'assets/specimen-hadal-trench.jpg',
    lum: 'Total Blackness / Piezophilic Realm',
    isLum: false,
    fact: 'Comprises only 45% of the oceans\' total depth range, but accounts for less than 0.25% of the total ocean floor area, isolated in 46 V-shaped trenches.',
    desc: 'Where tectonic oceanic plates subduct and plunge into the Earth\'s mantle. Temperatures hover at 1.5°C with pressures capable of crushing steel hulls.',
    breakdowns: [
      'Tectonic Subduction: Cold Pacific plate plunges into the mantle at ~8 cm per year, forming deep V-shaped chasms.',
      'Barophilic Isolation: Organisms living inside individual trenches are geographically isolated islands of unique endemism.',
      'Piezo-adaptation: Every enzyme, lipid bilayer, and cell membrane is biochemically optimized to prevent pressure-induced collapse.'
    ]
  },
  {
    id: 'mariana-snailfish',
    depth: 8178,
    depthStr: '8,178 METERS',
    zone: 'HADOPELAGIC',
    category: 'fish',
    name: 'Mariana Snailfish',
    latin: 'Pseudoliparis swirei',
    order: 'SCORPAENIFORMES • LIPARIDAE',
    icon: 'fa-gem',
    img: 'assets/specimen-snailfish.jpg',
    lum: 'Translucent Scaleless Skin',
    isLum: false,
    fact: 'The deepest-dwelling living vertebrate fish recorded on planet Earth (filmed actively swimming at 8,178 meters in the Mariana Trench).',
    desc: 'A translucent, pinkish, scaleless fish that reigns as the apex predator of the hadal trench floor, feeding on swarms of amphipods under 800+ bar.',
    breakdowns: [
      'TMAO Osmolyte Shield: Enormous cellular concentrations of trimethylamine N-oxide prevent proteins from unfolding under extreme pressure.',
      'Bone Cartilage Hybrid: Lacks rigid calcified bones; skeleton is composed of flexible, cartilage-like unossified matrices.',
      'Theoretical Fish Limit: Scientists calculate that fish cannot physiologically survive beyond ~8,200m because osmolyte saturation would reverse osmotic pressure.'
    ]
  },
  {
    id: 'mount-everest-inverted',
    depth: 8848,
    depthStr: '8,848 METERS',
    zone: 'HADOPELAGIC',
    category: 'milestone',
    name: 'Mount Everest Inverted Altitude',
    latin: '8,848 Meters Under Seawater',
    order: 'PLANETARY SCALE MILESTONE',
    icon: 'fa-arrow-down-up-across-line',
    img: 'assets/specimen-everest.jpg',
    lum: 'Complete Absence of Photons',
    isLum: false,
    fact: 'If Mount Everest were detached from the Himalayas and dropped into the Mariana Trench, its snow-capped summit would still be submerged under more than 2,000 meters of water.',
    desc: 'A staggering physical perspective illustrating the colossal depth of Earth\'s hadal trenches compared to our highest terrestrial peaks.',
    breakdowns: [
      'Comparative Scale: 8,848m high vs 10,928m deep—the trench is over 2 kilometers deeper than Everest is tall.',
      'Atmospheric Inversion: At Everest\'s peak, atmospheric pressure is 0.33 atm (hypoxia); at this trench depth, pressure is 885 atm.',
      'Sound Propagation: A sonar pulse sent from the surface takes over 5.8 seconds just to bounce back from this depth.'
    ]
  },
  {
    id: 'hadal-amphipod',
    depth: 10600,
    depthStr: '10,600 METERS',
    zone: 'HADOPELAGIC',
    category: 'crustacean',
    name: 'Hadal Supergiant Amphipod',
    latin: 'Hirondellea gigas',
    order: 'AMPHIPODA • UROSTYLIDAE',
    icon: 'fa-bug',
    img: 'assets/specimen-hadal-amphipod.jpg',
    lum: 'Non-Bioluminescent Piezophile',
    isLum: false,
    fact: 'Uses an aluminum armor gel in its carapace derived from clay minerals to protect its body against crushing barometric collapse and acidic dissolution.',
    desc: 'Thrives in vast swarms at the very floor of the hadal trench, stripping the carcasses of dead animals that sink from the surface world within hours.',
    breakdowns: [
      'Aluminum Biomineralization: Synthesizes aluminum hydroxide in its gut to coat its exoskeleton with flexible, non-brittle armor.',
      'Cellulase Enzymes: Possesses enzymes capable of digesting plant wood and cellulose that drifts down into tectonic trenches.',
      'Obligate Piezophile: Tissues and cell membranes disintegrate if brought up to surface pressures.'
    ]
  },
  {
    id: 'challenger-deep',
    depth: 10928,
    depthStr: '10,928 METERS',
    zone: 'HADOPELAGIC',
    category: 'milestone',
    name: 'Challenger Deep — The Terminal Chasm',
    latin: 'Lowest Point on Planet Earth',
    order: 'THE ABYSSAL POLE',
    icon: 'fa-trophy',
    img: 'assets/specimen-submersible.jpg',
    lum: 'Human Submersible High-Beams',
    isLum: false,
    fact: 'Hydrostatic pressure exceeds 1,093 atmospheres (15,850 psi). Steel spheres compress by measurable millimeters.',
    desc: 'The southern terminus of the Mariana Trench. Reached by Jacques Piccard & Don Walsh in bathyscaphe Trieste (1960), James Cameron in Deepsea Challenger (2012), and Victor Vescovo in Limiting Factor (2019).',
    breakdowns: [
      'Peak Hydrostatic Pressure: 1,093 bar (equivalent to the weight of 50 jumbo jets stacked on an individual).',
      'Xenophyophore Colonies: Giant multinucleate single-celled protozoans up to 10 cm across thrive directly on bottom sediment.',
      'Anthropocene Footprint: Even at 10,928 meters depth, plastic microfibers and synthetic pollutants have been confirmed in sediment core samples.'
    ]
  }
];

/* ===================================================================
   2. DYNAMIC TIMELINE GENERATOR (WITH LOCAL IMAGES ON EVERY CARD)
   =================================================================== */
function renderDeepSeaLifeTimeline(filteredCategory = 'all') {
  const container = document.getElementById('deep-sea-timeline-container');
  if (!container) return;

  const dataset = filteredCategory === 'all' 
    ? deepSeaDatabase 
    : deepSeaDatabase.filter(item => {
        if (filteredCategory === 'bioluminescent') return item.isLum;
        return item.category === filteredCategory;
      });

  container.innerHTML = '';

  dataset.forEach((item, index) => {
    const isReversed = index % 2 === 1;
    const cardEl = document.createElement('div');
    cardEl.className = `life-timeline-item ${isReversed ? 'reversed' : ''}`;
    cardEl.setAttribute('data-zone', item.zone);
    cardEl.setAttribute('data-depth', item.depth);
    cardEl.id = `specimen-${item.id}`;

    cardEl.innerHTML = `
      <div class="timeline-depth-marker">
        <div class="depth-ping-node"></div>
        <span class="depth-marker-num">${item.depth.toLocaleString()}m</span>
      </div>

      <div class="life-specimen-card glass-panel">
        <!-- Visual Specimen Photography Plate -->
        <div class="life-card-image-box">
          <img
            src="${item.img}"
            alt="${item.name}"
            class="life-card-img"
            loading="lazy"
          />
          <div class="image-depth-overlay">
            <i class="fa-solid fa-water"></i> ${item.depth.toLocaleString()}m
          </div>
        </div>

        <div class="life-card-top">
          <div class="life-badge-row">
            <span class="life-depth-pill">${item.depthStr}</span>
            <span class="life-zone-pill zone-${item.zone.toLowerCase()}">${item.zone}</span>
            ${item.isLum 
              ? '<span class="life-lum-pill"><i class="fa-solid fa-lightbulb"></i> BIOLUMINESCENT</span>' 
              : '<span class="life-no-lum-pill"><i class="fa-regular fa-eye-slash"></i> ' + item.lum + '</span>'}
          </div>
          <div class="life-icon-wrap">
            <i class="fa-solid ${item.icon}"></i>
          </div>
        </div>

        <div class="life-names-wrap">
          <h3 class="life-common-name">${item.name}</h3>
          <h4 class="life-latin-name">${item.latin}</h4>
          <span class="life-order-meta">${item.order}</span>
        </div>

        <div class="life-fact-banner">
          <i class="fa-solid fa-quote-left quote-ico"></i>
          <p>${item.fact}</p>
        </div>

        <p class="life-brief-desc">${item.desc}</p>

        <div class="life-card-bottom">
          <button class="life-inspect-btn" onclick="openSpecimenModal('${item.id}')">
            <i class="fa-solid fa-microscope"></i>
            <span>Examine Adaptation Profile</span>
          </button>
          <span class="life-specimen-code">CATALOG: ABY-${String(index + 1).padStart(2, '0')}</span>
        </div>
      </div>
    `;

    container.appendChild(cardEl);
  });
}

/* ===================================================================
   3. CATEGORY & BIOLOGY FILTER BAR
   =================================================================== */
function initLifeFilters() {
  const buttons = document.querySelectorAll('.life-filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-category');
      renderDeepSeaLifeTimeline(category);
    });
  });
}

/* ===================================================================
   4. QUICK JUMP DEPTH SELECTOR
   =================================================================== */
function initQuickJump() {
  const jumpChips = document.querySelectorAll('.zone-chip, .jump-depth-chip');
  jumpChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = chip.getAttribute('href').replace('#', '');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const offset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetEl.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ===================================================================
   5. SPECIMEN ANATOMICAL MODAL CONTROLLER
   =================================================================== */
window.openSpecimenModal = function (specimenKey) {
  const item = deepSeaDatabase.find(x => x.id === specimenKey);
  if (!item) return;

  const modal = document.getElementById('specimen-modal');
  const imgEl = document.getElementById('modal-specimen-img');
  const nameEl = document.getElementById('modal-specimen-name');
  const latinEl = document.getElementById('modal-specimen-latin');
  const orderEl = document.getElementById('modal-specimen-order');
  const depthEl = document.getElementById('modal-specimen-depth');
  const lumEl = document.getElementById('modal-specimen-lum');
  const descEl = document.getElementById('modal-specimen-desc');
  const listEl = document.getElementById('modal-specimen-list');
  const idEl = document.getElementById('modal-specimen-spec');

  if (imgEl) {
    imgEl.src = item.img;
    imgEl.alt = item.name;
  }
  if (nameEl) nameEl.textContent = item.name;
  if (latinEl) latinEl.textContent = item.latin;
  if (orderEl) orderEl.textContent = item.order;
  if (depthEl) depthEl.textContent = `DEPTH: ${item.depth.toLocaleString()}m (${item.zone})`;
  if (lumEl) lumEl.textContent = item.isLum ? 'BIOLUMINESCENT' : item.lum;
  if (descEl) descEl.textContent = item.desc;
  if (idEl) idEl.textContent = `SPECIMEN ID: ${item.id.toUpperCase()}`;

  if (listEl) {
    listEl.innerHTML = '';
    item.breakdowns.forEach(point => {
      const li = document.createElement('li');
      li.textContent = point;
      listEl.appendChild(li);
    });
  }

  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
};

window.closeSpecimenModal = function () {
  const modal = document.getElementById('specimen-modal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSpecimenModal();
});

document.addEventListener('click', (e) => {
  const modal = document.getElementById('specimen-modal');
  if (e.target === modal) closeSpecimenModal();
});

/* ===================================================================
   6. MARINE SNOW PARTICLES CANVAS
   =================================================================== */
function initMarineSnow() {
  const canvas = document.getElementById('marine-snow-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.min(100, Math.floor(width / 14));
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.6,
      speedY: Math.random() * 0.45 + 0.15,
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.5 + 0.2,
      isBioluminescent: Math.random() > 0.8,
      pulse: Math.random() * Math.PI,
    });
  }

  const mouse = { x: -1000, y: -1000, active: false };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  function renderParticles() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y += p.speedY;
      p.x += Math.sin(p.y * 0.008) * 0.3 + p.speedX;

      if (p.y > height + 10) {
        p.y = -10;
        p.x = Math.random() * width;
      }
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      if (mouse.active) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 2.2;
          p.y += (dy / dist) * force * 2.2;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

      if (p.isBioluminescent) {
        p.pulse += 0.03;
        const glowOpacity = Math.sin(p.pulse) * 0.3 + 0.5;
        ctx.fillStyle = `rgba(0, 240, 255, ${glowOpacity})`;
        ctx.shadowColor = 'rgba(0, 240, 255, 0.8)';
        ctx.shadowBlur = 8;
      } else {
        ctx.fillStyle = `rgba(230, 240, 255, ${p.opacity * 0.45})`;
        ctx.shadowBlur = 0;
      }

      ctx.fill();
    }

    requestAnimationFrame(renderParticles);
  }

  renderParticles();
}

/* ===================================================================
   7. SUBMERSIBLE FLOODLIGHT TOGGLE
   =================================================================== */
function initFloodlightControl() {
  const btn = document.getElementById('floodlight-toggle-btn');
  const indicator = document.getElementById('floodlight-indicator');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const isFloodlightOn = document.body.classList.toggle('floodlight-on');
    btn.classList.toggle('active', isFloodlightOn);

    if (indicator) {
      indicator.textContent = isFloodlightOn ? 'ACTIVE' : 'OFF';
    }
  });
}

/* ===================================================================
   8. HYDROPHONE AUDIO DRONE SYNTHESIZER (WEB AUDIO API)
   =================================================================== */
let audioCtx = null;
let isAudioPlaying = false;
let masterGain = null;
let droneOsc = null;
let noiseNode = null;
let pingInterval = null;

function initHydrophoneAudio() {
  const btn = document.getElementById('hydrophone-toggle-btn');
  const indicator = document.getElementById('hydrophone-indicator');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) {
        alert('Web Audio API is not supported on this browser.');
        return;
      }
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      await audioCtx.resume();
    }

    if (!isAudioPlaying) {
      startHydrophoneDrone();
      isAudioPlaying = true;
      btn.classList.add('active');
      if (indicator) indicator.textContent = 'LIVE';
    } else {
      stopHydrophoneDrone();
      isAudioPlaying = false;
      btn.classList.remove('active');
      if (indicator) indicator.textContent = 'MUTE';
    }
  });
}

function startHydrophoneDrone() {
  if (!audioCtx) return;

  masterGain = audioCtx.createGain();
  masterGain.gain.setValueAtTime(0.01, audioCtx.currentTime);
  masterGain.gain.exponentialRampToValueAtTime(0.25, audioCtx.currentTime + 2);
  masterGain.connect(audioCtx.destination);

  droneOsc = audioCtx.createOscillator();
  droneOsc.type = 'sine';
  droneOsc.frequency.setValueAtTime(42, audioCtx.currentTime);

  const droneGain = audioCtx.createGain();
  droneGain.gain.value = 0.4;
  droneOsc.connect(droneGain);
  droneGain.connect(masterGain);
  droneOsc.start();

  const bufferSize = audioCtx.sampleRate * 2;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }

  noiseNode = audioCtx.createBufferSource();
  noiseNode.buffer = noiseBuffer;
  noiseNode.loop = true;

  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(140, audioCtx.currentTime);
  filter.Q.setValueAtTime(3, audioCtx.currentTime);

  const noiseGain = audioCtx.createGain();
  noiseGain.gain.value = 0.22;

  noiseNode.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(masterGain);
  noiseNode.start();

  pingInterval = setInterval(() => {
    playSonarPing();
  }, 9000);
}

function playSonarPing() {
  if (!audioCtx || !isAudioPlaying) return;

  const pingOsc = audioCtx.createOscillator();
  const pingGain = audioCtx.createGain();

  pingOsc.type = 'sine';
  pingOsc.frequency.setValueAtTime(1280, audioCtx.currentTime);

  pingGain.gain.setValueAtTime(0.06, audioCtx.currentTime);
  pingGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 2.2);

  pingOsc.connect(pingGain);
  pingGain.connect(masterGain);

  pingOsc.start();
  pingOsc.stop(audioCtx.currentTime + 2.3);
}

function stopHydrophoneDrone() {
  if (masterGain && audioCtx) {
    masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
    setTimeout(() => {
      try {
        if (droneOsc) droneOsc.stop();
        if (noiseNode) noiseNode.stop();
        if (pingInterval) clearInterval(pingInterval);
      } catch (err) {}
    }, 900);
  }
}
