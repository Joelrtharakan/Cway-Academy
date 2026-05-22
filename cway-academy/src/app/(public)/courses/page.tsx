import Link from "next/link";
import { BookOpen, Clock, Users, Award, ChevronRight, Filter } from "lucide-react";

export const metadata = {
  title: "Courses",
  description: "Explore CWAY Academy's theological courses — Certificate and Diploma programs in Biblical Theology, Pastoral Ministry, Evangelism, Worship, and more.",
};

const allCourses = [
  {
    slug: "foundations-biblical-theology",
    title: "Foundations of Biblical Theology",
    level: "Certificate",
    format: "Self-Paced",
    duration: "12 Weeks",
    hours: "48 hrs",
    students: 340,
    category: "Theology",
    isFree: false,
    description: "A comprehensive introduction to systematic theology grounded in Scripture, covering God, creation, humanity, sin, salvation, the Church, and eschatology.",
    objectives: ["Understand the core doctrines of the Christian faith", "Apply biblical hermeneutics to Scripture interpretation", "Develop a personal theological framework for ministry"],
  },
  {
    slug: "pastoral-ministry-leadership",
    title: "Pastoral Ministry & Leadership",
    level: "Certificate",
    format: "Cohort",
    duration: "16 Weeks",
    hours: "64 hrs",
    students: 215,
    category: "Leadership",
    isFree: false,
    description: "Equipping pastors with practical ministry skills: shepherding, preaching, counselling, church administration, conflict resolution, and community leadership.",
    objectives: ["Master expository preaching and sermon preparation", "Develop pastoral counselling competencies", "Lead and administrate a local church effectively"],
  },
  {
    slug: "five-fold-ministry-training",
    title: "Five-Fold Ministry Training",
    level: "Diploma",
    format: "Hybrid",
    duration: "6 Months",
    hours: "120 hrs",
    students: 180,
    category: "Ministry",
    isFree: false,
    description: "Deep exploration of the apostolic, prophetic, evangelistic, pastoral and teaching gifts. Understand how the five-fold ministry builds the Body of Christ.",
    objectives: ["Identify and develop your ministry gift", "Understand apostolic and prophetic foundations", "Build collaborative ministry teams"],
  },
  {
    slug: "evangelism-church-planting",
    title: "Evangelism & Church Planting",
    level: "Certificate",
    format: "Self-Paced",
    duration: "10 Weeks",
    hours: "40 hrs",
    students: 290,
    category: "Evangelism",
    isFree: true,
    description: "Practical training in personal evangelism, cross-cultural outreach, and the principles of planting sustainable, indigenous churches in unreached communities.",
    objectives: ["Develop a personal evangelism strategy", "Understand cross-cultural church planting principles", "Apply indigenous ministry methods"],
  },
  {
    slug: "worship-arts-ministry",
    title: "Worship Arts & Ministry",
    level: "Certificate",
    format: "Self-Paced",
    duration: "8 Weeks",
    hours: "32 hrs",
    students: 150,
    category: "Worship",
    isFree: false,
    description: "Biblical foundations of worship, practical training for worship leaders, team building, and the theology of music in the local church.",
    objectives: ["Understand the biblical theology of worship", "Lead congregational worship effectively", "Build and develop a local worship team"],
  },
  {
    slug: "biblical-counselling",
    title: "Biblical Counselling & Care",
    level: "Diploma",
    format: "Cohort",
    duration: "5 Months",
    hours: "100 hrs",
    students: 125,
    category: "Counselling",
    isFree: false,
    description: "Comprehensive training in Scripture-based counselling methodology for pastors, lay leaders, and ministry workers serving individuals and families in crisis.",
    objectives: ["Apply biblical counselling principles", "Navigate complex pastoral care situations", "Establish a counselling ministry in the local church"],
  },
  {
    slug: "old-testament-survey",
    title: "Old Testament Survey",
    level: "Beginner",
    format: "Self-Paced",
    duration: "8 Weeks",
    hours: "32 hrs",
    students: 420,
    category: "Theology",
    isFree: true,
    description: "A sweeping survey of the Old Testament — its history, literature, theology, and prophetic messages — interpreted through the lens of Christ.",
    objectives: ["Navigate the entire Old Testament canon", "Understand covenant theology", "Interpret OT prophecy with Christological accuracy"],
  },
  {
    slug: "new-testament-survey",
    title: "New Testament Survey",
    level: "Beginner",
    format: "Self-Paced",
    duration: "8 Weeks",
    hours: "32 hrs",
    students: 390,
    category: "Theology",
    isFree: true,
    description: "A comprehensive survey of the New Testament — the Gospels, Acts, Epistles, and Revelation — exploring their historical context, theological themes, and application.",
    objectives: ["Understand New Testament chronology and context", "Interpret Paul's epistles accurately", "Apply New Testament ethics to ministry"],
  },
  {
    slug: "christian-ethics-social-justice",
    title: "Christian Ethics & Social Justice",
    level: "Intermediate",
    format: "Cohort",
    duration: "10 Weeks",
    hours: "40 hrs",
    students: 110,
    category: "Ethics",
    isFree: false,
    description: "Biblical framework for Christian engagement with society — addressing poverty, justice, caste, gender, and the Church's prophetic role in contemporary India.",
    objectives: ["Develop a biblical social ethics framework", "Engage with justice issues from Scripture", "Lead churches in holistic community transformation"],
  },
];

