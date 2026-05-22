import Link from "next/link";
import { BookOpen, Award, Bell, MessageSquare, Settings, LogOut, Home, BarChart2, Calendar, FileText, Heart, HelpCircle } from "lucide-react";
import { SignOutButton } from "@/components/SignOutButton";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard/student" },
  { icon: BookOpen, label: "My Courses", href: "/dashboard/student/courses" },
  { icon: BarChart2, label: "Progress", href: "/dashboard/student/progress" },
  { icon: Calendar, label: "Live Sessions", href: "/dashboard/student/sessions" },
  { icon: FileText, label: "Assignments", href: "/dashboard/student/assignments" },
  { icon: Award, label: "Certificates", href: "/dashboard/student/certificates" },
  { icon: MessageSquare, label: "Discussions", href: "/dashboard/student/discussions" },
  { icon: Bell, label: "Notifications", href: "/dashboard/student/notifications" },
  { icon: Heart, label: "Prayer Requests", href: "/dashboard/student/prayer" },
  { icon: Settings, label: "Profile & Settings", href: "/dashboard/student/settings" },
];

export default function StudentDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--cream-base)" }}>
      {/* Sidebar */}
      <aside className="sidebar">
        {/* Logo */}
        <div style={{ padding: "1.5rem", borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: "0.5rem" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(201,168,76,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BookOpen size={18} color="var(--gold-light)" />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "1rem", color: "white", lineHeight: 1.1 }}>CWAY Academy</div>
              <div style={{ fontSize: "0.6rem", color: "var(--gold-light)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Student Portal</div>
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav style={{ padding: "0.5rem 0" }} aria-label="Student navigation">
          {navItems.map(({ icon: Icon, label, href }) => (
            <Link key={href} href={href} className="sidebar-link" aria-label={label}>
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div style={{ marginTop: "auto", padding: "1rem 0.75rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem", borderRadius: "8px", marginBottom: "0.5rem" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, var(--gold-primary), var(--gold-dark))", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: "0.9rem", fontFamily: "var(--font-serif)", flexShrink: 0 }}>
              S
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "white", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Student Name</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)" }}>Active Student</div>
            </div>
          </div>
          <SignOutButton className="sidebar-link" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", padding: "0.625rem 0.75rem", marginTop: "0.5rem" }} />
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, marginLeft: "260px", minHeight: "100vh", overflow: "auto" }}>
        {/* Top Bar */}
        <header style={{ background: "var(--cream-light)", borderBottom: "1px solid var(--border-light)", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 40 }}>
          <div>
            <h4 style={{ fontSize: "1rem", color: "var(--navy-deep)", marginBottom: "0.125rem" }}>Welcome back! 🙏</h4>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>Continue your theological journey today.</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link href="/dashboard/student/notifications" style={{ position: "relative", color: "var(--text-secondary)" }}>
              <Bell size={20} />
              <span style={{ position: "absolute", top: "-4px", right: "-4px", width: "14px", height: "14px", borderRadius: "50%", background: "var(--danger)", fontSize: "0.6rem", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>3</span>
            </Link>
            <Link href="/dashboard/student/settings">
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, var(--gold-primary), var(--gold-dark))", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontFamily: "var(--font-serif)" }}>S</div>
            </Link>
          </div>
        </header>
        <div style={{ padding: "2rem" }}>{children}</div>
      </main>
    </div>
  );
}
