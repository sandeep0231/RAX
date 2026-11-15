import heroRaftingImg from '../assets/images/hero_ganga_rafting_1794728901561.jpg';
import bungeeJumpImg from '../assets/images/bungee_canyon_jump_1794728901702.jpg';
import riversideCampImg from '../assets/images/riverside_alpine_camp_1794728902036.jpg';
import flyingFoxImg from '../assets/images/flying_fox_zipline_1794728902996.jpg';
import kayakingImg from '../assets/images/waterfall_trek_kayaking_1794728903663.jpg';
import waterfallTrekImg from '../assets/images/mountain_waterfall_trek_1794728903771.jpg';

import type {
  AdventureActivity,
  ComboPackage,
  CompanyInfo,
  FAQItem,
  GalleryImage,
  HeroStat,
  NavItem,
  RishikeshRegion,
  SafetyStandard,
  Testimonial,
  WhyChooseItem,
} from '../types';

export const heroMedia = {
  bannerImage: heroRaftingImg,
  bannerAlt: 'White water river rafting team paddling through sunlit emerald Ganga rapids in Rishikesh',
};

export const navigationItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Adventures', path: '/adventures' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
];

export const companyInfo: CompanyInfo = {
  name: 'Rishikesh Adventure X',
  tagline: 'Certified Himalayan River & Mountain Outfitter',
  description:
    'Operating across Tapovan and Shivpuri along the sacred Ganga waters. Uttarakhand certified Himalayan outfitter combining world-class rafting, bungee expeditions, alpine mountaineering, and sustainable riverside stays.',
  address: 'Main Badrinath Rd, Tapovan / Shivpuri, Rishikesh, Uttarakhand 249192',
  phonePrimary: '+91 81789 18115',
  phoneSecondary: '+91 81789 18115',
  whatsappNumber: '+91 81789 18115',
  rescueHotline: '+91 81789 18115',
  email: 'bookings@rishikeshadventurex.com',
  operatingHours: 'Daily 06:30 AM – 08:30 PM IST',
  firstLaunchTime: '07:15 AM Shivpuri Put-In',
  establishedYear: 2012,
  riverDischarge: '14,200 cfs',
  gangesLevel: 'Optimal / 340 cumecs',
  weatherSummary: '22°C Clear Himalayan Skies',
  socialLinks: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
  },
};

export const heroStats: HeroStat[] = [
  { id: 'stat-1', value: '50,000+', label: 'Happy Adventurers' },
  { id: 'stat-2', value: '100%', label: 'Safety Track Record' },
  { id: 'stat-3', value: '25+', label: 'Certified Instructors' },
  { id: 'stat-4', value: '4.9 / 5', label: 'Verified Guest Reviews' },
];

