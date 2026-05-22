import Link from "next/link";
import { Heart, Users, Globe, BookOpen, ArrowRight, DollarSign } from "lucide-react";

export const metadata = {
  title: "Get Involved",
  description: "Partner with CWAY Academy — donate, volunteer, pray, or become a ministry partner to advance theological education across India.",
};

const ways = [
  {
    icon: Heart,
    title: "Give Generously",
    desc: "Your financial gifts directly fund scholarships for rural pastors who cannot afford training. Every contribution transforms a life and multiplies Kingdom impact.",
    cta: "Donate Now",
    href: "/donate",
    color: "var(--gold-primary)",
  },
  {
    icon: Users,
    title: "Become a Partner",
    desc: "Churches, organizations, and individuals can partner with CWAY Academy through regular financial support, prayer partnerships, and ministry collaboration.",
    cta: "Partner With Us",
    href: "/get-involved#partner",
    color: "var(--navy-mid)",
  },
  {
    icon: Globe,
    title: "Spread the Word",
    desc: "Help us reach more pastors by sharing CWAY Academy with your network. Word-of-mouth remains the most powerful way to connect called leaders with training.",
    cta: "Share Our Mission",
    href: "/contact",
    color: "var(--success)",
  },
  {
    icon: BookOpen,
    title: "Volunteer & Teach",
    desc: "Do you have theological training, teaching experience, or ministry expertise? Consider volunteering as a course facilitator, mentor, or content contributor.",
    cta: "Volunteer With Us",
    href: "/contact?subject=volunteer",
    color: "var(--navy-deep)",
  },
];

const partnerTiers = [
  {
    name: "Prayer Partner",
    amount: "Free",
    desc: "Commit to praying regularly for CWAY Academy's students, faculty, and mission.",
    benefits: ["Monthly prayer newsletter", "Prayer calendar updates", "Praise reports from students"],
  },
  {
    name: "Ministry Supporter",
    amount: "₹500/mo",
    desc: "Monthly giving that sustains operational ministry, curriculum development, and student support.",
    benefits: ["All Prayer Partner benefits", "Quarterly impact reports", "Invitation to ministry events", "Tax exemption receipt"],
    highlighted: false,
  },
  {
    name: "Scholarship Sponsor",
    amount: "₹2,000/mo",
    desc: "Fully sponsor one rural pastor's theological training through your regular giving.",
    benefits: ["All Ministry Supporter benefits", "Named scholarship opportunity", "Student progress updates", "Certificate presentation invitation"],
    highlighted: true,
  },
  {
    name: "Ministry Partner",
    amount: "₹10,000+/mo",
    desc: "Become a strategic ministry partner with significant investment in CWAY's growth.",
    benefits: ["All Scholarship Sponsor benefits", "Advisory board invitation", "Co-branded ministry collaboration", "Annual strategy briefing"],
    highlighted: false,
  },
];

export default function GetInvolvedPage() {
  return (
    <div>
      {/* Hero */}
      <section className="parchment-bg" style={{ padding: "5rem 0 3rem" }}>
        <div className="container">
          <div className="section-label">Join the Mission</div>
          <h1 style={{ marginBottom: "1rem" }}>
            Every Gift. Every Prayer. <br />
            <span className="gradient-text-gold">Every Life Changed.</span>
          </h1>
          <div className="gold-divider gold-divider-left" />
          <p style={{ maxWidth: "580px", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--text-secondary)" }}>
            CWAY Academy cannot fulfill its mission alone. We need a global community
            of believers — givers, prayers, volunteers, and partners — who share our
            passion for equipping every called servant of God in India and beyond.
          </p>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>How You Can Help</div>
            <h2>Four Ways to Get Involved</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-auto-fill">
            {ways.map((w) => (
              <div key={w.title} className="card-cream" style={{ padding: "2.5rem" }}>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    background: `${w.color}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                    color: w.color,
                  }}
                >
                  <w.icon size={24} />
                </div>
                <h4 style={{ marginBottom: "0.75rem", color: "var(--navy-deep)" }}>{w.title}</h4>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>{w.desc}</p>
                <Link href={w.href} className="btn-primary" style={{ background: w.color, display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", padding: "0.75rem 1.5rem" }}>
                  {w.cta} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section id="partner" className="section-padding parchment-bg">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Partnership Tiers</div>
            <h2>Choose Your Level of Involvement</h2>
            <div className="gold-divider" />
            <p style={{ maxWidth: "500px", margin: "0 auto", color: "var(--text-secondary)" }}>
              Every level of partnership is valued and makes a real difference in the lives of
              rural pastors and ministry leaders across India.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {partnerTiers.map((tier) => (
              <div
                key={tier.name}
                style={{
                  background: tier.highlighted ? "linear-gradient(135deg, var(--navy-deep), var(--navy-mid))" : "var(--cream-light)",
                  border: tier.highlighted ? "none" : "1px solid var(--border-light)",
                  borderRadius: "20px",
                  padding: "2rem",
                  boxShadow: tier.highlighted ? "var(--shadow-xl)" : "var(--shadow-sm)",
                  position: "relative",
                  transform: tier.highlighted ? "scale(1.03)" : "none",
                }}
              >
                {tier.highlighted && (
                  <span style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "var(--gold-primary)", color: "white", fontSize: "0.7rem", fontWeight: 700, padding: "0.25rem 1rem", borderRadius: "999px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Most Impactful
                  </span>
                )}
                <div style={{ marginBottom: "0.5rem" }}>
                  <h4 style={{ color: tier.highlighted ? "white" : "var(--navy-deep)", marginBottom: "0.25rem" }}>{tier.name}</h4>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 700, color: tier.highlighted ? "var(--gold-light)" : "var(--gold-primary)", marginBottom: "0.75rem" }}>
                    {tier.amount}
                  </div>
                </div>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: tier.highlighted ? "rgba(255,255,255,0.7)" : "var(--text-secondary)", marginBottom: "1.5rem" }}>
                  {tier.desc}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
                  {tier.benefits.map((b) => (
                    <li key={b} style={{ fontSize: "0.8rem", color: tier.highlighted ? "rgba(255,255,255,0.75)" : "var(--text-secondary)", display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                      <span style={{ color: "var(--gold-primary)", flexShrink: 0, marginTop: "2px" }}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/donate"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "0.75rem",
                    borderRadius: "10px",
                    background: tier.highlighted ? "var(--gold-primary)" : "transparent",
                    border: tier.highlighted ? "none" : "2px solid var(--gold-primary)",
                    color: tier.highlighted ? "white" : "var(--gold-dark)",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                >
                  {tier.amount === "Free" ? "Sign Up Free" : "Partner Now"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section style={{ background: "var(--navy-deep)", padding: "4rem 0", textAlign: "center" }}>
        <div className="container">
          <div className="scripture-block" style={{ maxWidth: "600px", margin: "0 auto", background: "rgba(201,168,76,0.1)", borderColor: "var(--gold-primary)" }}>
            <p style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1.1rem", lineHeight: 1.8 }}>
              "Now may He who supplies seed to the sower, and bread for food, supply and multiply the seed you have sown and increase the fruits of your righteousness."
            </p>
            <span className="scripture-reference">— 2 Corinthians 9:10 (NKJV)</span>
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/donate" className="btn-primary" style={{ marginRight: "1rem" }}>Give Today</Link>
            <Link href="/contact" className="btn-outline-gold">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
