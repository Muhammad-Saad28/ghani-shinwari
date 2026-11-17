import type { Metadata } from "next";
import { CartClient } from "./CartClient";

export const metadata: Metadata = {
  title: "Your Cart — Ghani Shinwari Restaurant",
  description:
    "Review your Shinwari dishes, adjust quantities, and proceed to checkout.",
};

export default function CartPage() {
  return <CartClient />;
}
