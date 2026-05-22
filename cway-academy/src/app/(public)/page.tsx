import Link from "next/link";
import { BookOpen, Users, Award, Globe, ChevronRight, Play, Star, Heart, Zap, Shield, ArrowRight } from "lucide-react";

const stats = [
  { number: "2,400+", label: "Students Trained" },
  { number: "18+", label: "Ministry Courses" },
  { number: "12", label: "Indian Languages" },
  { number: "22+", label: "States Reached" },
];

const features = [
  {
    icon: BookOpen,
    title: "Bible-Based Curriculum",
    desc: "Every course is rooted in sound theological education aligned with the Word of God.",
  },
  {
    icon: Globe,
    title: "Local Language Training",
    desc: "Ministry training delivered in 12+ regional Indian languages for maximum accessibility.",
  },
  {
    icon: Users,
    title: "Rural Pastor Focus",
    desc: "Purpose-built for rural pastors, lay leaders, and indigenous church workers across India.",
  },
  {
    icon: Award,
    title: "Certified Programs",
    desc: "Earn internationally recognized theological certificates and diplomas upon completion.",
  },
  {
    icon: Heart,
    title: "Scholarship Support",
    desc: "Generous scholarship programs ensure no called leader is held back by financial need.",
  },
  {
    icon: Shield,
    title: "Doctrinally Sound",
    desc: "All content vetted by seasoned theologians ensuring doctrinal integrity and depth.",
  },
];

const courses = [
  {
    title: "Foundations of Biblical Theology",
    level: "Certificate",
    duration: "12 Weeks",
    students: "340",
    category: "Theology",
    description: "A comprehensive introduction to systematic theology grounded in Scripture, covering God, creation, humanity, sin, salvation, and eschatology.",
  },
  {
    title: "Pastoral Ministry & Leadership",
    level: "Certificate",
    duration: "16 Weeks",
    students: "215",
    category: "Leadership",
    description: "Equipping pastors with practical ministry skills: shepherding, preaching, counselling, church administration and community leadership.",
  },
  {
    title: "Five-Fold Ministry Training",
    level: "Diploma",
    duration: "6 Months",
    students: "180",
    category: "Ministry",
    description: "Deep exploration of the apostolic, prophetic, evangelistic, pastoral and teaching gifts for building the Body of Christ.",
  },
];

