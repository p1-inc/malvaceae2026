export type ProductDetails = {
  code: string;
  materials: string[];
  gem: string[];
  size: string;
  chain?: string[];
  band?: string;
  ringSize?: string;
  hardware?: string[];
};

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  href: string;
  category?: "ring" | "necklace" | "pierce" | "bracelet" | "other";
  description?: string;
  details: ProductDetails;
};
