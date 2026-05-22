import { Heart, DollarSign, Users, CheckCircle, Clock, XCircle } from "lucide-react";

export const metadata = { title: "Scholarships — Admin" };

const scholarships = [
  { id: "SCH-001", student: "Sunita Devi", course: "Foundations of Biblical Theology", state: "Bihar", role: "Women's Ministry Leader", requestDate: "May 18, 2026", amount: 4500, status: "PENDING", reason: "Serving in an impoverished village with no income. Deeply called to theological training." },
  { id: "SCH-002", student: "Meena Rajput", course: "Evangelism & Church Planting", state: "Rajasthan", role: "Evangelist", requestDate: "May 17, 2026", amount: 5000, status: "APPROVED", reason: "Rural evangelist with a congregation of 40 families. No regular income." },
  { id: "SCH-003", student: "Rajan K.", course: "Pastoral Ministry & Leadership", state: "Assam", role: "Senior Pastor", requestDate: "May 15, 2026", amount: 6500, status: "PENDING", reason: "Church planter in a tribal community. Financial hardship due to community opposition." },
  { id: "SCH-004", student: "Priya Nair", course: "Biblical Counselling & Care", state: "Kerala", role: "Counsellor", requestDate: "May 12, 2026", amount: 5500, status: "APPROVED", reason: "Serving in a low-income community counselling ministry." },
  { id: "SCH-005", student: "Timothy John", course: "Worship Arts & Ministry", state: "Tamil Nadu", role: "Worship Leader", requestDate: "May 10, 2026", amount: 4500, status: "REJECTED", reason: "Request did not meet scholarship criteria." },
];

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  PENDING:  { label: "Pending Review", color: "var(--warning)",   bg: "rgba(196,125,17,0.1)" },
  APPROVED: { label: "Approved",       color: "var(--success)",   bg: "rgba(61,122,75,0.1)" },
  REJECTED: { label: "Rejected",       color: "var(--danger)",    bg: "rgba(176,58,46,0.1)" },
};

export default function AdminScholarshipsPage() {
  const totalAwarded = scholarships.filter((s) => s.status === "APPROVED").reduce((sum, s) => sum + s.amount, 0);
  const pending = scholarships.filter((s) => s.status === "PENDING").length;
  const approved = scholarships.filter((s) => s.status === "APPROVED").length;

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>Scholarships</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Review and manage financial aid for rural pastors and ministry leaders.</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem", marginBottom: "2rem" }}>
        {[
          { icon: Heart, label: "Total Requests", value: scholarships.length, color: "var(--navy-deep)" },
          { icon: Clock, label: "Pending Review", value: pending, color: "var(--warning)" },
          { icon: CheckCircle, label: "Approved", value: approved, color: "var(--success)" },
          { icon: DollarSign, label: "Amount Awarded", value: `₹${totalAwarded.toLocaleString("en-IN")}`, color: "var(--gold-dark)" },
        ].map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="card-cream" style={{ padding: "1.25rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 700, color, lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.25rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              </div>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={18} color={color} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scripture */}
      <div className="scripture-block" style={{ margin: "0 0 2rem" }}>
        "He who gives to the poor will not lack, but he who hides his eyes will have many curses."
        <span className="scripture-reference">— Proverbs 28:27 (NKJV)</span>
      </div>

      {/* Scholarship Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {scholarships.map((sch) => {
          const sc = statusConfig[sch.status];
          return (
            <div key={sch.id} className="card-cream" style={{ padding: "1.75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "0.375rem" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--navy-deep)", margin: 0 }}>{sch.student}</h4>
                    <span style={{ padding: "0.2rem 0.625rem", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 700, background: sc.bg, color: sc.color }}>{sc.label}</span>
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                    {sch.role} · {sch.state} · Applied {sch.requestDate}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "1.3rem", color: "var(--gold-primary)" }}>₹{sch.amount.toLocaleString("en-IN")}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Requested</div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.375rem" }}>Course</div>
                  <div style={{ fontSize: "0.875rem", color: "var(--navy-deep)" }}>{sch.course}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.375rem" }}>ID</div>
                  <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--navy-mid)" }}>{sch.id}</code>
                </div>
              </div>

              <div style={{ padding: "0.875rem 1rem", background: "var(--cream-mid)", borderRadius: "10px", marginBottom: sch.status === "PENDING" ? "1.25rem" : 0 }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.375rem" }}>Reason for Request</div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>"{sch.reason}"</p>
              </div>

              {sch.status === "PENDING" && (
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <button style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 1.25rem", background: "var(--success)", color: "white", border: "none", borderRadius: "10px", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer" }}>
                    <CheckCircle size={15} /> Approve Scholarship
                  </button>
                  <button style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 1.25rem", background: "transparent", color: "var(--danger)", border: "2px solid var(--danger)", borderRadius: "10px", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer" }}>
                    <XCircle size={15} /> Decline
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