const testimonials = [
  {
    name: "Pastor Samuel Raju",
    role: "Church Leader, Andhra Pradesh",
    quote: "CWAY Academy transformed my ministry. The theological depth combined with practical training has made me a better shepherd to my congregation.",
    rating: 5,
  },
  {
    name: "Sister Priya Mathew",
    role: "Women's Ministry Leader, Kerala",
    quote: "The scholarship I received opened a door I never imagined. Now I serve our community with confidence grounded in God's Word.",
    rating: 5,
  },
  {
    name: "Evangelist Daniel Arora",
    role: "Church Planter, Punjab",
    quote: "Training in my local language made all the difference. CWAY Academy met me where I was and equipped me for where God is calling me.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="hero-section" style={{ display: "flex", alignItems: "center" }}>
        <div className="container" style={{ padding: "6rem 1.5rem 4rem", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "760px" }}>
            <div className="section-label animate-fade-up">
              CWAY MISSIONS Religious Trust · Est. Bangalore, India
            </div>

            <h1
              className="animate-fade-up delay-100"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(40px, 6vw, 60px)",
                fontWeight: 700,
                color: "var(--navy-deep)",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              Coach, Challenge,
              <br />
              <span className="gradient-text-gold">and Commission!</span>
            </h1>

            <p
              className="animate-fade-up delay-200"
              style={{ fontSize: "1.125rem", lineHeight: 1.8, color: "var(--text-secondary)", marginBottom: "2.5rem", maxWidth: "560px" }}
            >
              Equipping rural pastors, lay leaders, and Christian disciples through
              Bible-based theological education and leadership training in local
              Indian languages. A ministry of{" "}
              <strong style={{ color: "var(--navy-mid)" }}>CWAY MISSIONS Religious Trust</strong>.
            </p>

            <div className="animate-fade-up delay-300" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/apply" className="btn-primary animate-pulse-gold">
                Apply for Admission <ArrowRight size={16} />
              </Link>
              <Link href="/courses" className="btn-secondary">
                Explore Courses
              </Link>
            </div>

            {/* Scripture */}
            <div className="scripture-block animate-fade-up delay-400" style={{ maxWidth: "520px", marginTop: "3rem" }}>
              "And He Himself gave some to be apostles, some prophets, some evangelists, and some pastors and teachers, for the equipping of the saints for the work of ministry."
              <span className="scripture-reference">— Ephesians 4:11–12 (NKJV)</span>
            </div>
          </div>

          {/* Floating Stats */}
          <div
            className="animate-fade-up delay-500"
            style={{
              position: "absolute",
              right: "2rem",
              top: "50%",
              transform: "translateY(-50%)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              maxWidth: "320px",
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="card-cream stat-card" style={{ padding: "1.5rem" }}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-floating-stats { display: none !important; }
          }
        `}</style>
      </section>

      {/* ── MISSION STRIP ── */}
      <section style={{ background: "var(--navy-deep)", padding: "3rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.375rem", color: "rgba(255,255,255,0.9)", fontStyle: "italic", lineHeight: 1.7, maxWidth: "700px", margin: "0 auto" }}>
            "Our mission is to equip every called servant of God — regardless of location,
            language, or economic standing — with the theological excellence they deserve."
          </p>
          <div className="gold-divider" style={{ marginTop: "1.5rem" }} />
          <p style={{ color: "var(--gold-light)", fontSize: "0.85rem", letterSpacing: "0.1em", fontWeight: 600, textTransform: "uppercase", marginTop: "1rem" }}>
            CWAY Academy Leadership Team
          </p>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Why CWAY Academy</div>
            <h2>A Ministry Built for the Frontlines</h2>
            <div className="gold-divider" />
            <p style={{ maxWidth: "560px", margin: "0 auto", color: "var(--text-secondary)" }}>
              From rural villages to urban church networks, we serve the full spectrum
              of God's Kingdom workers with world-class theological training.
            </p>
          </div>

          <div className="grid-auto-fill">
            {features.map((f) => (
              <div key={f.title} className="card-cream" style={{ padding: "2rem" }}>
                <div className="feature-icon" style={{ marginBottom: "1.25rem" }}>
                  <f.icon size={26} />
                </div>
                <h4 style={{ marginBottom: "0.75rem", color: "var(--navy-deep)" }}>{f.title}</h4>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES PREVIEW ── */}
      <section className="section-padding parchment-bg">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div className="section-label gold-divider-left">Theological Training</div>
              <h2>Featured Courses</h2>
            </div>
            <Link href="/courses" className="btn-outline-gold">
              View All Courses <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid-auto-fill">
            {courses.map((course) => (
              <article key={course.title} className="course-card">
                <div
                  className="course-card-image"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <BookOpen size={40} color="var(--gold-light)" opacity={0.6} />
                  <span style={{ color: "var(--gold-light)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                    {course.category}
                  </span>
                </div>
                <div className="course-card-body">
                  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.875rem" }}>
                    <span className="badge badge-gold">{course.level}</span>
                    <span className="badge badge-navy">{course.duration}</span>
                  </div>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--navy-deep)" }}>{course.title}</h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>{course.description}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                      <Users size={12} style={{ verticalAlign: "middle", marginRight: "4px" }} />
                      {course.students} enrolled
                    </span>
                    <Link
                      href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "var(--gold-dark)",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      Learn More <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACT STATS BANNER ── */}
      <section style={{ background: "linear-gradient(135deg, var(--navy-deep), var(--navy-mid))", padding: "4rem 0" }}>
        <div className="container">
          <div className="impact-stats-grid">
            {stats.map((s) => (
              <div key={s.label}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "3rem", fontWeight: 700, color: "var(--gold-light)", display: "block", lineHeight: 1 }}>
                  {s.number}
                </span>
                <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginTop: "0.5rem", display: "block" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Student Stories</div>
            <h2>Lives Transformed by God's Word</h2>
            <div className="gold-divider" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2rem" }}>
            {testimonials.map((t) => (
              <div key={t.name} className="card-cream" style={{ padding: "2rem" }}>
                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1.25rem" }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="var(--gold-primary)" color="var(--gold-primary)" />
                  ))}
                </div>
                <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "1rem", lineHeight: 1.8, color: "var(--navy-mid)", marginBottom: "1.5rem" }}>
                  "{t.quote}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg, var(--gold-primary), var(--gold-dark))", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontFamily: "var(--font-serif)", fontSize: "1.1rem" }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--navy-deep)" }}>{t.name}</div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DONATE / GET INVOLVED CTA ── */}
      <section className="section-padding parchment-bg">
        <div className="container">
          <div className="cta-grid">
            {/* Donate */}
            <div className="card-navy" style={{ padding: "3rem" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🙏</div>
              <h3 style={{ color: "white", marginBottom: "1rem" }}>Partner in Ministry</h3>
              <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.95rem" }}>
                Your generous giving directly funds scholarships for rural pastors who
                cannot afford training but are deeply called to serve. Every rupee
                advances God's Kingdom in India's unreached regions.
              </p>
              <Link href="/donate" className="btn-primary">
                Give Today <Heart size={16} />
              </Link>
            </div>

            {/* Apply */}
            <div style={{ background: "linear-gradient(135deg, var(--gold-primary), var(--gold-dark))", borderRadius: "20px", padding: "3rem" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📖</div>
              <h3 style={{ color: "white", marginBottom: "1rem" }}>Begin Your Journey</h3>
              <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.95rem" }}>
                Applications are open for our next cohort. Whether you're a first-time
                student or an experienced pastor seeking deeper equipping, CWAY Academy
                has a program designed for your calling.
              </p>
              <Link
                href="/apply"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 2rem",
                  background: "white",
                  color: "var(--gold-dark)",
                  fontWeight: 700,
                  borderRadius: "12px",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                Apply for Admission <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 900px) {
          .hero-floating-stats { display: none !important; }
          .impact-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .impact-stats-grid { grid-template-columns: 1fr !important; }
          .cta-grid { grid-template-columns: 1fr !important; }
        }
        .impact-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }
        .cta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
      `}</style>
    </div>
  );
}
