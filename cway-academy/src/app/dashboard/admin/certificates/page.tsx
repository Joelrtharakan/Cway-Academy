import Link from "next/link";
import { Award, Download, CheckCircle, Search, Filter } from "lucide-react";

export const metadata = { title: "Certificates — Admin" };

const certificates = [
  { id: "CWA-LM4X2R-K9TF", student: "Samuel Raju", email: "samuel@church.com", course: "Old Testament Survey", issuedDate: "April 2, 2026", state: "Kerala", status: "ISSUED" },
  { id: "CWA-XR8J4P-T2KN", student: "Ruth Oommen", email: "ruth@ipc.com", course: "Foundations of Biblical Theology", issuedDate: "March 28, 2026", state: "Tamil Nadu", status: "ISSUED" },
  { id: "CWA-7PQ3WA-LGFB", student: "John Mathew", email: "john@bethel.org", course: "Old Testament Survey", issuedDate: "March 15, 2026", state: "Bihar", status: "ISSUED" },
  { id: "CWA-PENDING-001", student: "Philip Thomas", email: "philip@church.in", course: "Foundations of Biblical Theology", issuedDate: "—", state: "Karnataka", status: "PENDING" },
  { id: "CWA-PENDING-002", student: "Esther Rajput", email: "esther@gospel.com", course: "Pastoral Ministry", issuedDate: "—", state: "Rajasthan", status: "PENDING" },
];

export default function AdminCertificatesPage() {
  const issued = certificates.filter((c) => c.status === "ISSUED").length;
  const pending = certificates.filter((c) => c.status === "PENDING").length;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
        <div>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>Certificates</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Issue and manage student completion certificates.</p>
        </div>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 1.25rem", background: "var(--cream-mid)", border: "1px solid var(--border-light)", borderRadius: "10px", fontSize: "0.85rem", fontWeight: 600, color: "var(--navy-deep)", cursor: "pointer" }}>
            <Download size={15} /> Export
          </button>
          <button className="btn-primary" style={{ fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Award size={15} /> Issue Certificate
          </button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", marginBottom: "2rem" }}>
        {[
          { label: "Total Issued", value: issued + pending, color: "var(--navy-deep)" },
          { label: "Issued", value: issued, color: "var(--success)" },
          { label: "Pending Issue", value: pending, color: "var(--warning)" },
        ].map(({ label, value, color }) => (
          <div key={label} className="card-cream" style={{ padding: "1.25rem" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 700, color, lineHeight: 1 }}>{value}</div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Pending to Issue */}
      {pending > 0 && (
        <div style={{ marginBottom: "1.5rem" }}>
          <h4 style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>Ready to Issue ({pending})</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {certificates.filter((c) => c.status === "PENDING").map((cert) => (
              <div key={cert.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.125rem 1.5rem", background: "rgba(196,125,17,0.06)", border: "1.5px solid rgba(196,125,17,0.2)", borderRadius: "12px" }}>
                <div>
                  <div style={{ fontWeight: 600, color: "var(--navy-deep)", fontSize: "0.9rem" }}>{cert.student}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{cert.course} · {cert.state}</div>
                </div>
                <button className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Award size={14} /> Issue Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Certificates Table */}
      <div className="card-cream" style={{ overflow: "hidden" }}>
        <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid var(--border-light)" }}>
          <h4 style={{ fontSize: "0.9rem" }}>All Certificates</h4>
        </div>
        <table className="data-table">
          <thead>
            <tr><th>Student</th><th>Course</th><th>State</th><th>Certificate ID</th><th>Issue Date</th><th>Status</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {certificates.map((cert) => (
              <tr key={cert.id}>
                <td>
                  <div style={{ fontWeight: 600, color: "var(--navy-deep)", fontSize: "0.875rem" }}>{cert.student}</div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{cert.email}</div>
                </td>
                <td style={{ fontSize: "0.85rem", maxWidth: "180px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{cert.course}</td>
                <td style={{ fontSize: "0.82rem" }}>{cert.state}</td>
                <td>
                  <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--navy-deep)", background: "var(--cream-mid)", padding: "0.125rem 0.375rem", borderRadius: "4px" }}>
                    {cert.id.startsWith("CWA-PENDING") ? "—" : cert.id}
                  </code>
                </td>
                <td style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{cert.issuedDate}</td>
                <td>
                  <span style={{ padding: "0.2rem 0.55rem", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 700, background: cert.status === "ISSUED" ? "rgba(61,122,75,0.1)" : "rgba(196,125,17,0.1)", color: cert.status === "ISSUED" ? "var(--success)" : "var(--warning)" }}>
                    {cert.status}
                  </span>
                </td>
                <td>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    {cert.status === "ISSUED" && (
                      <>
                        <Link href={`/verify/${cert.id}`} target="_blank" style={{ fontSize: "0.78rem", color: "var(--navy-mid)", fontWeight: 600, textDecoration: "none" }}>Verify</Link>
                        <button style={{ fontSize: "0.78rem", color: "var(--gold-dark)", fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}>
                          <Download size={12} />
                        </button>
                      </>
                    )}
                    {cert.status === "PENDING" && (
                      <button className="btn-primary" style={{ padding: "0.25rem 0.75rem", fontSize: "0.75rem" }}>Issue</button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
