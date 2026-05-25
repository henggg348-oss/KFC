export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  spiceLevel?: 'none' | 'mild' | 'spicy';
  ingredients?: string[];
  nutrition?: {
    calories: number;
    protein: string;
    fat: string;
    carbs: string;
  };
  options?: {
    addOns: { id: string; name: string; price: number }[];
  }
}

export interface CartItem {
  id: string; // unique for this cart entry (product id + add-ons)
  product: Product;
  quantity: number;
  selectedAddOns: { id: string; name: string; price: number }[];
  totalPrice: number;
}
