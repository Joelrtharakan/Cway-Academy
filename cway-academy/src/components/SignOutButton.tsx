"use client";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export function SignOutButton({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        ...style,
      }}
    >
      <LogOut size={16} /> Sign Out
    </button>
  );
}