export const adventureActivities: AdventureActivity[] = [
  {
    id: 'ganga-white-water-rafting',
    title: 'Marine Drive to Laxman Jhula Rafting',
    slug: 'ganga-white-water-rafting',
    category: 'River Rafting',
    shortDescription:
      'Conquer Class III and IV rapids including Three Blind Mice, The Wall, Roller Coaster, and Golf Course with cliff jumping.',
    description:
      'Starting from the sandy put-in at Marine Drive 26 kilometers upstream of Rishikesh, this signature Himalayan river expedition delivers thrilling white-water hydrology through emerald canyons. Guided by IRF Level-3 certified river captains, your crew navigates ten roaring rapids including Three Blind Mice, Cross Fire, The Wall, and Roller Coaster, with calm canyon stretches for supervised body surfing and a 25-foot cliff jump stop at Mohan Chatti.',
    image: heroRaftingImg,
    gallery: [heroRaftingImg, kayakingImg, riversideCampImg, waterfallTrekImg],
    price: 1899,
    originalPrice: 2499,
    priceUnit: 'per person',
    duration: '4.5 Hours',
    location: 'Marine Drive to Tapovan',
    difficulty: 'Moderate',
    gradeBadge: 'CLASS III / IV+',
    featured: true,
    distanceOrHeight: '26 Kilometers',
    ageLimit: '14 – 60 Years',
    highlights: [
      '10 High-Volume Himalayan Rapids including The Wall (Class IV)',
      'Supervised 25 ft Mohan Chatti Cliff Jump into deep emerald waters',
      'Dedicated IRF Rescue Safety Kayaker shadowing every raft',
      'Body surfing stretches in tranquil sunlit canyon eddies',
    ],
    inclusions: [
      'IRF / WRT Level-3 Certified River Guide & Safety Brief',
      'CE-Approved High-Buoyancy Type V Life Jacket & Pro-Vent Helmet',
      'Carbon-reinforced paddles & waterproof dry-bag for essentials',
      'Accompanying safety rescue kayaker throughout the descent',
      'Shuttle transport from Tapovan Basecamp to Marine Drive put-in',
    ],
    exclusions: [
      'Personal GoPro video & HD photo package (available at basecamp)',
      'Personal medical or comprehensive travel insurance',
      'Meals or hot chai breaks at riverside shacks after landing',
      'Thermal wetsuits during peak winter months (optional rental)',
    ],
    safetyInformation:
      'Non-swimmers are welcome on the Marine Drive stretch. Our high-buoyancy CE-certified life jackets keep participants safely afloat through heavy wave trains. Every expedition opens with a mandatory 20-minute dry-land briefing covering flip-drill recovery, throw-bag rescue, and paddle command synchrony.',
    importantInstructions: [
      'Wear quick-dry athletic shorts, t-shirt, and secure strapped sandals or water shoes.',
      'Avoid loose jewelry, spectacles without straps, or heavy cotton denim.',
      'Guests with severe heart conditions, recent fractures, or pregnancy cannot participate.',
      'Report to Tapovan Basecamp 30 minutes prior to your selected departure wave.',
    ],
    routeSegments: [
      { label: 'Three Blind Mice', range: 'KM 0 – 6', grade: 'Grade III' },
      { label: 'The Wall', range: 'KM 7 – 12', grade: 'Grade IV' },
      { label: 'Cross Fire', range: 'KM 13 – 17', grade: 'Grade III+' },
      { label: 'Roller Coaster', range: 'KM 18 – 22', grade: 'Grade IV' },
      { label: 'Golf Course', range: 'KM 23 – 26', grade: 'Grade III+' },
    ],
  },
  {
    id: 'bungee-jump-rishikesh',
    title: '83m Cantilever Bungee Jump',
    slug: 'bungee-jump-rishikesh',
    category: 'Bungee & Extreme',
    shortDescription:
      'Step off India’s highest fixed steel cantilever platform suspended 83 meters above a lush Himalayan river gorge.',
    description:
      'Engineered to New Zealand safety standards in the dramatic rocky canyon of Mohan Chatti, this 83-meter free-fall plunge delivers pure vertical adrenaline above the Hall River tributary. Our internationally trained jump masters inspect dual-redundant harnesses and calibrated latex cords before every leap, ensuring an unforgettable rebound followed by a calm recovery trek back up the canyon.',
    image: bungeeJumpImg,
    gallery: [bungeeJumpImg, flyingFoxImg, heroRaftingImg, waterfallTrekImg],
    price: 3750,
    originalPrice: 4200,
    priceUnit: 'per jump',
    duration: '1.5 Hours',
    location: 'Mohan Chatti, Rishikesh',
    difficulty: 'Extreme',
    gradeBadge: '83M PLATFORM',
    featured: true,
    distanceOrHeight: '83 Meters Height',
    ageLimit: '14 – 50 Years',
    highlights: [
      'India’s iconic 83-meter fixed cantilever gorge jump platform',
      'Operated under strict New Zealand & SANZ technical protocols',
      'Triple-checked ankle & full-body backup harness architecture',
      'Official Dare-to-Jump completion badge and certificate',
    ],
    inclusions: [
      'Certified Jump Master briefing & precision weight calibration',
      'Ankle harness, body harness, and dual-lock carabiner rigging',
      'Guided recovery trail walk from the river landing zone',
      'Printed Courage Certificate signed by the Chief Jump Master',
    ],
    exclusions: [
      'Private DSLR & wrist-cam action video package',
      'Hotel pickup/drop from Tapovan (shuttle available on request)',
      'Entry ticket for accompanying non-jumping spectators',
    ],
    safetyInformation:
      'Every bungee cord is serialized, tracked per jump count, and retired well ahead of manufacturer lifecycle limits. Jumpers must weigh between 40 kg and 110 kg and pass a brief blood-pressure and medical screening at the canyon deck.',
    importantInstructions: [
      'Wear laced sneakers or closed sports shoes; flip-flops are prohibited on the deck.',
      'Empty all pockets completely prior to harness inspection.',
      'Disclose any spine, knee, cardiac, or high-blood-pressure conditions to medics.',
      'Arrive at least 45 minutes before your booked slot for weigh-in.',
    ],
  },
  {
    id: 'luxury-riverside-camping',
    title: 'Luxury Shivpuri Riverside & Mountain Camp',
    slug: 'luxury-riverside-camping',
    category: 'Camping',
    shortDescription:
      'Sleep beside the shimmering white sands of the Ganga in weatherproof Swiss dome tents with bonfire dinners and morning yoga.',
    description:
      'Tucked away on a secluded bend in Shivpuri surrounded by dense sal forests and emerald Himalayan peaks, our eco-friendly riverside encampment blends wilderness immersion with genuine comfort. Enjoy attached-washroom Swiss luxury tents, freshly cooked Garhwali & North Indian buffet meals, acoustic evening bonfires under crisp starlight, beach volleyball, and guided sunrise meditation beside the river.',
    image: riversideCampImg,
    gallery: [riversideCampImg, waterfallTrekImg, heroRaftingImg, kayakingImg],
    price: 2200,
    originalPrice: 2800,
    priceUnit: 'per night',
    duration: '2 Days / 1 Night',
    location: 'Shivpuri Sand Valley',
    difficulty: 'Beginner',
    gradeBadge: 'ALL MEALS INCL.',
    featured: true,
    distanceOrHeight: '380m Riverfront',
    ageLimit: 'All Ages Welcome',
    highlights: [
      'Spacious Swiss canvas cottages & geodesic dome tents with comfortable beds',
      'All-inclusive Breakfast, Lunch, Evening Snacks & Hot Dinner Buffet',
      'Crackling riverfront bonfire with live acoustic guitar sessions',
      'Beach volleyball, badminton, and guided sunrise pranayama yoga',
    ],
    inclusions: [
      '1 Night accommodation in twin/triple/quad Swiss luxury tents',
      '4 fresh meals (Lunch, Evening Tea/Pakoras, Dinner, Morning Breakfast)',
      'Evening bonfire gathering & campsite outdoor games',
      '24-hour solar backup lighting and purified drinking water stations',
    ],
    exclusions: [
      '16 KM or 26 KM white water rafting add-on (discounted for camp guests)',
      'Private riverside transfers from Rishikesh bus stand or Jolly Grant airport',
      'Personal snacks and packaged beverages',
    ],
    safetyInformation:
      'Our Shivpuri campsite sits safely above seasonal high-water marks with 24/7 trained camp marshals on duty. First-aid kits, snake-proof perimeter lighting, and emergency vehicle access to Tapovan are maintained year-round.',
    importantInstructions: [
      'Standard check-in is 12:00 PM; check-out is 10:00 AM the following morning.',
      'Carry a light fleece jacket between October and March for cool river breezes.',
      'Zero single-use plastic policy—reusable steel bottles are provided at check-in.',
      'Valid government photo ID is mandatory for all adult guests at registration.',
    ],
  },
  {
    id: 'flying-fox-zipline',
    title: 'Flying Fox & 1 KM Mega Zipline',
    slug: 'flying-fox-zipline',
    category: 'Bungee & Extreme',
    shortDescription:
      'Soar horizontally at up to 140 km/h across a 1-kilometer dual-steel cable suspended high above the Ganges valley.',
    description:
      'Feel the sensation of true mountain flight as you launch from an elevated Himalayan ridge and glide 1 kilometer across the emerald river valley. Available in solo Superman posture or tandem three-person formation, our European EN-certified trolley and automated magnetic braking system deliver smooth acceleration and panoramic 360-degree views of forested slopes and curling river rapids below.',
    image: flyingFoxImg,
    gallery: [flyingFoxImg, bungeeJumpImg, waterfallTrekImg, heroRaftingImg],
    price: 1999,
    originalPrice: 2500,
    priceUnit: 'per flight',
    duration: '1 Hour',
    location: 'Mohan Chatti Gorge',
    difficulty: 'Moderate',
    gradeBadge: '140 KM/H SPEED',
    featured: true,
    distanceOrHeight: '1,000m Cable Line',
    ageLimit: '12 – 65 Years',
    highlights: [
      'One of Asia’s longest continuous valley zipline cables (1 KM span)',
      'Reach exhilarating glide speeds up to 140 km/h above the river gorge',
      'Fly solo, tandem with a partner, or in a three-flyer squad',
      'Dual-cable redundancy with German magnetic catch-brake technology',
    ],
    inclusions: [
      'Full-body aerodynamic horizontal flight harness & protective helmet',
      'Trolley attachment check by certified high-rope technicians',
      'Return jeep shuttle from landing tower back to dispatch ridge',
    ],
    exclusions: [
      'Helmet-mounted action camera video recording',
      'Refreshments at the canyon ridge café',
    ],
    safetyInformation:
      'All high-tensile galvanized steel cables undergo daily tension checks and ultrasonic fatigue audits. Riders are suspended via dual redundant carabiners rated at 25 kN each.',
    importantInstructions: [
      'Minimum body weight 35 kg; maximum single rider weight 120 kg.',
      'Secure long hair tightly inside the flight helmet.',
      'Closed athletic footwear required; sunglasses must have a retention strap.',
    ],
  },
  {
    id: 'giant-canyon-swing',
    title: 'Giant Himalayan Canyon Swing',
    slug: 'giant-canyon-swing',
    category: 'Bungee & Extreme',
    shortDescription:
      'Free-fall and pendulum swing across an enormous 83-meter canyon arc—solo or strapped side-by-side with a friend.',
    description:
      'Launched from the same 83-meter canyon platform as our signature bungee, the Giant Swing converts a thrilling 3-second vertical drop into a sweeping high-velocity pendulum arc over the misty valley floor. Unlike bungee jumping, you remain upright in a seated chest-and-waist harness—making it ideal for first-timers or pairs wanting to scream together mid-air.',
    image: bungeeJumpImg,
    gallery: [bungeeJumpImg, flyingFoxImg, riversideCampImg],
    price: 3550,
    originalPrice: 3950,
    priceUnit: 'per swing',
    duration: '1 Hour',
    location: 'Mohan Chatti Canyon',
    difficulty: 'Extreme',
    gradeBadge: '83M GIANT ARC',
    featured: false,
    distanceOrHeight: '83 Meters Arc',
    ageLimit: '14 – 55 Years',
    highlights: [
      'Massive 83-meter canyon pendulum sweep over tropical Himalayan foliage',
      'Supports solo or synchronized 2-person tandem harness launches',
      'Gentle deceleration arc without inverted ankle rebound',
    ],
    inclusions: [
      'Petzl full-body upright swing harness & safety helmet',
      'Technical safety briefing and release countdown by jump crew',
      'Winch recovery or short canyon trail ascent after swing completion',
    ],
    exclusions: [
      'Action camera edit & canyon photography package',
      'Transport from Tapovan town center',
    ],
    safetyInformation:
      'Dual dynamic climbing ropes rated to 4,000 kg breaking strength ensure total redundancy throughout the pendulum arc.',
    importantInstructions: [
      'Tandem flyers must have a combined weight under 150 kg.',
      'Avoid heavy meals within 90 minutes prior to your swing slot.',
    ],
  },
  {
    id: 'neer-garh-waterfall-trek',
    title: 'Neer Garh Waterfall Trek & Cliff Rappel',
    slug: 'neer-garh-waterfall-trek',
    category: 'Trekking & Trails',
    shortDescription:
      'Guided uphill Himalayan forest trail navigating multi-tier turquoise waterfalls, plunge pools, and optional rock rappelling.',
    description:
      'Escape the bustle of Rishikesh on a refreshing half-day guided trek through dense oak and rhododendron trails above Tapovan. Follow natural mountain streams up to the upper tiers of Neer Garh Waterfall, swim in crystal-clear emerald rock pools, and practice controlled rock-face rappelling under the watchful eye of our Indian Mountaineering Foundation (IMF) trained trek leaders.',
    image: waterfallTrekImg,
    gallery: [waterfallTrekImg, riversideCampImg, kayakingImg],
    price: 999,
    originalPrice: 1350,
    priceUnit: 'per hiker',
    duration: '4 Hours',
    location: 'Neer Garh, Tapovan',
    difficulty: 'Beginner',
    gradeBadge: 'NATURE TRAIL',
    featured: false,
    distanceOrHeight: '6.5 KM Trail',
    ageLimit: '8 – 65 Years',
    highlights: [
      'Guided access to hidden upper cascade pools away from crowds',
      'Introductory 40 ft waterfall rock-rappelling session with UIAA ropes',
      'Herbal mountain tea & trail energy snacks included at upper meadow',
    ],
    inclusions: [
      'IMF-certified mountain guide & first-aid responder',
      'UIAA climbing harness, descender & helmet for waterfall rappel',
      'Forest conservation entry permit & hot masala chai break',
    ],
    exclusions: [
      'Personal trekking poles (available on request)',
      'Swimwear and quick-dry towel',
    ],
    safetyInformation:
      'Trails can become slick near waterfall spray zones; our guides maintain fixed safety handlines on steeper rock steps and monitor group pacing continuously.',
    importantInstructions: [
      'Wear grippy trail running shoes or hiking boots.',
      'Carry at least 1 liter of water in a reusable bottle.',
      'Bring spare dry clothes if you plan to swim in the emerald plunge pools.',
    ],
  },
  {
    id: 'tandem-kayaking-clinic',
    title: 'Whitewater Kayaking & Eskimo Roll Clinic',
    slug: 'tandem-kayaking-clinic',
    category: 'Kayaking & Group',
    shortDescription:
      'Master river reading, paddle strokes, eddy turns, and Eskimo rolls in individual or tandem kayaks with pro instructors.',
    description:
      'Whether you are stepping into a hard-shell whitewater kayak for the first time or sharpening your Class II/III ferrying technique, our Brahmpuri kayak school puts you one-on-one with veteran Himalayan safety kayakers. Practice wet exits, braces, and rolling in calm emerald lagoons before running gentle riffles along the Ganga.',
    image: kayakingImg,
    gallery: [kayakingImg, heroRaftingImg, waterfallTrekImg],
    price: 3200,
    originalPrice: 3800,
    priceUnit: 'per session',
    duration: '2.5 Hours',
    location: 'Brahmpuri Rapid Sector',
    difficulty: 'Moderate',
    gradeBadge: 'KAYAK SCHOOL',
    featured: false,
    distanceOrHeight: '4 KM Sector',
    ageLimit: '15 – 55 Years',
    highlights: [
      'Low 1:2 instructor-to-paddler coaching ratio for rapid skill gains',
      'Modern rotational-molded creek boats, spray skirts, and carbon paddles',
      'Learn reading river currents, peel-outs, and self-rescue bracing',
    ],
    inclusions: [
      'Complete whitewater kayak kit (boat, spray deck, PFD, helmet, paddle)',
      '2.5 hours of hands-on river instruction by IRF safety kayakers',
      'Shoreline hydration and post-session debrief',
    ],
    exclusions: [
      'Multi-day expedition certification fees',
      'GoPro footage transfer',
    ],
    safetyInformation:
      'Participants must be comfortable floating in moving water with a PFD. Clinics begin in calm flatwater lagoons to build confidence with wet-exit skirt release before entering gentle currents.',
    importantInstructions: [
      'Basic swimming comfort is recommended for solo hard-shell clinics.',
      'Wear snug synthetic activewear under your spray skirt.',
    ],
  },
  {
    id: 'group-adventure-expedition',
    title: 'Ultimate Group Adventure & Cliff Jump Package',
    slug: 'group-adventure-expedition',
    category: 'Kayaking & Group',
    shortDescription:
      'All-in-one group package uniting 16 KM Shivpuri rafting, cliff jumping, riverside Swiss camp stay, and waterfall trekking.',
    description:
      'Designed specifically for college crews, corporate offsites, and adventure friend groups of 4 to 60 explorers, this curated two-day Rishikesh expedition packs maximum Himalayan action into one seamless itinerary. Tackle Shivpuri’s thrilling Grade III+ rapids on Day 1, unwind around a live bonfire at our private sandy beach camp, and greet Day 2 with sunrise yoga and a guided waterfall trek.',
    image: riversideCampImg,
    gallery: [riversideCampImg, heroRaftingImg, waterfallTrekImg, kayakingImg],
    price: 2699,
    originalPrice: 3600,
    priceUnit: 'per person',
    duration: '2 Days / 1 Night',
    location: 'Shivpuri & Tapovan',
    difficulty: 'Beginner',
    gradeBadge: 'GROUP COMBO',
    featured: false,
    distanceOrHeight: '16 KM + Trek',
    ageLimit: '12 – 60 Years',
    highlights: [
      '16 KM Shivpuri to Tapovan white water rafting + 25 ft cliff jump',
      'Overnight stay in luxury riverside camp with all 4 buffet meals',
      'Morning guided trek to hidden Himalayan waterfall & team games',
      'Special automatic group discounts for batches of 6+ adventurers',
    ],
    inclusions: [
      '16 KM Rafting expedition with full safety gear & IRF captain',
      '1 Night Swiss tent stay on quad/triple sharing + bonfire music',
      'All meals (Lunch, Evening Snacks, Dinner, Breakfast)',
      'Guided sunrise meditation & waterfall hike',
    ],
    exclusions: [
      '83m Bungee Jump add-on (available at discounted combo rate)',
      'Intercity transport from Delhi/Dehradun',
    ],
    safetyInformation:
      'Dedicated group coordinators manage raft assignments, camp check-in, and dietary requests so large teams move smoothly with full IRF & IMF safety coverage.',
    importantInstructions: [
      'Group bookings of 10+ guests receive a private raft & dedicated bonfire circle.',
      'Share vegetarian or vegan meal preferences at least 24 hours before arrival.',
    ],
  },
];

