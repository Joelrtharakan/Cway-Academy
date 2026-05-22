"use client";
import { useState } from "react";
import Link from "next/link";
import { Play, CheckCircle, Lock, ChevronDown, ChevronRight, Clock, BookOpen, Award, FileText } from "lucide-react";

const enrolledCourses = [
  {
    id: "biblical-theology",
    title: "Foundations of Biblical Theology",
    level: "Certificate",
    instructor: "Dr. [Academic Dean]",
    progress: 68,
    totalLessons: 24,
    completedLessons: 16,
    modules: [
      {
        id: "m1", title: "Introduction to Theology", lessons: [
          { id: "l1", title: "What Is Theology?", type: "VIDEO", duration: "18 min", completed: true },
          { id: "l2", title: "Sources of Theological Authority", type: "VIDEO", duration: "22 min", completed: true },
          { id: "l3", title: "Biblical vs. Systematic Theology", type: "TEXT", duration: "15 min", completed: true },
          { id: "l4", title: "Module Quiz", type: "QUIZ", duration: "20 min", completed: true },
        ],
      },
      {
        id: "m2", title: "The Doctrine of God", lessons: [
          { id: "l5", title: "The Existence of God", type: "VIDEO", duration: "25 min", completed: true },
          { id: "l6", title: "The Trinity", type: "VIDEO", duration: "30 min", completed: true },
          { id: "l7", title: "The Attributes of God", type: "VIDEO", duration: "28 min", completed: false },
          { id: "l8", title: "Assignment: Essay on Divine Attributes", type: "ASSIGNMENT", duration: "2 hrs", completed: false },
        ],
      },
      {
        id: "m3", title: "Christology", lessons: [
          { id: "l9", title: "The Incarnation", type: "VIDEO", duration: "22 min", completed: false, locked: true },
          { id: "l10", title: "The Two Natures of Christ", type: "VIDEO", duration: "26 min", completed: false, locked: true },
          { id: "l11", title: "The Atonement", type: "VIDEO", duration: "32 min", completed: false, locked: true },
          { id: "l12", title: "Christology Quiz", type: "QUIZ", duration: "20 min", completed: false, locked: true },
        ],
      },
    ],
  },
  {
    id: "pastoral-ministry",
    title: "Pastoral Ministry & Leadership",
    level: "Certificate",
    instructor: "Rev. [Ministry Director]",
    progress: 32,
    totalLessons: 32,
    completedLessons: 10,
    modules: [
      {
        id: "pm1", title: "Foundations of Pastoral Ministry", lessons: [
          { id: "pl1", title: "The Calling to Pastoral Ministry", type: "VIDEO", duration: "20 min", completed: true },
          { id: "pl2", title: "Shepherding the Flock", type: "VIDEO", duration: "24 min", completed: true },
        ],
      },
    ],
  },
];

const typeIcon: Record<string, React.ReactNode> = {
  VIDEO: <Play size={13} />,
  TEXT: <FileText size={13} />,
  QUIZ: <BookOpen size={13} />,
  ASSIGNMENT: <Award size={13} />,
};

const typeBg: Record<string, string> = {
  VIDEO: "var(--navy-light)",
  TEXT: "var(--success)",
  QUIZ: "var(--gold-primary)",
  ASSIGNMENT: "#7B3F9E",
};

