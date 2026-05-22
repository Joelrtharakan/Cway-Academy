import { CheckCircle, XCircle, AlertCircle, Award, BookOpen, Calendar } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return {
    title: `Verify Certificate ${id}`,
    description: `Verification page for CWAY Academy certificate ${id}.`,
  };
}

// Mock data — replace with DB query
async function getCertificate(id: string) {
  const mockCerts: Record<string, { name: string; course: string; issuedDate: string; level: string; instructor: string; valid: boolean }> = {
    "CWA-LM4X2R-K9TF": {
      name: "Samuel Raju",
      course: "Old Testament Survey",
      issuedDate: "March 15, 2026",
      level: "Beginner Certificate",
      instructor: "Prof. [OT Faculty Name]",
      valid: true,
    },
  };
  return mockCerts[id] || null;
}

export default async function VerifyCertificatePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cert = await getCertificate(id);

  return (
    <div style={{ minHeight: "100vh", background: "var(--cream-base)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div style={{ width: "100%", maxWidth: "560px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", marginBottom: "2rem" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "linear-gradient(135deg, var(--navy-deep), var(--navy-mid))", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BookOpen size={22} color="var(--gold-light)" />
            </div>
            <span style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "1.2rem", color: "var(--navy-deep)" }}>CWAY Academy</span>
          </Link>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Certificate Verification</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Official verification portal for CWAY Academy certificates</p>
        </div>

        {/* Result Card */}
        {cert ? (
          <div className="card-cream" style={{ padding: "2.5rem", textAlign: "center" }}>
            {/* Valid Badge */}
            <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(135deg, var(--success), #52a86b)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
              <CheckCircle size={40} color="white" />
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.375rem 1rem", background: "rgba(61,122,75,0.1)", borderRadius: "999px", marginBottom: "1.5rem" }}>
              <CheckCircle size={14} color="var(--success)" />
              <span style={{ color: "var(--success)", fontWeight: 700, fontSize: "0.85rem" }}>Certificate Verified — Authentic</span>
            </div>

            {/* Certificate Details */}
            <div style={{ background: "linear-gradient(135deg, var(--cream-mid), var(--cream-dark))", borderRadius: "12px", padding: "1.5rem", marginBottom: "1.5rem", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <Award size={24} color="var(--gold-primary)" />
                <div style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "1.1rem", color: "var(--navy-deep)" }}>Certificate of Completion</div>
              </div>
              {[
                ["Recipient", cert.name],
                ["Course", cert.course],
                ["Level", cert.level],
                ["Instructor", cert.instructor],
                ["Issue Date", cert.issuedDate],
                ["Certificate ID", id],
                ["Issued By", "CWAY MISSIONS Religious Trust, Bangalore, India"],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", gap: "0.75rem", borderBottom: "1px solid var(--border-light)", paddingBottom: "0.625rem", marginBottom: "0.625rem", fontSize: "0.875rem" }}>
                  <span style={{ fontWeight: 600, color: "var(--navy-deep)", minWidth: "110px" }}>{label}</span>
                  <span style={{ color: label === "Certificate ID" ? "var(--navy-deep)" : "var(--text-secondary)", fontFamily: label === "Certificate ID" ? "var(--font-mono)" : undefined, fontWeight: label === "Certificate ID" ? 700 : undefined }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
              This certificate was issued by CWAY Academy, a ministry of CWAY MISSIONS Religious Trust, Bangalore, India. The holder has successfully completed all required coursework, assessments, and requirements for this program.
            </p>
          </div>
        ) : (
          <div className="card-cream" style={{ padding: "2.5rem", textAlign: "center" }}>
            <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(176,58,46,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
              <XCircle size={40} color="var(--danger)" />
            </div>
            <h3 style={{ marginBottom: "0.75rem", color: "var(--danger)" }}>Certificate Not Found</h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              The certificate ID <code style={{ fontFamily: "var(--font-mono)", background: "var(--cream-mid)", padding: "0.125rem 0.375rem", borderRadius: "4px" }}>{id}</code> could not be verified. This may mean the certificate does not exist, has been revoked, or the ID was entered incorrectly.
            </p>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", padding: "1rem", background: "rgba(196,125,17,0.08)", borderRadius: "10px", textAlign: "left" }}>
              <AlertCircle size={16} color="var(--warning)" style={{ flexShrink: 0, marginTop: "2px" }} />
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
                If you believe this is an error, please contact CWAY Academy at{" "}
                <a href="mailto:info@cwayacademy.org" style={{ color: "var(--gold-dark)", fontWeight: 600 }}>info@cwayacademy.org</a>{" "}
                with the certificate details.
              </p>
            </div>
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <Link href="/" style={{ fontSize: "0.85rem", color: "var(--gold-dark)", fontWeight: 600, textDecoration: "none" }}>
            ← Back to CWAY Academy
          </Link>
        </div>
      </div>
    </div>
  );
}
