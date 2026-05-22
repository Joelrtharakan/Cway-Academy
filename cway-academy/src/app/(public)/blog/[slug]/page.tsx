import Link from "next/link";
import { notFound } from "next/navigation";
import { User, Clock, Tag, ArrowLeft, BookOpen, ChevronRight } from "lucide-react";

const posts = [
  {
    slug: "the-great-commission-and-the-indian-church",
    title: "The Great Commission and the Indian Church: A Call to Every Believer",
    author: "Rev. [Director Name]",
    authorRole: "Founder & Executive Director",
    date: "March 16, 2022",
    readTime: "8 min",
    category: "Missiology",
    tags: ["Great Commission", "India", "Church Growth", "Missiology"],
    excerpt: "India is home to over 1.4 billion people, thousands of unreached people groups, and a church that is simultaneously growing and in urgent need of theological depth.",
    content: `
India is home to over 1.4 billion people — a staggering 17% of the world's population. Within her borders lie over 2,000 distinct people groups, hundreds of languages, and thousands of communities that have never once heard the name of Jesus Christ in a meaningful, contextualised way.

Yet the church in India is growing. By every statistical measure, the Indian church is expanding — through the work of faithful pastors, itinerant evangelists, and grassroots church planters who are taking the Gospel to the margins of society. This is cause for great rejoicing.

But growth without depth is dangerous.

**The Crisis of Untrained Leaders**

One of the most urgent challenges facing the Indian church today is the crisis of pastoral training. The vast majority of church planters and pastors in rural India — those shepherding congregations in tribal areas, Dalit communities, and villages far from urban centres — have received little to no formal theological education.

This is not a reflection of their calling or their character. These are men and women of extraordinary faith, sacrifice, and devotion to God. The problem is structural: theological education in India has historically been expensive, urban-centric, and delivered primarily in English — effectively inaccessible to the very pastors who need it most.

**What the Great Commission Demands**

Matthew 28:19–20 is one of the most familiar passages in the New Testament: *"Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you."*

Notice the scope of the commission. It is not merely to *evangelise* — to announce the Gospel and move on. The commission includes *teaching* — forming disciples who understand what they believe, why they believe it, and how to live and lead accordingly. This is the task of theological education.

Every pastor who cannot explain the nature of the Trinity, the doctrine of justification, or the authority of Scripture is limited in their ability to form deep, rooted disciples. Every congregation led by a theologically shallow shepherd is vulnerable to false teaching, syncretism, and spiritual immaturity.

**The Opportunity Before Us**

The digital revolution has created an unprecedented opportunity to change this reality. For the first time in history, high-quality theological education can be delivered directly to a rural pastor's smartphone — in their own language, at their own pace, at a fraction of the cost of residential seminary.

This is the vision driving CWAY Academy. We believe that every called pastor in every village in India deserves access to world-class theological training. We believe that theological education is not a luxury for the privileged few — it is a justice issue, a discipleship issue, and ultimately, a Great Commission issue.

**A Call to Action**

Will you partner with us in this mission? Whether through prayer, financial support, or sharing our work with pastors in your network — you can be part of equipping the Indian church for the work of the Gospel.

The Great Commission is not just for missionaries who cross borders. It is for every believer, in every place, who is willing to be a part of making deep, theologically grounded disciples — disciples who will stand firm when the storms come, and who will in turn reproduce themselves in others.

*"And the things that you have heard from me among many witnesses, commit these to faithful men who will be able to teach others also."* — 2 Timothy 2:2 (NKJV)
    `.trim(),
    scripture: { text: "Go therefore and make disciples of all nations... teaching them to observe all that I have commanded you.", reference: "Matthew 28:19–20 (ESV)" },
  },
  {
    slug: "theological-education-for-rural-pastors",
    title: "Why Theological Education for Rural Pastors Is a Justice Issue",
    author: "Dr. [Academic Dean]",
    authorRole: "Academic Dean",
    date: "February 2022",
    readTime: "6 min",
    category: "Theological Education",
    tags: ["Rural Ministry", "Pastoral Training", "Access", "Justice"],
    excerpt: "Too often, the pastor in the village has less access to theological training than his urban counterpart — not because of lack of calling, but because of geography, language, and economics.",
    content: `
The disparity between theological education available to urban pastors and rural pastors in India is not merely an inconvenience. It is a justice issue — and the Indian church must name it as such.

Consider this: a pastor serving a congregation of 30 families in a village in Bihar or Chhattisgarh faces the same spiritual challenges as a pastor in Bangalore or Chennai. He must preach every Sunday, counsel grieving families, navigate doctrinal confusion, disciple new believers, and resist false teaching — often without any formal training.

**The Geography of Inequality**

India's seminaries and Bible colleges are concentrated in urban centres — Chennai, Bangalore, Hyderabad, Kolkata. A rural pastor who wishes to attend such an institution must leave his congregation, his family, and his livelihood for months or years. Most cannot afford this. Most will not go.

The result is a two-tiered church: a well-resourced, theologically equipped urban church, and an under-resourced, theologically thin rural church. This is not the church that Jesus is building.

**The Language Barrier**

Compounding the geography problem is the language barrier. Most theological education in India is delivered in English — the language of colonial-era missions, academic theology, and urban India. But the majority of rural pastors minister in Tamil, Telugu, Hindi, Kannada, Malayalam, Odia, or one of hundreds of other regional languages.

A pastor who cannot access theology in his mother tongue is effectively excluded from the theological conversation. His understanding of Scripture is limited by his language access, not by his capacity or his calling.

**CWAY Academy's Response**

At CWAY Academy, we are committed to dismantling these barriers. Our courses are being developed in multiple Indian languages. Our scholarship programme ensures that no rural pastor is turned away for financial reasons. Our digital-first delivery model means that a pastor in a remote village with a smartphone and an internet connection can access the same quality of theological training as a pastor in Chennai.

We believe this is not charity. It is justice. It is the church living into its calling to be a community without distinction — where calling, not economics or geography, determines access to training.

*"There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus."* — Galatians 3:28
    `.trim(),
    scripture: { text: "There is neither Jew nor Gentile, neither slave nor free... for you are all one in Christ Jesus.", reference: "Galatians 3:28 (NIV)" },
  },
];

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | CWAY Academy Blog`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ background: "var(--cream-mid)", padding: "1rem 0", borderBottom: "1px solid var(--border-light)" }}>
        <div className="container" style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.82rem", color: "var(--text-muted)" }}>
          <Link href="/blog" style={{ color: "var(--gold-dark)", textDecoration: "none", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
            <ArrowLeft size={13} /> Blog
          </Link>
          <ChevronRight size={12} />
          <span style={{ color: "var(--text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "300px" }}>{post.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="parchment-bg" style={{ padding: "4rem 0 2.5rem" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          <span className="badge badge-gold" style={{ marginBottom: "1.25rem", display: "inline-block" }}>{post.category}</span>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.25, marginBottom: "1.5rem" }}>{post.title}</h1>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
              <User size={14} color="var(--gold-primary)" />
              <strong style={{ color: "var(--navy-deep)" }}>{post.author}</strong>
              <span style={{ color: "var(--text-muted)" }}>· {post.authorRole}</span>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.875rem", color: "var(--text-muted)" }}>
              <Clock size={14} /> {post.date} · {post.readTime} read
            </span>
          </div>
          <div className="gold-divider gold-divider-left" />
        </div>
      </section>

      {/* Article Body */}
      <section style={{ padding: "3rem 0 5rem" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          {/* Lead */}
          <p style={{ fontSize: "1.1rem", lineHeight: 1.85, fontWeight: 500, color: "var(--navy-mid)", marginBottom: "2rem", borderLeft: "3px solid var(--gold-primary)", paddingLeft: "1.25rem" }}>
            {post.excerpt}
          </p>

          {/* Scripture */}
          <div className="scripture-block">
            {post.scripture.text}
            <span className="scripture-reference">— {post.scripture.reference}</span>
          </div>

          {/* Content */}
          <div style={{ lineHeight: 1.9, color: "var(--text-secondary)" }}>
            {post.content.split("\n\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return <h3 key={i} style={{ fontSize: "1.2rem", color: "var(--navy-deep)", margin: "2rem 0 0.875rem" }}>{para.replace(/\*\*/g, "")}</h3>;
              }
              if (para.startsWith("*") && para.endsWith("*")) {
                return (
                  <div key={i} className="scripture-block" style={{ margin: "1.5rem 0" }}>
                    <p style={{ fontStyle: "italic", margin: 0 }}>{para.replace(/^\*/, "").replace(/\*$/, "")}</p>
                  </div>
                );
              }
              const withBold = para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
              return <p key={i} style={{ marginBottom: "1.25rem" }} dangerouslySetInnerHTML={{ __html: withBold }} />;
            })}
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid var(--border-light)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 600, marginRight: "0.25rem" }}>
              <Tag size={13} /> Tags:
            </span>
            {post.tags.map((tag) => (
              <span key={tag} className="badge badge-gold">{tag}</span>
            ))}
          </div>

          {/* Author Card */}
          <div style={{ marginTop: "2.5rem", padding: "1.75rem", background: "var(--cream-mid)", borderRadius: "16px", border: "1px solid var(--border-light)", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "linear-gradient(135deg, var(--navy-deep), var(--navy-mid))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "var(--gold-light)", fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "1.1rem" }}>
                {post.author[0]}
              </span>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "var(--navy-deep)", marginBottom: "0.25rem" }}>{post.author}</div>
              <div style={{ fontSize: "0.82rem", color: "var(--gold-dark)", marginBottom: "0.625rem" }}>{post.authorRole} · CWAY Academy</div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                A seasoned theologian and ministry leader contributing to CWAY Academy's mission of equipping rural pastors and Christian leaders across India with world-class theological training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section style={{ background: "var(--cream-mid)", padding: "4rem 0" }}>
          <div className="container" style={{ maxWidth: "760px" }}>
            <h3 style={{ marginBottom: "1.5rem" }}>Related Articles</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} style={{ display: "block", textDecoration: "none" }}>
                  <div className="card-cream" style={{ padding: "1.5rem" }}>
                    <span className="badge badge-gold" style={{ marginBottom: "0.75rem", display: "inline-block", fontSize: "0.7rem" }}>{r.category}</span>
                    <h4 style={{ fontSize: "0.95rem", lineHeight: 1.35, color: "var(--navy-deep)", marginBottom: "0.625rem" }}>{r.title}</h4>
                    <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", display: "flex", gap: "0.75rem" }}>
                      <span><User size={10} style={{ verticalAlign: "middle" }} /> {r.author.split(" ").slice(0, 2).join(" ")}</span>
                      <span><Clock size={10} style={{ verticalAlign: "middle" }} /> {r.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link href="/blog" className="btn-primary">View All Articles</Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
