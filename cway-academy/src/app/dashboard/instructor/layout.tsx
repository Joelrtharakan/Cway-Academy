import Link from "next/link";
import { BookOpen, Users, BarChart2, Bell, Settings, LogOut, Home, FileText, MessageSquare, Calendar, PlusCircle } from "lucide-react";
import { SignOutButton } from "@/components/SignOutButton";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard/instructor" },
  { icon: BookOpen, label: "My Courses", href: "/dashboard/instructor/courses" },
  { icon: Users, label: "Students", href: "/dashboard/instructor/students" },
  { icon: FileText, label: "Assignments", href: "/dashboard/instructor/assignments" },
  { icon: BarChart2, label: "Analytics", href: "/dashboard/instructor/analytics" },
  { icon: Calendar, label: "Live Sessions", href: "/dashboard/instructor/sessions" },
  { icon: MessageSquare, label: "Discussions", href: "/dashboard/instructor/discussions" },
  { icon: Bell, label: "Announcements", href: "/dashboard/instructor/announcements" },
  { icon: Settings, label: "Settings", href: "/dashboard/instructor/settings" },
];

export default function InstructorDashboardLayout({ children }: { children: React.ReactNode }) {
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
              <div style={{ fontSize: "0.6rem", color: "var(--gold-light)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Instructor Portal</div>
            </div>
          </Link>
        </div>
        <nav style={{ padding: "0.5rem 0" }} aria-label="Instructor navigation">
          {navItems.map(({ icon: Icon, label, href }) => (
            <Link key={href} href={href} className="sidebar-link"><Icon size={18} /><span>{label}</span></Link>
          ))}
        </nav>
        <div style={{ marginTop: "auto", padding: "1rem 0.75rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, var(--navy-light), var(--navy-mid))", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontFamily: "var(--font-serif)" }}>I</div>
            <div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "white" }}>Instructor Name</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.45)" }}>Faculty Member</div>
            </div>
          </div>
          <SignOutButton className="sidebar-link" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", padding: "0.625rem 0.75rem", marginTop: "0.5rem" }} />
        </div>
      </aside>
      <main style={{ flex: 1, marginLeft: "260px", minHeight: "100vh" }}>
        <header style={{ background: "var(--cream-light)", borderBottom: "1px solid var(--border-light)", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 40 }}>
          <div>
            <h4 style={{ fontSize: "1rem", color: "var(--navy-deep)", marginBottom: "0.125rem" }}>Instructor Dashboard</h4>
            <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: 0 }}>Manage your courses and students</p>
          </div>
          <Link href="/dashboard/instructor/courses/new" className="btn-primary" style={{ padding: "0.625rem 1.25rem", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <PlusCircle size={15} /> New Lesson
          </Link>
        </header>
        <div style={{ padding: "2rem" }}>{children}</div>
      </main>
    </div>
  );
}
