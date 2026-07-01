// ============================================
// SLATE THE LAKES — Product Data
// Edit this file to update products
// ============================================

const products = [
  {
    id: "highland-cow-wall-art",
    name: "Multi-Layer Highland Cow Wall Art",
    collection: "wall-art",
    badge: "BESTSELLER",
    price: 55,
    pricePersonalised: 65,
    image: "images/highland-cow-wall-art.png",
    description: "Cut from sustainably sourced oak and walnut-stained ply, this multi-layer highland cow portrait is built up layer by layer to create a striking three-dimensional effect. Each piece is hand-finished and ready to hang straight from the box — a true statement piece for any home.",
    details: [
      "Size: 30cm × 30cm",
      "Material: Oak veneer ply on walnut-stained MDF backing",
      "Ready to hang — no frame needed",
      "Personalised version: add a name or farm below the portrait",
      "Standard: in stock, dispatched within 2 days",
      "Personalised: made to order, dispatched within 5 days"
    ],
    variants: ["Standard", "Personalised"],
    atStall: true
  },
  {
    id: "farm-scene-wall-art",
    name: "Farm Scene Wall Art Panel",
    collection: "wall-art",
    badge: "POPULAR",
    price: 22,
    priceSet: 55,
    image: "images/farm-scene-wall-art.png",
    description: "Laser cut from pale birch ply and set against a walnut-stained oak frame, these landscape panels bring the farmyard indoors. Choose from highland cow, pig, tractor, chickens, and more — or pick a set of three for a hallway gallery wall.",
    details: [
      "Size: approx 30cm × 14cm per panel",
      "Material: Birch ply on walnut-stained MDF frame",
      "Available individually or as a set of 3",
      "Sets can be mixed — choose your three scenes at checkout",
      "Personalised farm name version available",
      "Dispatched within 2 days (5 days for personalised)"
    ],
    variants: ["Single panel", "Set of 3"],
    atStall: true
  },
  {
    id: "keswick-map",
    name: "Keswick Map — Laser Cut Wall Art",
    collection: "maps",
    badge: "GIFT IDEA",
    price: 65,
    image: "images/keswick-map.png",
    description: "Every road, every beck, every island in the lake — rendered in precise laser-cut birch ply with a vivid blue acrylic inlay for the water. A beautiful piece for anyone who knows and loves this corner of Cumbria.",
    details: [
      "Size: approx 35cm × 35cm framed",
      "Material: Birch ply, black-stained MDF frame, blue acrylic lake inlay",
      "Other lakes available to order: Windermere, Ullswater, Thirlmere, Buttermere",
      "Makes an exceptional gift for walkers and Lakeland lovers",
      "Dispatched within 3 days"
    ],
    variants: ["Keswick / Derwentwater", "Custom lake — contact us"],
    atStall: true
  },
  {
    id: "slate-coaster-set",
    name: "Slate Coaster Set — Engraved Animals",
    collection: "slate",
    badge: "SET OF 4",
    price: 28,
    image: "images/slate-coasters.png",
    description: "Each coaster is cut from real natural slate and engraved with our bold line-art animal designs — highland cow, bear, heron and more. No two pieces of slate are identical, making every set genuinely one of a kind.",
    details: [
      "Set of 4 coasters",
      "Size: approx 10cm × 10cm each",
      "Material: Natural slate",
      "Design options: highland cattle set, mixed animals",
      "Personalised sets available — add a name or initial",
      "Dispatched within 2 days (5 days for personalised)"
    ],
    variants: ["Highland cattle set", "Mixed animals", "Personalised"],
    atStall: true
  },
  {
    id: "tarn-keyring",
    name: "Tarn Keyring — Engraved Sheep Shape",
    collection: "keyrings-gifts",
    badge: "PERFECT GIFT",
    price: 8,
    priceCustom: 10,
    image: "images/tarn-keyring.png",
    description: "Cut from solid oak in the shape of a Herdwick sheep and engraved with the name of a Lake District tarn, these keyrings are the perfect reminder of a favourite walk. Choose from Dock Tarn, Blind Tarn, Burnmoor Tarn and more — or order one with your own tarn name.",
    details: [
      "Size: approx 6cm",
      "Material: Solid oak, silver split ring",
      "10+ tarn names available as standard",
      "Custom tarn name available to order",
      "Standard: dispatched next day",
      "Custom: made to order, 3 days"
    ],
    variants: ["Dock Tarn", "Blind Tarn", "Burnmoor Tarn", "Custom tarn name"],
    atStall: true
  },
  {
    id: "personalised-sign",
    name: "Personalised Farm Sign",
    collection: "personalised-signs",
    badge: "MADE TO ORDER",
    price: 35,
    image: "images/personalised-sign.png",
    description: "Whether it's for a kitchen wall, a stable door or a gift for a farmer who has everything, our personalised signs are made to order with your name, text and choice of animal motif. Just tell us what you'd like and we'll do the rest.",
    details: [
      "Size: approx 35cm × 15cm",
      "Material: Birch ply on walnut-stained MDF frame, with easel stand included",
      "Fully custom — any name, any text, choice of animal",
      "Proof sent before cutting — you approve before we make it",
      "Dispatched within 5 working days"
    ],
    variants: ["Personalised"],
    atStall: false
  },
  {
    id: "bottle-opener",
    name: "Wooden Bottle Opener",
    collection: "keyrings-gifts",
    badge: "CAN BE ENGRAVED",
    price: 18,
    priceEngraved: 24,
    image: "images/bottle-opener.png",
    description: "Laser cut from solid English oak and fitted with a stainless steel opener insert, this is the kind of thing people pick up and immediately want to keep. Hang it in the kitchen, take it camping, or engrave it as a gift.",
    details: [
      "Material: Solid English oak, stainless steel insert",
      "Can be engraved with a name or short message",
      "Standard: dispatched within 2 days",
      "Engraved: dispatched within 4 days"
    ],
    variants: ["Standard", "Engraved"],
    atStall: true
  }
];
