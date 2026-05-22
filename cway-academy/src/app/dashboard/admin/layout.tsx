import Link from "next/link";
import { Users, BookOpen, Award, DollarSign, Bell, Settings, LogOut, Home, BarChart2, FileText, MessageSquare, Heart, UserCheck, GraduationCap, Briefcase } from "lucide-react";
import { SignOutButton } from "@/components/SignOutButton";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard/admin" },
  { icon: Users, label: "User Management", href: "/dashboard/admin/users" },
  { icon: FileText, label: "Applications", href: "/dashboard/admin/applications" },
  { icon: BookOpen, label: "Courses", href: "/dashboard/admin/courses" },
  { icon: GraduationCap, label: "Enrollments", href: "/dashboard/admin/enrollments" },
  { icon: Award, label: "Certificates", href: "/dashboard/admin/certificates" },
  { icon: DollarSign, label: "Donations", href: "/dashboard/admin/donations" },
  { icon: Briefcase, label: "Scholarships", href: "/dashboard/admin/scholarships" },
  { icon: MessageSquare, label: "Announcements", href: "/dashboard/admin/announcements" },
  { icon: Heart, label: "Prayer Requests", href: "/dashboard/admin/prayer" },
  { icon: BarChart2, label: "Analytics", href: "/dashboard/admin/analytics" },
  { icon: Settings, label: "Platform Settings", href: "/dashboard/admin/settings" },
];

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--cream-base)" }}>
      <aside className="sidebar">
        <div style={{ padding: "1.5rem", borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: "0.5rem" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(201,168,76,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BookOpen size={18} color="var(--gold-light)" />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "1rem", color: "white" }}>CWAY Academy</div>
              <div style={{ fontSize: "0.6rem", color: "var(--gold-light)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Admin Portal</div>
            </div>
          </Link>
        </div>
        <nav style={{ padding: "0.5rem 0" }} aria-label="Admin navigation">
          {navItems.map(({ icon: Icon, label, href }) => (
            <Link key={href} href={href} className="sidebar-link"><Icon size={18} /><span>{label}</span></Link>
          ))}
        </nav>
        <div style={{ marginTop: "auto", padding: "1rem 0.75rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", borderRadius: "8px", marginBottom: "0.5rem" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, var(--danger), #8B2222)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontFamily: "var(--font-serif)", flexShrink: 0 }}>A</div>
            <div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "white" }}>Administrator</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)" }}>Super Admin</div>
            </div>
          </div>
          <SignOutButton className="sidebar-link" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", padding: "0.625rem 0.75rem", marginTop: "0.5rem" }} />
        </div>
      </aside>
      <main style={{ flex: 1, marginLeft: "260px", minHeight: "100vh" }}>
        <header style={{ background: "var(--cream-light)", borderBottom: "1px solid var(--border-light)", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 40 }}>
          <div>
            <h4 style={{ fontSize: "1rem", color: "var(--navy-deep)", marginBottom: "0.125rem" }}>Admin Control Panel</h4>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>CWAY Academy Platform Management</p>
          </div>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Link href="/dashboard/admin/applications" style={{ padding: "0.5rem 1rem", background: "var(--danger)", color: "white", borderRadius: "8px", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none" }}>
              5 Pending Applications
            </Link>
            <Bell size={20} color="var(--text-secondary)" />
          </div>
        </header>
        <div style={{ padding: "2rem" }}>{children}</div>
      </main>
    </div>
  );
}