export const comboPackages: ComboPackage[] = [
  {
    id: 'combo-adrenaline',
    title: 'Rishikesh Adrenaline Combo',
    duration: '2 DAYS / 1 NIGHT',
    location: 'SHIVPURI & MOHAN CHATTI',
    badgeLabel: 'BESTSELLER · SAVE 30%',
    description:
      'The ultimate high-thrill weekend package. Combines the iconic 16 KM Shivpuri river rafting stretch, 83m Bungee Jump, 25 ft cliff jump, and luxury river beach camping.',
    highlights: [
      '16 KM Grade III/IV Rafting',
      '83m Bungee Jump + Certificate',
      '1 Night Riverside Alpine Camp',
      '3 Buffet Meals & Bonfire Night',
    ],
    originalPrice: 8500,
    price: 5999,
    savingsText: 'SAVE ₹2,501',
    activitySlug: 'bungee-jump-rishikesh',
  },
  {
    id: 'combo-getaway',
    title: 'Weekend Himalayan Getaway',
    duration: '3 DAYS / 2 NIGHTS',
    location: 'TAPOVAN & SHIVPURI',
    badgeLabel: 'NATURE & WATER',
    description:
      'Crafted for nature explorers and mountain hikers. Combine calm river kayaking fundamentals, guided Neer Garh waterfall rappelling, cliff jumping, and two nights under the stars.',
    highlights: [
      'River Kayaking Fundamentals',
      'Neer Garh Waterfall Rappel',
      '2 Nights Riverside Deluxe Camp',
      'Sunrise Himalayan Ridge Hike',
    ],
    originalPrice: 6800,
    price: 4799,
    savingsText: 'SAVE ₹2,001',
    activitySlug: 'group-adventure-expedition',
  },
];

