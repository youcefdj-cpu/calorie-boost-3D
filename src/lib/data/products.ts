export interface Product {
  id: string;
  name: string;
  nameEn: string;
  price: number;
  category: "honey" | "nuts" | "oats" | "organic" | "recipes";
  badge?: "bestseller" | "new" | "sale";
  description: string;
  image: string;
  object3D: string;
}

export const products: Product[] = [
  {
    id: "sidr-honey",
    name: "عسل السدر",
    nameEn: "Sidr Honey",
    price: 1200,
    category: "honey",
    badge: "bestseller",
    description: "عسل سدر يمني أصلي من أشجار السدر البرية، غني بالعناصر الغذائية",
    image: "🍯",
    object3D: "HoneyJar",
  },
  {
    id: "mixed-nuts",
    name: "مكسرات مشكلة",
    nameEn: "Mixed Nuts",
    price: 1500,
    category: "nuts",
    badge: "new",
    description: "تشكيلة فاخرة من اللوز والجوز والكاجو المحمص",
    image: "🥜",
    object3D: "NutsBowl",
  },
  {
    id: "oats",
    name: "شوفان طبيعي",
    nameEn: "Natural Oats",
    price: 800,
    category: "oats",
    description: "شوفان عضوي كامل الحبة غني بالألياف",
    image: "🌾",
    object3D: "OatsJar",
  },
  {
    id: "argan-oil",
    name: "زيت أركان عضوي",
    nameEn: "Organic Argan Oil",
    price: 2000,
    category: "organic",
    badge: "bestseller",
    description: "زيت أركان نقي معصور على البارد للعناية بالصحة والجمال",
    image: "🫒",
    object3D: "OilBottle",
  },
  {
    id: "honey-recipes",
    name: "وصفات طبيعية",
    nameEn: "Natural Recipes",
    price: 600,
    category: "recipes",
    description: "مجموعة وصفات طبيعية بالعسل والمكسرات لصحة أفضل",
    image: "📦",
    object3D: "RecipeBox",
  },
  {
    id: "bio-box",
    name: "صندوق المنتجات العضوية",
    nameEn: "Bio Products Box",
    price: 3500,
    category: "organic",
    badge: "new",
    description: "صندوق هدايا يجمع أفضل المنتجات العضوية الفاخرة",
    image: "🎁",
    object3D: "RecipeBox",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}
