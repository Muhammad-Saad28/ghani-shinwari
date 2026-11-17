"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RESTAURANT_CONFIG } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Menu, X, ArrowUpRight, ShoppingBag, User } from "lucide-react";
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
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // If not homepage, always show solid warm background for contrast
  const showSolidBackground = isScrolled || !isHomePage;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          showSolidBackground
            ? "bg-[#F7F2E8]/95 backdrop-blur-md border-b border-[#DED2BE] py-3.5 shadow-sm"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group transition-opacity"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#E6B83F] shadow-sm shrink-0 bg-[#8F1725]">
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
                <span
                  className={cn(
                    "font-serif text-xl sm:text-2xl font-normal tracking-tight leading-none transition-colors",
                    showSolidBackground ? "text-[#8F1725]" : "text-[#F7F2E8]"
                  )}
                >
                  GHANI <span className="font-semibold text-[#E6B83F]">SHINWARI</span>
                </span>
                <span
                  className={cn(
                    "text-[8px] sm:text-[9px] tracking-[0.25em] uppercase font-medium mt-1 transition-colors",
                    showSolidBackground ? "text-[#5C554F]" : "text-[#F7F2E8]/80"
                  )}
                >
                  Traditional Cuisine
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {RESTAURANT_CONFIG.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-[#E6B83F] relative py-1",
                      showSolidBackground
                        ? isActive
                          ? "text-[#8F1725] font-bold"
                          : "text-[#292522]"
                        : isActive
                        ? "text-[#E6B83F] font-bold"
                        : "text-[#F7F2E8]/90"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E6B83F]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions: Instagram, Cart, Account, Explore Menu */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={RESTAURANT_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @ghani_shinwari"
                className={cn(
                  "p-2 rounded transition-colors",
                  showSolidBackground
                    ? "text-[#8F1725] hover:text-[#E6B83F]"
                    : "text-[#F7F2E8] hover:text-[#E6B83F]"
                )}
              >
                <InstagramIcon className="w-5 h-5" />
              </a>

              {/* Cart Icon Link */}
              <Link
                href="/cart"
                aria-label="Shopping Cart"
                className={cn(
                  "p-2 rounded transition-colors relative cursor-pointer",
                  showSolidBackground
                    ? "text-[#8F1725] hover:text-[#E6B83F]"
                    : "text-[#F7F2E8] hover:text-[#E6B83F]"
                )}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalCount > 0 ? (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-[#E6B83F] text-[#292522] text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {totalCount}
                  </span>
                ) : (
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#E6B83F]" />
                )}
              </Link>

              {/* Account Icon Link */}
              <Link
                href="/account"
                aria-label="User Account"
                className={cn(
                  "p-2 rounded transition-colors cursor-pointer",
                  showSolidBackground
                    ? "text-[#8F1725] hover:text-[#E6B83F]"
                    : "text-[#F7F2E8] hover:text-[#E6B83F]"
                )}
              >
                <User className="w-5 h-5" />
              </Link>

              <Button
                href="/menu"
                variant={showSolidBackground ? "crimson" : "gold"}
                size="sm"
                className="ml-2"
              >
                Explore Menu
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/cart"
                aria-label="Shopping Cart"
                className={cn(
                  "p-1.5 transition-colors relative",
                  showSolidBackground ? "text-[#8F1725]" : "text-[#F7F2E8]"
                )}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalCount > 0 ? (
                  <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-1 rounded-full bg-[#E6B83F] text-[#292522] text-[9px] font-bold flex items-center justify-center">
                    {totalCount}
                  </span>
                ) : (
                  <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-[#E6B83F]" />
                )}
              </Link>

              <Link
                href="/account"
                aria-label="User Account"
                className={cn(
                  "p-1.5 transition-colors",
                  showSolidBackground ? "text-[#8F1725]" : "text-[#F7F2E8]"
                )}
              >
                <User className="w-5 h-5" />
              </Link>

              <Button
                href="/menu"
                variant={showSolidBackground ? "crimson" : "gold"}
                size="sm"
                className="text-[11px] px-3 py-1.5"
              >
                Menu
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={cn(
                  "p-1.5 transition-colors",
                  showSolidBackground ? "text-[#292522]" : "text-[#F7F2E8]"
                )}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#8F1725] text-[#F7F2E8] lg:hidden transition-all duration-300 flex flex-col justify-between pt-24 pb-8 px-6",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-6 mt-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E6B83F] font-semibold border-b border-[#F7F2E8]/20 pb-2">
            Navigation
          </span>
          {RESTAURANT_CONFIG.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "font-serif text-2xl tracking-wide transition-colors",
                  isActive ? "text-[#E6B83F] font-semibold" : "hover:text-[#E6B83F]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="border-t border-[#F7F2E8]/20 pt-6 flex flex-col gap-3">
          <a
            href={RESTAURANT_CONFIG.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between text-sm py-2 px-3 bg-[#70111C] rounded border border-[#E6B83F]/30"
          >
            <div className="flex items-center gap-2">
              <InstagramIcon className="w-4 h-4 text-[#E6B83F]" />
              <span>Follow @ghani_shinwari</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#E6B83F]" />
          </a>
          <Button
            href="/menu"
            variant="gold"
            size="md"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full"
          >
            Explore Complete Menu
          </Button>
        </div>
      </div>
    </>
  );
}
