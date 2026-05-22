import { BarChart2, TrendingUp, Users, BookOpen, Globe, Award } from "lucide-react";

export const metadata = { title: "Analytics — Admin" };

const stateData = [
  { state: "Kerala", students: 520, pct: 22 },
  { state: "Tamil Nadu", students: 410, pct: 17 },
  { state: "Karnataka", students: 340, pct: 14 },
  { state: "Andhra Pradesh", students: 290, pct: 12 },
  { state: "Bihar", students: 220, pct: 9 },
  { state: "Rajasthan", students: 190, pct: 8 },
  { state: "Maharashtra", students: 165, pct: 7 },
  { state: "Other States", students: 283, pct: 11 },
];

const monthlyData = [
  { month: "Nov", enrollments: 38 }, { month: "Dec", enrollments: 45 },
  { month: "Jan", enrollments: 62 }, { month: "Feb", enrollments: 58 },
  { month: "Mar", enrollments: 80 }, { month: "Apr", enrollments: 94 },
  { month: "May", enrollments: 76 },
];

const maxEnrollments = Math.max(...monthlyData.map((m) => m.enrollments));

const courseMetrics = [
  { title: "Foundations of Biblical Theology", enrolled: 340, completed: 218, completion: 64, rating: 4.9 },
  { title: "Old Testament Survey", enrolled: 420, completed: 340, completion: 81, rating: 4.8 },
  { title: "Pastoral Ministry & Leadership", enrolled: 280, completed: 168, completion: 60, rating: 4.7 },
  { title: "Evangelism & Church Planting", enrolled: 195, completed: 124, completion: 64, rating: 4.6 },
];

export default function AdminAnalyticsPage() {
  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>Platform Analytics</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Real-time insights into student engagement, geographic reach, and course performance.</p>
      </div>

      {/* Summary */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem", marginBottom: "2rem" }}>
        {[
          { icon: Users, label: "Total Students", value: "2,418", trend: "+12%", color: "var(--navy-deep)" },
          { icon: BookOpen, label: "Enrollments (Month)", value: "76", trend: "+8%", color: "var(--gold-dark)" },
          { icon: Award, label: "Certificates Issued", value: "384", trend: "+18%", color: "var(--success)" },
          { icon: Globe, label: "States Reached", value: "22", trend: "+2", color: "var(--navy-mid)" },
        ].map(({ icon: Icon, label, value, trend, color }) => (
          <div key={label} className="card-cream" style={{ padding: "1.25rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 700, color, lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.25rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.375rem" }}>
                  <Icon size={18} color={color} />
                </div>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--success)" }}>▲ {trend}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
        {/* Monthly Enrollments Chart */}
        <div className="card-cream" style={{ padding: "1.75rem" }}>
          <h4 style={{ fontSize: "0.95rem", marginBottom: "1.5rem" }}>Monthly Enrollments</h4>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "0.75rem", height: "160px" }}>
            {monthlyData.map((m) => (
              <div key={m.month} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "0.72rem", color: "var(--gold-dark)", fontWeight: 700 }}>{m.enrollments}</span>
                <div
                  style={{
                    width: "100%",
                    height: `${(m.enrollments / maxEnrollments) * 120}px`,
                    background: `linear-gradient(180deg, var(--gold-primary), var(--gold-dark))`,
                    borderRadius: "6px 6px 0 0",
                    minHeight: "8px",
                  }}
                />
                <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>{m.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Reach */}
        <div className="card-cream" style={{ padding: "1.75rem" }}>
          <h4 style={{ fontSize: "0.95rem", marginBottom: "1.25rem" }}>Students by State</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {stateData.slice(0, 6).map((s) => (
              <div key={s.state}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", marginBottom: "0.25rem" }}>
                  <span style={{ color: "var(--navy-deep)", fontWeight: 500 }}>{s.state}</span>
                  <span style={{ color: "var(--text-muted)" }}>{s.students} ({s.pct}%)</span>
                </div>
                <div className="progress-bar" style={{ height: "6px" }}>
                  <div className="progress-fill" style={{ width: `${s.pct * 4}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Course Performance */}
      <div className="card-cream" style={{ overflow: "hidden" }}>
        <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid var(--border-light)" }}>
          <h4 style={{ fontSize: "0.95rem" }}>Course Performance</h4>
        </div>
        <table className="data-table">
          <thead>
            <tr><th>Course</th><th>Enrolled</th><th>Completed</th><th>Completion Rate</th><th>Rating</th></tr>
          </thead>
          <tbody>
            {courseMetrics.map((c) => (
              <tr key={c.title}>
                <td style={{ fontWeight: 600, color: "var(--navy-deep)", fontSize: "0.875rem", maxWidth: "240px" }}>{c.title}</td>
                <td>{c.enrolled}</td>
                <td>{c.completed}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                    <div className="progress-bar" style={{ flex: 1, height: "6px" }}>
                      <div className="progress-fill" style={{ width: `${c.completion}%` }} />
                    </div>
                    <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--gold-dark)", minWidth: "32px" }}>{c.completion}%</span>
                  </div>
                </td>
                <td>
                  <span style={{ fontWeight: 700, color: "var(--gold-primary)", fontFamily: "var(--font-serif)" }}>★ {c.rating}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
