"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { CheckCircle2, ShoppingBag, X } from "lucide-react";

export function BottomRightCartToast() {
  const { lastToast, dismissToast, totalCount } = useCart();

  if (!lastToast?.show) return null;

  return (
    <aside
      aria-label="Cart Notification"
      className="fixed bottom-6 right-6 z-50 max-w-sm w-[calc(100vw-3rem)] glass-panel-dark text-white border-2 border-[#E6B83F] shadow-2xl rounded-2xl p-4 animate-in slide-in-from-bottom-5 duration-300 backdrop-blur-xl"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[#E6B83F] shrink-0 mt-0.5" />
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#E6B83F] font-bold block">
              Added to Cart
            </span>
            <h4 className="font-serif text-base font-medium text-[#F7F2E8] leading-snug">
              {lastToast.itemName}
            </h4>
            <div className="flex items-center gap-2 text-xs text-[#F7F2E8]/80 mt-0.5">
              <span>{lastToast.portion}</span>
              <span>•</span>
              <span className="text-[#E6B83F] font-semibold">
                PKR {lastToast.itemPrice.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={dismissToast}
          className="text-[#F7F2E8]/60 hover:text-white transition-colors p-1"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="mt-3 pt-3 border-t border-[#F7F2E8]/15 flex items-center justify-between">
        <span className="text-[11px] text-[#F7F2E8]/70">
          {totalCount} {totalCount === 1 ? "item" : "items"} in cart
        </span>
        <Link
          href="/cart"
          onClick={dismissToast}
          className="inline-flex items-center gap-1.5 px-4 py-2 glass-btn-gold text-[#211C16] text-xs uppercase tracking-wider font-bold rounded-2xl shadow-lg transition-all active:translate-y-0.5 cursor-pointer"
        >
          <ShoppingBag className="w-3.5 h-3.5 text-[#211C16]" />
          <span>View Cart</span>
        </Link>
      </div>
    </aside>
  );
}
