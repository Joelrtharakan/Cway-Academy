"use client";
import Link from "next/link";
import { Users, BookOpen, DollarSign, FileText, Award, TrendingUp, CheckCircle, Clock, AlertCircle, ChevronRight } from "lucide-react";

const kpis = [
  { icon: Users, label: "Total Students", value: "2,418", change: "+12% this month", color: "var(--navy-deep)", up: true },
  { icon: BookOpen, label: "Active Courses", value: "18", change: "3 in development", color: "var(--gold-dark)", up: true },
  { icon: DollarSign, label: "Donations (Month)", value: "₹1,24,500", change: "+8% vs last month", color: "var(--success)", up: true },
  { icon: Award, label: "Certificates Issued", value: "384", change: "+24 this week", color: "var(--navy-mid)", up: true },
  { icon: FileText, label: "Pending Applications", value: "5", change: "Requires review", color: "var(--danger)", up: false },
  { icon: TrendingUp, label: "Course Completion Rate", value: "74%", change: "+3% vs last quarter", color: "var(--gold-primary)", up: true },
];

const recentApplications = [
  { name: "Rajan Mathew", course: "Pastoral Ministry & Leadership", state: "Kerala", date: "May 19", status: "PENDING" },
  { name: "Sunita Devi", course: "Foundations of Biblical Theology", state: "Bihar", date: "May 18", status: "UNDER_REVIEW" },
  { name: "Thomas Chacko", course: "Five-Fold Ministry Training", state: "Tamil Nadu", date: "May 17", status: "APPROVED" },
  { name: "Meena Rajput", course: "Evangelism & Church Planting", state: "Rajasthan", date: "May 17", status: "PENDING" },
  { name: "Pastor George", course: "Biblical Counselling & Care", state: "Andhra Pradesh", date: "May 16", status: "APPROVED" },
];

const statusColors: Record<string, string> = {
  PENDING: "var(--warning)",
  UNDER_REVIEW: "var(--navy-mid)",
  APPROVED: "var(--success)",
  REJECTED: "var(--danger)",
};

export default function AdminDashboardPage() {
  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>Platform Overview</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Real-time metrics and platform management dashboard.</p>
      </div>

      {/* KPI Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginBottom: "2.5rem" }}>
        {kpis.map(({ icon: Icon, label, value, change, color, up }) => (
          <div key={label} className="card-cream" style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={22} color={color} />
              </div>
              <span style={{ fontSize: "0.72rem", fontWeight: 600, color: up ? "var(--success)" : "var(--danger)", background: up ? "rgba(61,122,75,0.08)" : "rgba(176,58,46,0.08)", padding: "0.25rem 0.625rem", borderRadius: "999px" }}>
                {up ? "▲" : "▼"} {change}
              </span>
            </div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 700, color, lineHeight: 1, marginBottom: "0.25rem" }}>{value}</div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "2rem" }}>
        {/* Recent Applications */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <h3 style={{ fontSize: "1.1rem" }}>Recent Applications</h3>
            <Link href="/dashboard/admin/applications" style={{ fontSize: "0.8rem", color: "var(--gold-dark)", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>
              View All <ChevronRight size={13} />
            </Link>
          </div>
          <div className="card-cream" style={{ overflow: "hidden" }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Applicant</th>
                  <th>Course</th>
                  <th>State</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentApplications.map((app) => (
                  <tr key={app.name}>
                    <td style={{ fontWeight: 600, color: "var(--navy-deep)", fontSize: "0.875rem" }}>{app.name}</td>
                    <td style={{ maxWidth: "180px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{app.course}</td>
                    <td>{app.state}</td>
                    <td>{app.date}</td>
                    <td>
                      <span style={{ padding: "0.25rem 0.625rem", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 700, background: `${statusColors[app.status]}18`, color: statusColors[app.status] }}>
                        {app.status.replace("_", " ")}
                      </span>
                    </td>
                    <td>
                      <Link href="/dashboard/admin/applications" style={{ fontSize: "0.78rem", color: "var(--gold-dark)", fontWeight: 600, textDecoration: "none" }}>Review</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "1.25rem" }}>Quick Actions</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {[
              { icon: FileText, label: "Review Pending Applications", href: "/dashboard/admin/applications", badge: "5", color: "var(--danger)" },
              { icon: Award, label: "Issue Certificates", href: "/dashboard/admin/certificates", badge: "12", color: "var(--gold-dark)" },
              { icon: Users, label: "Manage Users", href: "/dashboard/admin/users", color: "var(--navy-deep)" },
              { icon: BookOpen, label: "Add New Course", href: "/dashboard/admin/courses/new", color: "var(--navy-mid)" },
              { icon: DollarSign, label: "View Donations", href: "/dashboard/admin/donations", color: "var(--success)" },
            ].map(({ icon: Icon, label, href, badge, color }) => (
              <Link key={href} href={href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.25rem", background: "var(--cream-light)", border: "1px solid var(--border-light)", borderRadius: "10px", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold-light)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-light)"; e.currentTarget.style.transform = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={18} color={color} />
                  </div>
                  <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--navy-deep)" }}>{label}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  {badge && <span style={{ background: "var(--danger)", color: "white", fontSize: "0.7rem", fontWeight: 700, padding: "0.125rem 0.5rem", borderRadius: "999px" }}>{badge}</span>}
                  <ChevronRight size={14} color="var(--text-muted)" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
