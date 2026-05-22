import Link from "next/link";
import { Award, Download, ExternalLink, CheckCircle, Clock } from "lucide-react";

export const metadata = { title: "My Certificates" };

const certificates = [
  {
    id: "CWA-LM4X2R-K9TF",
    course: "Old Testament Survey",
    issuedDate: "March 15, 2026",
    instructor: "Prof. [OT Faculty]",
    level: "Beginner",
    status: "ISSUED",
  },
];

const inProgress = [
  { course: "Foundations of Biblical Theology", progress: 68, required: 100 },
  { course: "Pastoral Ministry & Leadership", progress: 32, required: 100 },
];

export default function StudentCertificatesPage() {
  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>My Certificates</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
          Certificates are auto-issued upon 100% course completion.
        </p>
      </div>

      {/* Earned Certificates */}
      <h3 style={{ fontSize: "1.1rem", marginBottom: "1.25rem" }}>Earned Certificates</h3>
      {certificates.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          {certificates.map((cert) => (
            <div
              key={cert.id}
              style={{
                background: "linear-gradient(135deg, var(--cream-light) 0%, var(--cream-mid) 100%)",
                border: "2px solid var(--gold-light)",
                borderRadius: "16px",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                boxShadow: "var(--shadow-gold)",
              }}
            >
              {/* Decorative corner */}
              <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "100px", height: "100px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)" }} />

              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "12px", background: "linear-gradient(135deg, var(--gold-primary), var(--gold-dark))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Award size={28} color="white" />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 700, color: "var(--navy-deep)", lineHeight: 1.2 }}>
                    Certificate of Completion
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--gold-dark)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    CWAY Academy
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: "1.25rem" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 700, color: "var(--navy-deep)", marginBottom: "0.5rem" }}>
                  {cert.course}
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  <div>Level: <strong>{cert.level}</strong></div>
                  <div>Instructor: <strong>{cert.instructor}</strong></div>
                  <div>Issued: <strong>{cert.issuedDate}</strong></div>
                </div>
              </div>

              <div style={{ padding: "0.625rem 0.875rem", background: "var(--gold-pale)", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--gold-dark)", fontWeight: 600 }}>Certificate ID</span>
                <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--navy-deep)", fontWeight: 700 }}>
                  {cert.id}
                </code>
              </div>

              <div style={{ display: "flex", gap: "0.75rem" }}>
                <a
                  href={`/api/certificates/${cert.id}/download`}
                  className="btn-primary"
                  style={{ flex: 1, justifyContent: "center", padding: "0.625rem 1rem", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <Download size={15} /> Download PDF
                </a>
                <Link
                  href={`/verify/${cert.id}`}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.375rem", padding: "0.625rem 1rem", border: "1.5px solid var(--gold-primary)", borderRadius: "10px", color: "var(--gold-dark)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}
                >
                  <ExternalLink size={15} /> Verify
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card-cream" style={{ padding: "3rem", textAlign: "center", marginBottom: "3rem" }}>
          <Award size={48} color="var(--gold-light)" style={{ margin: "0 auto 1rem" }} />
          <h4>No Certificates Yet</h4>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Complete a course to earn your first certificate.</p>
        </div>
      )}

      {/* In Progress */}
      <h3 style={{ fontSize: "1.1rem", marginBottom: "1.25rem" }}>In Progress — Toward Your Next Certificate</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {inProgress.map((c) => (
          <div key={c.course} className="card-cream" style={{ padding: "1.5rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "10px", background: "var(--cream-mid)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Clock size={22} color="var(--gold-primary)" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, color: "var(--navy-deep)", marginBottom: "0.5rem", fontSize: "0.95rem" }}>{c.course}</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${c.progress}%` }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.375rem", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                <span>{c.progress}% complete</span>
                <span>{c.required - c.progress}% remaining to unlock certificate</span>
              </div>
            </div>
            <Link href="/dashboard/student/courses" className="btn-primary" style={{ padding: "0.625rem 1.25rem", fontSize: "0.85rem", flexShrink: 0 }}>
              Continue
            </Link>
          </div>
        ))}
      </div>

      {/* Verification info */}
      <div style={{ marginTop: "3rem", padding: "1.5rem 2rem", background: "var(--cream-mid)", border: "1px solid var(--border-light)", borderRadius: "12px", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
        <CheckCircle size={20} color="var(--success)" style={{ flexShrink: 0, marginTop: "2px" }} />
        <div>
          <div style={{ fontWeight: 700, color: "var(--navy-deep)", fontSize: "0.9rem", marginBottom: "0.375rem" }}>Certificate Verification</div>
          <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0 }}>
            All CWAY Academy certificates can be publicly verified at{" "}
            <code style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", background: "var(--border-light)", padding: "0.125rem 0.375rem", borderRadius: "4px" }}>
              cwayacademy.org/verify/[certificate-id]
            </code>
            . Share your certificate ID with employers, churches, or ministry organizations for instant verification.
          </p>
        </div>
      </div>
    </div>
  );
}
