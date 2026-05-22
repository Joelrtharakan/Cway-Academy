import Link from "next/link";
import { ArrowRight, Heart, Globe, BookOpen, Users } from "lucide-react";

export const metadata = {
  title: "About Us",
  description: "Learn about CWAY Academy, a ministry of CWAY MISSIONS Religious Trust, Bangalore, India. Discover our mission, vision, history and values.",
};

const values = [
  { icon: BookOpen, title: "Scripture Authority", desc: "The Bible is our supreme authority and foundation for all theological education and ministry training." },
  { icon: Heart, title: "Pastoral Compassion", desc: "We serve with deep pastoral care, understanding the sacrifices made by rural church workers across India." },
  { icon: Globe, title: "Missional Vision", desc: "We are driven by the Great Commission — discipling all nations, beginning with India's unreached communities." },
  { icon: Users, title: "Community of Learners", desc: "We foster a family-like learning community where students grow together in faith, knowledge, and calling." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="parchment-bg" style={{ padding: "5rem 0 4rem" }}>
        <div className="container">
          <div className="section-label">Our Story</div>
          <h1 style={{ maxWidth: "600px", marginBottom: "1.5rem" }}>
            Rooted in Faith. <span className="gradient-text-gold">Built for the Nations.</span>
          </h1>
          <div className="gold-divider gold-divider-left" />
          <p style={{ maxWidth: "620px", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--text-secondary)" }}>
            CWAY Academy is the educational arm of{" "}
            <strong style={{ color: "var(--navy-deep)" }}>CWAY MISSIONS Religious Trust</strong>, founded
            and registered in Bangalore, India. We exist to fulfill the mandate of Ephesians 4:11–12 —
            equipping the saints for the work of ministry through sound theological education delivered
            in the heart languages of India's diverse communities.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <div className="section-label gold-divider-left">Our Mission</div>
              <h2 style={{ marginBottom: "1.25rem" }}>Equipping the Called</h2>
              <p style={{ lineHeight: 1.9, marginBottom: "1.5rem" }}>
                CWAY Academy's mission is to equip rural pastors, lay leaders, evangelists, and
                Christian disciples through Bible-based theological education and leadership
                training delivered in local Indian languages.
              </p>
              <p style={{ lineHeight: 1.9, marginBottom: "1.5rem" }}>
                We believe that every person called by God to serve deserves access to
                excellent theological training — regardless of geography, language, or
                economic background. This conviction drives every program we build, every
                scholarship we award, and every course we teach.
              </p>
              <div className="scripture-block">
                "And the things that you have heard from me among many witnesses, commit these
                to faithful men who will be able to teach others also."
                <span className="scripture-reference">— 2 Timothy 2:2 (NKJV)</span>
              </div>
            </div>
            <div>
              <div className="section-label gold-divider-left">Our Vision</div>
              <h2 style={{ marginBottom: "1.25rem" }}>A Church Equipped Across Every Nation</h2>
              <p style={{ lineHeight: 1.9, marginBottom: "1.5rem" }}>
                We envision a generation of theologically grounded, Spirit-empowered Christian
                leaders emerging from every district, state, and language group in India —
                leaders who coach, challenge, and commission the next generation.
              </p>
              <p style={{ lineHeight: 1.9, marginBottom: "2rem" }}>
                CWAY Academy aspires to be India's most accessible and trusted theological
                training institution — a place where the rural pastor and the urban leader
                find equal dignity, equal depth, and equal empowerment.
              </p>
              <Link href="/apply" className="btn-primary">
                Join Our Mission <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding parchment-bg">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Our Heritage</div>
            <h2>From a Vision to a Movement</h2>
            <div className="gold-divider" />
          </div>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <p style={{ lineHeight: 1.9, marginBottom: "1.5rem", fontSize: "1.05rem" }}>
              CWAY MISSIONS Religious Trust was birthed from a deep burden for India's unreached
              rural communities — the villages, tribal belts, and language groups where the Gospel
              has not yet taken deep root. The founders recognized that sustainable church growth
              requires not just evangelism, but robust discipleship and leadership training.
            </p>
            <p style={{ lineHeight: 1.9, marginBottom: "1.5rem" }}>
              From its inception in Bangalore, CWAY Missions began training frontline workers:
              local church pastors, women's ministry leaders, youth workers, and evangelists.
              What began as small training workshops grew into a structured academy with formal
              curriculum, certified programs, and a growing alumni network spanning 22+ states.
            </p>
            <p style={{ lineHeight: 1.9 }}>
              Today, CWAY Academy represents the next chapter of this mission — a fully digital,
              globally accessible theological platform designed to reach every called servant of
              God in India and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>What We Stand For</div>
            <h2>Our Core Values</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid-auto-fill">
            {values.map((v) => (
              <div key={v.title} className="card-cream" style={{ padding: "2.5rem" }}>
                <div className="feature-icon" style={{ marginBottom: "1.25rem" }}>
                  <v.icon size={26} />
                </div>
                <h4 style={{ marginBottom: "0.75rem" }}>{v.title}</h4>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Trust Info */}
      <section style={{ background: "var(--navy-deep)", padding: "5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="gold-divider" />
          <h2 style={{ color: "white", marginBottom: "1.5rem" }}>About CWAY MISSIONS Religious Trust</h2>
          <p style={{ maxWidth: "620px", margin: "0 auto 2rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.9 }}>
            CWAY MISSIONS Religious Trust is a registered charitable religious trust based in
            Bangalore, India. The Trust is committed to the holistic transformation of communities
            through evangelism, church planting, theological education, and compassion ministry
            across India's diverse cultural landscape.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Contact the Trust</Link>
            <Link href="/donate" className="btn-outline-gold">Support the Ministry</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
