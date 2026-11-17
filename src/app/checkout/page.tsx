import type { Metadata } from "next";
import { CheckoutClient } from "./CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout — Ghani Shinwari Restaurant",
  description:
    "Complete your name, contact phone number, and location address to place your order directly via WhatsApp.",
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
