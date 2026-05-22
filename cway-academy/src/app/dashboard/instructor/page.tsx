import Link from "next/link";
import { Users, BookOpen, BarChart2, CheckCircle, ChevronRight, TrendingUp } from "lucide-react";

const myCourses = [
  { title: "Foundations of Biblical Theology", students: 340, lessons: 24, completion: 74, status: "Published" },
  { title: "Old Testament Survey", students: 420, lessons: 18, completion: 82, status: "Published" },
  { title: "Christian Ethics & Social Justice", students: 110, lessons: 16, completion: 61, status: "Published" },
];

const pendingGrades = [
  { student: "Abraham K.", assignment: "Doctrine of God Essay", course: "Biblical Theology", submitted: "May 18" },
  { student: "Rachel M.", assignment: "OT Prophets Summary", course: "OT Survey", submitted: "May 17" },
  { student: "Philip T.", assignment: "Ethics Case Study", course: "Christian Ethics", submitted: "May 15" },
];

export default function InstructorDashboardPage() {
  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>Welcome, Instructor</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>"He who teaches, let him teach with diligence." — Romans 12:7</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", marginBottom: "2.5rem" }}>
        {[
          { icon: BookOpen, label: "My Courses", value: "3", color: "var(--navy-deep)" },
          { icon: Users, label: "Total Students", value: "870", color: "var(--gold-dark)" },
          { icon: CheckCircle, label: "Pending Grades", value: "3", color: "var(--danger)" },
          { icon: TrendingUp, label: "Avg Completion", value: "72%", color: "var(--success)" },
        ].map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="card-cream" style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 700, color, lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.375rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
              </div>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={20} color={color} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "2rem" }}>
        {/* My Courses */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <h3 style={{ fontSize: "1.1rem" }}>My Courses</h3>
            <Link href="/dashboard/instructor/courses" style={{ fontSize: "0.8rem", color: "var(--gold-dark)", fontWeight: 600, textDecoration: "none" }}>Manage All</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {myCourses.map((c) => (
              <div key={c.title} className="card-cream" style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <div>
                    <h4 style={{ fontSize: "0.9rem", color: "var(--navy-deep)", marginBottom: "0.25rem" }}>{c.title}</h4>
                    <div style={{ display: "flex", gap: "1rem", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                      <span><Users size={11} style={{ verticalAlign: "middle" }} /> {c.students} students</span>
                      <span><BookOpen size={11} style={{ verticalAlign: "middle" }} /> {c.lessons} lessons</span>
                    </div>
                  </div>
                  <span className="badge badge-success">{c.status}</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${c.completion}%` }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                  <span>{c.completion}% avg completion</span>
                  <Link href="/dashboard/instructor/courses" style={{ color: "var(--gold-dark)", fontWeight: 600, textDecoration: "none" }}>Manage →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Grades */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <h3 style={{ fontSize: "1.1rem" }}>Pending Grades</h3>
            <Link href="/dashboard/instructor/assignments" style={{ fontSize: "0.8rem", color: "var(--gold-dark)", fontWeight: 600, textDecoration: "none" }}>Grade All</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {pendingGrades.map((g) => (
              <div key={g.student + g.assignment} className="card-cream" style={{ padding: "1.25rem" }}>
                <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--navy-deep)", marginBottom: "0.25rem" }}>{g.student}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "0.25rem" }}>{g.assignment}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.75rem" }}>{g.course} · Submitted {g.submitted}</div>
                <Link href="/dashboard/instructor/assignments" className="btn-primary" style={{ padding: "0.5rem 1rem", fontSize: "0.8rem", display: "inline-flex" }}>
                  Grade Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