export default function StudentCoursesPage() {
  const [activeCourse, setActiveCourse] = useState(enrolledCourses[0]);
  const [expandedModules, setExpandedModules] = useState<string[]>(["m1", "m2"]);
  const [activeLesson, setActiveLesson] = useState(activeCourse.modules[1].lessons[2]);

  const toggleModule = (id: string) =>
    setExpandedModules((p) => p.includes(id) ? p.filter((m) => m !== id) : [...p, id]);

  return (
    <div>
      <div style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>My Courses</h2>
      </div>

      {/* Course Tabs */}
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem", flexWrap: "wrap" }}>
        {enrolledCourses.map((c) => (
          <button
            key={c.id}
            onClick={() => { setActiveCourse(c); setActiveLesson(c.modules[0].lessons.find((l) => !l.completed) || c.modules[0].lessons[0]); }}
            style={{
              padding: "0.625rem 1.25rem",
              borderRadius: "10px",
              border: activeCourse.id === c.id ? "2px solid var(--gold-primary)" : "1.5px solid var(--border-light)",
              background: activeCourse.id === c.id ? "var(--gold-pale)" : "var(--cream-light)",
              color: activeCourse.id === c.id ? "var(--gold-dark)" : "var(--text-secondary)",
              fontWeight: 600,
              fontSize: "0.85rem",
              cursor: "pointer",
            }}
          >
            {c.title.split(" ").slice(0, 3).join(" ")}... ({c.progress}%)
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: "1.5rem", alignItems: "start" }}>
        {/* Curriculum Sidebar */}
        <div className="card-cream" style={{ padding: "1.5rem" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <h4 style={{ fontSize: "0.95rem", color: "var(--navy-deep)", marginBottom: "0.375rem" }}>{activeCourse.title}</h4>
            <div className="progress-bar" style={{ marginBottom: "0.375rem" }}>
              <div className="progress-fill" style={{ width: `${activeCourse.progress}%` }} />
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", justifyContent: "space-between" }}>
              <span>{activeCourse.completedLessons}/{activeCourse.totalLessons} lessons</span>
              <span>{activeCourse.progress}% complete</span>
            </div>
          </div>

          {activeCourse.modules.map((mod) => (
            <div key={mod.id} style={{ marginBottom: "0.5rem", border: "1px solid var(--border-light)", borderRadius: "10px", overflow: "hidden" }}>
              <button
                onClick={() => toggleModule(mod.id)}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.875rem 1rem", background: expandedModules.includes(mod.id) ? "var(--cream-mid)" : "var(--cream-light)", border: "none", cursor: "pointer", textAlign: "left" }}
              >
                <span style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--navy-deep)" }}>{mod.title}</span>
                {expandedModules.includes(mod.id) ? <ChevronDown size={16} color="var(--text-muted)" /> : <ChevronRight size={16} color="var(--text-muted)" />}
              </button>

              {expandedModules.includes(mod.id) && (
                <div>
                  {mod.lessons.map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => !("locked" in lesson && lesson.locked) && setActiveLesson(lesson)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "0.625rem 1rem",
                        background: activeLesson.id === lesson.id ? "var(--gold-pale)" : "transparent",
                        border: "none",
                        borderTop: "1px solid var(--border-light)",
                        cursor: "locked" in lesson && lesson.locked ? "not-allowed" : "pointer",
                        textAlign: "left",
                        opacity: "locked" in lesson && lesson.locked ? 0.5 : 1,
                      }}
                    >
                      <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: lesson.completed ? "var(--success)" : activeLesson.id === lesson.id ? "var(--gold-primary)" : "var(--border-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {"locked" in lesson && lesson.locked ? <Lock size={10} color="var(--text-muted)" /> : lesson.completed ? <CheckCircle size={12} color="white" /> : <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: activeLesson.id === lesson.id ? "white" : "var(--text-muted)" }} />}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--navy-deep)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{lesson.title}</div>
                        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: "0.125rem" }}>
                          <span style={{ display: "flex", alignItems: "center", gap: "2px", fontSize: "0.68rem", color: "white", background: typeBg[lesson.type], padding: "0.1rem 0.375rem", borderRadius: "4px" }}>
                            {typeIcon[lesson.type]} {lesson.type}
                          </span>
                          <span style={{ fontSize: "0.68rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "2px" }}>
                            <Clock size={9} /> {lesson.duration}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Lesson Content */}
        <div>
          {/* Video Area */}
          <div style={{ borderRadius: "16px", overflow: "hidden", background: "linear-gradient(135deg, var(--navy-deep), var(--navy-mid))", aspectRatio: "16/9", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", position: "relative" }}>
            <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(4px)", border: "2px solid rgba(255,255,255,0.3)", marginBottom: "1rem" }}>
              <Play size={28} color="white" fill="white" style={{ marginLeft: "4px" }} />
            </div>
            <h4 style={{ color: "white", fontSize: "1rem", textAlign: "center", maxWidth: "500px" }}>{activeLesson.title}</h4>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", marginTop: "0.375rem" }}>
              {activeCourse.title} · {activeCourse.instructor}
            </p>
            <div style={{ position: "absolute", bottom: "1rem", right: "1rem", display: "flex", gap: "0.5rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.7)" }}>
              <Clock size={12} /> {activeLesson.duration}
            </div>
          </div>

          {/* Lesson Info */}
          <div className="card-cream" style={{ padding: "1.5rem", marginBottom: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
              <div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "0.25rem" }}>{activeLesson.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>
                  {activeCourse.title} · {activeLesson.type}
                </p>
              </div>
              <button style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 1.25rem", background: "var(--success)", color: "white", border: "none", borderRadius: "10px", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer" }}>
                <CheckCircle size={15} /> Mark Complete
              </button>
            </div>
            <div className="scripture-block" style={{ margin: "1rem 0" }}>
              "Study to show yourself approved to God, a worker who does not need to be ashamed, rightly dividing the word of truth."
              <span className="scripture-reference">— 2 Timothy 2:15 (NKJV)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
