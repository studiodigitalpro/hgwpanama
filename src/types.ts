export type ProductCategory =
  | 'Todos'
  | 'MEMBRESIAS HGW'
  | 'Alimentos'
  | 'SERIE CAFÉS SALUDABLES'
  | 'SERIE CANDY HGW'
  | 'Cuidado personal'
  | 'Accesorios'
  | 'Equipo'
  | 'Suplementos'
  | 'Licores';

export interface Product {
  id: number;
  type: 'simple' | 'external';
  name: string;
  category: string;
  subcategories?: string[];
  price: number;
  regularPrice?: number;
  bv?: number | string;
  shortDescription: string;
  descriptionHtml?: string;
  advantages?: string[];
  benefits?: { title: string; description: string }[];
  ingredients?: string[];
  usageInstructions?: string[];
  presentation?: string;
  precautions?: string;
  imageUrl: string;
  featured?: boolean;
  externalUrl?: string;
  buttonText?: string;
  tags?: string[];
}

export interface MembershipPackage {
  id: number;
  name: string;
  bv: number;
  approxPriceUSD: string;
  activationDiscount: string;
  repurchaseDiscount: string;
  dailyEarningCapUSD: number;
  developmentBonus: string;
  teamBonus: string;
  quickStartBonus: string;
  eliteBonus: string;
  repurchaseBonus: string;
  description: string;
  features: string[];
  recommendedFor: string;
  badge?: string;
  accentColor: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface HealthProtocol {
  id: string;
  title: string;
  icon: string;
  badge: string;
  description: string;
  recommendedProducts: string[];
  keyBenefits: string[];
}

export interface RankInfo {
  name: string;
  accumulatedUSD: string;
  description: string;
  iconColor: string;
}
