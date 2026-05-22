import { DollarSign, TrendingUp, Heart, Download, Filter } from "lucide-react";

export const metadata = { title: "Donations — Admin" };

const donations = [
  { id: "DON-001", donor: "Anonymous Donor", email: "—", amount: 10000, currency: "INR", purpose: "Scholarship Fund", date: "May 19, 2026", status: "COMPLETED", recurring: true },
  { id: "DON-002", donor: "Dr. James Wilson", email: "james@church.com", amount: 5000, currency: "INR", purpose: "General Ministry Fund", date: "May 18, 2026", status: "COMPLETED", recurring: false },
  { id: "DON-003", donor: "Grace Fellowship Church", email: "admin@grace.org", amount: 25000, currency: "INR", purpose: "Course Development", date: "May 17, 2026", status: "COMPLETED", recurring: true },
  { id: "DON-004", donor: "Thomas Abraham", email: "thomas@email.com", amount: 2000, currency: "INR", purpose: "Scholarship Fund", date: "May 16, 2026", status: "COMPLETED", recurring: false },
  { id: "DON-005", donor: "International Partner (USD)", email: "partner@intl.org", amount: 150, currency: "USD", purpose: "Women's Ministry", date: "May 15, 2026", status: "PENDING", recurring: false },
];

const statusColors: Record<string, string> = {
  COMPLETED: "var(--success)",
  PENDING: "var(--warning)",
  FAILED: "var(--danger)",
  REFUNDED: "var(--navy-mid)",
};

export default function AdminDonationsPage() {
  const totalINR = donations.filter((d) => d.currency === "INR" && d.status === "COMPLETED").reduce((s, d) => s + d.amount, 0);
  const recurring = donations.filter((d) => d.recurring && d.status === "COMPLETED").length;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
        <div>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>Donations</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Track and manage all financial contributions to CWAY Academy.</p>
        </div>
        <button style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 1.25rem", background: "var(--cream-mid)", border: "1px solid var(--border-light)", borderRadius: "10px", fontSize: "0.85rem", fontWeight: 600, color: "var(--navy-deep)", cursor: "pointer" }}>
          <Download size={15} /> Export
        </button>
      </div>

      {/* KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem", marginBottom: "2rem" }}>
        {[
          { icon: DollarSign, label: "Total (This Month)", value: `₹${(totalINR).toLocaleString("en-IN")}`, color: "var(--success)" },
          { icon: TrendingUp, label: "Monthly Recurring", value: `₹${donations.filter((d) => d.recurring && d.currency === "INR").reduce((s, d) => s + d.amount, 0).toLocaleString("en-IN")}/mo`, color: "var(--navy-mid)" },
          { icon: Heart, label: "Total Donors", value: donations.length.toString(), color: "var(--gold-dark)" },
          { icon: TrendingUp, label: "Recurring Donors", value: recurring.toString(), color: "var(--navy-deep)" },
        ].map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="card-cream" style={{ padding: "1.25rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 700, color, lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              </div>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={18} color={color} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Purpose Breakdown */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "1.5rem", marginBottom: "2rem" }}>
        <div className="card-cream" style={{ padding: "1.5rem" }}>
          <h4 style={{ fontSize: "0.9rem", marginBottom: "1.25rem" }}>Giving by Purpose</h4>
          {["Scholarship Fund", "General Ministry Fund", "Course Development", "Women's Ministry"].map((purpose, i) => {
            const purposeDons = donations.filter((d) => d.purpose === purpose && d.currency === "INR");
            const pTotal = purposeDons.reduce((s, d) => s + d.amount, 0);
            const pct = totalINR > 0 ? Math.round((pTotal / totalINR) * 100) : 0;
            return (
              <div key={purpose} style={{ marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", marginBottom: "0.375rem" }}>
                  <span style={{ color: "var(--navy-deep)", fontWeight: 500 }}>{purpose}</span>
                  <span style={{ color: "var(--gold-dark)", fontWeight: 700 }}>{pct}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Donations Table */}
        <div className="card-cream" style={{ overflow: "hidden" }}>
          <table className="data-table">
            <thead>
              <tr><th>Donor</th><th>Amount</th><th>Purpose</th><th>Date</th><th>Recurring</th><th>Status</th></tr>
            </thead>
            <tbody>
              {donations.map((d) => (
                <tr key={d.id}>
                  <td>
                    <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--navy-deep)" }}>{d.donor}</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{d.id}</div>
                  </td>
                  <td style={{ fontWeight: 700, color: "var(--success)", fontFamily: "var(--font-serif)", fontSize: "0.95rem" }}>
                    {d.currency === "INR" ? "₹" : "$"}{d.amount.toLocaleString()}
                  </td>
                  <td style={{ fontSize: "0.82rem", maxWidth: "140px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{d.purpose}</td>
                  <td style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{d.date}</td>
                  <td>{d.recurring ? <span style={{ color: "var(--success)", fontWeight: 700, fontSize: "0.78rem" }}>Monthly</span> : <span style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>One-time</span>}</td>
                  <td>
                    <span style={{ padding: "0.2rem 0.55rem", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 700, background: `${statusColors[d.status]}15`, color: statusColors[d.status] }}>
                      {d.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
