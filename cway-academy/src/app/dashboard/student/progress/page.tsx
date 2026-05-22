import { BarChart2, Clock, CheckCircle, Award, TrendingUp } from "lucide-react";

export const metadata = { title: "My Progress" };

const courseProgress = [
  { title: "Foundations of Biblical Theology", progress: 68, completedLessons: 16, totalLessons: 24, timeSpent: "32h 14m", quizAvg: 84, level: "Certificate" },
  { title: "Pastoral Ministry & Leadership", progress: 32, completedLessons: 10, totalLessons: 32, timeSpent: "18h 40m", quizAvg: 91, level: "Certificate" },
  { title: "Old Testament Survey", progress: 100, completedLessons: 18, totalLessons: 18, timeSpent: "22h 05m", quizAvg: 88, level: "Beginner" },
];

const weeklyActivity = [
  { day: "Mon", minutes: 45 }, { day: "Tue", minutes: 0 }, { day: "Wed", minutes: 90 },
  { day: "Thu", minutes: 30 }, { day: "Fri", minutes: 60 }, { day: "Sat", minutes: 120 }, { day: "Sun", minutes: 15 },
];

const maxMins = Math.max(...weeklyActivity.map((d) => d.minutes));

const achievements = [
  { title: "First Lesson Complete", desc: "Completed your very first lesson", earned: true, date: "March 10" },
  { title: "Quiz Ace", desc: "Scored 90%+ on a quiz", earned: true, date: "March 18" },
  { title: "Course Complete", desc: "Completed your first full course", earned: true, date: "April 2" },
  { title: "7-Day Streak", desc: "Studied 7 days in a row", earned: false, date: null },
  { title: "2 Courses Complete", desc: "Completed 2 courses", earned: false, date: null },
];

export default function StudentProgressPage() {
  const totalTime = "72h 59m";
  const overallProgress = Math.round(courseProgress.reduce((s, c) => s + c.progress, 0) / courseProgress.length);
  const totalCompleted = courseProgress.reduce((s, c) => s + c.completedLessons, 0);
  const totalLessons = courseProgress.reduce((s, c) => s + c.totalLessons, 0);

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>My Progress</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>"Study to show yourself approved to God, a worker who does not need to be ashamed." — 2 Timothy 2:15</p>
      </div>

      {/* Summary */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem", marginBottom: "2rem" }}>
        {[
          { icon: BarChart2, label: "Overall Progress", value: `${overallProgress}%`, color: "var(--gold-primary)" },
          { icon: CheckCircle, label: "Lessons Done", value: `${totalCompleted}/${totalLessons}`, color: "var(--success)" },
          { icon: Clock, label: "Total Study Time", value: totalTime, color: "var(--navy-mid)" },
          { icon: Award, label: "Certificates", value: "1 Earned", color: "var(--navy-deep)" },
        ].map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="card-cream" style={{ padding: "1.25rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 700, color, lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.25rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              </div>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={18} color={color} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
        {/* Course Progress */}
        <div>
          <h3 style={{ fontSize: "1.05rem", marginBottom: "1.25rem" }}>Course Progress</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {courseProgress.map((c) => (
              <div key={c.title} className="card-cream" style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <div>
                    <h4 style={{ fontSize: "0.9rem", color: "var(--navy-deep)", marginBottom: "0.25rem" }}>{c.title}</h4>
                    <span className="badge badge-gold" style={{ fontSize: "0.68rem" }}>{c.level}</span>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "1.25rem", color: c.progress === 100 ? "var(--success)" : "var(--gold-primary)", lineHeight: 1 }}>{c.progress}%</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{c.completedLessons}/{c.totalLessons} lessons</div>
                  </div>
                </div>
                <div className="progress-bar" style={{ marginBottom: "0.875rem" }}>
                  <div className="progress-fill" style={{ width: `${c.progress}%`, background: c.progress === 100 ? "var(--success)" : undefined }} />
                </div>
                <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                  <span><Clock size={11} style={{ verticalAlign: "middle" }} /> {c.timeSpent}</span>
                  <span><TrendingUp size={11} style={{ verticalAlign: "middle" }} /> Quiz avg: {c.quizAvg}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Weekly Activity */}
          <div className="card-cream" style={{ padding: "1.5rem" }}>
            <h4 style={{ fontSize: "0.9rem", marginBottom: "1.25rem" }}>This Week's Activity</h4>
            <div style={{ display: "flex", alignItems: "flex-end", gap: "0.5rem", height: "100px" }}>
              {weeklyActivity.map((d) => (
                <div key={d.day} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.375rem" }}>
                  <div
                    style={{
                      width: "100%",
                      height: `${maxMins > 0 ? (d.minutes / maxMins) * 72 : 0}px`,
                      background: d.minutes > 0 ? "linear-gradient(180deg, var(--gold-primary), var(--gold-dark))" : "var(--border-light)",
                      borderRadius: "4px 4px 0 0",
                      minHeight: "4px",
                    }}
                  />
                  <span style={{ fontSize: "0.65rem", color: d.minutes > 0 ? "var(--navy-deep)" : "var(--text-muted)", fontWeight: d.minutes > 0 ? 700 : 400 }}>{d.day}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "0.875rem", textAlign: "center", fontSize: "0.75rem", color: "var(--text-muted)" }}>
              {weeklyActivity.reduce((s, d) => s + d.minutes, 0)} minutes studied this week
            </div>
          </div>

          {/* Achievements */}
          <div className="card-cream" style={{ padding: "1.5rem" }}>
            <h4 style={{ fontSize: "0.9rem", marginBottom: "1.25rem" }}>Achievements</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {achievements.map((a) => (
                <div key={a.title} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", opacity: a.earned ? 1 : 0.45 }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: a.earned ? "linear-gradient(135deg, var(--gold-primary), var(--gold-dark))" : "var(--border-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Award size={15} color={a.earned ? "white" : "var(--text-muted)"} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--navy-deep)" }}>{a.title}</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{a.earned ? a.date : "Not yet earned"}</div>
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
