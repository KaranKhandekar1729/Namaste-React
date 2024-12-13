import kepler22b from '../../assets/images/kepler22b.jpg';
import lunarColony from '../../assets/images/lunar-colony.jpg';
import iss from '../../assets/images/iss.jpg';
import alphaCentauriBb from '../../assets/images/AlphaCentauriBb.jpg';
import starship from '../../assets/images/starship.jpg';
import kepler186f1 from '../../assets/images/Kepler186f_1.jpeg';
import kepler186f2 from '../../assets/images/Kepler186f_2.jpg';
import resoluteBase1 from '../../assets/images/ResoluteBase_1.jpg';
import resoluteBase2 from '../../assets/images/ResoluteBase_2.jpg';
import resoluteBase3 from '../../assets/images/ResoluteBase_3.jpg';
import mars from '../../assets/images/mars.jpg';
import europaBase1 from '../../assets/images/EuropaBase_1.jpg';
import europaBase2 from '../../assets/images/EuropaBase_2.jpg';
import titanBase1 from '../../assets/images/TitanBase_1.jpg';
import titanBase2 from '../../assets/images/TitanBase_2.jpg';
import callisto from '../../assets/images/Callisto.jpg';
import proximaCentauriB1 from '../../assets/images/ProximaCentauriB_1.jpg';
import proximaCentauriB2 from '../../assets/images/ProximaCentauriB_2.jpg';
import ganymedeBase from '../../assets/images/GanymedeBase.jpeg';
import vegaPrime from '../../assets/images/VegaPrime.jpeg';
import kepler452b1 from '../../assets/images/Kepler452b_1.jpg';
import kepler452b2 from '../../assets/images/Kepler452b_2.jpg';
import barnardsStarBase from '../../assets/images/barnardsStarBase.jpeg';
import ceres from '../../assets/images/CeresBase.jpg';
import wormhole from '../../assets/images/WormHoleStation.jpg';
import enceladus from '../../assets/images/Enceladus.jpg';
import trappist1e1 from '../../assets/images/Trappist1e_1.png';
import trappist1e2 from '../../assets/images/Trappist1e_2.png';
import trappist1e3 from '../../assets/images/Trappist1e_3.jpg';
import hyperionNexus from '../../assets/images/HyperionNexus.jpg';
import spacestation2054 from '../../assets/images/2054SpaceStation.jpg';
import oumuamua1 from '../../assets/images/Oumuamua_1.jpg';
import oumuamua2 from '../../assets/images/Oumuamua_3.jpg';
import oumuamua3 from '../../assets/images/Oumuamua_3.jpg';
import nebulaStation from '../../assets/images/NebulaStation.jpg';
import ringWorld1 from '../../assets/images/RingWorld_1.jpg';
import ringWorld2 from '../../assets/images/RingWorld_2.jpg';

