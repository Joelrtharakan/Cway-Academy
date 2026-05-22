"use client";
import { useState } from "react";
import { CheckCircle, XCircle, Star, FileText, Clock, ChevronDown } from "lucide-react";

type GradeStatus = "PENDING" | "GRADED" | "RETURNED";

interface Assignment {
  id: string;
  student: string;
  course: string;
  title: string;
  submitted: string;
  status: GradeStatus;
  score?: number;
  maxScore: number;
  feedback?: string;
}

const mockAssignments: Assignment[] = [
  { id: "A001", student: "Abraham K.", course: "Biblical Theology", title: "Essay: The Doctrine of God", submitted: "May 18, 2026", status: "PENDING", maxScore: 100 },
  { id: "A002", student: "Rachel M.", course: "OT Survey", title: "Summary: The OT Prophets", submitted: "May 17, 2026", status: "PENDING", maxScore: 50 },
  { id: "A003", student: "Philip T.", course: "Christian Ethics", title: "Case Study: Ethical Dilemmas in Ministry", submitted: "May 15, 2026", status: "PENDING", maxScore: 100 },
  { id: "A004", student: "Ruth O.", course: "Biblical Theology", title: "Essay: The Trinity", submitted: "May 12, 2026", status: "GRADED", score: 88, maxScore: 100, feedback: "Excellent work! Strong understanding of Trinitarian doctrine. Could expand on the economic Trinity." },
  { id: "A005", student: "John M.", course: "OT Survey", title: "The Pentateuch Overview", submitted: "May 10, 2026", status: "GRADED", score: 42, maxScore: 50, feedback: "Good analysis. Review the Documentary Hypothesis section." },
  { id: "A006", student: "Esther R.", course: "Biblical Theology", title: "Hermeneutics Reflection", submitted: "May 8, 2026", status: "RETURNED", score: 72, maxScore: 100, feedback: "Good start but needs revision on application of grammatical-historical method." },
];

const statusConfig: Record<GradeStatus, { label: string; color: string; bg: string }> = {
  PENDING:  { label: "Needs Grading", color: "var(--warning)",   bg: "rgba(196,125,17,0.1)" },
  GRADED:   { label: "Graded",        color: "var(--success)",   bg: "rgba(61,122,75,0.1)" },
  RETURNED: { label: "Returned",      color: "var(--navy-mid)",  bg: "rgba(26,48,102,0.1)" },
};

