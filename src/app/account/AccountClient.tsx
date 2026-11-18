"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { User, Phone, MapPin, Heart, Clock, ShieldCheck, ShoppingBag, Edit3, Check } from "lucide-react";

export function AccountClient() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Ghani Shinwari Patron",
    phone: "0300 0000000",
    email: "patron@ghanishewari.pk",
    address: "DHA Phase 6, Lahore, Punjab",
    favoriteDish: "Shinwari Dumba Karahi & Mutton Rosh",
  });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="pt-32 pb-24 bg-[#F7F2E8] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customer Profile"
          title="My Account"
          subtitle="Manage your personal dining profile, delivery preferences, and favorite Shinwari dishes."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Profile Card (4 cols) */}
          <div className="md:col-span-4 glass-card-light rounded-2xl p-6 shadow-xl text-center">
            <div className="w-20 h-20 rounded-full bg-[#8F1725] text-[#E6B83F] mx-auto flex items-center justify-center text-2xl font-serif font-bold shadow-md mb-4 border-2 border-[#E6B83F]">
              {profile.name.charAt(0)}
            </div>
            <h3 className="font-serif text-xl text-[#292522] font-semibold">
              {profile.name}
            </h3>
            <span className="text-xs uppercase tracking-wider text-[#8F1725] font-semibold mt-0.5 block">
              Valued Guest
            </span>
            <p className="text-xs text-[#5C554F] mt-1">{profile.phone}</p>

            <div className="mt-6 pt-6 border-t border-[#DED2BE] space-y-2 text-left text-xs">
              <Link
                href="/cart"
                className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-[#F7F2E8] text-[#292522] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#8F1725]" />
                  View Current Cart
                </span>
                <span className="text-[#8F1725] font-bold">→</span>
              </Link>
              <Link
                href="/menu"
                className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-[#F7F2E8] text-[#292522] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#8F1725]" />
                  Order Fresh Karahi
                </span>
                <span className="text-[#8F1725] font-bold">→</span>
              </Link>
            </div>
          </div>

          {/* Right Profile Details / Settings (8 cols) */}
          <div className="md:col-span-8 glass-card-light rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#DED2BE] mb-6">
              <div>
                <h4 className="font-serif text-2xl text-[#292522]">
                  Personal & Delivery Information
                </h4>
                <p className="text-xs text-[#5C554F] mt-0.5">
                  Saved info will automatically pre-fill your future WhatsApp checkout.
                </p>
              </div>

              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#8F1725] text-[#F7F2E8] text-xs uppercase tracking-wider font-semibold rounded-2xl shadow-xs hover:bg-[#70111C] transition-colors cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5 text-[#E6B83F]" />
                  <span>Edit Profile</span>
                </button>
              )}
            </div>

            {savedSuccess && (
              <div className="p-3 mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-2xl flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Profile details saved successfully!</span>
              </div>
            )}

            {isEditing ? (
              <form onSubmit={handleSave} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#292522] font-semibold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="w-full bg-[#F7F2E8] border border-[#DED2BE] focus:border-[#8F1725] rounded-2xl px-4 py-2.5 text-sm text-[#292522] focus:outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#292522] font-semibold mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full bg-[#F7F2E8] border border-[#DED2BE] focus:border-[#8F1725] rounded-2xl px-4 py-2.5 text-sm text-[#292522] focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#292522] font-semibold mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full bg-[#F7F2E8] border border-[#DED2BE] focus:border-[#8F1725] rounded-2xl px-4 py-2.5 text-sm text-[#292522] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#292522] font-semibold mb-1">
                    Saved Delivery Address
                  </label>
                  <textarea
                    rows={2}
                    value={profile.address}
                    onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                    className="w-full bg-[#F7F2E8] border border-[#DED2BE] focus:border-[#8F1725] rounded-2xl px-4 py-2.5 text-sm text-[#292522] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#292522] font-semibold mb-1">
                    Favorite Shinwari Cut
                  </label>
                  <input
                    type="text"
                    value={profile.favoriteDish}
                    onChange={(e) => setProfile({ ...profile, favoriteDish: e.target.value })}
                    className="w-full bg-[#F7F2E8] border border-[#DED2BE] focus:border-[#8F1725] rounded-2xl px-4 py-2.5 text-sm text-[#292522] focus:outline-none"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button type="submit" variant="crimson" size="sm">
                    Save Changes
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    variant="ghost"
                    size="sm"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 py-2 border-b border-[#DED2BE]/60">
                  <User className="w-4 h-4 text-[#8F1725] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#5C554F] block">
                      Full Name
                    </span>
                    <span className="font-semibold text-[#292522]">{profile.name}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-2 border-b border-[#DED2BE]/60">
                  <Phone className="w-4 h-4 text-[#8F1725] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#5C554F] block">
                      Phone Number
                    </span>
                    <span className="font-semibold text-[#292522]">{profile.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-2 border-b border-[#DED2BE]/60">
                  <MapPin className="w-4 h-4 text-[#8F1725] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#5C554F] block">
                      Primary Delivery Address
                    </span>
                    <span className="font-semibold text-[#292522]">{profile.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-2">
                  <Heart className="w-4 h-4 text-[#8F1725] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#5C554F] block">
                      Favorite Selection
                    </span>
                    <span className="font-semibold text-[#292522]">{profile.favoriteDish}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 p-4 bg-[#70111C] text-[#F7F2E8] rounded-2xl border-l-4 border-[#E6B83F] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#E6B83F] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[#E6B83F] uppercase tracking-wider block">
                  Quick WhatsApp Re-Ordering
                </span>
                <p className="text-[11px] text-[#F7F2E8]/85 leading-relaxed mt-0.5">
                  Whenever you build your cart, your order is dispatched immediately to our dedicated order line <strong>+92 333 037 1414</strong> with live kitchen acknowledgement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