const categories = ["All", "Theology", "Leadership", "Ministry", "Evangelism", "Worship", "Counselling", "Ethics"];

export default function CoursesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="parchment-bg" style={{ padding: "5rem 0 3rem" }}>
        <div className="container">
          <div className="section-label">Theological Education</div>
          <h1 style={{ marginBottom: "1rem" }}>
            Courses Built for <span className="gradient-text-gold">Kingdom Impact</span>
          </h1>
          <div className="gold-divider gold-divider-left" />
          <p style={{ maxWidth: "580px", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--text-secondary)" }}>
            From beginner surveys to advanced diploma programs, every course is grounded
            in Scripture, designed for ministry application, and taught by experienced
            theological faculty.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ background: "var(--navy-deep)", padding: "2rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "3rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { n: "18+", l: "Courses Available" },
              { n: "4", l: "Diploma Programs" },
              { n: "12", l: "Languages" },
              { n: "2,400+", l: "Students Trained" },
            ].map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 700, color: "var(--gold-light)", display: "block" }}>{s.n}</span>
                <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding">
        <div className="container">
          {/* Filter Row */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "3rem", alignItems: "center" }}>
            <span style={{ color: "var(--text-muted)", fontSize: "0.875rem", display: "flex", alignItems: "center", gap: "0.375rem" }}>
              <Filter size={14} /> Filter by:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                style={{
                  padding: "0.375rem 1rem",
                  borderRadius: "999px",
                  border: "1.5px solid var(--border-light)",
                  background: cat === "All" ? "var(--gold-primary)" : "transparent",
                  color: cat === "All" ? "white" : "var(--text-secondary)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
            {allCourses.map((course) => (
              <article key={course.slug} className="course-card">
                <div
                  className="course-card-image"
                  style={{ height: "160px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "0.5rem", position: "relative" }}
                >
                  <BookOpen size={36} color="var(--gold-light)" opacity={0.5} />
                  <span style={{ color: "var(--gold-light)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>
                    {course.category}
                  </span>
                  {course.isFree && (
                    <span style={{ position: "absolute", top: "1rem", right: "1rem", background: "var(--success)", color: "white", fontSize: "0.7rem", fontWeight: 700, padding: "0.25rem 0.625rem", borderRadius: "999px" }}>
                      FREE
                    </span>
                  )}
                </div>
                <div className="course-card-body">
                  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                    <span className="badge badge-gold">{course.level}</span>
                    <span className="badge badge-navy">{course.format}</span>
                  </div>
                  <h3 style={{ fontSize: "1.05rem", marginBottom: "0.625rem", color: "var(--navy-deep)", lineHeight: 1.3 }}>{course.title}</h3>
                  <p style={{ fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1rem", color: "var(--text-secondary)" }}>{course.description}</p>

                  <div style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Clock size={12} /> {course.duration}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <BookOpen size={12} /> {course.hours}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Users size={12} /> {course.students}
                    </span>
                  </div>

                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <Link href={`/courses/${course.slug}`} className="btn-primary" style={{ flex: 1, justifyContent: "center", padding: "0.625rem 1rem", fontSize: "0.85rem" }}>
                      Enroll Now
                    </Link>
                    <Link href={`/courses/${course.slug}`} style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.8rem", color: "var(--gold-dark)", textDecoration: "none", fontWeight: 600, padding: "0.625rem" }}>
                      Details <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--navy-deep)", padding: "5rem 0", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ color: "white", marginBottom: "1rem" }}>Not Sure Which Course Is Right for You?</h2>
          <p style={{ color: "rgba(255,255,255,0.65)", maxWidth: "500px", margin: "0 auto 2rem", lineHeight: 1.8 }}>
            Our admissions team is ready to guide you toward the program that best matches
            your calling, experience, and ministry context.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Talk to Admissions</Link>
            <Link href="/apply" className="btn-outline-gold">Apply Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
