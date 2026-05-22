"use client";
import { useState } from "react";
import Link from "next/link";
import { BookOpen, Eye, EyeOff, LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const demoRoutes: Record<string, string> = {
    student: "/dashboard/student",
    instructor: "/dashboard/instructor",
    admin: "/dashboard/admin",
  };

  const handleDemoFill = (r: string) => {
    setRole(r);
    setEmail(`${r}@cway.dev`);
    setPassword(`${r}123!`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid email or password");
        setLoading(false);
      } else {
        router.push(demoRoutes[role] || "/dashboard/student");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred");
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--cream-base)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div style={{ width: "100%", maxWidth: "440px" }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", marginBottom: "2rem" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "linear-gradient(135deg, var(--navy-deep), var(--navy-mid))", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BookOpen size={24} color="var(--gold-light)" />
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "1.25rem", color: "var(--navy-deep)" }}>CWAY Academy</div>
              <div style={{ fontSize: "0.65rem", color: "var(--gold-dark)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Student Portal</div>
            </div>
          </Link>
          <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>Welcome Back</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Sign in to continue your theological journey</p>
        </div>

        <div className="card-cream" style={{ padding: "2.5rem" }}>
          {/* Demo Role Selector */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label className="form-label">Demo Role (for testing)</label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {["student", "instructor", "admin"].map((r) => (
                <button type="button" key={r} onClick={() => handleDemoFill(r)} style={{ flex: 1, padding: "0.5rem", borderRadius: "8px", border: role === r ? "2px solid var(--gold-primary)" : "1.5px solid var(--border-light)", background: role === r ? "var(--gold-pale)" : "transparent", color: role === r ? "var(--gold-dark)" : "var(--text-muted)", fontWeight: 600, fontSize: "0.8rem", textTransform: "capitalize", cursor: "pointer", transition: "all 0.2s" }}>
                  {r}
                </button>
              ))}
            </div>
          </div>

          <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }} onSubmit={handleSubmit}>
            {error && (
              <div style={{ padding: "0.75rem", background: "rgba(176,58,46,0.1)", color: "var(--danger)", borderRadius: "8px", fontSize: "0.85rem", fontWeight: 600, textAlign: "center" }}>
                {error}
              </div>
            )}
            <div>
              <label className="form-label" htmlFor="login-email">Email Address</label>
              <input id="login-email" type="email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" />
            </div>
            <div>
              <label className="form-label" htmlFor="login-password">Password</label>
              <div style={{ position: "relative" }}>
                <input id="login-password" type={showPass ? "text" : "password"} className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" style={{ paddingRight: "3rem" }} />
                <button type="button" onClick={() => setShowPass(!showPass)} style={{ position: "absolute", right: "0.875rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)" }}>
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link href="/forgot-password" style={{ fontSize: "0.8rem", color: "var(--gold-dark)", textDecoration: "none", fontWeight: 600 }}>Forgot Password?</Link>
            </div>
            <button type="submit" disabled={loading} className="btn-primary" style={{ width: "100%", justifyContent: "center", gap: "0.5rem", opacity: loading ? 0.7 : 1 }}>
              <LogIn size={18} /> {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div style={{ textAlign: "center", marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border-light)" }}>
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
              Don't have an account?{" "}
              <Link href="/apply" style={{ color: "var(--gold-dark)", fontWeight: 700, textDecoration: "none" }}>Apply for Admission</Link>
            </p>
          </div>
        </div>

        <p style={{ textAlign: "center", fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "1.5rem" }}>
          © {new Date().getFullYear()} CWAY Academy · CWAY MISSIONS Religious Trust
        </p>
      </div>
    </div>
  );
}
