"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { MenuItem } from "@/types";

export interface CartItem {
  id: string; // unique key combining itemId and selected size/variant
  itemId: string;
  name: string;
  portion: string; // e.g. "Full", "Half", "Standard", "Small", "Large"
  price: number;
  quantity: number;
  image: string;
}

interface CartToastInfo {
  show: boolean;
  itemName: string;
  itemPrice: number;
  portion: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, portion?: string, price?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  lastToast: CartToastInfo | null;
  dismissToast: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [lastToast, setLastToast] = useState<CartToastInfo | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ghani_shinwari_cart");
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("ghani_shinwari_cart", JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // Auto-dismiss toast after 4 seconds
  useEffect(() => {
    if (lastToast?.show) {
      const timer = setTimeout(() => {
        setLastToast((prev) => (prev ? { ...prev, show: false } : null));
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [lastToast]);

  const addToCart = (item: MenuItem, portion?: string, customPrice?: number) => {
    let resolvedPortion = portion;
    let resolvedPrice = customPrice;

    if (!resolvedPortion) {
      if (item.priceHalf !== undefined && item.priceFull !== undefined) {
        resolvedPortion = "Full";
        resolvedPrice = item.priceFull;
      } else if (item.priceLarge !== undefined) {
        resolvedPortion = "Large";
        resolvedPrice = item.priceLarge;
      } else if (item.priceFull !== undefined) {
        resolvedPortion = "Full";
        resolvedPrice = item.priceFull;
      } else {
        resolvedPortion = "Standard";
        resolvedPrice = item.price || 0;
      }
    } else if (resolvedPrice === undefined) {
      if (resolvedPortion === "Half") resolvedPrice = item.priceHalf ?? item.price;
      else if (resolvedPortion === "Full") resolvedPrice = item.priceFull ?? item.price;
      else if (resolvedPortion === "Small") resolvedPrice = item.priceSmall ?? item.price;
      else if (resolvedPortion === "Large") resolvedPrice = item.priceLarge ?? item.price;
      else resolvedPrice = item.price || 0;
    }

    const cartItemId = `${item.id}-${resolvedPortion}`;

    setCart((prev) => {
      const existing = prev.find((i) => i.id === cartItemId);
      if (existing) {
        return prev.map((i) =>
          i.id === cartItemId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          itemId: item.id,
          name: item.name,
          portion: resolvedPortion || "Standard",
          price: resolvedPrice || 0,
          quantity: 1,
          image: item.image,
        },
      ];
    });

    setLastToast({
      show: true,
      itemName: item.name,
      itemPrice: resolvedPrice || 0,
      portion: resolvedPortion || "Standard",
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const dismissToast = () => {
    setLastToast(null);
  };

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal,
        lastToast,
        dismissToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
