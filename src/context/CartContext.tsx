import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Product } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity: number, addOns?: { id: string; name: string; price: number }[]) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (
    product: Product,
    quantity: number,
    addOns: { id: string; name: string; price: number }[] = []
  ) => {
    setItems((prev) => {
      // create a unique ID for this cart item based on product and add-ons
      const addOnsStr = addOns.map(a => a.id).sort().join('-');
      const itemId = `${product.id}-${addOnsStr}`;

      const existingItem = prev.find(item => item.id === itemId);
      if (existingItem) {
        return prev.map(item =>
          item.id === itemId
            ? {
                ...item,
                quantity: item.quantity + quantity,
                totalPrice: (product.price + addOns.reduce((sum, a) => sum + a.price, 0)) * (item.quantity + quantity)
              }
            : item
        );
      }

      const itemTotal = (product.price + addOns.reduce((sum, a) => sum + a.price, 0)) * quantity;
      return [...prev, { id: itemId, product, quantity, selectedAddOns: addOns, totalPrice: itemTotal }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setItems(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setItems(prev => prev.map(item => {
      if (item.id === itemId) {
         const unitPrice = item.product.price + item.selectedAddOns.reduce((sum, a) => sum + a.price, 0);
         return { ...item, quantity, totalPrice: unitPrice * quantity };
      }
      return item;
    }));
  };

  const clearCart = () => setItems([]);

  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const tax = subtotal * 0.08; // 8% tax
  const deliveryFee = 2.99;
  const total = subtotal + tax + deliveryFee;

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      subtotal,
      tax,
      deliveryFee,
      total,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