export const whyChooseItems: WhyChooseItem[] = [
  {
    id: 'why-1',
    title: 'CE & UIAA Certified Gear',
    description:
      'Every harness, carabiner, high-buoyancy life vest, and helmet carries valid international certification, inspected after every single descent.',
    iconName: 'verified',
  },
  {
    id: 'why-2',
    title: 'Native River Sherpas',
    description:
      'Our river captains are born by the Ganga and trained by the Nehru Institute of Mountaineering with 10+ years reading Himalayan water shifts.',
    iconName: 'guides',
  },
  {
    id: 'why-3',
    title: 'Flexible Rescheduling',
    description:
      'Weather disruptions or sudden travel changes? Reschedule with zero penalty up to 24 hours prior via instant WhatsApp concierge.',
    iconName: 'flexible',
  },
  {
    id: 'why-4',
    title: 'Eco-First Tourism',
    description:
      'Strict Leave No Trace policy. We organize weekly Namami Gange river cleanups and prohibit single-use plastics across all camps.',
    iconName: 'eco',
  },
];

export const safetyStandards: SafetyStandard[] = [
  {
    id: 'safe-1',
    title: 'IRF Class IV+ River Masters',
    description:
      'All lead guides possess at least 8 seasons on Himalayan glacial rivers, holding active Swift Water Rescue Level 3 credentials.',
    iconName: 'award',
  },
  {
    id: 'safe-2',
    title: 'CE & UIAA Certified Gear',
    description:
      'We exclusively deploy Petzl harnesses, high-buoyancy Stearns life vests, and Hypalon inflatable rafts retired on a strict 24-month cycle.',
    iconName: 'shield',
  },
  {
    id: 'safe-3',
    title: 'Kayak Escort & First Aid',
    description:
      'Every Grade III+ raft run features an accompanying safety kayaker carrying waterproof trauma packs, throw bags, and satellite comms.',
    iconName: 'medical',
  },
  {
    id: 'safe-4',
    title: 'Weather Permit Guarantee',
    description:
      'Monsoon surge or high-wind canyon warnings? We provide 100% free date rescheduling or full permit refunds with zero cancellation penalties.',
    iconName: 'weather',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Ananya Kulkarni',
    initials: 'AK',
    locationAndTrip: 'Bengaluru · 26 KM Rafting Expedition',
    rating: 5,
    quote:
      'The 26 KM Marine Drive rafting was mindblowing! Our river guide Rajesh was super calm even when hitting massive Grade IV waves at The Wall. The dry-land safety briefing gave our first-timer group total confidence.',
  },
  {
    id: 'rev-2',
    name: 'Marcus Schmidt',
    initials: 'MS',
    locationAndTrip: 'Munich · 83m Bungee & Flying Fox',
    rating: 5,
    quote:
      'I was terrified before the 83m bungee leap at Mohan Chatti, but the jump masters were world-class professionals who inspected every harness triple-time. Leaping into the emerald canyon was unforgettable.',
  },
  {
    id: 'rev-3',
    name: 'Rohan Deshmukh',
    initials: 'RD',
    locationAndTrip: 'Mumbai · Shivpuri Riverside Camp',
    rating: 5,
    quote:
      'The Shivpuri camp sits right on a pristine white sand bank. Hot local Garhwali food, starry Himalayan skies, live guitar around the campfire, and zero plastic. Cannot wait to bring our team back next season!',
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Tackling Grade IV Rapids at The Wall',
    category: 'River Rafting',
    location: 'Marine Drive Sector, Rishikesh',
    image: heroRaftingImg,
    caption: 'Crew locking paddles in sync through foaming emerald rollers on the 26 KM descent.',
  },
  {
    id: 'gal-2',
    title: '83m Cantilever Canyon Plunge',
    category: 'Bungee & Aerial',
    location: 'Mohan Chatti Gorge',
    image: bungeeJumpImg,
    caption: 'Suspended high above the forested river gorge from India’s highest bungee deck.',
  },
  {
    id: 'gal-3',
    title: 'Twilight Bonfire on White River Sands',
    category: 'Camping',
    location: 'Shivpuri Beachfront',
    image: riversideCampImg,
    caption: 'Geodesic Swiss canvas domes glowing warmly beside the quiet evening Ganga.',
  },
  {
    id: 'gal-4',
    title: '140 km/h Flying Fox Valley Glide',
    category: 'Bungee & Aerial',
    location: 'Mohan Chatti Ridge',
    image: flyingFoxImg,
    caption: 'Sweeping panoramic canyon flight 120 meters above turquoise Himalayan currents.',
  },
  {
    id: 'gal-5',
    title: 'Technical Kayaking & Safety Escort',
    category: 'River Rafting',
    location: 'Brahmpuri Rapid Bend',
    image: kayakingImg,
    caption: 'Hard-shell whitewater kayaking through boulder gardens in crisp morning light.',
  },
  {
    id: 'gal-6',
    title: 'Neer Garh Multi-Tier Waterfall Trail',
    category: 'Mountain Views',
    location: 'Upper Tapovan Ridge',
    image: waterfallTrekImg,
    caption: 'Trekkers winding past mossy cascades and emerald plunge pools in lush foothills.',
  },
  {
    id: 'gal-7',
    title: 'Corporate & College Rafting Fleet',
    category: 'Group Adventures',
    location: 'Shivpuri Launch Point',
    image: heroRaftingImg,
    caption: 'Multi-raft expeditions coordinated seamlessly for large retreat groups.',
  },
  {
    id: 'gal-8',
    title: 'Sunrise Mist Over Shivpuri Valley',
    category: 'Mountain Views',
    location: 'Shivpuri Foothills',
    image: riversideCampImg,
    caption: 'Dawn breaking over forested Shivalik ridges right outside our riverside camp.',
  },
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'What is the best season for river rafting and camping in Rishikesh?',
    answer:
      'The prime adventure season runs from mid-September through June. Autumn (September–November) offers crystal-clear turquoise water and mild 24°C sunshine, while spring and early summer (February–June) bring exhilarating snowmelt rapids. During the July–August monsoon, river rafting closes per Uttarakhand government norms while mountain treks and select canyon activities continue.',
  },
  {
    id: 'faq-2',
    category: 'rafting',
    question: 'Can non-swimmers safely join river rafting on the Ganga?',
    answer:
      'Yes, over 65% of our rafters are non-swimmers. Our CE-certified Type V high-buoyancy life jackets keep you effortlessly afloat even through heavy white water. Furthermore, every Grade III+ raft is shadowed by a dedicated IRF-certified safety kayaker carrying rescue throw-bags.',
  },
  {
    id: 'faq-3',
    category: 'general',
    question: 'What are the age and weight limits for 83m Bungee Jumping & Giant Swing?',
    answer:
      'Participants must be at least 14 years old (with guardian consent if under 18) and weigh between 40 kg and 110 kg for Bungee Jumping. For the Giant Swing, tandem pairs must stay under a combined weight of 150 kg. Guests with cardiac conditions, recent orthopedic surgery, or pregnancy are advised against high-G aerial jumps.',
  },
  {
    id: 'faq-4',
    category: 'general',
    question: 'What should I pack for riverside camping and rafting in Shivpuri?',
    answer:
      'Pack quick-dry synthetic shorts and t-shirts, strapped river sandals or sports shoes (avoid loose flip-flops), sunscreen, sunglasses with a retainer strap, a reusable water bottle, and a light fleece jacket for cool evenings beside the river between October and March.',
  },
  {
    id: 'faq-5',
    category: 'basecamp',
    question: 'Is there secure vehicle parking and dry locker storage at Tapovan Basecamp?',
    answer:
      'Yes. Our Tapovan Basecamp on Main Badrinath Road provides free gated parking for cars and motorcycles, clean changing rooms, hot showers, and dedicated lockers for phones, wallets, and dry clothes while you are on the river.',
  },
  {
    id: 'faq-6',
    category: 'basecamp',
    question: 'Do we need advance permits for Shivpuri rafting or camping?',
    answer:
      'Uttarakhand Tourism Development Board (UTDB) issues daily river launch permits per raft. When you reserve online or via WhatsApp with Rishikesh Adventure X, we handle all mandatory forest and river permits at zero extra booking fee.',
  },
];

