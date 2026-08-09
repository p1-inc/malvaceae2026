export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  href: string;
  category?: "ring" | "necklace" | "pierce" | "bracelet" | "other";
  description?: string;
};
