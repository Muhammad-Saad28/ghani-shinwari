"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Plus, Minus, Trash2, ArrowRight, ShoppingBag, ShieldCheck } from "lucide-react";

export function CartClient() {
  const { cart, updateQuantity, removeFromCart, clearCart, subtotal, totalCount } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-24 bg-[#F7F2E8] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <div className="w-20 h-20 mx-auto rounded-full bg-[#8F1725]/10 flex items-center justify-center text-[#8F1725] mb-6">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#292522] mb-3">
            Your Cart is Currently Empty
          </h2>
          <p className="text-sm text-[#5C554F] max-w-md mx-auto mb-8 font-light">
            You haven&apos;t added any Shinwari dishes to your order yet. Explore our authentic karahi, BBQ, and Rosh selections.
          </p>
          <Button href="/menu" variant="crimson" size="lg">
            Explore Menu & Add Dishes
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-[#F7F2E8] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Order Review"
          title="Your Shinwari Feast Cart"
          subtitle="Adjust portions and quantities or add more items before continuing to checkout."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cart Items List (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#DED2BE] text-xs uppercase tracking-wider text-[#5C554F] font-semibold">
              <span>{totalCount} Items Selected</span>
              <button
                onClick={clearCart}
                className="hover:text-[#8F1725] transition-colors cursor-pointer"
              >
                Clear Cart
              </button>
            </div>

            {cart.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-5 glass-card-light rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xs overflow-hidden shrink-0 border border-[#DED2BE] bg-[#F7F2E8]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover object-center"
                    />
                  </div>

                  <div>
                    <h4 className="font-serif text-lg sm:text-xl text-[#292522] font-medium leading-snug">
                      {item.name}
                    </h4>
                    <span className="text-xs text-[#8F1725] font-semibold block">
                      Portion: {item.portion}
                    </span>
                    <span className="text-xs text-[#5C554F] mt-0.5 block">
                      PKR {item.price.toLocaleString()} each
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-[#DED2BE]">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-[#DED2BE] rounded-xs bg-[#F7F2E8]">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1.5 hover:bg-[#8F1725] hover:text-white transition-colors cursor-pointer text-[#292522]"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold text-[#292522] min-w-[28px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1.5 hover:bg-[#8F1725] hover:text-white transition-colors cursor-pointer text-[#292522]"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Line Total */}
                  <div className="text-right min-w-[90px]">
                    <span className="text-sm font-bold text-[#8F1725]">
                      PKR {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1.5 text-[#5C554F] hover:text-[#8F1725] transition-colors cursor-pointer"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            <div className="pt-4 flex justify-between items-center">
              <Link
                href="/menu"
                className="text-xs uppercase tracking-wider text-[#8F1725] font-semibold hover:underline"
              >
                ← Add More Dishes from Menu
              </Link>
            </div>
          </div>

          {/* Order Summary & Checkout Action (4 cols) */}
          <div className="lg:col-span-4 glass-card-light rounded-xs p-6 shadow-xl space-y-6">
            <h3 className="font-serif text-2xl text-[#292522] border-b border-[#DED2BE] pb-3">
              Order Summary
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-[#5C554F]">
              <div className="flex justify-between">
                <span>Subtotal ({totalCount} items)</span>
                <span className="font-semibold text-[#292522]">
                  PKR {subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Cooking & Packaging</span>
                <span className="text-emerald-700 font-semibold">Included</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery / Takeaway</span>
                <span className="text-[#5C554F]">Calculated at Checkout</span>
              </div>

              <div className="pt-3 border-t border-[#DED2BE] flex justify-between items-baseline text-base font-bold text-[#8F1725]">
                <span>Total Amount</span>
                <span>PKR {subtotal.toLocaleString()}</span>
              </div>
            </div>

            <Button href="/checkout" variant="crimson" size="lg" className="w-full">
              <span>Continue to Checkout</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <div className="p-4 bg-[#F7F2E8] border border-[#DED2BE] rounded-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8F1725]">
                <ShieldCheck className="w-4 h-4 text-[#E6B83F]" />
                <span>Direct WhatsApp Confirmation</span>
              </div>
              <p className="text-[11px] text-[#5C554F] leading-relaxed">
                When you proceed, your order details and delivery info will be formatted and routed directly to Ghani Shinwari helpdesk (+92 305 4449151) for immediate confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