export const rishikeshRegions: RishikeshRegion[] = [
  {
    id: 'reg-1',
    name: 'Tapovan & Laxman Jhula',
    elevation: '372m ASL',
    knownFor: 'Basecamp HQ, Rafting Finish & Cafes',
    description:
      'Our primary dispatch hub near Laxman Jhula offers gear fitting, dry lockers, safety briefings, and swift shuttle access upstream.',
  },
  {
    id: 'reg-2',
    name: 'Shivpuri River Valley',
    elevation: '410m ASL',
    knownFor: '16 KM Rafting Put-In & White Sand Camps',
    description:
      'Renowned for pristine silver river beaches, dense sal forest hillsides, and iconic Grade III rapids like Roller Coaster and Golf Course.',
  },
  {
    id: 'reg-3',
    name: 'Mohan Chatti Canyon',
    elevation: '680m ASL',
    knownFor: '83m Bungee Jump, Giant Swing & Flying Fox',
    description:
      'A dramatic steep-walled Himalayan gorge 22 km from Tapovan housing India’s highest fixed cantilever jump and mega zipline.',
  },
  {
    id: 'reg-4',
    name: 'Neer Garh & Kunjapuri Ridge',
    elevation: '1,645m ASL',
    knownFor: 'Waterfall Treks & Sunrise Himalayan Views',
    description:
      'Cascading forest waterfalls and panoramic ridge trails offering clear morning views of snow-capped Swargarohini and Chaukhamba peaks.',
  },
];
