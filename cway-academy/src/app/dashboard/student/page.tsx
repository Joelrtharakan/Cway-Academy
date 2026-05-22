import Link from "next/link";
import { BookOpen, Award, Clock, CheckCircle, Play, ChevronRight, Calendar, Bell } from "lucide-react";

const enrolledCourses = [
  { title: "Foundations of Biblical Theology", progress: 68, nextLesson: "The Doctrine of Salvation", module: "Module 4", totalLessons: 24, completedLessons: 16 },
  { title: "Pastoral Ministry & Leadership", progress: 32, nextLesson: "Expository Preaching Methods", module: "Module 2", totalLessons: 32, completedLessons: 10 },
  { title: "Old Testament Survey", progress: 100, nextLesson: "Completed", module: "All Modules", totalLessons: 18, completedLessons: 18 },
];

const recentActivity = [
  { type: "lesson", text: "Completed: The Nature of God — Lesson 12", time: "2 hours ago" },
  { type: "quiz", text: "Quiz passed: Christology Foundations (Score: 88%)", time: "Yesterday" },
  { type: "cert", text: "Certificate earned: Old Testament Survey", time: "3 days ago" },
  { type: "assignment", text: "Assignment submitted: Sermon Manuscript", time: "5 days ago" },
];

const upcoming = [
  { title: "Live Q&A: Systematic Theology", date: "May 24, 2026", time: "6:00 PM IST", instructor: "Dr. Academic Dean" },
  { title: "Assignment Due: Pastoral Case Study", date: "May 27, 2026", time: "11:59 PM IST", instructor: "Pastoral Ministry Course" },
];

export default function StudentDashboardPage() {
  return (
    <div>
      {/* Welcome */}
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>Your Learning Dashboard</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
          "Study to show yourself approved to God, a worker who does not need to be ashamed." — 2 Timothy 2:15
        </p>
      </div>

      {/* Stats Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", marginBottom: "2rem" }}>
        {[
          { icon: BookOpen, label: "Courses Enrolled", value: "3", color: "var(--navy-deep)" },
          { icon: CheckCircle, label: "Lessons Completed", value: "44", color: "var(--success)" },
          { icon: Award, label: "Certificates Earned", value: "1", color: "var(--gold-dark)" },
          { icon: Clock, label: "Hours of Study", value: "72h", color: "var(--navy-mid)" },
        ].map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="card-cream" style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
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
        {/* Enrolled Courses */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <h3 style={{ fontSize: "1.1rem" }}>My Courses</h3>
            <Link href="/dashboard/student/courses" style={{ fontSize: "0.8rem", color: "var(--gold-dark)", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>
              View All <ChevronRight size={13} />
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {enrolledCourses.map((course) => (
              <div key={course.title} className="card-cream" style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.625rem" }}>
                  <div>
                    <h4 style={{ fontSize: "0.95rem", color: "var(--navy-deep)", marginBottom: "0.25rem" }}>{course.title}</h4>
                    <p style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{course.module} · {course.completedLessons}/{course.totalLessons} lessons</p>
                  </div>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", fontWeight: 700, color: course.progress === 100 ? "var(--success)" : "var(--gold-primary)" }}>
                    {course.progress}%
                  </span>
                </div>
                <div className="progress-bar" style={{ marginBottom: "1rem" }}>
                  <div className="progress-fill" style={{ width: `${course.progress}%`, background: course.progress === 100 ? "var(--success)" : undefined }} />
                </div>
                {course.progress < 100 ? (
                  <Link href="/dashboard/student/courses" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", fontWeight: 600, color: "var(--gold-dark)", textDecoration: "none" }}>
                    <Play size={13} /> Continue: {course.nextLesson}
                  </Link>
                ) : (
                  <Link href="/dashboard/student/certificates" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8rem", fontWeight: 600, color: "var(--success)", textDecoration: "none" }}>
                    <Award size={13} /> Download Certificate
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Upcoming */}
          <div>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "1.25rem" }}>Upcoming</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {upcoming.map((item) => (
                <div key={item.title} className="card-cream" style={{ padding: "1.25rem" }}>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "var(--gold-pale)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Calendar size={18} color="var(--gold-dark)" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--navy-deep)", marginBottom: "0.25rem" }}>{item.title}</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{item.date} · {item.time}</div>
                      <div style={{ fontSize: "0.72rem", color: "var(--gold-dark)", marginTop: "0.25rem" }}>{item.instructor}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "1.25rem" }}>Recent Activity</h3>
            <div className="card-cream" style={{ padding: "1.25rem" }}>
              {recentActivity.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "0.75rem", paddingBottom: i < recentActivity.length - 1 ? "1rem" : 0, marginBottom: i < recentActivity.length - 1 ? "1rem" : 0, borderBottom: i < recentActivity.length - 1 ? "1px solid var(--border-light)" : "none" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: item.type === "cert" ? "var(--gold-primary)" : item.type === "quiz" ? "var(--success)" : "var(--navy-light)", marginTop: "6px", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>{item.text}</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
