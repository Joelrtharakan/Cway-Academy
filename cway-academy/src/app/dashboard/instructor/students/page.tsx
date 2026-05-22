import { Users, TrendingUp, CheckCircle, Clock, Search } from "lucide-react";

export const metadata = { title: "My Students — Instructor" };

const students = [
  { name: "Abraham K.", email: "abraham@church.com", state: "Kerala", course: "Biblical Theology", progress: 72, lastActive: "Today", quizAvg: 84, status: "Active" },
  { name: "Rachel M.", email: "rachel@ministry.org", state: "Tamil Nadu", course: "OT Survey", progress: 55, lastActive: "Yesterday", quizAvg: 91, status: "Active" },
  { name: "Philip T.", email: "philip@gospel.com", state: "Karnataka", course: "Christian Ethics", progress: 38, lastActive: "3 days ago", quizAvg: 78, status: "Active" },
  { name: "Ruth O.", email: "ruth@church.in", state: "Andhra Pradesh", course: "Biblical Theology", progress: 100, lastActive: "1 week ago", quizAvg: 88, status: "Graduated" },
  { name: "John M.", email: "john@bethel.org", state: "Bihar", course: "OT Survey", progress: 90, lastActive: "2 days ago", quizAvg: 76, status: "Active" },
  { name: "Esther R.", email: "esther@church.com", state: "Rajasthan", course: "Biblical Theology", progress: 18, lastActive: "1 week ago", quizAvg: 62, status: "At Risk" },
  { name: "Daniel S.", email: "daniel@ipc.com", state: "Kerala", course: "Christian Ethics", progress: 0, lastActive: "2 weeks ago", quizAvg: 0, status: "Inactive" },
];

const statusConfig: Record<string, { color: string; bg: string }> = {
  Active:    { color: "var(--success)",  bg: "rgba(61,122,75,0.1)" },
  Graduated: { color: "var(--gold-dark)", bg: "rgba(201,168,76,0.1)" },
  "At Risk": { color: "var(--danger)",   bg: "rgba(176,58,46,0.1)" },
  Inactive:  { color: "var(--text-muted)", bg: "var(--cream-mid)" },
};

export default function InstructorStudentsPage() {
  const active = students.filter((s) => s.status === "Active").length;
  const atRisk = students.filter((s) => s.status === "At Risk").length;
  const graduated = students.filter((s) => s.status === "Graduated").length;
  const avgProgress = Math.round(students.reduce((s, st) => s + st.progress, 0) / students.length);

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>My Students</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Monitor student engagement, progress, and learning outcomes.</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem", marginBottom: "2rem" }}>
        {[
          { label: "Total Students", value: students.length, color: "var(--navy-deep)" },
          { label: "Active", value: active, color: "var(--success)" },
          { label: "At Risk", value: atRisk, color: "var(--danger)" },
          { label: "Avg Progress", value: `${avgProgress}%`, color: "var(--gold-dark)" },
        ].map(({ label, value, color }) => (
          <div key={label} className="card-cream" style={{ padding: "1.25rem" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 700, color, lineHeight: 1 }}>{value}</div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Students Table */}
      <div className="card-cream" style={{ overflow: "hidden" }}>
        <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid var(--border-light)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h4 style={{ fontSize: "0.9rem" }}>All Students</h4>
          <div style={{ position: "relative" }}>
            <Search size={14} style={{ position: "absolute", left: "0.75rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
            <input type="text" className="form-input" style={{ paddingLeft: "2.25rem", fontSize: "0.85rem", padding: "0.5rem 0.875rem 0.5rem 2.25rem" }} placeholder="Search students..." />
          </div>
        </div>
        <table className="data-table">
          <thead>
            <tr><th>Student</th><th>Course</th><th>State</th><th>Progress</th><th>Quiz Avg</th><th>Last Active</th><th>Status</th></tr>
          </thead>
          <tbody>
            {students.map((s) => {
              const sc = statusConfig[s.status];
              return (
                <tr key={s.name}>
                  <td>
                    <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--navy-deep)" }}>{s.name}</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{s.email}</div>
                  </td>
                  <td style={{ fontSize: "0.82rem" }}>{s.course}</td>
                  <td style={{ fontSize: "0.82rem" }}>{s.state}</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                      <div className="progress-bar" style={{ flex: 1, height: "6px" }}>
                        <div className="progress-fill" style={{ width: `${s.progress}%`, background: s.progress === 100 ? "var(--success)" : undefined }} />
                      </div>
                      <span style={{ fontSize: "0.75rem", fontWeight: 700, color: s.progress === 100 ? "var(--success)" : "var(--gold-dark)", minWidth: "32px" }}>{s.progress}%</span>
                    </div>
                  </td>
                  <td>
                    {s.quizAvg > 0 ? (
                      <span style={{ fontFamily: "var(--font-serif)", fontWeight: 700, color: s.quizAvg >= 80 ? "var(--success)" : s.quizAvg >= 60 ? "var(--warning)" : "var(--danger)" }}>
                        {s.quizAvg}%
                      </span>
                    ) : <span style={{ color: "var(--text-muted)", fontSize: "0.82rem" }}>—</span>}
                  </td>
                  <td style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{s.lastActive}</td>
                  <td>
                    <span style={{ padding: "0.2rem 0.55rem", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 700, background: sc.bg, color: sc.color }}>
                      {s.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* At Risk Alert */}
      {atRisk > 0 && (
        <div style={{ marginTop: "1.5rem", padding: "1.25rem 1.5rem", background: "rgba(176,58,46,0.06)", border: "1.5px solid rgba(176,58,46,0.2)", borderRadius: "12px", display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
          <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "var(--danger)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
            <span style={{ color: "white", fontSize: "0.7rem", fontWeight: 700 }}>!</span>
          </div>
          <div>
            <div style={{ fontWeight: 700, color: "var(--danger)", fontSize: "0.9rem", marginBottom: "0.25rem" }}>{atRisk} Student{atRisk > 1 ? "s" : ""} At Risk</div>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
              Students marked "At Risk" have not been active for over a week or have quiz averages below 65%. Consider reaching out to encourage them to continue their studies.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
