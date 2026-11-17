"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { RESTAURANT_CONFIG } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  MessageCircle,
  MapPin,
  Phone,
  User,
  ShoppingBag,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

export function CheckoutClient() {
  const { cart, subtotal, totalCount, clearCart } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [orderType, setOrderType] = useState<"delivery" | "takeaway" | "dinein">("delivery");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-24 bg-[#F7F2E8] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <ShoppingBag className="w-12 h-12 text-[#8F1725] mx-auto mb-4" />
          <h2 className="font-serif text-3xl text-[#292522] mb-3">
            No Items in Checkout
          </h2>
          <p className="text-sm text-[#5C554F] mb-6">
            Please add dishes from our menu before continuing to checkout.
          </p>
          <Button href="/menu" variant="crimson">
            View Menu
          </Button>
        </div>
      </div>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format WhatsApp message
    const orderItemsSummary = cart
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.name} (${item.portion}) x ${item.quantity} = PKR ${(
            item.price * item.quantity
          ).toLocaleString()}`
      )
      .join("\n");

    const message = `*NEW ORDER — GHANI SHINWARI*\n-----------------------------------\n*Customer Name:* ${name}\n*Contact Number:* ${phone}\n*Order Type:* ${orderType.toUpperCase()}\n*Location/Address:* ${location}\n${
      notes ? `*Special Notes:* ${notes}\n` : ""
    }-----------------------------------\n*ITEMS ORDERED:*\n${orderItemsSummary}\n-----------------------------------\n*TOTAL AMOUNT:* PKR ${subtotal.toLocaleString()}\n-----------------------------------\nPlease confirm my order and estimated preparation time. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const targetWhatsApp = "923054449151"; // Target: +92 305 4449151
    const whatsappUrl = `https://wa.me/${targetWhatsApp}?text=${encodedMessage}`;

    // Clear cart upon placing
    clearCart();

    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
  };

  return (
    <div className="pt-32 pb-24 bg-[#F7F2E8] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/cart"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#8F1725] font-semibold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Cart</span>
          </Link>
        </div>

        <SectionHeading
          eyebrow="Order Finalization"
          title="Checkout & WhatsApp Order"
          subtitle="Provide your contact details and location. When confirmed, your order is dispatched immediately to Ghani Shinwari (+92 305 4449151) via WhatsApp."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Checkout Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF6EF] border border-[#DED2BE] rounded-xs p-6 sm:p-8 shadow-sm">
            <h3 className="font-serif text-2xl text-[#292522] mb-2">
              Customer & Delivery Details
            </h3>
            <p className="text-xs text-[#5C554F] mb-6">
              Please provide accurate details so our hearth kitchen can prepare and reach you quickly.
            </p>

            <form onSubmit={handlePlaceOrder} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#292522] font-semibold mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8F1725] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tariq Mehmood"
                    className="w-full bg-[#F7F2E8] border border-[#DED2BE] focus:border-[#8F1725] rounded-xs pl-10 pr-4 py-3 text-sm text-[#292522] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#292522] font-semibold mb-1.5">
                  Phone / WhatsApp Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#8F1725] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0300 1234567"
                    className="w-full bg-[#F7F2E8] border border-[#DED2BE] focus:border-[#8F1725] rounded-xs pl-10 pr-4 py-3 text-sm text-[#292522] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Order Type */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#292522] font-semibold mb-1.5">
                  Order Type *
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(["delivery", "takeaway", "dinein"] as const).map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setOrderType(type)}
                      className={`py-2.5 px-3 text-xs uppercase tracking-wider font-semibold rounded-xs border transition-all cursor-pointer ${
                        orderType === type
                          ? "bg-[#8F1725] text-[#F7F2E8] border-[#8F1725] shadow-xs"
                          : "bg-[#F7F2E8] text-[#5C554F] border-[#DED2BE] hover:border-[#8F1725]"
                      }`}
                    >
                      {type === "delivery"
                        ? "Delivery"
                        : type === "takeaway"
                        ? "Takeaway"
                        : "Dine-in"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Address */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#292522] font-semibold mb-1.5">
                  {orderType === "delivery"
                    ? "Delivery Location Address *"
                    : "Preferred Branch / Location *"}
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#8F1725] absolute left-3.5 top-3.5" />
                  <textarea
                    rows={3}
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder={
                      orderType === "delivery"
                        ? "House / Flat number, Street, Phase / Block, Lahore..."
                        : "Ravi Road Flagship, DHA Phase 6, or Bahria Town branch..."
                    }
                    className="w-full bg-[#F7F2E8] border border-[#DED2BE] focus:border-[#8F1725] rounded-xs pl-10 pr-4 py-3 text-sm text-[#292522] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Special Cooking Notes */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#292522] font-semibold mb-1.5">
                  Special Meat or Preparation Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Extra green chilies, less salt, please pack extra Kandahari naans hot..."
                  className="w-full bg-[#F7F2E8] border border-[#DED2BE] focus:border-[#8F1725] rounded-xs px-4 py-2.5 text-sm text-[#292522] focus:outline-none transition-colors"
                />
              </div>

              {/* WhatsApp Place Order Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-widest rounded-xs shadow-lg shadow-emerald-700/20 active:translate-y-0.5 transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>
                  {isSubmitting ? "Connecting..." : "Place Order on WhatsApp (+92 305 4449151)"}
                </span>
              </button>

              <p className="text-[11px] text-[#5C554F] text-center">
                Clicking will open WhatsApp with your itemized order details pre-filled.
              </p>
            </form>
          </div>

          {/* Order Summary Sidebar (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF6EF] border border-[#DED2BE] rounded-xs p-6 shadow-sm space-y-6">
            <h3 className="font-serif text-2xl text-[#292522] border-b border-[#DED2BE] pb-3">
              Items in Your Order ({totalCount})
            </h3>

            <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between text-xs py-2 border-b border-[#DED2BE]/60 last:border-b-0"
                >
                  <div>
                    <span className="font-semibold text-[#292522] block">
                      {item.name}
                    </span>
                    <span className="text-[#5C554F]">
                      {item.portion} • Qty: {item.quantity}
                    </span>
                  </div>
                  <span className="font-bold text-[#8F1725]">
                    PKR {(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#DED2BE] space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between text-[#5C554F]">
                <span>Items Subtotal</span>
                <span className="font-semibold text-[#292522]">
                  PKR {subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-[#5C554F]">
                <span>Estimated Packaging</span>
                <span className="text-emerald-700 font-semibold">Free</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#8F1725] pt-2 border-t border-[#DED2BE]">
                <span>Total Payable</span>
                <span>PKR {subtotal.toLocaleString()}</span>
              </div>
            </div>

            <div className="p-4 bg-[#70111C] text-[#F7F2E8] rounded-xs border-l-4 border-[#E6B83F] space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#E6B83F]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Live WhatsApp Dispatch</span>
              </div>
              <p className="text-[11px] text-[#F7F2E8]/85 leading-relaxed">
                Orders are handled directly by Ghani Shinwari staff at <strong>+92 305 4449151</strong> for instant live meat selection, cooking confirmation, and rider dispatch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
