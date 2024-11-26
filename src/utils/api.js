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
        "overview": "An Earth-like exoplanet with oceans and artificial gravity.",
        "features": [
            "Earth-like gravity",
            "Stunning blue oceans",
            "Habitable zones"
        ],
        "images": [
            kepler22b
        ],
        "price": "1000000"
    },
    {
        "id": 2,
        "name": "Lunar Colony",
        "type": "Moon Base",
        "distance": "384,400 km",
        "travel_time": "3 days",
        "overview": "A luxurious colony on Earth's Moon with cutting-edge amenities.",
        "features": [
            "Lunar domes",
            "Zero-gravity dining",
            "Breathtaking Earth views"
        ],
        "images": [
            lunarColony
        ],
        "price": "500000"
    },
    {
        "id": 3,
        "name": "International Space Station",
        "type": "Space Station",
        "distance": "408 km",
        "travel_time": "6 hours",
        "overview": "The International Space Station offers a unique microgravity experience and awe-inspiring views of Earth.",
        "features": [
            "Microgravity experience",
            "Stunning Earth views",
            "Advanced scientific labs"
        ],
        "images": [
            iss
        ],
        "price": "250000"
    },
    {
        "id": 4,
        "name": "Alpha Centauri Bb",
        "type": "Exoplanet",
        "distance": "4.37 light-years",
        "travel_time": "20 years",
        "overview": "A rocky planet in the Alpha Centauri system, known for its striking red sunsets and uncharted landscapes.",
        "features": [
            "Unique red-star sunsets",
            "Rocky terrain",
            "Uncharted landscapes"
        ],
        "images": [
            alphaCentauriBb
        ],
        "price": "800000"
    },
    {
        "id": 5,
        "name": "Starship Genesis",
        "type": "Interstellar Craft",
        "distance": "Orbiting Earth",
        "travel_time": "Immediate",
        "overview": "A futuristic spacecraft designed for luxury interstellar travel, featuring advanced AI and private cabins.",
        "features": [
            "Private cabins",
            "Zero-gravity lounges",
            "State-of-the-art AI navigation"
        ],
        "images": [
            starship
        ],
        "price": "150000"
    },
    {
        "id": 6,
        "name": "Kepler-186f",
        "type": "Exoplanet",
        "distance": "500 light-years",
        "travel_time": "30 years",
        "overview": "A terrestrial exoplanet with red-tinted forests and potential signs of alien civilization.",
        "features": [
            "Red-tinted forests",
            "Rocky terrains",
            "Potential alien ruins"
        ],
        "images": [
            kepler186f1,
            kepler186f2
        ],
        "price": "900000"
    },
    {
        "id": 7,
        "name": "Resolute Base",
        "type": "Space Station",
        "distance": "1.8 light-years",
        "travel_time": "8 years",
        "overview": "A cutting-edge space station serving as a hub for interstellar expeditions and repairs.",
        "features": [
            "Artificial gravity",
            "Central hub for expeditions",
            "Advanced repair docks"
        ],
        "images": [
            resoluteBase1,
            resoluteBase2,
            resoluteBase3
        ],
        "price": "600000"
    },
    {
        "id": 8,
        "name": "Mars Habitat",
        "type": "Planet Base",
        "distance": "225 million km",
        "travel_time": "9 months",
        "overview": "A self-sustaining habitat on Mars, perfect for exploring red deserts and iconic canyons like Valles Marineris.",
        "features": [
            "Self-sustaining domes",
            "Martian hiking trails",
            "Stunning sunsets"
        ],
        "images": [
            mars
        ],
        "price": "700000"
    },
    {
        "id": 9,
        "name": "Europa Station",
        "type": "Moon Base",
        "distance": "628.3 million km",
        "travel_time": "18 months",
        "overview": "A state-of-the-art research station on Europa, Jupiter's icy moon, renowned for its underground oceans and potential life forms.",
        "features": [
            "Access to subsurface oceans",
            "Icy landscapes",
            "Astrobiology research opportunities"
        ],
        "images": [
            europaBase1,
            europaBase2
        ],
        "price": "850000"
    },
    {
        "id": 10,
        "name": "Titan Base",
        "type": "Moon Base",
        "distance": "1.2 billion km",
        "travel_time": "3 years",
        "overview": "A bustling base on Titan, Saturn's largest moon, known for its thick orange atmosphere and methane lakes.",
        "features": [
            "Methane lake cruises",
            "Thick orange skies",
            "Unique low-gravity experiences"
        ],
        "images": [
            titanBase1,
            titanBase2
        ],
        "price": "950000"
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
        "overview": "An exoplanet orbiting the nearest star to Earth, offering extreme terrain and beautiful auroras.",
        "features": [
            "Intense star-lit skies",
            "Exotic terrain",
            "Alien auroras"
        ],
        "images": [
            proximaCentauriB1,
            proximaCentauriB2

        ],
        "price": "1150000"
    },
    {
        "id": 13,
        "name": "Ganymede Hub",
        "type": "Moon Base",
        "distance": "628.3 million km",
        "travel_time": "18 months",
        "overview": "The largest moon in the solar system, Ganymede offers underground ocean exploration and vibrant auroras.",
        "features": [
            "Underground ocean tours",
            "Dome observatories",
            "Jovian auroras"
        ],
        "images": [
            ganymedeBase
        ],
        "price": "780000"
    },
    {
        "id": 14,
        "name": "Vega Prime",
        "type": "Space Station",
        "distance": "25 light-years",
        "travel_time": "50 years",
        "overview": "A high-tech station orbiting the bright star Vega, offering stunning interstellar vistas and futuristic luxuries.",
        "features": [
            "360° space views",
            "Artificial ecosystems",
            "Interstellar observation decks"
        ],
        "images": [
            vegaPrime
        ],
        "price": "1250000"
    },
    {
        "id": 15,
        "name": "Kepler-452b",
        "type": "Exoplanet",
        "distance": "1,400 light-years",
        "travel_time": "60 years",
        "overview": "Nicknamed Earth’s cousin, this planet offers lush greenery and spectacular sunsets under a brighter star.",
        "features": [
            "Bright star-lit landscapes",
            "Dense forests",
            "Breathtaking sunsets"
        ],
        "images": [
            kepler452b1,
            kepler452b2
        ],
        "price": "1300000"
    },
    {
        "id": 16,
        "name": "Barnard's Star Base",
        "type": "Space Station",
        "distance": "6 light-years",
        "travel_time": "25 years",
        "overview": "A futuristic base orbiting Barnard's Star, offering unique scientific experiences and quiet solitude.",
        "features": [
            "Remote solitude",
            "Interstellar stargazing",
            "Cutting-edge labs"
        ],
        "images": [
            barnardsStarBase
        ],
        "price": "1100000"
    },
    {
        "id": 17,
        "name": "Ceres Outpost",
        "type": "Dwarf Planet Base",
        "distance": "413 million km",
        "travel_time": "14 months",
        "overview": "An outpost on Ceres, the largest asteroid, featuring mysterious ice geysers and vast craters.",
        "features": [
            "Ice geyser tours",
            "Asteroid mining expeditions",
            "Massive crater views"
        ],
        "images": [
            ceres
        ],
        "price": "600000"
    },
    {
        "id": 18,
        "name": "Wormhole Gateway Station",
        "type": "Space Hub",
        "location": "Near Sagittarius A*",
        "distance": "26,000 light-years from Earth",
        "travel_time": "Approximately 50 years (using current propulsion systems)",
        "overview": "A futuristic station that controls access to nearby wormholes, facilitating fast intergalactic travel. Known for its advanced navigation systems and warp tech.",
        "features": [
            "Control center for nearby wormholes",
            "Highly advanced navigation technology",
            "Secure docking and refueling stations",
            "Research opportunities in space-time manipulation"
        ],
        "images": [
            wormhole
        ],
        "price": "5000000"
    },
    {
        "id": 19,
        "name": "Enceladus Glacier Base",
        "type": "Moon Base",
        "distance": "1.27 billion km",
        "travel_time": "3 years",
        "overview": "Located on Saturn's moon Enceladus, this base offers a front-row seat to its spectacular ice geysers.",
        "features": [
            "Crystal-clear ice caverns",
            "Geyser eruptions",
            "Stunning Saturn views"
        ],
        "images": [
            enceladus
        ],
        "price": "900000"
    },
    {
        "id": 20,
        "name": "Trappist-1e Resort",
        "type": "Exoplanet",
        "distance": "39 light-years",
        "travel_time": "50 years",
        "overview": "A potentially habitable exoplanet in the Trappist-1 system, with alien flora and surreal landscapes.",
        "features": [
            "Exotic alien biosphere",
            "Ethereal skies",
            "Gravity-assisted treks"
        ],
        "images": [
            trappist1e1,
            trappist1e2,
            trappist1e3
        ],
        "price": "1450000"
    },
    {
        "id": 21,
        "name": "Hyperion Nexus",
        "type": "Asteroid Station",
        "distance": "1.5 billion km",
        "travel_time": "3.5 years",
        "overview": "A mining and tourism station built on Hyperion, one of Saturn's moons, featuring spectacular irregular terrains.",
        "features": [
            "Irregular, unique landscapes",
            "Asteroid mining workshops",
            "Floating micro-gravity areas"
        ],
        "images": [
            hyperionNexus
        ],
        "price": "850000"
    },
    {
        "id": 22,
        "name": "2054 Space Station",
        "type": "Space Station",
        "location": "Low Earth Orbit (LEO)",
        "distance": "400 km from Earth",
        "travel_time": "2 hours (via modern space shuttles)",
        "overview": "A next-generation space station serving as a bustling hub for orbital travel, scientific research, and international collaboration in the year 2054.",
        "features": [
            "Zero-gravity living quarters with panoramic Earth views",
            "Advanced research labs for material sciences and biotechnology",
            "Space tourism facilities, including a zero-gravity arena",
            "Docking bays for interplanetary spacecraft",
            "Artificial gravity zones for extended stays"
        ],
        "images": [
            spacestation2054
        ],
        "price": "75000"
    },
    {
        "id": 23,
        "name": "Oumuamua Cruiser",
        "type": "Interstellar Object",
        "distance": "3 light-years",
        "travel_time": "10 years",
        "overview": "A unique journey to the mysterious interstellar object Oumuamua, offering a rare experience beyond our solar system.",
        "features": [
            "First interstellar visitor",
            "Cosmic exploration tours",
            "Gravity slingshot rides"
        ],
        "images": [
            oumuamua1,
            oumuamua2,
            oumuamua3
        ],
        "price": "1250000"
    },
    {
        "id": 24,
        "name": "Nebula Station",
        "type": "Space Station",
        "distance": "1.8 light-years",
        "travel_time": "8 years",
        "overview": "A space station positioned near a spectacular nebula, offering cosmic exploration and stellar observation.",
        "features": [
            "Cosmic exploration",
            "Stellar observation decks",
            "Space-based research"
        ],
        "images": [
            nebulaStation
        ],
        "price": "900000"
    },
    {
        "id": 25,
        "name": "Ringworld Expedition",
        "type": "Hypothetical Megastructure",
        "distance": "Hypothetical",
        "travel_time": "Varies",
        "overview": "A tour of a futuristic Ringworld, an enormous megastructure encircling a star, offering unparalleled sights and experiences.",
        "features": [
            "Megastructure exploration",
            "Artificial ecosystems",
            "Endless landscapes"
        ],
        "images": [
            ringWorld1,
            ringWorld2
        ],
        "price": "5000000"
    }
]


export default desData;