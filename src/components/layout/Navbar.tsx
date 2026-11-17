"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RESTAURANT_CONFIG } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Menu, X, ArrowUpRight, ShoppingBag, User, Flame, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { totalCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* FLOATING LUXURY CAPSULE NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none">
        <div
          className={cn(
            "max-w-7xl mx-auto rounded-full transition-all duration-500 pointer-events-auto",
            isScrolled
              ? "bg-[#15130F]/90 backdrop-blur-2xl border border-[#E6B83F]/35 shadow-[0_12px_36px_rgba(0,0,0,0.5)] py-2 sm:py-2.5 px-4 sm:px-6"
              : isHomePage
              ? "bg-[#15130F]/55 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] py-2.5 sm:py-3.5 px-4 sm:px-7"
              : "bg-[#70111C]/90 backdrop-blur-2xl border border-[#E6B83F]/30 shadow-[0_12px_36px_rgba(0,0,0,0.4)] py-2.5 sm:py-3 px-4 sm:px-6"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Brand Logo with Glowing Seal */}
            <Link
              href="/"
              className="flex items-center gap-3 group transition-transform active:scale-95"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#E6B83F] shadow-[0_0_15px_rgba(230,184,63,0.35)] shrink-0 bg-[#8F1725] group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/logo.jpg"
                  alt="Ghani Shinwari Logo"
                  fill
                  sizes="48px"
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight leading-none text-white flex items-center gap-1.5">
                  GHANI <span className="text-[#E6B83F]">SHINWARI</span>
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.25em] uppercase font-semibold text-[#E6B83F]/80 mt-1 flex items-center gap-1">
                  <Flame className="w-2.5 h-2.5 text-[#E6B83F] animate-pulse" />
                  <span>Khyber Tribal Cuisine</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Capsule Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              {RESTAURANT_CONFIG.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-xs uppercase tracking-[0.15em] font-semibold transition-all px-3.5 py-1.5 rounded-full relative",
                      isActive
                        ? "bg-[#E6B83F] text-[#15130F] shadow-[0_2px_12px_rgba(230,184,63,0.4)] font-bold"
                        : "text-[#F7F2E8]/85 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions: Instagram, Cart, Account, Explore Menu */}
            <div className="hidden lg:flex items-center gap-2 sm:gap-2.5">
              <a
                href={RESTAURANT_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @ghani_shinwari"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white hover:text-[#E6B83F] flex items-center justify-center transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              {/* Cart Icon Capsule */}
              <Link
                href="/cart"
                aria-label="Shopping Cart"
                className="relative w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white hover:text-[#E6B83F] flex items-center justify-center transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                {totalCount > 0 ? (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#E6B83F] text-[#15130F] text-[10px] font-extrabold flex items-center justify-center shadow-md animate-bounce">
                    {totalCount}
                  </span>
                ) : (
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#E6B83F]" />
                )}
              </Link>

              {/* Account Icon Capsule */}
              <Link
                href="/account"
                aria-label="User Account"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white hover:text-[#E6B83F] flex items-center justify-center transition-all cursor-pointer"
              >
                <User className="w-4 h-4" />
              </Link>

              {/* Order Now Menu CTA Button */}
              <Button
                href="/menu"
                variant="gold"
                size="sm"
                className="ml-1 text-xs px-4 py-2 font-bold shadow-lg"
              >
                Explore Menu
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
              <Link
                href="/cart"
                aria-label="Shopping Cart"
                className="relative w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center"
              >
                <ShoppingBag className="w-4 h-4 text-[#E6B83F]" />
                {totalCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-1 rounded-full bg-[#E6B83F] text-[#15130F] text-[9px] font-bold flex items-center justify-center">
                    {totalCount}
                  </span>
                )}
              </Link>

              <Link
                href="/account"
                aria-label="User Account"
                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center"
              >
                <User className="w-4 h-4" />
              </Link>

              <Button
                href="/menu"
                variant="gold"
                size="sm"
                className="text-[10px] px-2.5 py-1.5 font-bold"
              >
                Menu
              </Button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center ml-0.5"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4 text-[#E6B83F]" />
                ) : (
                  <Menu className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#15130F]/95 backdrop-blur-3xl text-[#F7F2E8] lg:hidden transition-all duration-300 flex flex-col justify-between pt-28 pb-8 px-6",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-5 mt-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E6B83F] font-bold border-b border-white/10 pb-2">
            Explore Ghani Shinwari
          </span>
          {RESTAURANT_CONFIG.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-serif tracking-wide transition-colors py-1 flex items-center justify-between",
                  isActive
                    ? "text-[#E6B83F] font-bold"
                    : "text-[#F7F2E8] hover:text-[#E6B83F]"
                )}
              >
                <span>{link.label}</span>
                <span className="text-[#E6B83F] text-xs">→</span>
              </Link>
            );
          })}
        </div>

        <div className="space-y-4 pt-6 border-t border-white/10">
          <Button href="/menu" variant="gold" size="lg" className="w-full justify-center">
            View Complete 36+ Menu
          </Button>

          <div className="flex items-center justify-between text-xs text-[#F7F2E8]/70 pt-2">
            <span>Daily Open: 12 PM – 3 AM</span>
            <a
              href="tel:+923054449151"
              className="text-[#E6B83F] font-semibold hover:underline"
            >
              +92 305 4449151
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
