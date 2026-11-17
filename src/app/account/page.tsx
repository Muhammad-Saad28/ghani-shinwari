import type { Metadata } from "next";
import { AccountClient } from "./AccountClient";

export const metadata: Metadata = {
  title: "My Account — Ghani Shinwari Restaurant",
  description:
    "Manage your personal customer profile, saved delivery addresses, and recent Shinwari feasts.",
};

export default function AccountPage() {
  return <AccountClient />;
}
