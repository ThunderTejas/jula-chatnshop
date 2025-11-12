// FIX: Removed self-import of 'Product' which was causing a name conflict.
export type Price = 
  | { type: 'normal'; value: string; cents?: string }
  | { type: 'from'; value: string; cents: string }
  | { type: 'sale'; current: string; original: string; save: string }
  | { type: 'julaClubSale'; current: string; original: string; save: string };

export interface Product {
  id: number;
  image: string;
  badge?: { text: string; type: 'red' | 'yellow' | 'orange' };
  name: string;
  brand: string;
  rating: number;
  reviews: number;
  price: Price;
  features: string[];
  availability: {
    online: boolean;
    stores: boolean;
    storeCount?: number;
    moreOptions?: boolean;
    moreOptionsText?: string;
  };
  infoSheet?: { label: string };
  category: string;
}

const products: Product[] = [
    // From PopularProducts
    {
        id: 12,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/149392/50137?lastmodified=20250516103916',
        badge: { text: 'Smart Choice', type: 'red' },
        name: 'Lifelike Christmas tree 210 cm',
        brand: 'EQUIP',
        rating: 4.5,
        reviews: 436,
        price: { type: 'normal', value: '999.-' },
        features: ['Lots of Christmas atmosphere for the money', '2640 dense branches', 'With Christmas tree foot'],
        availability: { online: true, stores: true, storeCount: 72 },
        category: 'Christmas'
    },
    {
        id: 13,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/79883/50137?lastmodified=20250516102922',
        name: 'Wireless weather station',
        brand: 'Marquant',
        rating: 3.5,
        reviews: 1313,
        price: { type: 'sale', current: '149.-', original: '299.-', save: 'Save 150.-' },
        features: ['Easy-to-read color display', 'Shows indoor/outdoor temperature', 'Measures humidity/air pressure'],
        availability: { online: true, stores: true, storeCount: 71 },
        category: 'Home and Household'
    },
    {
        id: 14,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/132210/50137?lastmodified=20250516104132',
        badge: { text: 'Smart Choice', type: 'red' },
        name: 'Light loop LED 50 m IP44',
        brand: 'EQUIP',
        rating: 4.5,
        reviews: 189,
        price: { type: 'normal', value: '299.-' },
        features: ['500 amber lamps', 'Double timer'],
        availability: { online: true, stores: true, storeCount: 72 },
        category: 'Lighting'
    },
    {
        id: 4, 
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/90857/50137?lastmodified=20250516103035',
        badge: { text: 'Christmas lowest price!', type: 'yellow' },
        name: 'LED luminaire 5000 lm 44 W 123 cm',
        brand: 'Connect',
        rating: 4.5,
        reviews: 3406,
        price: { type: 'normal', value: '299.-' },
        features: ['Integrated and strong light source', 'Can be connected further', 'D marked'],
        availability: { online: true, stores: true, storeCount: 72 },
        infoSheet: { label: 'E' },
        category: 'Lighting'
    },
    {
        id: 1, 
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/120523/50137?lastmodified=20250516104218',
        name: 'Light garland 31 V 5 m IP44',
        brand: 'EQUIP | Connectable System',
        rating: 4,
        reviews: 79,
        price: { type: 'sale', current: '209.-', original: '299.-', save: 'Save 90.-' },
        features: ['80 warm white lamps', 'Add-on bar'],
        availability: { online: true, stores: true, storeCount: 72 },
        infoSheet: { label: 'F' },
        category: 'Lighting'
    }, //original
    // From TrainingCarousel
    {
        id: 7,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/150244/50137?lastmodified=20250516104231',
        name: 'Adjustable dumbbell 2-22 kg 42x21x23 cm',
        brand: 'Kayoba',
        rating: 4.5,
        reviews: 61,
        price: { type: 'julaClubSale', current: '999.-', original: '1,799.-', save: 'Save 800.-' },
        features: ['15 weight levels: 2-22 kg', 'Rubberized grip surface', 'With practical platform'],
        availability: { online: true, stores: true, storeCount: 56 },
        category: 'Training'
    },
    {
        id: 8,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/4601/50137?lastmodified=20250516093521',
        name: 'Multigym for versatile home training',
        brand: 'Kayoba',
        rating: 4,
        reviews: 63,
        price: { type: 'sale', current: '2,999.-', original: '3,999.-', save: 'Save 1,000.-' },
        features: ['Exercises the whole body', 'Perfect training at home', '50 kg weight magazine'],
        availability: { online: true, stores: true, storeCount: 52 },
        category: 'Training'
    },
    {
        id: 9,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/47106/50137?lastmodified=20250516101957',
        name: 'Dumbbell set 19 kg',
        brand: 'Kayoba',
        rating: 4.5,
        reviews: 336,
        price: { type: 'normal', value: '299.-' },
        features: ['Plastic-covered concrete weights', 'Smooth metal bars', 'Contains 10 weights'],
        availability: { online: true, stores: true, storeCount: 71 },
        category: 'Training'
    },
    {
        id: 10,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/251258/50137?lastmodified=20250516105129',
        badge: { text: 'Newness', type: 'orange' },
        name: 'Treadmill with slope 18 km/h',
        brand: 'Kayoba',
        rating: 4,
        reviews: 2,
        price: { type: 'sale', current: '5,999.-', original: '7,999.-', save: 'Save 2,000.-' },
        features: ['12 training programmes', 'Collapsible', 'Large running surface – 140x46 cm'],
        availability: { online: true, stores: true, storeCount: 20 },
        category: 'Training'
    },
    {
        id: 11,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/250951/50137?lastmodified=20250516105129',
        badge: { text: 'Newness', type: 'orange' },
        name: 'Treadmill 12 km/h',
        brand: 'Kayoba',
        rating: 5,
        reviews: 1,
        price: { type: 'sale', current: '3,999.-', original: '4,999.-', save: 'Save 1,000.-' },
        features: ['15 training programmes', 'Collapsible', 'Running surface: 120x45 cm'],
        availability: { online: true, stores: true, storeCount: 12 },
        category: 'Training'
    },
    // From BikeCarousel
    {
        id: 16,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/256949/50137?lastmodified=20250516105152',
        name: 'Trick scooter',
        brand: 'Kayoba',
        rating: 5,
        reviews: 7,
        price: { type: 'normal', value: '499.-' },
        features: ['Rubberized handles', 'Footbrake', 'Ø10 cm wheels with ABEC-7 ball bearings'],
        availability: { online: true, stores: true, storeCount: 72 },
        category: 'Leisure'
    },
    {
        id: 17,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/242323/50137?lastmodified=20250516104958',
        name: 'BMX Bike 20"',
        brand: 'Kayoba',
        rating: 4.5,
        reviews: 9,
        price: { type: 'normal', value: '2,499.-' },
        features: ['High strength steel frame', 'Precision braking system', '360° rotatable handlebar'],
        availability: { online: true, stores: true, storeCount: 72 },
        category: 'Leisure'
    },
    {
        id: 18,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/194029/50137?lastmodified=20250516104733',
        name: 'Mountain bike 24"',
        brand: 'Kayoba | Trance 3.0',
        rating: 5,
        reviews: 7,
        price: { type: 'normal', value: '4,499.-' },
        features: ['21 gears – Shimano Tourney TX', 'Disc brakes and sports saddle', 'Damped front fork'],
        availability: { online: true, stores: true, storeCount: 72 },
        category: 'Leisure'
    },
    {
        id: 19,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/239511/50137?lastmodified=20250516104942',
        name: 'Balance cycle 12"',
        brand: 'Kayoba',
        rating: 4.5,
        reviews: 17,
        price: { type: 'normal', value: '499.-' },
        features: ['Practices the bike balance', 'Suitable for ages 3-6 years'],
        availability: { online: true, stores: true, storeCount: 72 },
        category: 'Leisure'
    },
    {
        id: 20,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/256291/50137?lastmodified=20250811053806',
        name: 'Mountain bike 26"',
        brand: 'Kayoba | Mystic 2.0',
        rating: 4.5,
        reviews: 22,
        price: { type: 'normal', value: '3,299.-' },
        features: ['Damped front fork', '21 gears (Shimano Tourney TZ)', 'V brakes front and rear'],
        availability: { online: true, stores: true, storeCount: 69 },
        category: 'Leisure'
    },
    // From FishingCarousel
    {
        id: 21,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/39469/50137?lastmodified=20250516101759',
        badge: { text: 'Newness', type: 'orange' },
        name: 'Wading trousers',
        brand: 'Fladen',
        rating: 3.5,
        reviews: 147,
        price: { type: 'normal', value: '349.-' },
        features: ['Solid rubber boots', 'Braces with quick release buckles', 'Made of strong PVC'],
        availability: { online: false, stores: false, moreOptions: true, moreOptionsText: "Available in more variants" },
        category: 'Fishing'
    },
    {
        id: 22,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/222116/50137?lastmodified=20250516104834',
        name: 'Fishing bag with four bait boxes',
        brand: 'Kayoba',
        rating: 5,
        reviews: 55,
        price: { type: 'normal', value: '299.-' },
        features: ['Compact and spacious', 'Water resistant Oxford fabric (600D)', 'Padded and adjustable shoulder strap'],
        availability: { online: true, stores: false },
        category: 'Fishing'
    },
    {
        id: 23,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/39493/50137?lastmodified=20250516101759',
        name: 'Wading trousers',
        brand: 'Abu Garcia',
        rating: 3.5,
        reviews: 105,
        price: { type: 'normal', value: '999.-' },
        features: ['Keep warm in cold water', 'Reinforced knees', 'Grooved boots with felt soles'],
        availability: { online: false, stores: false, moreOptions: true, moreOptionsText: "Available in more variants" },
        category: 'Fishing'
    },
    {
        id: 24,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/233795/50137?lastmodified=20250516104854',
        name: 'Sled for ice fishing 79x44x23.5 cm',
        brand: 'Kayoba',
        rating: 4.5,
        reviews: 34,
        price: { type: 'normal', value: '299.-' },
        features: ['For fishing, hunting or firewood', 'Dragline'],
        availability: { online: true, stores: true, storeCount: 72 },
        category: 'Fishing'
    },
    {
        id: 25,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/8227/50137?lastmodified=20250516093742',
        name: 'Fishing box',
        brand: 'Fladen',
        rating: 4.5,
        reviews: 28,
        price: { type: 'normal', value: '299.-' },
        features: ['Comes with multiple accessories', 'Equipped with two shelves', 'For both lake and coastal fishing'],
        availability: { online: true, stores: true, storeCount: 72 },
        category: 'Fishing'
    },
    {
        id: 26,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/272954/50137?lastmodified=20250612132821',
        badge: { text: 'Newness', type: 'orange' },
        name: 'Jig 17 cm',
        brand: 'Savage gear | 3 D Hybrid Pike Red Belly',
        rating: 5,
        reviews: 3,
        price: { type: 'normal', value: '199.-' },
        features: ['For pike fishing', 'Realistic appearance', 'Adjustable rear'],
        availability: { online: true, stores: true, storeCount: 71 },
        category: 'Fishing'
    },
    // From OfficeCarousel
    {
        id: 27,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/217470/50137?lastmodified=20250516104808',
        name: 'Copy paper 500-pk A4',
        brand: 'Emerson',
        rating: 0,
        reviews: 0,
        price: { type: 'normal', value: '79', cents: '90' },
        features: ['For laser printing/copying', 'Unholed', '80 g/m²'],
        availability: { online: true, stores: true, storeCount: 72 },
        category: 'Office'
    },
    {
        id: 28,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/46328/50137?lastmodified=20250516101941',
        name: 'Marking machine',
        brand: 'Dymo | LetraTag LT-100H',
        rating: 4.5,
        reviews: 324,
        price: { type: 'normal', value: '449.-' },
        features: ['Screen with preview', 'Unlimited number of characters', 'Printing on paper, plastic, etc.'],
        availability: { online: true, stores: true, storeCount: 72 },
        category: 'Office'
    },
    {
        id: 29,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/8257/50137?lastmodified=20250516093746',
        name: 'Whiteboard 60x45 cm',
        brand: '',
        rating: 4,
        reviews: 38,
        price: { type: 'normal', value: '129.-' },
        features: ['Aluminum frame', 'Magnetic', 'Fittings for suspension included'],
        availability: { online: true, stores: true, storeCount: 72 },
        category: 'Office'
    },
    {
        id: 30,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/7960/50137?lastmodified=20250516093723',
        name: 'Magnets 4-pk',
        brand: '',
        rating: 3.5,
        reviews: 3,
        price: { type: 'normal', value: '19', cents: '90' },
        features: ['Powerful', 'For magnetic surfaces'],
        availability: { online: true, stores: true, storeCount: 69 },
        category: 'Office'
    },
    {
        id: 31,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/7794/50137?lastmodified=20250516093743',
        name: 'Magnetic notepad + pen',
        brand: '',
        rating: 0,
        reviews: 0,
        price: { type: 'normal', value: '29', cents: '90' },
        features: ['Magnetic holder', 'Block with 50 pcs. pages', 'Ink pen'],
        availability: { online: true, stores: true, storeCount: 72 },
        category: 'Office'
    },
    {
        id: 32,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/168332/50137?lastmodified=20250516104210',
        name: 'Desk mat 80x40 cm',
        brand: '',
        rating: 0,
        reviews: 0,
        price: { type: 'normal', value: '79', cents: '90' },
        features: ['With anti-slip protection', 'Made of rubber', 'Polyester Surface'],
        availability: { online: true, stores: true, storeCount: 72 },
        category: 'Office'
    },
    // From original data/products.ts (unique items)
    {
        id: 2,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/79883/50137?lastmodified=20250516102922',
        name: 'Women\'s Black Winter Jacket',
        brand: 'Kayoba Outdoor | Malung',
        rating: 4.5,
        reviews: 448,
        price: { type: 'sale', current: '599.-', original: '699.-', save: 'Save 100.-' },
        features: ['Long model', '5000 mm water column', 'Sprint with press studs'],
        availability: { online: false, stores: false, moreOptions: true, moreOptionsText: "Available in more sizes" },
        category: 'Clothing'
    },
    {
        id: 3,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/90857/50137?lastmodified=20250516103035',
        badge: { text: 'Smart Choice', type: 'red' },
        name: 'High-lift low-profile jack 2.5 t 75-510 mm',
        brand: 'Meec Tools',
        rating: 4.5,
        reviews: 1575,
        price: { type: 'normal', value: '1,299.-' },
        features: ['Good buy – We Car owners', 'High lifting and low profile in one', 'Double pistons – quick lifting'],
        availability: { online: true, stores: true, storeCount: 72 },
        category: 'Tools'
    },
    {
        id: 5,
        image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/87084/50137?lastmodified=20250516103012',
        badge: { text: 'Smart Choice', type: 'red' },
        name: 'Light ramp LED 20" 180 W 16,200 lm',
        brand: 'Hamron',
        rating: 4.5,
        reviews: 305,
        price: { type: 'normal', value: '999.-' },
        features: ['Double row model', 'Combo Beam light image', 'E-approved'],
        availability: { online: true, stores: true, storeCount: 72 },
        category: 'Car Accessories'
    },
    // {
    //     id: 6,
    //     image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:384/DigizuiteCore/LegacyService/api/assetstream/149392/50137?lastmodified=20250516103916',
    //     name: 'Light garland 31 V 5 m IP44',
    //     brand: 'EQUIP | Connectable System',
    //     rating: 4,
    //     reviews: 79,
    //     price: { type: 'sale', current: '209.-', original: '299.-', save: 'Save 90.-' },
    //     features: ['80 warm white lamps', 'Add-on bar'],
    //     availability: { online: true, stores: true, storeCount: 72 },
    //     infoSheet: { label: 'F' },
    //     category: 'Lighting'
    // },
];

// De-duplicate based on ID, keeping the first occurrence
const uniqueProducts = products.reduce((acc, current) => {
    if (!acc.find(item => item.id === current.id)) {
        acc.push(current);
    }
    return acc;
}, [] as Product[]);


export const allProducts: Product[] = uniqueProducts;