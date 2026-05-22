import Link from "next/link";
import { Clock, User, Tag, ArrowRight, BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog",
  description: "Theological insights, ministry stories, and discipleship resources from CWAY Academy faculty and alumni.",
};

const posts = [
  {
    slug: "the-great-commission-and-the-indian-church",
    title: "The Great Commission and the Indian Church: A Call to Every Believer",
    excerpt: "India is home to over 1.4 billion people, thousands of unreached people groups, and a church that is simultaneously growing and in urgent need of theological depth. In this article, we explore what the Great Commission demands of the Indian church in the 21st century.",
    author: "Rev. [Director Name]",
    date: "March 16, 2022",
    readTime: "8 min",
    category: "Missiology",
    tags: ["Great Commission", "India", "Church Growth", "Missiology"],
  },
  {
    slug: "theological-education-for-rural-pastors",
    title: "Why Theological Education for Rural Pastors Is a Justice Issue",
    excerpt: "Too often, the pastor in the village has less access to theological training than his urban counterpart — not because of lack of calling, but because of geography, language, and economics. This inequality is not merely an educational gap; it is a justice issue.",
    author: "Dr. [Academic Dean]",
    date: "February 2022",
    readTime: "6 min",
    category: "Theological Education",
    tags: ["Rural Ministry", "Pastoral Training", "Access", "Justice"],
  },
  {
    slug: "five-fold-ministry-building-the-church",
    title: "Five-Fold Ministry: God's Design for Building the Body of Christ",
    excerpt: "Ephesians 4:11–12 reveals God's blueprint for a fully equipped church. Understanding the apostolic, prophetic, evangelistic, pastoral, and teaching gifts is not optional theology — it is essential architecture for effective ministry.",
    author: "Pastor [Ministry Director]",
    date: "January 2022",
    readTime: "10 min",
    category: "Ministry",
    tags: ["Five-Fold Ministry", "Ephesians 4", "Church Building", "Ministry Gifts"],
  },
  {
    slug: "women-in-ministry-biblical-perspective",
    title: "Women in Ministry: A Biblical and Contextual Perspective for India",
    excerpt: "Across India, women are serving on the frontlines of ministry — often without recognition, training, or theological support. CWAY Academy explores what Scripture says about women in ministry and how the Indian church can better steward this vital gift.",
    author: "Sister [Women's Ministry Director]",
    date: "December 2021",
    readTime: "7 min",
    category: "Women in Ministry",
    tags: ["Women's Ministry", "Biblical Roles", "India", "Empowerment"],
  },
  {
    slug: "discipleship-digital-age",
    title: "Discipleship in the Digital Age: Opportunities and Dangers for the Indian Church",
    excerpt: "The rise of digital platforms has created unprecedented opportunities for theological education — and unprecedented dangers. How should Indian pastors and leaders navigate the digital landscape with wisdom, discernment, and missional intentionality?",
    author: "Prof. [Technology Faculty]",
    date: "November 2021",
    readTime: "9 min",
    category: "Discipleship",
    tags: ["Digital Discipleship", "Technology", "Ministry", "Church"],
  },
  {
    slug: "prayer-foundation-of-ministry",
    title: "Prayer: The Non-Negotiable Foundation of Effective Ministry",
    excerpt: "Before strategy, before training, before curriculum — there is prayer. This article explores the theological foundations of intercessory prayer and its indispensable role in sustaining a fruitful, Spirit-empowered ministry in the Indian context.",
    author: "Dr. [Prayer Ministry Faculty]",
    date: "October 2021",
    readTime: "5 min",
    category: "Spirituality",
    tags: ["Prayer", "Intercession", "Ministry Foundation", "Spirituality"],
  },
];

const categories = ["All", "Missiology", "Theological Education", "Ministry", "Women in Ministry", "Discipleship", "Spirituality"];

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="parchment-bg" style={{ padding: "5rem 0 3rem" }}>
        <div className="container">
          <div className="section-label">Theological Insights</div>
          <h1 style={{ marginBottom: "1rem" }}>
            Words That <span className="gradient-text-gold">Build the Kingdom</span>
          </h1>
          <div className="gold-divider gold-divider-left" />
          <p style={{ maxWidth: "560px", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--text-secondary)" }}>
            Theological insights, ministry stories, discipleship resources, and
            scholarly reflections from CWAY Academy faculty, alumni, and ministry partners.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section style={{ background: "var(--cream-mid)", padding: "1.5rem 0", borderBottom: "1px solid var(--border-light)" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button key={cat} style={{ padding: "0.375rem 1rem", borderRadius: "999px", border: "1.5px solid var(--border-light)", background: cat === "All" ? "var(--gold-primary)" : "var(--cream-light)", color: cat === "All" ? "white" : "var(--text-secondary)", fontSize: "0.8rem", fontWeight: 600, cursor: "pointer" }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding">
        <div className="container">
          {/* Featured Post */}
          <div className="card-cream" style={{ padding: "3rem", marginBottom: "3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div
              style={{
                height: "280px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, var(--navy-deep), var(--navy-mid))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <BookOpen size={48} color="var(--gold-light)" opacity={0.6} />
              <span style={{ color: "var(--gold-light)", fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>Featured Article</span>
            </div>
            <div>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                <span className="badge badge-gold">{posts[0].category}</span>
                <span className="badge badge-navy">Featured</span>
              </div>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", lineHeight: 1.3 }}>{posts[0].title}</h2>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "1.5rem", color: "var(--text-secondary)" }}>{posts[0].excerpt}</p>
              <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><User size={12} /> {posts[0].author}</span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock size={12} /> {posts[0].readTime} read</span>
              </div>
              <Link href={`/blog/${posts[0].slug}`} className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
                Read Article <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Post Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
            {posts.slice(1).map((post) => (
              <article key={post.slug} className="card-cream" style={{ padding: "2rem" }}>
                <div
                  style={{
                    height: "140px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, var(--cream-mid), var(--cream-dark))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <BookOpen size={32} color="var(--gold-primary)" opacity={0.5} />
                </div>
                <span className="badge badge-gold" style={{ marginBottom: "0.875rem", display: "inline-block" }}>{post.category}</span>
                <h3 style={{ fontSize: "1.05rem", lineHeight: 1.35, marginBottom: "0.75rem", color: "var(--navy-deep)" }}>{post.title}</h3>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "1.25rem", color: "var(--text-secondary)" }}>
                  {post.excerpt.slice(0, 120)}...
                </p>
                <div style={{ display: "flex", gap: "1rem", fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "1.25rem" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock size={11} /> {post.readTime}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><User size={11} /> {post.author.split(" ").slice(0, 2).join(" ")}</span>
                </div>
                <Link href={`/blog/${post.slug}`} style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--gold-dark)", textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>
                  Read More <ArrowRight size={13} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