export default function InstructorAssignmentsPage() {
  const [assignments, setAssignments] = useState<Assignment[]>(mockAssignments);
  const [selected, setSelected] = useState<Assignment | null>(null);
  const [score, setScore] = useState("");
  const [feedback, setFeedback] = useState("");
  const [filter, setFilter] = useState<string>("ALL");

  const filtered = assignments.filter((a) => filter === "ALL" || a.status === filter);

  const submitGrade = (id: string) => {
    setAssignments((prev) => prev.map((a) =>
      a.id === id ? { ...a, status: "GRADED", score: Number(score), feedback } : a
    ));
    setSelected(null);
    setScore("");
    setFeedback("");
  };

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>Assignments & Grading</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Review and grade student assignment submissions.</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", marginBottom: "1.75rem" }}>
        {[
          { label: "Needs Grading", value: assignments.filter((a) => a.status === "PENDING").length, color: "var(--warning)" },
          { label: "Graded", value: assignments.filter((a) => a.status === "GRADED").length, color: "var(--success)" },
          { label: "Returned for Revision", value: assignments.filter((a) => a.status === "RETURNED").length, color: "var(--navy-mid)" },
        ].map(({ label, value, color }) => (
          <div key={label} className="card-cream" style={{ padding: "1.25rem" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 700, color, lineHeight: 1 }}>{value}</div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.25rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Filter Tabs */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
        {["ALL", "PENDING", "GRADED", "RETURNED"].map((f) => (
          <button key={f} onClick={() => setFilter(f)} style={{ padding: "0.5rem 1rem", borderRadius: "8px", border: filter === f ? "2px solid var(--gold-primary)" : "1.5px solid var(--border-light)", background: filter === f ? "var(--gold-pale)" : "var(--cream-light)", color: filter === f ? "var(--gold-dark)" : "var(--text-secondary)", fontWeight: 600, fontSize: "0.8rem", cursor: "pointer" }}>
            {f === "ALL" ? "All" : statusConfig[f as GradeStatus]?.label ?? f}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: selected ? "1fr 400px" : "1fr", gap: "1.5rem", alignItems: "start" }}>
        {/* Table */}
        <div className="card-cream" style={{ overflow: "hidden" }}>
          <table className="data-table">
            <thead>
              <tr><th>Student</th><th>Assignment</th><th>Course</th><th>Submitted</th><th>Score</th><th>Status</th><th>Action</th></tr>
            </thead>
            <tbody>
              {filtered.map((a) => {
                const sc = statusConfig[a.status];
                return (
                  <tr key={a.id} style={{ cursor: "pointer", background: selected?.id === a.id ? "var(--gold-pale)" : undefined }} onClick={() => { setSelected(a); setScore(a.score?.toString() ?? ""); setFeedback(a.feedback ?? ""); }}>
                    <td style={{ fontWeight: 600, color: "var(--navy-deep)", fontSize: "0.875rem" }}>{a.student}</td>
                    <td style={{ maxWidth: "180px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "0.85rem" }}>{a.title}</td>
                    <td style={{ fontSize: "0.82rem" }}>{a.course}</td>
                    <td style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{a.submitted}</td>
                    <td style={{ fontWeight: 700, color: a.score != null ? "var(--navy-deep)" : "var(--text-muted)", fontFamily: a.score != null ? "var(--font-serif)" : undefined }}>
                      {a.score != null ? `${a.score}/${a.maxScore}` : "—"}
                    </td>
                    <td><span style={{ padding: "0.2rem 0.55rem", borderRadius: "999px", fontSize: "0.7rem", fontWeight: 700, background: sc.bg, color: sc.color }}>{sc.label}</span></td>
                    <td>
                      <button onClick={(e) => { e.stopPropagation(); setSelected(a); setScore(a.score?.toString() ?? ""); setFeedback(a.feedback ?? ""); }} style={{ fontSize: "0.78rem", color: "var(--gold-dark)", fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}>
                        {a.status === "PENDING" ? "Grade" : "View"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Grade Panel */}
        {selected && (
          <div className="card-cream" style={{ padding: "1.75rem", position: "sticky", top: "80px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.25rem" }}>
              <h4 style={{ fontSize: "1rem" }}>{selected.title}</h4>
              <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: "1.25rem" }}>×</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
              {[["Student", selected.student], ["Course", selected.course], ["Submitted", selected.submitted], ["Max Score", selected.maxScore.toString()]].map(([l, v]) => (
                <div key={l} style={{ display: "flex", gap: "0.75rem", fontSize: "0.85rem", borderBottom: "1px solid var(--border-light)", paddingBottom: "0.5rem" }}>
                  <span style={{ fontWeight: 600, color: "var(--navy-deep)", minWidth: "90px" }}>{l}</span>
                  <span style={{ color: "var(--text-secondary)" }}>{v}</span>
                </div>
              ))}
            </div>

            {/* Simulated submission */}
            <div style={{ padding: "1rem", background: "var(--cream-mid)", borderRadius: "10px", marginBottom: "1.25rem" }}>
              <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <FileText size={12} /> Student Submission
              </div>
              <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
                [Student submission document would appear here when connected to file storage. Click to download PDF.]
              </p>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label className="form-label" htmlFor={`score-${selected.id}`}>Score (out of {selected.maxScore}) *</label>
              <input id={`score-${selected.id}`} type="number" min="0" max={selected.maxScore} className="form-input" value={score} onChange={(e) => setScore(e.target.value)} placeholder={`0–${selected.maxScore}`} />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <label className="form-label" htmlFor={`feedback-${selected.id}`}>Instructor Feedback *</label>
              <textarea id={`feedback-${selected.id}`} className="form-input" rows={4} value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Provide constructive feedback to the student..." style={{ resize: "vertical" }} />
            </div>
            <div style={{ display: "flex", gap: "0.625rem" }}>
              <button onClick={() => submitGrade(selected.id)} disabled={!score || !feedback} className="btn-primary" style={{ flex: 1, justifyContent: "center", display: "flex", alignItems: "center", gap: "0.5rem", opacity: !score || !feedback ? 0.6 : 1 }}>
                <Star size={15} /> Submit Grade
              </button>
              {selected.status === "GRADED" && (
                <button onClick={() => { setAssignments((p) => p.map((a) => a.id === selected.id ? { ...a, status: "RETURNED" } : a)); setSelected(null); }} style={{ padding: "0.75rem 1rem", background: "transparent", border: "2px solid var(--navy-mid)", borderRadius: "10px", color: "var(--navy-mid)", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer" }}>
                  Return
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