const desData = [
    {
        "id": 1,
        "name": "Kepler-22b",
        "type": "Exoplanet",
        "distance": "600 light-years",
        "travel_time": "45 years",
        "promoted": true,
        "overview": "Kepler-22b, often hailed as Earth's distant cousin, is a captivating exoplanet that offers an unparalleled blend of familiarity and alien wonder. This super-Earth, larger than our home planet but smaller than ice giants like Neptune, orbits comfortably within its star's habitable zone. Its surface, a tapestry of vast oceans and scattered landmasses, presents a tantalizing possibility of extraterrestrial life. The planet's atmosphere, rich in greenhouse gases, maintains a climate that could support liquid water and potentially even Earth-like vegetation. Visitors to Kepler-22b will find themselves in a world of longer days and years, with each orbit around its sun lasting 290 Earth days. The planet's increased mass results in a gravity about 1.6 times that of Earth, offering a unique physical experience for travelers. Despite its similarities to Earth, Kepler-22b's alien nature is evident in its spectacular double sunsets, caused by its binary star system, and the bioluminescent life forms that light up its nights.",
        "features": [
            "Earth-like gravity",
            "Stunning blue oceans",
            "Habitable zones",
            "Bioluminescent ecosystems",
            "Binary star system views",
            "Potential for extraterrestrial life"
        ],
        "activities": [
            "Exo-marine biology expeditions",
            "Gravity-adjusted hiking tours",
            "Bioluminescent night diving",
            "Binary sunset meditation retreats",
            "Xenobotany workshops"
        ],
        "images": [
            kepler22b
        ],
        "price": "1000000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Kepler Explorer Package",
                "duration": "5 Earth years",
                "price": "1500000",
                "includes": [
                    "Round-trip cryosleep transit",
                    "3-year stay in climate-controlled habitat",
                    "All-inclusive meals and accommodations",
                    "Guided tours of major landmarks",
                    "Participation in ongoing research projects"
                ]
            },
            {
                "name": "Kepler Colonist Program",
                "duration": "One-way trip",
                "price": "2500000",
                "includes": [
                    "One-way cryosleep transit",
                    "Permanent residence in colony biodome",
                    "Training in essential colony operations",
                    "Lifetime access to all colony facilities",
                    "Voting rights in colony governance"
                ]
            }
        ],
        "spacecraft": {
            "name": "SS Kepler Voyager",
            "type": "Long-range colony ship",
            "capacity": 500,
            "features": [
                "Advanced cryosleep chambers",
                "Artificial gravity modules",
                "Hydroponic gardens for fresh food",
                "Quantum communication array",
                "Emergency return vehicles"
            ]
        },
        "addons": [
            {
                "name": "Kepler-22b Survival Suit",
                "price": "50000",
                "features": [
                    "Adaptive climate control",
                    "Built-in air purification system",
                    "Radiation shielding",
                    "Emergency beacon",
                    "Holographic HUD with real-time environmental data"
                ]
            }
        ],
        "reviews": [
            {
                "user": "CosmicExplorer42",
                "rating": 5,
                "comment": "The bioluminescent diving experience was out of this world! Literally!"
            },
            {
                "user": "GalacticPioneer",
                "rating": 4,
                "comment": "Breathtaking planet, but the gravity takes some getting used to. Pack light!"
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 6, "name": "Kepler-186f" },
            { "id": 15, "name": "Kepler-452b" }
        ]
    },
    {
        "id": 2,
        "name": "Lunar Colony",
        "type": "Moon Base",
        "distance": "384,400 km",
        "travel_time": "3 days",
        "overview": "The Lunar Colony represents humanity's first permanent foothold beyond Earth, a testament to our species' ingenuity and determination. This state-of-the-art facility, nestled in the moon's Shackleton Crater near the South Pole, offers visitors an unparalleled blend of luxury and scientific wonder. The colony's location provides near-constant sunlight for solar power, while the crater's permanently shadowed areas contain valuable water ice deposits. The main habitat, a sprawling complex of interconnected domes, houses residential areas, research facilities, and tourist accommodations. Visitors can experience lunar living in comfort, with Earth-view suites, low-gravity recreation areas, and gourmet dining that incorporates hydroponically grown lunar produce. Beyond the creature comforts, the Lunar Colony serves as a hub for scientific research, space mining operations, and as a potential launching point for deeper space missions. Whether you're seeking a unique vacation experience, engaging in cutting-edge research, or preparing for interplanetary travel, the Lunar Colony offers an experience that is truly out of this world.",
        "features": [
            "Lunar domes",
            "Zero-gravity dining",
            "Breathtaking Earth views",
            "Lunar rover expeditions",
            "Helium-3 mining tours",
            "Astronomy observatories"
        ],
        "activities": [
            "Lunar golf",
            "Low-gravity dance parties",
            "Simulated moonwalks",
            "Crater exploration",
            "Earth-gazing meditation sessions"
        ],
        "images": [
            lunarColony
        ],
        "price": "500000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Lunar Luxury Getaway",
                "duration": "7 Earth days",
                "price": "750000",
                "includes": [
                    "Round-trip shuttle transport",
                    "Luxury Earth-view suite",
                    "All-inclusive dining",
                    "Guided lunar excursions",
                    "Low-gravity spa treatments"
                ]
            },
            {
                "name": "Lunar Research Expedition",
                "duration": "30 Earth days",
                "price": "1200000",
                "includes": [
                    "Round-trip shuttle transport",
                    "Extended stay in researcher quarters",
                    "Access to colony laboratories",
                    "Participation in ongoing lunar studies",
                    "Co-authorship opportunity on research papers"
                ]
            }
        ],
        "spacecraft": {
            "name": "Artemis Lunar Shuttle",
            "type": "Reusable lunar lander",
            "capacity": 20,
            "features": [
                "Rapid Earth-Moon transit capability",
                "Panoramic viewing windows",
                "Emergency life support for 7 days",
                "Automated landing and docking systems"
            ]
        },
        "addons": [
            {
                "name": "Personal Lunar Excursion Suit",
                "price": "25000",
                "features": [
                    "Custom-fitted design",
                    "Built-in waste management system",
                    "HD camera for recording moonwalks",
                    "Touchscreen arm computer",
                    "Souvenir lunar boot prints kit"
                ]
            }
        ],
        "reviews": [
            {
                "user": "MoonWalker2099",
                "rating": 5,
                "comment": "The Earth-rise view from my suite was absolutely breathtaking. Worth every credit!"
            },
            {
                "user": "LunarScientist",
                "rating": 4,
                "comment": "Excellent research facilities, though the tourist areas can get a bit crowded."
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 3, "name": "International Space Station" },
            { "id": 8, "name": "Mars Habitat" }
        ]
    },
    {
        "id": 3,
        "name": "International Space Station",
        "type": "Space Station",
        "distance": "408 km",
        "travel_time": "6 hours",
        "overview": "The International Space Station (ISS) stands as a beacon of international cooperation and scientific advancement in Low Earth Orbit. This modular space station, continuously occupied since November 2000, serves as a microgravity and space environment research laboratory. Orbiting at an altitude of about 400 kilometers, the ISS completes 15.5 orbits per day, offering its inhabitants and visitors spectacular views of Earth and celestial bodies. The station's unique environment allows for groundbreaking experiments in fields ranging from astrobiology and astronomy to materials science and space medicine. Visitors to the ISS will experience the thrill of zero gravity, witness stunning auroras from above, and gain a profound new perspective on our home planet. As a hub for both scientific research and space tourism, the ISS provides an unparalleled opportunity to live and work in space, making it an essential destination for anyone seeking to understand humanity's future beyond Earth.",
        "features": [
            "Microgravity experience",
            "Stunning Earth views",
            "Advanced scientific labs",
            "Cupola observation module",
            "International crew interaction",
            "Space walk simulations"
        ],
        "activities": [
            "Zero-gravity experiments",
            "Earth observation sessions",
            "Space photography workshops",
            "Live space-to-Earth video calls",
            "International cuisine tasting"
        ],
        "images": [
            iss
        ],
        "price": "250000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "ISS Explorer",
                "duration": "10 Earth days",
                "price": "350000",
                "includes": [
                    "Round-trip space shuttle transport",
                    "Accommodation in ISS crew quarters",
                    "Participation in microgravity experiments",
                    "Guided tour of all ISS modules",
                    "Certificate of space travel"
                ]
            },
            {
                "name": "Orbital Researcher",
                "duration": "30 Earth days",
                "price": "750000",
                "includes": [
                    "Extended stay on the ISS",
                    "Access to research facilities",
                    "Collaboration with international scientists",
                    "Opportunity to conduct personal experiments",
                    "Data rights for research conducted"
                ]
            }
        ],
        "spacecraft": {
            "name": "Crew Dragon",
            "type": "Reusable spacecraft",
            "capacity": 7,
            "features": [
                "Autonomous docking capability",
                "Touchscreen control interfaces",
                "Emergency abort system",
                "Reusable design for cost-effective launches"
            ]
        },
        "addons": [
            {
                "name": "Personal Space Activity Kit",
                "price": "15000",
                "features": [
                    "Custom-designed space suit",
                    "Personal experiments package",
                    "HD camera for documenting the journey",
                    "Space-grade tablet for data collection",
                    "Commemorative mission patch"
                ]
            }
        ],
        "reviews": [
            {
                "user": "ZeroGravityFan",
                "rating": 5,
                "comment": "Floating in microgravity while watching Earth below is an indescribable experience!"
            },
            {
                "user": "SpaceResearcher101",
                "rating": 4,
                "comment": "Incredible research opportunities, though living quarters are a bit cramped."
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 2, "name": "Lunar Colony" },
            { "id": 5, "name": "Starship Genesis" }
        ]
    },
    {
        "id": 4,
        "name": "Alpha Centauri Bb",
        "type": "Exoplanet",
        "distance": "4.37 light-years",
        "travel_time": "20 years",
        "overview": "Alpha Centauri Bb, the closest known exoplanet to our solar system, offers an unparalleled opportunity for interstellar exploration. This rocky world, slightly larger than Earth, orbits Alpha Centauri B, the smaller and cooler of the two bright stars in the Alpha Centauri system. Its proximity to its parent star results in scorching surface temperatures, creating a unique and challenging environment for visitors. The planet's landscape is dominated by vast lava fields, towering silicon formations, and seas of molten metal, all bathed in the constant red glow of its nearby sun. Despite its harsh conditions, Alpha Centauri Bb serves as a crucial scientific outpost and a testament to human ingenuity in extreme environments. Visitors can observe fascinating geological processes in real-time, study the effects of intense stellar radiation, and witness the birth of new technologies designed for survival in extreme conditions. As our nearest exoplanetary neighbor, Alpha Centauri Bb provides an essential stepping stone for humanity's journey to the stars.",
        "features": [
            "Unique red-star sunsets",
            "Rocky terrain",
            "Uncharted landscapes",
            "Extreme temperature environments",
            "Silicon crystal forests",
            "Molten metal seas"
        ],
        "activities": [
            "Extreme environment expeditions",
            "Silicon crystal harvesting",
            "Stellar flare observation",
            "Exogeology research participation",
            "Heat-resistant technology testing"
        ],
        "images": [
            alphaCentauriBb
        ],
        "price": "800000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Centauri Explorer",
                "duration": "5 Earth years",
                "price": "1500000",
                "includes": [
                    "Round-trip interstellar travel",
                    "3-year stay in shielded habitat",
                    "Guided tours of major geological features",
                    "Participation in ongoing research projects",
                    "Exclusive access to crystal harvesting expeditions"
                ]
            },
            {
                "name": "Centauri Scientist",
                "duration": "10 Earth years",
                "price": "3000000",
                "includes": [
                    "Extended research stay",
                    "Access to all scientific facilities",
                    "Collaboration with interstellar research team",
                    "Priority scheduling for experiments",
                    "Co-authorship rights on all research papers"
                ]
            }
        ],
        "spacecraft": {
            "name": "Centauri Pathfinder",
            "type": "Long-range interstellar vessel",
            "capacity": 100,
            "features": [
                "Advanced radiation shielding",
                "Artificial hibernation chambers",
                "Self-sustaining ecosystem",
                "Interstellar communication array",
                "Emergency return capability"
            ]
        },
        "addons": [
            {
                "name": "Centauri Extreme Environment Suit",
                "price": "100000",
                "features": [
                    "Advanced heat resistance (up to 1500°C)",
                    "Radiation deflection technology",
                    "Built-in geological analysis tools",
                    "Emergency beacon and locator",
                    "Holographic HUD with real-time environmental data"
                ]
            }
        ],
        "reviews": [
            {
                "user": "ExtremeExplorer",
                "rating": 5,
                "comment": "The molten metal seas are a sight I'll never forget. Truly otherworldly!"
            },
            {
                "user": "InterstellarGeologist",
                "rating": 4,
                "comment": "Fascinating geological processes, but the extreme conditions limit exploration time."
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 1, "name": "Kepler-22b" },
            { "id": 12, "name": "Proxima Centauri B" }
        ]
    },
    {
        "id": 5,
        "name": "Starship Genesis",
        "type": "Interstellar Craft",
        "distance": "Orbiting Earth",
        "travel_time": "Immediate",
        "overview": "Starship Genesis represents the pinnacle of human engineering and the gateway to interstellar travel. This colossal spacecraft, permanently orbiting Earth, serves as both a luxury space hotel and a launchpad for deep space missions. Its rotating habitation ring provides Earth-like gravity, while the zero-gravity central hub offers unique experiences and scientific opportunities. Starship Genesis features cutting-edge technology, including quantum computers, holographic environments, and an AI system that manages all aspects of life onboard. Visitors can enjoy Earth and lunar views from the panoramic observation deck, experience fine dining in the zero-gravity restaurant, or participate in space walks. The ship also houses advanced research facilities, making it a hub for scientific breakthroughs in fields such as astrophysics, biotechnology, and materials science. Whether you're a tourist seeking the ultimate space experience, a scientist pushing the boundaries of knowledge, or an aspiring deep space traveler, Starship Genesis offers an unparalleled gateway to the cosmos.",
        "features": [
            "Private cabins",
            "Zero-gravity lounges",
            "State-of-the-art AI navigation",
            "Rotating habitation ring",
            "Holographic entertainment centers",
            "Advanced research laboratories"
        ],
        "activities": [
            "Space walks with Earth backdrop",
            "Zero-gravity sports tournaments",
            "Virtual reality space exploration",
            "Astronaut training simulations",
            "Cosmic ray observation sessions"
        ],
        "images": [
            starship
        ],
        "price": "150000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Orbital Luxury Experience",
                "duration": "7 Earth days",
                "price": "250000",
                "includes": [
                    "Round-trip shuttle transport",
                    "Luxury suite accommodation",
                    "All-inclusive dining in zero-gravity restaurant",
                    "Guided space walk experience",
                    "Access to all entertainment facilities"
                ]
            },
            {
                "name": "Genesis Deep Space Preparation",
                "duration": "30 Earth days",
                "price": "750000",
                "includes": [
                    "Extended stay in variable gravity quarters",
                    "Comprehensive astronaut training program",
                    "Participation in ongoing space research",
                    "Simulated deep space mission experience",
                    "Physical and psychological space adaptation therapy"
                ]
            }
        ],
        "spacecraft": {
            "name": "Starship Genesis",
            "type": "Orbital space station and deep space vessel",
            "capacity": 1000,
            "features": [
                "Modular design for easy upgrades",
                "Nuclear fusion power plant",
                "Electromagnetic shielding against cosmic radiation",
                "Bioregenerative life support systems",
                "Quantum entanglement communication array"
            ]
        },
        "addons": [
            {
                "name": "Personal Space Exploration Kit",
                "price": "50000",
                "features": [
                    "Custom-fitted space suit for external activities",
                    "Personal propulsion unit for space walks",
                    "Quantum-encrypted communication device",
                    "Holographic space navigation tool",
                    "DNA preservation kit for deep space travelers"
                ]
            }
        ],
        "reviews": [
            {
                "user": "LuxurySpaceTraveler",
                "rating": 5,
                "comment": "The epitome of space luxury. The Earth views from the suite were breathtaking!"
            },
            {
                "user": "DeepSpaceAspirant",
                "rating": 4,
                "comment": "Excellent preparation for deep space travel, though the schedule was quite intense."
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 3, "name": "International Space Station" },
            { "id": 14, "name": "Vega Prime" }
        ]
    },
    {
        "id": 6,
        "name": "Kepler-186f",
        "type": "Exoplanet",
        "distance": "500 light-years",
        "travel_time": "30 years",
        "overview": "Kepler-186f, often called Earth's distant cousin, is a tantalizing world that captures the imagination of both scientists and space enthusiasts. This exoplanet, about 10% larger than Earth, orbits within the habitable zone of its red dwarf star, Kepler-186. The planet's surface is bathed in a reddish light, creating an alien landscape where familiar features take on an otherworldly hue. Kepler-186f's year lasts only 130 Earth days, but its similar size to our home planet suggests it might have a comparable gravity. The planet's atmosphere and potential for liquid water make it a prime candidate in the search for extraterrestrial life. Visitors to Kepler-186f will experience a world of red-tinted skies, potentially vast oceans, and landscapes shaped by forces both familiar and alien. The planet offers unparalleled opportunities for exobiology research, climate studies, and the exploration of potentially habitable worlds beyond our solar system. Whether you're a scientist seeking to unlock the mysteries of alien ecosystems or an adventurer yearning to set foot on a world that might harbor life, Kepler-186f promises an experience that pushes the boundaries of human exploration.",
        "features": [
            "Red-tinted forests",
            "Rocky terrains",
            "Potential alien ruins",
            "Vast oceans (theorized)",
            "Unique atmospheric phenomena",
            "Extreme seasonal variations"
        ],
        "activities": [
            "Exobiology field studies",
            "Alien sunset photography tours",
            "Gravity-adjusted hiking expeditions",
            "Underwater exploration (if oceans confirmed)",
            "Atmospheric composition analysis"
        ],
        "images": [
            kepler186f1,
            kepler186f2
        ],
        "price": "900000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Kepler-186f Discovery Expedition",
                "duration": "5 Earth years",
                "price": "1500000",
                "includes": [
                    "Round-trip interstellar travel",
                    "3-year stay in climate-controlled habitat",
                    "Guided tours of major geographical features",
                    "Participation in exobiology research projects",
                    "Exclusive access to potential alien ruin sites"
                ]
            },
            {
                "name": "Red World Colonist Program",
                "duration": "One-way trip",
                "price": "2500000",
                "includes": [
                    "One-way interstellar travel",
                    "Permanent residence in terraforming colony",
                    "Training in essential colony operations",
                    "Stake in future planetary development",
                    "Priority access to all scientific discoveries"
                ]
            }
        ],
        "spacecraft": {
            "name": "Kepler Voyager",
            "type": "Long-range interstellar vessel",
            "capacity": 500,
            "features": [
                "Advanced cryostasis chambers",
                "Radiation-resistant hull",
                "Artificial gravity systems",
                "Onboard hydroponics and protein synthesis",
                "Quantum communication array for interstellar updates"
            ]
        },
        "addons": [
            {
                "name": "Kepler-186f Exploration Suite",
                "price": "75000",
                "features": [
                    "Adaptive exosuit for various planetary conditions",
                    "Portable atmospheric analyzer",
                    "Multi-spectrum camera for alien life detection",
                    "Emergency shelter and survival kit",
                    "Personal water and air purification system"
                ]
            }
        ],
        "reviews": [
            {
                "user": "ExoExplorer",
                "rating": 5,
                "comment": "The red forests under twin moons are a sight I'll never forget. Truly alien and beautiful!"
            },
            {
                "user": "AstroBiologist",
                "rating": 4,
                "comment": "Fascinating potential for life, but be prepared for harsh conditions and long research hours."
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 1, "name": "Kepler-22b" },
            { "id": 15, "name": "Kepler-452b" }
        ]
    },
    {
        "id": 7,
        "name": "Resolute Base",
        "type": "Space Station",
        "distance": "1.8 light-years",
        "travel_time": "8 years",
        "overview": "Resolute Base stands as humanity's farthest permanent outpost, a beacon of hope and determination in the vast expanse between our solar system and Alpha Centauri. This cutting-edge space station serves as a crucial waypoint for interstellar missions, a hub for deep space research, and a testament to human ingenuity. Positioned strategically to take advantage of a newly discovered spatial anomaly that allows for faster-than-light communication, Resolute Base has become the nexus of humanity's push into the cosmos. The station's unique design features a rotating habitation ring for artificial gravity, while its central hub houses advanced laboratories, stellar observation decks, and docking bays for interstellar vessels. Visitors to Resolute Base will experience life on the very edge of human exploration, witnessing groundbreaking experiments in physics, participating in the search for extrasolar planets, and preparing for humanity's next great leap into the unknown. Whether you're a scientist pushing the boundaries of knowledge, an engineer working on the next generation of spacecraft, or an adventurer seeking the ultimate frontier experience, Resolute Base offers an unparalleled gateway to the stars.",
        "features": [
            "Artificial gravity",
            "Central hub for expeditions",
            "Advanced repair docks",
            "Faster-than-light communication array",
            "Deep space observation platforms",
            "Interstellar vessel construction facilities"
        ],
        "activities": [
            "Zero-G adaptation training",
            "Interstellar navigation workshops",
            "Deep space astronomy sessions",
            "Spacecraft engineering internships",
            "Virtual reality deep space simulations"
        ],
        "images": [
            resoluteBase1,
            resoluteBase2,
            resoluteBase3
        ],
        "price": "600000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Resolute Explorer",
                "duration": "1 Earth year",
                "price": "1000000",
                "includes": [
                    "Round-trip interstellar travel",
                    "6-month stay in rotating habitation ring",
                    "Access to all public areas and some research facilities",
                    "Participation in citizen science projects",
                    "Exclusive tour of interstellar vessel construction"
                ]
            },
            {
                "name": "Deep Space Researcher",
                "duration": "3 Earth years",
                "price": "2500000",
                "includes": [
                    "Extended stay with private quarters",
                    "Full access to all research facilities",
                    "Collaboration on cutting-edge space exploration projects",
                    "Opportunity to join short-range exploratory missions",
                    "Co-authorship rights on research conducted at the base"
                ]
            }
        ],
        "spacecraft": {
            "name": "Resolute Shuttle",
            "type": "Long-range personnel transport",
            "capacity": 50,
            "features": [
                "Experimental FTL drive for rapid transit",
                "Advanced life support for extended journeys",
                "Modular design for mission customization",
                "Quantum-encrypted communication systems",
                "Emergency stasis pods for crew safety"
            ]
        },
        "addons": [
            {
                "name": "Deep Space Survival Kit",
                "price": "50000",
                "features": [
                    "Personalized space suit with extended life support",
                    "Portable quantum communicator",
                    "Multi-tool with advanced repair capabilities",
                    "Holographic star chart and navigation system",
                    "Emergency beacon detectable across light-years"
                ]
            }
        ],
        "reviews": [
            {
                "user": "StarStrider",
                "rating": 5,
                "comment": "The view of the Milky Way from here is indescribable. Truly the ultimate space experience!"
            },
            {
                "user": "QuantumEngineer",
                "rating": 4,
                "comment": "Cutting-edge research opportunities, but be prepared for the psychological challenges of deep space isolation."
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 5, "name": "Starship Genesis" },
            { "id": 16, "name": "Barnard's Star Base" }
        ]
    },
    {
        "id": 8,
        "name": "Mars Habitat",
        "type": "Planet Base",
        "distance": "225 million km",
        "travel_time": "9 months",
        "promoted": true,
        "overview": "The Mars Habitat represents humanity's first permanent settlement on another planet, a testament to our species' resilience and the indomitable spirit of exploration. Nestled in the vast Valles Marineris canyon system, the habitat offers a unique blend of scientific research opportunities and breathtaking Martian vistas. The settlement consists of a network of pressurized domes and underground facilities, providing a comfortable Earth-like environment amidst the harsh Martian landscape. Visitors to the Mars Habitat will experience the thrill of walking on another world, with gravity just 38% of Earth's, and witness firsthand the challenges and triumphs of terraforming an alien planet. The habitat serves as a base for groundbreaking research in areology, exobiology, and climate manipulation, as well as a starting point for expeditions to the planet's poles and other regions of interest. Whether you're a scientist contributing to humanity's understanding of Mars, an adventure seeker looking to leave footprints on another world, or a potential colonist training for long-term habitation, the Mars Habitat offers an unparalleled opportunity to be part of the next giant leap for mankind.",
        "features": [
            "Self-sustaining domes",
            "Martian hiking trails",
            "Stunning sunsets",
            "Underground hydroponic gardens",
            "Martian soil laboratories",
            "Panoramic observation decks"
        ],
        "activities": [
            "Martian desert expeditions",
            "Low-gravity sports competitions",
            "Areology (Martian geology) workshops",
            "Terraforming project participation",
            "Ancient waterway exploration"
        ],
        "images": [
            mars
        ],
        "price": "700000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Red Planet Explorer",
                "duration": "3 Earth months",
                "price": "950000",
                "includes": [
                    "Round-trip interplanetary travel",
                    "Accommodation in Mars Habitat dome",
                    "Guided tours of major Martian landmarks",
                    "Participation in basic scientific research",
                    "Exclusive Martian sunset photography session"
                ]
            },
            {
                "name": "Mars Colonist Training",
                "duration": "1 Earth year",
                "price": "2000000",
                "includes": [
                    "Extended stay in Mars Habitat",
                    "Comprehensive Mars survival training",
                    "Involvement in terraforming and agriculture projects",
                    "Priority consideration for permanent colonist positions",
                    "Personal plot of land for future development"
                ]
            }
        ],
        "spacecraft": {
            "name": "Ares Transporter",
            "type": "Interplanetary passenger vessel",
            "capacity": 100,
            "features": [
                "Artificial gravity during transit",
                "Radiation shielding for solar flare protection",
                "Hydroponic gardens for fresh food",
                "Virtual reality entertainment systems",
                "Medical bay with advanced life support capabilities",
                "Modular design for easy docking with Mars orbital station"
            ]
        },
        "addons": [
            {
                "name": "Martian Explorer Kit",
                "price": "35000",
                "features": [
                    "Custom-fitted Mars suit with enhanced mobility",
                    "Portable atmospheric analyzer and radiation detector",
                    "High-resolution camera for Martian photography",
                    "Emergency shelter and survival equipment",
                    "Personal rover for short-range exploration"
                ]
            }
        ],
        "reviews": [
            {
                "user": "RedPlanetPioneer",
                "rating": 5,
                "comment": "Walking on Mars was a dream come true. The habitat is comfortable and the expeditions are unforgettable!"
            },
            {
                "user": "AstroBotanist",
                "rating": 4,
                "comment": "Fascinating research opportunities, but be prepared for the challenges of Martian dust and isolation."
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 2, "name": "Lunar Colony" },
            { "id": 17, "name": "Ceres Outpost" }
        ]
    },
    {
        "id": 9,
        "name": "Europa Station",
        "type": "Moon Base",
        "distance": "628.3 million km",
        "travel_time": "18 months",
        "overview": "Europa Station, perched on the icy surface of Jupiter's enigmatic moon, represents the frontier of human exploration in the outer solar system. This state-of-the-art research base is dedicated to unraveling the mysteries of Europa's vast subsurface ocean and its potential for harboring extraterrestrial life. The station is a marvel of engineering, designed to withstand the intense radiation from Jupiter and the extreme cold of Europa's surface. Its modular structure is anchored to the ice, with heated drilling platforms that allow access to the liquid ocean below. Visitors to Europa Station will experience the thrill of standing on an alien world, with Jupiter looming large in the sky, while participating in groundbreaking research that could forever change our understanding of life in the universe. The station offers unparalleled opportunities for astrobiology, cryovolcanism studies, and deep-ice exploration. Whether you're a scientist eager to analyze samples from an alien ocean, an engineer working on next-generation ice-penetrating technologies, or an adventurer seeking to dive beneath the ice of another world, Europa Station provides a unique gateway to one of the solar system's most promising abodes for life.",
        "features": [
            "Access to subsurface oceans",
            "Icy landscapes",
            "Astrobiology research opportunities",
            "Radiation-shielded habitation modules",
            "Deep-ice drilling platforms",
            "Cryovolcano observation decks"
        ],
        "activities": [
            "Subsurface ocean exploration",
            "Ice caving expeditions",
            "Europan wildlife search missions",
            "Low-gravity ice skating",
            "Jupiter storm watching"
        ],
        "images": [
            europaBase1,
            europaBase2
        ],
        "price": "850000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Europa Discovery",
                "duration": "6 Earth months",
                "price": "1200000",
                "includes": [
                    "Round-trip interplanetary travel",
                    "Accommodation in radiation-shielded quarters",
                    "Guided tours of Europa's surface features",
                    "Participation in sample collection missions",
                    "Virtual reality dive in simulated Europan ocean"
                ]
            },
            {
                "name": "Astrobiology Research Expedition",
                "duration": "2 Earth years",
                "price": "3000000",
                "includes": [
                    "Extended stay at Europa Station",
                    "Full access to research facilities and laboratories",
                    "Participation in deep-ice drilling projects",
                    "Opportunity to name newly discovered microorganisms",
                    "Co-authorship rights on research papers"
                ]
            }
        ],
        "spacecraft": {
            "name": "Galileo II",
            "type": "Outer solar system exploration vessel",
            "capacity": 50,
            "features": [
                "Advanced radiation shielding",
                "Ion propulsion for efficient long-distance travel",
                "Artificial hibernation chambers for long journeys",
                "Dedicated astrobiology containment lab",
                "Expandable heat shield for aerobraking maneuvers"
            ]
        },
        "addons": [
            {
                "name": "Europa Exploration Suite",
                "price": "80000",
                "features": [
                    "Thermal regulation suit for extreme cold",
                    "Personal radiation shield",
                    "Ice-penetrating sonar device",
                    "Sample collection and analysis kit",
                    "Emergency beacon with Jupiter-wide range"
                ]
            }
        ],
        "reviews": [
            {
                "user": "IceDiver",
                "rating": 5,
                "comment": "The subsurface expedition was mind-blowing. Potential alien life forms! A must-visit for science enthusiasts."
            },
            {
                "user": "JovianExplorer",
                "rating": 4,
                "comment": "Incredible research opportunities, but the isolation and radiation risks are significant challenges."
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 10, "name": "Titan Base" },
            { "id": 13, "name": "Ganymede Hub" }
        ]
    },
    {
        "id": 10,
        "name": "Titan Base",
        "type": "Moon Base",
        "distance": "1.2 billion km",
        "travel_time": "3 years",
        "overview": "Titan Base, nestled on the shores of one of Saturn's moon's methane lakes, represents humanity's most distant permanent outpost in the solar system. This remarkable facility offers visitors a chance to experience an alien world with surprising Earth-like qualities. Titan's thick atmosphere and diverse surface features, including rivers, lakes, and seas of liquid hydrocarbons, make it a unique destination for both scientific research and adventure tourism. The base itself is a triumph of engineering, designed to withstand Titan's frigid temperatures and leverage its abundant resources. Visitors to Titan Base will witness orange skies, methane rain, and landscapes carved by flowing hydrocarbons. The facility serves as a hub for studying prebiotic chemistry, atmospheric processes, and potential habitability of worlds beyond Earth. Whether you're a scientist exploring the possibilities of life in the outer solar system, an engineer working on technologies for extreme environments, or an adventurer seeking to sail on alien seas, Titan Base offers an unparalleled gateway to one of the most Earth-like yet utterly alien worlds in our cosmic neighborhood.",
        "features": [
            "Methane lake cruises",
            "Thick orange skies",
            "Unique low-gravity experiences",
            "Hydrocarbon harvesting facilities",
            "Cryogenic research laboratories",
            "Titan weather monitoring stations"
        ],
        "activities": [
            "Methane sailing expeditions",
            "Cryovolcano observation treks",
            "Hydrocarbon rain forest explorations",
            "Low-gravity flight experiences",
            "Prebiotic chemistry workshops"
        ],
        "images": [
            titanBase1,
            titanBase2
        ],
        "price": "950000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Titan Adventure",
                "duration": "1 Earth year",
                "price": "1500000",
                "includes": [
                    "Round-trip interplanetary travel",
                    "Accommodation in pressurized, heated habitats",
                    "Guided tours of Titan's major geographical features",
                    "Participation in methane lake expeditions",
                    "Exclusive access to hydrocarbon harvesting operations"
                ]
            },
            {
                "name": "Saturnian System Research",
                "duration": "3 Earth years",
                "price": "3500000",
                "includes": [
                    "Extended stay at Titan Base",
                    "Access to all research facilities and expeditions",
                    "Participation in long-term climate and geological studies",
                    "Opportunity to name newly discovered surface features",
                    "Priority use of advanced sensing and imaging equipment"
                ]
            }
        ],
        "spacecraft": {
            "name": "Huygens II",
            "type": "Outer solar system exploration and colonization vessel",
            "capacity": 100,
            "features": [
                "Nuclear thermal propulsion for rapid transit",
                "Cryogenic life support systems",
                "Titan atmospheric entry heat shields",
                "Methane fuel harvesting capabilities",
                "Modular design for easy expansion of Titan Base"
            ]
        },
        "addons": [
            {
                "name": "Titan Survival Kit",
                "price": "100000",
                "features": [
                    "Extreme cold-resistant exosuit",
                    "Methane-resistant outer layer",
                    "Built-in hydrocarbon analyzer",
                    "Portable shelter with heating unit",
                    "Emergency distress beacon visible from Saturn orbit"
                ]
            }
        ],
        "reviews": [
            {
                "user": "MethaneSailor",
                "rating": 5,
                "comment": "Sailing on a methane lake under Titan's orange sky was surreal. An unforgettable alien experience!"
            },
            {
                "user": "CryoChemist",
                "rating": 4,
                "comment": "Fascinating prebiotic chemistry research, but the extreme cold and isolation can be challenging."
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 9, "name": "Europa Station" },
            { "id": 19, "name": "Enceladus Glacier Base" }
        ]
    },
    {
        "id": 11,
        "name": "Callisto Retreat",
        "type": "Moon Base",
        "distance": "628.3 million km",
        "travel_time": "18 months",
        "overview": "A luxury resort on Callisto, Jupiter's moon, offering peaceful views and lavish accommodations.",
        "features": [
            "Luxury suites",
            "Stunning crater views",
            "Exclusive low-gravity activities"
        ],
        "images": [
            callisto
        ],
        "price": "1200000"
    },
    {
        "id": 12,
        "name": "Proxima Centauri B",
        "type": "Exoplanet",
        "distance": "4.24 light-years",
        "travel_time": "19 years",
        "overview": "Proxima Centauri B, the closest known exoplanet to our solar system, offers an unparalleled opportunity for interstellar exploration and potential colonization. Orbiting the red dwarf star Proxima Centauri, this rocky world exists in a delicate balance between scorching heat and freezing cold, with one side perpetually facing its star. The Proxima Centauri B outpost is situated in the temperate zone along the planet's terminator line, where visitors can experience both the star's eternal day and the cosmic night. This unique world offers stunning vistas of its parent star and the binary Alpha Centauri system beyond. Scientists and adventurers alike flock to Proxima B to study its unusual ecology, investigate the potential for indigenous microbial life, and push the boundaries of human adaptation to alien environments. Whether you're a xenobiologist searching for the first confirmed extraterrestrial life, an astrophysicist studying the dynamics of red dwarf systems, or a pioneer ready to stake your claim in humanity's first interstellar colony, Proxima Centauri B represents the next giant leap in our cosmic journey.",
        "features": [
            "Terminator zone habitats",
            "Red dwarf star observatories",
            "Alien flora research gardens",
            "Magnetic field generators",
            "Interstellar communication array",
            "Underground shelter networks"
        ],
        "activities": [
            "Terminator line expeditions",
            "Exo-agricultural experiments",
            "Red dwarf flare watching",
            "Low-light photography workshops",
            "Proxima aurora viewing"
        ],
        "images": [
            proximaCentauriB1,
            proximaCentauriB2
        ],
        "price": "1200000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Proxima Pioneer Experience",
                "duration": "2 Earth years",
                "price": "2500000",
                "includes": [
                    "Round-trip interstellar travel",
                    "Accommodation in shielded terminator zone habitat",
                    "Training in exoplanet survival techniques",
                    "Participation in first-wave colonization projects",
                    "Exclusive rights to name a geographical feature"
                ]
            },
            {
                "name": "Red Dwarf Research Fellowship",
                "duration": "5 Earth years",
                "price": "4000000",
                "includes": [
                    "Extended stay at Proxima B research station",
                    "Access to state-of-the-art astrophysics equipment",
                    "Collaboration with interstellar scientific community",
                    "Opportunity to publish in prestigious journals",
                    "Priority use of interstellar communication array"
                ]
            }
        ],
        "spacecraft": {
            "name": "Centauri Express",
            "type": "Interstellar colonization vessel",
            "capacity": 200,
            "features": [
                "Breakthrough Starshot light sail technology",
                "Rotating habitat ring for artificial gravity",
                "Quantum entanglement communication system",
                "Cryogenic stasis chambers for long-duration travel",
                "Modular design for easy expansion of Proxima B colony"
            ]
        },
        "addons": [
            {
                "name": "Proxima Survival System",
                "price": "150000",
                "features": [
                    "Radiation-resistant exosuit",
                    "Adaptable vision enhancement for low-light conditions",
                    "Personal magnetic shield generator",
                    "Multi-spectrum analyzer for alien biology",
                    "Emergency shelter pod with six-month life support"
                ]
            }
        ],
        "reviews": [
            {
                "user": "StarStrider",
                "rating": 5,
                "comment": "Standing on an alien world, watching the dance of Alpha Centauri in the sky... it's indescribable. A must for any serious space enthusiast!"
            },
            {
                "user": "ExoGeologist",
                "rating": 4,
                "comment": "Fascinating geological processes, but the constant radiation and extreme conditions make long-term research challenging."
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 4, "name": "Alpha Centauri Bb" },
            { "id": 6, "name": "Kepler-186f" }
        ]
    },
    {
        "id": 13,
        "name": "Ganymede Hub",
        "type": "Moon Base",
        "distance": "628.3 million km",
        "travel_time": "18 months",
        "overview": "Ganymede Hub, situated on Jupiter's largest moon, serves as the central nexus for exploration and research in the Jovian system. As the largest moon in our solar system, Ganymede offers a unique blend of icy surface features and a hidden subsurface ocean, making it a prime location for both geological studies and the search for extraterrestrial life. The Hub is built into the moon's icy crust, with vast underground complexes that protect inhabitants from Jupiter's intense radiation. Visitors to Ganymede Hub can explore the moon's unique terrain, including its distinctive grooved surface, and witness the awe-inspiring sight of Jupiter dominating the sky. The facility houses advanced laboratories for studying Ganymede's magnetic field - the only moon known to generate its own magnetosphere - and serves as a launching point for missions to other Jovian moons. Whether you're a planetary scientist investigating the dynamics of icy worlds, an astrobiologist probing the potential for life in subsurface oceans, or an adventure seeker looking to ski on the longest slopes in the solar system, Ganymede Hub offers an unparalleled gateway to the wonders of the Jovian system.",
        "features": [
            "Subsurface ocean research labs",
            "Magnetosphere monitoring stations",
            "Ice crevasse exploration courses",
            "Jupiter observation decks",
            "Radiation-shielded habitation zones",
            "Jovian moon mission control center"
        ],
        "activities": [
            "Low-gravity ice skiing",
            "Magnetosphere surfing simulations",
            "Subsurface ocean drone piloting",
            "Jovian system astrophotography",
            "Ganymede geology expeditions"
        ],
        "images": [
            ganymedeBase
        ],
        "price": "820000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Ganymede Explorer",
                "duration": "6 Earth months",
                "price": "1100000",
                "includes": [
                    "Round-trip interplanetary travel",
                    "Accommodation in radiation-shielded quarters",
                    "Guided tours of Ganymede's unique surface features",
                    "Participation in ice crevasse exploration",
                    "Exclusive access to Jupiter observation sessions"
                ]
            },
            {
                "name": "Jovian Moons Research Program",
                "duration": "2 Earth years",
                "price": "2800000",
                "includes": [
                    "Extended stay at Ganymede Hub",
                    "Access to all research facilities and expeditions",
                    "Participation in long-term magnetic field studies",
                    "Opportunity to join missions to other Jovian moons",
                    "Co-authorship rights on research conducted"
                ]
            }
        ],
        "spacecraft": {
            "name": "Galileo III",
            "type": "Jovian system exploration vessel",
            "capacity": 60,
            "features": [
                "Radiation-hardened hull for Jovian environment",
                "Magnetoplasma engines for efficient moon-to-moon travel",
                "Ice-penetrating radar for subsurface ocean studies",
                "Expandable laboratory modules for in-situ sample analysis",
                "Advanced communication array for real-time data transmission to Earth"
            ]
        },
        "addons": [
            {
                "name": "Ganymede Adventure Pack",
                "price": "75000",
                "features": [
                    "Personal radiation shield",
                    "Heated exosuit for extreme cold",
                    "Crampons and ice axes for crevasse exploration",
                    "Portable magnetometer for field studies",
                    "Emergency beacon with Jupiter-wide range"
                ]
            }
        ],
        "reviews": [
            {
                "user": "IceMoonTrekker",
                "rating": 5,
                "comment": "The view of Jupiter from the observation deck is absolutely mind-blowing. And the ice skiing? Out of this world!"
            },
            {
                "user": "MagnetoSphereDoc",
                "rating": 4,
                "comment": "Unparalleled opportunities for magnetosphere research, but be prepared for the psychological challenges of living under the ice."
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 9, "name": "Europa Station" },
            { "id": 10, "name": "Titan Base" }
        ]
    },
    {
        "id": 14,
        "name": "Vega Prime",
        "type": "Space Station",
        "distance": "25 light-years",
        "travel_time": "50 years",
        "overview": "Vega Prime is an ultra-modern space station orbiting the brilliant star Vega, offering breathtaking views of the cosmos and a range of futuristic luxuries. As the hub of interstellar travel and exploration, Vega Prime caters to both adventure seekers and those desiring a tranquil, high-tech getaway. The station features artificial ecosystems, panoramic observation decks, and state-of-the-art amenities, making it the ultimate destination for space tourists and researchers. Whether you're gazing at distant galaxies through a 360° space-view dome or enjoying a leisurely stroll through the artificial forests, Vega Prime provides an unparalleled escape to the stars.",
        "features": [
            "360° space-view observation domes",
            "Artificial gravity-based ecosystems",
            "Luxurious interstellar lounges",
            "Panoramic interstellar observation decks",
            "Solar-powered energy systems",
            "Astronomical research observatories"
        ],
        "activities": [
            "Stargazing through the 360° observation domes",
            "Interstellar photography workshops",
            "Zero-gravity sports",
            "Artificial ecosystem exploration",
            "Astronomy seminars and star mapping",
            "Luxury space spa treatments"
        ],
        "images": [
            vegaPrime
        ],
        "price": "1250000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Vega Discovery",
                "duration": "1 Earth year",
                "price": "1800000",
                "includes": [
                    "Round-trip interstellar travel",
                    "Luxury accommodation with panoramic space views",
                    "Guided tours of Vega Prime's artificial ecosystems",
                    "Exclusive access to the astronomical observatory",
                    "Participation in stargazing and photography workshops"
                ]
            },
            {
                "name": "Interstellar Research Expedition",
                "duration": "5 Earth years",
                "price": "4000000",
                "includes": [
                    "Extended stay at Vega Prime",
                    "Access to all scientific and research facilities",
                    "Participation in galactic star mapping projects",
                    "Exclusive interstellar observatory access",
                    "Co-authorship rights on astronomical discoveries",
                    "Private consultations with leading astronomers"
                ]
            }
        ],
        "spacecraft": {
            "name": "Star Voyager",
            "type": "Interstellar Luxury Vessel",
            "capacity": 100,
            "features": [
                "Artificial gravity environment for passenger comfort",
                "Advanced ion propulsion system for long-distance travel",
                "Observation windows with panoramic space views",
                "Personalized luxury cabins",
                "Onboard artificial ecosystem for relaxation",
                "Fully equipped research labs for scientists"
            ]
        },
        "addons": [
            {
                "name": "Vega Luxury Experience Pack",
                "price": "50000",
                "features": [
                    "Private stateroom with 360° space-view",
                    "Exclusive access to private astronomical tours",
                    "Fine dining experiences under the stars",
                    "Personalized luxury concierge service",
                    "Zero-gravity yoga sessions"
                ]
            }
        ],
        "reviews": [
            {
                "user": "StarryEyedExplorer",
                "rating": 5,
                "comment": "Vega Prime is a dream come true! The view of distant galaxies from the observation deck is unlike anything I've ever seen."
            },
            {
                "user": "GalacticTraveler01",
                "rating": 4.8,
                "comment": "A truly luxurious space station with all the comforts of home and more. The artificial ecosystems are so serene and immersive!"
            }
        ],
        "average_rating": 4.9,
        "related_destinations": [
            { "id": 9, "name": "Europa Station" },
            { "id": 13, "name": "Ganymede Hub" },
            { "id": 16, "name": "Lunar Gateway" }
        ]
    },
    {
        "id": 15,
        "name": "Kepler-452b",
        "type": "Exoplanet",
        "distance": "1,400 light-years",
        "travel_time": "60 years",
        "promoted" : true,
        "overview": "Kepler-452b, often hailed as 'Earth's Older Cousin', offers visitors a glimpse into the potential future of our own planet. Orbiting a star remarkably similar to our Sun, but 1.5 billion years older, Kepler-452b presents a unique opportunity to study the long-term evolution of Earth-like worlds. The planet's surface gravity, about twice that of Earth, has led to the development of a unique ecosystem of low-profile but incredibly sturdy lifeforms. Kepler-452b Colony, nestled in a valley surrounded by towering mountain ranges, serves as a base for both scientific research and adventure tourism. Visitors can explore dense forests of alien vegetation, trek across vast rocky plateaus, and study the complex weather patterns shaped by the planet's thicker atmosphere. The colony also houses advanced climate modeling centers, working to understand the planet's history and potential future, providing invaluable insights into the fate of Earth-like planets across the galaxy. Whether you're a climatologist studying long-term planetary evolution, a xenobiologist investigating convergent evolution, or an interstellar tourist seeking to experience life on a 'super-Earth', Kepler-452b offers an unparalleled window into the potential future of habitable worlds.",
        "features": [
            "High-gravity adaptation centers",
            "Ancient forest reserves",
            "Atmospheric composition laboratories",
            "Long-term climate modeling facilities",
            "Xenobiology research stations",
            "Gravity-assisted transportation networks"
        ],
        "activities": [
            "Exo-forest canopy tours",
            "High-gravity sports competitions",
            "Ancient life fossil hunting",
            "Extreme weather storm chasing",
            "Alien ecosystem photography expeditions"
        ],
        "images": [
            kepler452b1,
            kepler452b2
        ],
        "price": "2000000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Kepler-452b Expedition",
                "duration": "2 Earth years",
                "price": "3500000",
                "includes": [
                    "Round-trip interstellar travel",
                    "Accommodation in gravity-adjusted habitats",
                    "Guided tours of major geological and biological sites",
                    "Participation in xenobiology research projects",
                    "Exclusive access to ancient forest reserves"
                ]
            },
            {
                "name": "Super-Earth Longitudinal Study",
                "duration": "10 Earth years",
                "price": "8000000",
                "includes": [
                    "Extended stay in Kepler-452b Colony",
                    "Full access to all research facilities and expeditions",
                    "Participation in long-term climate and ecosystem studies",
                    "Opportunity to establish a new research outpost",
                    "Priority rights to any discoveries made during the stay"
                ]
            }
        ],
        "spacecraft": {
            "name": "Kepler Endeavour",
            "type": "Deep space exploration and colonization vessel",
            "capacity": 500,
            "features": [
                "Experimental spacetime warp drive for faster-than-light travel",
                "Rotating habitation rings with adjustable gravity",
                "Advanced life support systems for multi-decade voyages",
                "Quantum entanglement communication array",
                "Automated terraforming and construction modules"
            ]
        },
        "addons": [
            {
                "name": "Kepler-452b Adaptation Package",
                "price": "250000",
                "features": [
                    "Personalized high-gravity acclimatization program",
                    "Exoskeleton suit for easier movement in high gravity",
                    "Atmospheric filter implants for breathing assistance",
                    "Portable xenobiology lab for field research",
                    "Long-range hover vehicle for planetary exploration"
                ]
            }
        ],
        "reviews": [
            {
                "user": "GravityJumper",
                "rating": 5,
                "comment": "The high-gravity sports are intense! And the ancient forests? Absolutely mind-blowing. A must-visit for any serious exoplanet enthusiast."
            },
            {
                "user": "ClimateChronologist",
                "rating": 4,
                "comment": "Unparalleled opportunity for long-term climate studies. The gravity takes some getting used to, but the scientific potential is enormous."
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 1, "name": "Kepler-22b" },
            { "id": 6, "name": "Kepler-186f" }
        ]
    },
    {
        "id": 16,
        "name": "Barnard's Star Base",
        "type": "Space Station",
        "distance": "6 light-years",
        "travel_time": "25 years",
        "overview": "Barnard's Star Base stands as a testament to human perseverance and ingenuity in the face of cosmic challenges. Orbiting Barnard's Star, one of the closest stars to our solar system, this advanced space station serves as a crucial waypoint for further exploration of the galaxy. The base's unique design accommodates the challenges posed by Barnard's Star's high proper motion and the intense flare activity common to red dwarfs. Visitors to Barnard's Star Base will experience life on the edge of human space exploration, witnessing cutting-edge research into interstellar travel, exoplanet detection, and the long-term effects of red dwarf stars on potential habitable worlds. The station features advanced stellar observatories, allowing unprecedented views of Barnard's Star and the surrounding cosmic neighborhood. It also serves as a launching point for missions to explore the hypothesized exoplanets in the system. Whether you're an astrophysicist studying the behavior of red dwarf stars, an engineer working on the next generation of interstellar propulsion, or an adventurer seeking to stand at the frontier of human expansion into the cosmos, Barnard's Star Base offers an unparalleled gateway to the mysteries of our stellar backyard.",
        "features": [
            "Red dwarf flare shelters",
            "Interstellar navigation center",
            "Exoplanet detection arrays",
            "Microgravity research labs",
            "Long-term space habitation studies",
            "Stellar wind harvesting facilities"
        ],
        "activities": [
            "Red dwarf flare watching",
            "Interstellar navigation workshops",
            "Zero-G sports competitions",
            "Exoplanet hunting missions",
            "Cosmic ray surfing simulations"
        ],
        "images": [
            barnardsStarBase
        ],
        "price": "1800000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Barnard's Star Experience",
                "duration": "1 Earth year",
                "price": "2500000",
                "includes": [
                    "Round-trip interstellar travel",
                    "Accommodation in flare-shielded quarters",
                    "Guided tours of all station facilities",
                    "Participation in exoplanet detection missions",
                    "Exclusive access to interstellar navigation simulations"
                ]
            },
            {
                "name": "Red Dwarf Research Fellowship",
                "duration": "5 Earth years",
                "price": "6000000",
                "includes": [
                    "Extended stay at Barnard's Star Base",
                    "Full access to all research facilities and missions",
                    "Collaboration on interstellar travel technology development",
                    "Opportunity to lead exoplanet exploration missions",
                    "Co-authorship rights on all research conducted during stay"
                ]
            }
        ],
        "spacecraft": {
            "name": "Barnard Explorer",
            "type": "Interstellar research and exploration vessel",
            "capacity": 100,
            "features": [
                "Magnetic sail propulsion for interstellar travel",
                "Advanced flare prediction and protection systems",
                "Gravitational wave communication array",
                "Modular design for easy upgrades and repairs",
                "Artificial hibernation chambers for long-duration missions"
            ]
        },
        "addons": [
            {
                "name": "Interstellar Explorer Kit",
                "price": "300000",
                "features": [
                    "Personal flare shield generator",
                    "Quantum entangled communication device",
                    "Portable exoplanet detection unit",
                    "Microgravity adaptation suit",
                    "Emergency rescue beacon with interstellar range"
                ]
            }
        ],
        "reviews": [
            {
                "user": "StarHopper",
                "rating": 5,
                "comment": "The view of Barnard's Star from the observation deck is mesmerizing. Watching the flares up close is an unforgettable experience!"
            },
            {
                "user": "ExoplanetHunter",
                "rating": 4,
                "comment": "Cutting-edge research opportunities, but the isolation and constant vigilance against stellar flares can be challenging."
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 7, "name": "Resolute Base" },
            { "id": 12, "name": "Proxima Centauri B" }
        ]
    },
    {
        "id": 17,
        "name": "Ceres Outpost",
        "type": "Dwarf Planet Base",
        "distance": "413 million km",
        "travel_time": "14 months",
        "overview": "Ceres Outpost, nestled on the largest object in the asteroid belt, serves as humanity's primary foothold for the exploration and utilization of the vast resources between Mars and Jupiter. This bustling hub of scientific research and industrial activity offers visitors a unique perspective on the solar system's formation and the future of space-based mining and manufacturing. The outpost is built both on the surface and within the dwarf planet's interior, taking advantage of Ceres' low gravity and abundant water ice. Visitors can explore vast underground caverns, witness cutting-edge asteroid mining operations, and study the fascinating cryovolcanic processes that shape Ceres' surface. The outpost also serves as a major refueling station and construction site for spacecraft venturing into the outer solar system. Whether you're a planetary scientist studying the composition of the early solar system, an entrepreneur looking to invest in asteroid mining ventures, or a space enthusiast eager to experience life in the asteroid belt, Ceres Outpost offers an unparalleled gateway to the resources and mysteries of our solar system's frontier.",
        "features": [
            "Cryovolcano research stations",
            "Asteroid mining operations",
            "Low-gravity manufacturing facilities",
            "Water ice extraction plants",
            "Deep space observatory",
            "Spacecraft refueling and construction docks"
        ],
        "activities": [
            "Asteroid belt tours",
            "Low-gravity rock climbing",
            "Ice cave spelunking",
            "Micro-gravity manufacturing workshops",
            "Ceres surface rover expeditions"
        ],
        "images": [
            ceres
        ],
        "price": "750000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Ceres Adventure",
                "duration": "3 Earth months",
                "price": "1000000",
                "includes": [
                    "Round-trip interplanetary travel",
                    "Accommodation in subsurface habitation units",
                    "Guided tours of major geological and industrial sites",
                    "Participation in asteroid mining simulations",
                    "Exclusive access to cryovolcano observation missions"
                ]
            },
            {
                "name": "Asteroid Belt Industrialist Program",
                "duration": "2 Earth years",
                "price": "3500000",
                "includes": [
                    "Extended stay at Ceres Outpost",
                    "Comprehensive training in asteroid mining techniques",
                    "Investment opportunities in space-based industries",
                    "Participation in spacecraft construction projects",
                    "Rights to name an asteroid or Ceres geographical feature"
                ]
            }
        ],
        "spacecraft": {
            "name": "Ceres Prospector",
            "type": "Asteroid belt exploration and mining vessel",
            "capacity": 50,
            "features": [
                "Modular design for easy reconfiguration",
                "Advanced mineral detection and analysis systems",
                "Micro-gravity ore processing facilities",
                "Expandable storage for large mineral payloads",
                "Efficient ion drive for navigating the asteroid belt"
            ]
        },
        "addons": [
            {
                "name": "Asteroid Miner's Toolkit",
                "price": "100000",
                "features": [
                    "Personal propulsion unit for asteroid navigation",
                    "Handheld mineral analyzer and 3D mapping device",
                    "Micro-gravity tool set for mining operations",
                    "Emergency pressure suit with 72-hour life support",
                    "Claim stake kit for registering asteroid ownership"
                ]
            }
        ],
        "reviews": [
            {
                "user": "BeltProspector",
                "rating": 5,
                "comment": "The opportunities here are endless! From mining operations to low-g manufacturing, Ceres is the future of space industry."
            },
            {
                "user": "IceCaveExplorer",
                "rating": 4,
                "comment": "The subsurface caverns are breathtaking, but be prepared for the challenges of long-term life in low gravity."
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 8, "name": "Mars Habitat" },
            { "id": 18, "name": "Psyche Mining Colony" }
        ]
    },
    {
        "id": 18,
        "name": "Wormhole Gateway Station",
        "type": "Space Hub",
        "location": "Near Sagittarius A*",
        "distance": "26,000 light-years from Earth",
        "travel_time": "Approximately 50 years (using current propulsion systems)",
        "promoted": true,
        "overview": "Wormhole Gateway Station is a highly advanced space hub situated near the supermassive black hole Sagittarius A*. Serving as a critical control center for nearby wormholes, this futuristic station facilitates fast intergalactic travel and research into the fabric of space-time. The station is equipped with cutting-edge navigation technologies and warp capabilities that allow travelers to safely navigate the vast expanse of the universe. It also hosts a range of scientific research on wormholes, space-time anomalies, and the potential for faster-than-light travel, making it a hub for intergalactic explorers, scientists, and advanced spacefaring civilizations.",
        "features": [
            "Control center for nearby wormholes",
            "Highly advanced navigation technology",
            "Secure docking and refueling stations",
            "Research opportunities in space-time manipulation",
            "Warp drive testing facilities",
            "Space-time anomaly observation chambers"
        ],
        "activities": [
            "Wormhole navigation simulations",
            "Space-time manipulation experiments",
            "Zero-gravity space station tours",
            "Advanced warp drive testing sessions",
            "Astrophysics and intergalactic communication workshops"
        ],
        "images": [
            wormhole
        ],
        "price": "5000000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Wormhole Explorer",
                "duration": "2 Earth years",
                "price": "7500000",
                "includes": [
                    "Round-trip intergalactic travel",
                    "Accommodation in advanced space station quarters",
                    "Exclusive access to wormhole navigation systems",
                    "Participation in space-time research and simulations",
                    "Guided tours of space-time anomaly observation chambers"
                ]
            },
            {
                "name": "Galactic Research Expedition",
                "duration": "5 Earth years",
                "price": "15000000",
                "includes": [
                    "Extended stay at Wormhole Gateway Station",
                    "Full access to all wormhole control and space-time research facilities",
                    "Participation in warp drive testing and space-time anomaly studies",
                    "Opportunity to collaborate with leading astrophysicists and quantum engineers",
                    "Co-authorship rights on intergalactic travel research"
                ]
            }
        ],
        "spacecraft": {
            "name": "Event Horizon",
            "type": "Wormhole Navigation Vessel",
            "capacity": 40,
            "features": [
                "Enhanced warp drive for safe passage through wormholes",
                "Radiation-hardened hull for proximity to supermassive black holes",
                "Advanced navigation AI for real-time wormhole mapping",
                "Onboard research labs for astrophysics and quantum experiments",
                "Secure docking for refueling and crew maintenance"
            ]
        },
        "addons": [
            {
                "name": "Wormhole Traveler Pack",
                "price": "100000",
                "features": [
                    "Personalized wormhole trajectory analysis tool",
                    "High-tech gravitation shielding for safe wormhole transit",
                    "Zero-gravity mobility exosuit",
                    "Advanced life support systems for intergalactic travel",
                    "Emergency beacon with multi-light-year signal range"
                ]
            }
        ],
        "reviews": [
            {
                "user": "IntergalacticNomad",
                "rating": 5,
                "comment": "Wormhole Gateway Station is the future of space travel! The experience of traveling through wormholes is exhilarating, and the research opportunities are out of this world."
            },
            {
                "user": "QuantumExplorer",
                "rating": 4.8,
                "comment": "The level of technology and research available at the station is mind-blowing. A must-visit for anyone interested in space-time anomalies and faster-than-light travel."
            }
        ],
        "average_rating": 4.9,
        "related_destinations": [
            { "id": 13, "name": "Ganymede Hub" },
            { "id": 14, "name": "Vega Prime" },
            { "id": 9, "name": "Europa Station" }
        ]
    },
    {
        "id": 19,
        "name": "Enceladus Glacier Base",
        "type": "Moon Base",
        "distance": "1.272 billion km",
        "travel_time": "3 years",
        "overview": "Enceladus Glacier Base, nestled amidst the icy canyons of Saturn's most intriguing moon, offers visitors a front-row seat to one of the solar system's most dynamic and potentially life-harboring environments. Built into the thick ice crust near the moon's south polar region, the base provides unparalleled access to Enceladus' famous cryovolcanic plumes and the subsurface ocean they emanate from. The facility is a marvel of engineering, designed to withstand the extreme cold and leverage the moon's geological activity for power and research. Visitors can explore vast ice caverns, witness spectacular water-ice geysers erupting through surface cracks, and participate in cutting-edge astrobiology research. The base also serves as a launching point for submersible missions into the subsurface ocean, where the search for extraterrestrial life is conducted in real-time. Whether you're a planetary scientist studying the mechanisms of icy moons, an astrobiologist searching for signs of life beyond Earth, or an adventure seeker looking to ski on the solar system's most exotic slopes, Enceladus Glacier Base offers an unparalleled gateway to the mysteries hidden beneath the ice of this fascinating Saturnian moon.",
        "features": [
            "Cryovolcanic plume observation decks",
            "Subsurface ocean access shafts",
            "Ice cave research laboratories",
            "Hydrothermal vent simulation chambers",
            "Low-gravity ice skiing facilities",
            "Submersible drone piloting stations"
        ],
        "activities": [
            "Cryovolcanic geyser expeditions",
            "Subsurface ocean drone missions",
            "Ice core extraction and analysis",
            "Low-gravity ice climbing adventures",
            "Hydrothermal vent ecology studies"
        ],
        "images": [
            enceladus
        ],
        "price": "1100000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Enceladus Ice Adventure",
                "duration": "6 Earth months",
                "price": "1800000",
                "includes": [
                    "Round-trip interplanetary travel",
                    "Accommodation in heated subsurface ice habitats",
                    "Guided tours of major cryovolcanic features",
                    "Participation in ice cave exploration missions",
                    "Exclusive submersible drone piloting experience"
                ]
            },
            {
                "name": "Astrobiology Research Expedition",
                "duration": "2 Earth years",
                "price": "4500000",
                "includes": [
                    "Extended stay at Enceladus Glacier Base",
                    "Full access to all research facilities and expeditions",
                    "Participation in long-term subsurface ocean studies",
                    "Opportunity to name newly discovered microbial species",
                    "Co-authorship rights on all research conducted during stay"
                ]
            }
        ],
        "spacecraft": {
            "name": "Enceladus Explorer",
            "type": "Specialized ice moon research vessel",
            "capacity": 40,
            "features": [
                "Ice-penetrating radar for subsurface mapping",
                "Cryogenic sample storage and analysis lab",
                "Deployable submersible drones for ocean exploration",
                "Thermal drilling equipment for ice penetration",
                "Advanced life detection instrumentation"
            ]
        },
        "addons": [
            {
                "name": "Enceladus Extreme Environment Kit",
                "price": "200000",
                "features": [
                    "Thermal regulation suit for extreme cold",
                    "Personal ice-penetrating sonar device",
                    "Compact water and ice sample analysis kit",
                    "Emergency crevasse rescue equipment",
                    "Underwater communication device for submersible missions"
                ]
            }
        ],
        "reviews": [
            {
                "user": "IceMoonExplorer",
                "rating": 5,
                "comment": "The cryovolcanic activity is absolutely mesmerizing! Piloting a drone in the subsurface ocean was a once-in-a-lifetime experience."
            },
            {
                "user": "AstrobiologyProf",
                "rating": 4,
                "comment": "Unparalleled opportunities for studying potential extraterrestrial life. The extreme conditions are challenging but well worth it for the scientific discoveries."
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 9, "name": "Europa Station" },
            { "id": 11, "name": "Enceladus Geyser Resort" }
        ]
    },
    {
        "id": 20,
        "name": "Trappist-1e Resort",
        "type": "Exoplanet",
        "distance": "39 light-years",
        "travel_time": "50 years",
        "overview": "Trappist-1e Resort is a breathtaking, potentially habitable exoplanet located in the Trappist-1 system, renowned for its ethereal landscapes and exotic alien biosphere. With its surreal skies and otherworldly terrain, Trappist-1e offers a truly unique escape from Earth. Visitors can experience gravity-assisted treks through its dense, alien jungles, explore bioluminescent forests, and take in the views of its twin suns setting over stunning mountain ranges. The resort is designed to give guests a once-in-a-lifetime opportunity to experience extraterrestrial environments while enjoying luxurious accommodations. Whether you're an adventurer, a nature lover, or someone seeking to witness an untouched alien world, Trappist-1e offers an unparalleled getaway.",
        "features": [
            "Exotic alien biosphere",
            "Ethereal skies with bioluminescence",
            "Gravity-assisted treks through alien jungles",
            "Floating resorts with panoramic views",
            "Bioluminescent flora and fauna tours",
            "Extraterrestrial mineral hot springs"
        ],
        "activities": [
            "Gravity-assisted hiking",
            "Exploring bioluminescent forests at night",
            "Alien flora and fauna photography",
            "Stargazing under Trappist-1's twin suns",
            "Biodome and floating resort tours",
            "Extraterrestrial rock climbing and treks"
        ],
        "images": [
            trappist1e1,
            trappist1e2,
            trappist1e3
        ],
        "price": "1450000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Trappist-1e Adventure",
                "duration": "1 Earth year",
                "price": "2000000",
                "includes": [
                    "Round-trip interstellar travel",
                    "Stay in luxury floating resort accommodations",
                    "Guided gravity-assisted treks through alien jungles",
                    "Exploration of bioluminescent forests",
                    "Exclusive stargazing experience under Trappist-1's twin suns"
                ]
            },
            {
                "name": "Exoplanet Explorer",
                "duration": "2 Earth years",
                "price": "3800000",
                "includes": [
                    "Extended stay at Trappist-1e Resort",
                    "All-inclusive luxury accommodations and activities",
                    "Research expeditions into Trappist-1e's alien biosphere",
                    "Collaborative exploration with astrobiologists and exoplanet researchers",
                    "Participation in alien flora and fauna studies"
                ]
            }
        ],
        "spacecraft": {
            "name": "Stellar Voyager",
            "type": "Exoplanet Exploration Vessel",
            "capacity": 30,
            "features": [
                "Advanced shielding for interstellar travel",
                "Zero-gravity cabins and gravity control systems",
                "Onboard lab for alien biosphere studies",
                "AI-assisted navigation for long-duration travel",
                "Panoramic observation windows for stargazing"
            ]
        },
        "addons": [
            {
                "name": "Trappist-1e Exploration Pack",
                "price": "125000",
                "features": [
                    "Personalized flora and fauna identification tool",
                    "Advanced extraterrestrial photography kit",
                    "Gravity-assisted mobility suit",
                    "Emergency beacon with planetary-wide range",
                    "Biosphere research kit for alien study"
                ]
            }
        ],
        "reviews": [
            {
                "user": "StellarAdventurer",
                "rating": 5,
                "comment": "Trappist-1e is like nothing else in the galaxy. The bioluminescent forests and gravity-assisted treks were otherworldly! The twin suns are mesmerizing."
            },
            {
                "user": "ExoTourist",
                "rating": 4.7,
                "comment": "A truly surreal experience. The floating resorts were luxurious, and exploring the alien biosphere was a once-in-a-lifetime opportunity."
            }
        ],
        "average_rating": 4.85,
        "related_destinations": [
            { "id": 13, "name": "Ganymede Hub" },
            { "id": 14, "name": "Vega Prime" },
            { "id": 9, "name": "Europa Station" }
        ]
    },
    {
        "id": 21,
        "name": "Hyperion Nexus",
        "type": "Asteroid Station",
        "distance": "1.5 billion km",
        "travel_time": "3.5 years",
        "overview": "Hyperion Nexus, a marvel of engineering perched on one of Saturn's most enigmatic moons, offers visitors a unique blend of cutting-edge asteroid mining operations and otherworldly tourism experiences. Built across Hyperion's spectacularly irregular terrains, the station provides unparalleled views of Saturn's rings and a chance to explore one of the most unusual bodies in our solar system. Visitors can witness firsthand the challenges and triumphs of resource extraction in space, participate in pioneering research on low-density bodies, and experience the thrill of near-zero gravity in Hyperion's porous structure. Whether you're a planetary geologist studying the moon's unique composition, an entrepreneur interested in the future of space mining, or an adventure seeker looking to explore one of the solar system's most bizarre landscapes, Hyperion Nexus offers an experience that pushes the boundaries of human habitation and industry in space.",
        "features": [
            "Irregular, unique landscapes",
            "Asteroid mining workshops",
            "Floating micro-gravity areas",
            "Saturn ring observation decks",
            "Porous terrain exploration vehicles",
            "Low-density body research laboratories"
        ],
        "activities": [
            "Micro-gravity geological expeditions",
            "Asteroid mining simulations",
            "Saturn ring photography sessions",
            "Hyperion crater exploration",
            "Low-density physics experiments"
        ],
        "images": [
            hyperionNexus
        ],
        "price": "850000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Hyperion Adventure",
                "duration": "6 Earth months",
                "price": "1200000",
                "includes": [
                    "Round-trip interplanetary travel",
                    "Accommodation in unique low-gravity habitats",
                    "Guided tours of major geological features on Hyperion",
                    "Hands-on experience with asteroid mining equipment",
                    "Exclusive Saturn ring observation sessions"
                ]
            },
            {
                "name": "Saturnian Moon Research Program",
                "duration": "2 Earth years",
                "price": "3500000",
                "includes": [
                    "Extended stay at Hyperion Nexus",
                    "Full access to all research facilities and expeditions",
                    "Participation in long-term studies of Hyperion's structure",
                    "Opportunity to name newly discovered features on Hyperion",
                    "Co-authorship rights on all research conducted during stay"
                ]
            }
        ],
        "spacecraft": {
            "name": "Saturn Surveyor",
            "type": "Saturnian system exploration vessel",
            "capacity": 50,
            "features": [
                "Specialized landing gear for irregular terrains",
                "Advanced sensors for detecting resources in low-density bodies",
                "Modular living quarters adaptable to varying gravity conditions",
                "High-resolution imaging systems for detailed crater mapping",
                "Sample collection and analysis lab for in-situ studies"
            ]
        },
        "addons": [
            {
                "name": "Hyperion Explorer Kit",
                "price": "200000",
                "features": [
                    "Personal propulsion unit for low-gravity navigation",
                    "Portable spectrometer for on-site geological analysis",
                    "Collapsible shelter for extended Hyperion surface stays",
                    "High-power telescope for detailed Saturn ring observations",
                    "Emergency beacon with Saturnian system-wide range"
                ]
            }
        ],
        "reviews": [
            {
                "user": "AsteroidMiner42",
                "rating": 5,
                "comment": "The irregular landscape of Hyperion is unlike anything I've ever seen. The mining workshops gave me incredible insights into future space resource extraction."
            },
            {
                "user": "SaturnRingEnthusiast",
                "rating": 4,
                "comment": "The views of Saturn's rings are breathtaking, but navigating Hyperion's bizarre terrain can be challenging. A truly unique experience for the adventurous!"
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 10, "name": "Titan Base" },
            { "id": 13, "name": "Ganymede Hub" }
        ]
    },
    {
        "id": 22,
        "name": "2054 Space Station",
        "type": "Space Station",
        "location": "Low Earth Orbit (LEO)",
        "distance": "400 km from Earth",
        "travel_time": "2 hours (via modern space shuttles)",
        "overview": "The 2054 Space Station stands as a testament to human ingenuity and international cooperation, serving as a bustling hub for orbital travel, cutting-edge scientific research, and the burgeoning space tourism industry. Positioned in Low Earth Orbit, this next-generation facility offers breathtaking views of our home planet while pushing the boundaries of space exploration and technology. Visitors can experience life in zero gravity, witness groundbreaking experiments in material sciences and biotechnology, and partake in a variety of space-based recreational activities. The station also serves as a crucial waypoint for missions venturing deeper into space, with advanced docking facilities for interplanetary spacecraft. Whether you're a researcher at the forefront of space science, a tourist seeking the ultimate off-world experience, or an aspiring astronaut preparing for long-duration space flights, the 2054 Space Station offers an unparalleled gateway to humanity's future among the stars.",
        "features": [
            "Zero-gravity living quarters with panoramic Earth views",
            "Advanced research labs for material sciences and biotechnology",
            "Space tourism facilities, including a zero-gravity arena",
            "Docking bays for interplanetary spacecraft",
            "Artificial gravity zones for extended stays",
            "State-of-the-art Earth observation equipment",
            "International collaboration zones for global research projects"
        ],
        "activities": [
            "Zero-gravity sports tournaments",
            "Earth observation and photography sessions",
            "Microgravity scientific experiment participation",
            "Space walk experiences with Earth backdrop",
            "Interplanetary mission launch viewings"
        ],
        "images": [
            spacestation2054
        ],
        "price": "75000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Orbital Getaway",
                "duration": "1 Earth week",
                "price": "150000",
                "includes": [
                    "Round-trip shuttle flight to 2054 Space Station",
                    "Accommodation in zero-gravity quarters",
                    "Guided tour of all station facilities",
                    "Participation in a microgravity experiment",
                    "Exclusive Earth observation session from the cupola"
                ]
            },
            {
                "name": "LEO Research Fellowship",
                "duration": "6 Earth months",
                "price": "1000000",
                "includes": [
                    "Extended stay on 2054 Space Station",
                    "Full access to all research facilities",
                    "Collaboration opportunities with international science teams",
                    "Opportunity to conduct personal research project",
                    "Training for and participation in a space walk"
                ]
            }
        ],
        "spacecraft": {
            "name": "Orbital Ascender",
            "type": "Next-gen space shuttle",
            "capacity": 20,
            "features": [
                "Reusable rocket boosters for cost-effective launches",
                "Panoramic viewing dome for Earth observation during ascent and descent",
                "Advanced life support systems for passenger comfort",
                "Automated docking system for seamless station arrival",
                "Emergency re-entry capabilities for maximum safety"
            ]
        },
        "addons": [
            {
                "name": "LEO Explorer Package",
                "price": "50000",
                "features": [
                    "Personalized space suit for space walk experience",
                    "High-resolution camera for Earth photography",
                    "Private session in zero-gravity arena",
                    "Souvenir meteorite fragment from station's collection",
                    "Virtual reality Earth re-entry simulation"
                ]
            }
        ],
        "reviews": [
            {
                "user": "ZeroGScientist",
                "rating": 5,
                "comment": "The research facilities here are unparalleled. Conducting experiments while watching Earth spin below is an indescribable experience."
            },
            {
                "user": "SpaceTourist101",
                "rating": 4,
                "comment": "Floating in zero-G and seeing Earth from space was incredible, but the week-long stay felt too short. I'll definitely be coming back for a longer visit!"
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 3, "name": "International Space Station" },
            { "id": 5, "name": "Starship Genesis" }
        ]
    },
    {
        "id": 23,
        "name": "Oumuamua Cruiser",
        "type": "Interstellar Object",
        "distance": "3 light-years",
        "travel_time": "10 years",
        "overview": "The Oumuamua Cruiser offers an unprecedented journey to humanity's first discovered interstellar object, pushing the boundaries of space exploration beyond our solar system. This groundbreaking expedition allows visitors to study and explore Oumuamua, the mysterious cigar-shaped body that has captured the imagination of scientists and the public alike since its discovery. Participants will have the opportunity to unravel the origins and nature of this enigmatic visitor, potentially providing insights into the formation of other star systems. The cruiser serves as a mobile research station, employing cutting-edge technology to study Oumuamua's composition, trajectory, and any potential signs of artificial origin. Whether you're an astrophysicist eager to study the first confirmed interstellar object up close, an astrobiologist searching for potential biosignatures, or an adventure seeker looking to be among the first humans to venture beyond the heliopause, the Oumuamua Cruiser offers a once-in-a-lifetime opportunity to explore the mysteries of interstellar space.",
        "features": [
            "First interstellar visitor observation deck",
            "Cosmic exploration tours",
            "Gravity slingshot rides",
            "Interstellar medium research laboratories",
            "Long-duration space habitation modules",
            "Advanced propulsion technology showcase"
        ],
        "activities": [
            "Close-up Oumuamua surface mapping",
            "Interstellar object composition analysis",
            "Micro-gravity experiments in true interstellar space",
            "Deep space astronomy sessions",
            "Theoretical xenoarchaeology workshops"
        ],
        "images": [
            oumuamua1,
            oumuamua2,
            oumuamua3
        ],
        "price": "1250000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Interstellar Pioneer Experience",
                "duration": "5 Earth years",
                "price": "3000000",
                "includes": [
                    "Round-trip interstellar travel to Oumuamua",
                    "Accommodation in state-of-the-art long-duration space habitats",
                    "Participation in Oumuamua research missions",
                    "Exclusive use of interstellar observation equipment",
                    "Opportunity to name a feature on Oumuamua"
                ]
            },
            {
                "name": "Oumuamua Research Fellowship",
                "duration": "12 Earth years",
                "price": "8000000",
                "includes": [
                    "Extended mission aboard the Oumuamua Cruiser",
                    "Full access to all research facilities and expeditions",
                    "Leadership role in interstellar object study projects",
                    "Opportunity to author key publications on Oumuamua findings",
                    "Priority status for future interstellar missions"
                ]
            }
        ],
        "spacecraft": {
            "name": "Interstellar Voyager",
            "type": "Long-range interstellar research vessel",
            "capacity": 50,
            "features": [
                "Breakthrough Starshot light sail propulsion system",
                "Advanced shielding against interstellar radiation",
                "Artificial gravity rings for crew health on long journeys",
                "Quantum entanglement communication array for real-time data transmission",
                "Modular research bays adaptable to various scientific pursuits"
            ]
        },
        "addons": [
            {
                "name": "Interstellar Explorer Kit",
                "price": "500000",
                "features": [
                    "Personal quantum computer with interstellar navigation systems",
                    "Handheld multi-spectral analyzer for Oumuamua surface studies",
                    "Custom-designed spacesuit for potential Oumuamua surface excursions",
                    "Augmented reality system for real-time data overlay and analysis",
                    "Personal hibernation pod for optional use during long journey phases"
                ]
            }
        ],
        "reviews": [
            {
                "user": "InterstellarDreamer",
                "rating": 5,
                "comment": "Words can't describe the feeling of seeing an object from another star system up close. This mission has changed my perspective on the universe forever."
            },
            {
                "user": "XenoArchaeologist",
                "rating": 4,
                "comment": "The research opportunities are unparalleled, but be prepared for the psychological challenges of a decade-long mission in interstellar space."
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 24, "name": "Oort Cloud Observatory" },
            { "id": 16, "name": "Barnard's Star Base" }
        ]
    },
    {
        "id": 24,
        "name": "Nebula Station",
        "type": "Space Station",
        "distance": "1.8 light-years",
        "travel_time": "8 years",
        "overview": "Nebula Station, humanity's most distant permanent outpost, floats amidst the cosmic tapestry of a spectacular nebula, offering unparalleled opportunities for stellar observation and cosmic exploration. This advanced facility serves as a crucial waypoint for deep space missions and a premier research center for astrophysics, astrochemistry, and the study of star formation. Visitors to Nebula Station can witness the birth and death of stars, observe the intricate structures of ionized gases and cosmic dust, and conduct cutting-edge research in an environment impossible to replicate elsewhere. The station's unique location also makes it an ideal launch point for probes venturing even deeper into the cosmos. Whether you're an astrophysicist studying stellar evolution, an artist seeking inspiration from the universe's most colorful vistas, or an explorer preparing for humanity's next giant leap into the galaxy, Nebula Station offers a window into the cosmic processes that shape our universe.",
        "features": [
            "Cosmic exploration vehicles",
            "Stellar observation decks",
            "Space-based research laboratories",
            "Nebula composition analysis centers",
            "Gravitational lens imaging equipment",
            "Interstellar medium harvesting facilities"
        ],
        "activities": [
            "Nebula particle collection expeditions",
            "Proto-planetary disk formation studies",
            "Extreme-distance Earth communication experiments",
            "Cosmic ray shower observations",
            "Nebula-based art creation workshops"
        ],
        "images": [
            nebulaStation
        ],
        "price": "900000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Cosmic Wonder Experience",
                "duration": "3 Earth years",
                "price": "2500000",
                "includes": [
                    "Round-trip interstellar travel to Nebula Station",
                    "Accommodation in nebula-view habitation modules",
                    "Participation in nebula exploration missions",
                    "Exclusive use of advanced stellar observation equipment",
                    "Opportunity to name a newly discovered stellar phenomenon"
                ]
            },
            {
                "name": "Deep Space Astrophysics Fellowship",
                "duration": "10 Earth years",
                "price": "7000000",
                "includes": [
                    "Extended stay at Nebula Station",
                    "Full access to all research facilities and deep space missions",
                    "Leadership role in nebula study and stellar formation projects",
                    "Opportunity to author groundbreaking publications on nebula research",
                    "Priority status for future deep space exploration missions"
                ]
            }
        ],
        "spacecraft": {
            "name": "Nebula Voyager",
            "type": "Deep space research and exploration vessel",
            "capacity": 30,
            "features": [
                "Advanced propulsion system for navigating nebula environments",
                "Specialized shielding against intense radiation from young stars",
                "High-resolution spectral imaging systems for detailed nebula analysis",
                "Gravitational wave detectors for studying stellar phenomena",
                "Expandable laboratory modules for diverse astrophysics experiments"
            ]
        },
        "addons": [
            {
                "name": "Cosmic Explorer Package",
                "price": "400000",
                "features": [
                    "Personal nebula exploration suit with enhanced radiation protection",
                    "Portable stellar spectrometer for individual research projects",
                    "Custom-designed quantum computer for complex astrophysical calculations",
                    "Nebula particle collection and analysis kit",
                    "Holographic nebula mapping and navigation system"
                ]
            }
        ],
        "reviews": [
            {
                "user": "StardustScientist",
                "rating": 5,
                "comment": "The views are indescribable, and the research opportunities are endless. Watching stars being born while conducting experiments is a dream come true for any astrophysicist."
            },
            {
                "user": "CosmicArtist",
                "rating": 4,
                "comment": "The colors and patterns of the nebula are beyond imagination, providing infinite inspiration. The long journey and isolation can be challenging, but it's worth it for the unique perspectives gained."
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 25, "name": "Ringworld Expedition" },
            { "id": 23, "name": "Oumuamua Cruiser" }
        ]
    },
    {
        "id": 25,
        "name": "Ringworld Expedition",
        "type": "Hypothetical Megastructure",
        "distance": "Hypothetical",
        "travel_time": "Varies",
        "overview": "The Ringworld Expedition offers an unparalleled journey to a hypothetical megastructure that pushes the boundaries of engineering and imagination. This enormous ring-shaped structure, encircling a star at a distance of one astronomical unit, provides a habitable surface area equivalent to millions of Earths. Visitors to the Ringworld will explore vast artificial landscapes, encounter potentially advanced civilizations, and witness cosmic engineering on a scale beyond human comprehension. The expedition serves as a thought experiment brought to life, allowing scientists, engineers, and visionaries to study the theoretical possibilities of megastructure construction and its implications for the future of human civilization. Whether you're a xenoanthropologist eager to study hypothetical alien societies, an engineer fascinated by the ultimate expression of cosmic architecture, or a science fiction enthusiast living out the dream of exploring a Larry Niven-inspired world, the Ringworld Expedition offers a journey that challenges our understanding of what's possible in the universe.",
        "features": [
            "Megastructure exploration vehicles",
            "Artificial ecosystem research centers",
            "Endless landscape observation decks",
            "Theoretical physics laboratories",
            "Alien civilization contact simulation chambers",
            "Cosmic engineering study facilities"
        ],
        "activities": [
            "Ringworld material analysis expeditions",
            "Artificial gravity manipulation experiments",
            "Simulated first contact scenarios",
            "Megastructure stability calculations",
            "Theoretical alien ecosystem design workshops"
        ],
        "images": [
            ringWorld1,
            ringWorld2
        ],
        "price": "5000000",
        "currency": "Galactic Credits",
        "travel_packages": [
            {
                "name": "Ringworld Pioneer Experience",
                "duration": "5 Earth years",
                "price": "10000000",
                "includes": [
                    "Theoretical travel to the Ringworld (simulation-based)",
                    "Accommodation in diverse Ringworld habitats",
                    "Guided tours of major Ringworld features and civilizations",
                    "Participation in megastructure engineering studies",
                    "Opportunity to design a unique Ringworld landscape"
                ]
            },
            {
                "name": "Cosmic Architecture Fellowship",
                "duration": "10 Earth years",
                "price": "25000000",
                "includes": [
                    "Extended theoretical stay on the Ringworld",
                    "Full access to all research facilities and expeditions",
                    "Leadership role in megastructure design and civilization studies",
                    "Opportunity to author definitive works on Ringworld theory",
                    "Priority status for future theoretical megastructure missions"
                ]
            }
        ],
        "spacecraft": {
            "name": "Niven's Dream",
            "type": "Theoretical megastructure exploration vessel",
            "capacity": 100,
            "features": [
                "Adaptive propulsion system for navigating varied Ringworld environments",
                "Reality alteration chambers for simulating different gravitational conditions",
                "Advanced sensors for detecting and analyzing unknown materials and energies",
                "Holographic reconstruction system for mapping vast Ringworld territories",
                "Theoretical faster-than-light communication array for Ringworld-wide coordination"
            ]
        },
        "addons": [
            {
                "name": "Cosmic Architect Kit",
                "price": "1000000",
                "features": [
                    "Personal reality manipulation device for Ringworld interaction",
                    "Quantum computer with advanced megastructure modeling software",
                    "Theoretical matter-energy converter for resource creation",
                    "Portable wormhole generator for rapid Ringworld transit",
                    "Customizable avatar system for interacting with simulated civilizations"
                ]
            }
        ],
        "reviews": [
            {
                "user": "MegastructureDreamer",
                "rating": 5,
                "comment": "An mind-bending journey that challenges everything you thought you knew about cosmic engineering and the limits of civilization. The simulations are incredibly immersive!"
            },
            {
                "user": "TheoreticalXenobiologist",
                "rating": 4,
                "comment": "The potential for studying hypothetical ecosystems and civilizations is unmatched. However, the constant reminder that it's all theoretical can be a bit disappointing for those hoping for a 'real' experience."
            }
        ],
        "average_rating": 4.5,
        "related_destinations": [
            { "id": 24, "name": "Nebula Station" },
            { "id": 23, "name": "Oumuamua Cruiser" }
        ]
    }
]

export default desData;