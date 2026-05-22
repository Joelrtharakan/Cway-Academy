"use client";
import { useState } from "react";
import { CheckCircle, XCircle, MessageSquare, Eye, Filter, Download, Search, ChevronDown } from "lucide-react";

type Status = "PENDING" | "UNDER_REVIEW" | "APPROVED" | "REJECTED" | "INFO_REQUESTED";

interface Application {
  id: string;
  name: string;
  email: string;
  phone: string;
  church: string;
  state: string;
  course: string;
  role: string;
  yearsMinistry: number;
  scholarship: boolean;
  date: string;
  status: Status;
  notes?: string;
}

const mockApplications: Application[] = [
  { id: "APP-001", name: "Rajan Mathew", email: "rajan@church.com", phone: "+91 98765 11111", church: "Grace Fellowship Church", state: "Kerala", course: "Pastoral Ministry & Leadership", role: "Associate Pastor", yearsMinistry: 5, scholarship: false, date: "May 19, 2026", status: "PENDING" },
  { id: "APP-002", name: "Sunita Devi", email: "sunita@ministry.org", phone: "+91 98765 22222", church: "New Life Ministry", state: "Bihar", course: "Foundations of Biblical Theology", role: "Women's Ministry Leader", yearsMinistry: 3, scholarship: true, date: "May 18, 2026", status: "UNDER_REVIEW" },
  { id: "APP-003", name: "Thomas Chacko", email: "thomas@church.in", phone: "+91 98765 33333", church: "Zion Community Church", state: "Tamil Nadu", course: "Five-Fold Ministry Training", role: "Senior Pastor", yearsMinistry: 12, scholarship: false, date: "May 17, 2026", status: "APPROVED" },
  { id: "APP-004", name: "Meena Rajput", email: "meena@gospellight.org", phone: "+91 98765 44444", church: "Gospel Light Church", state: "Rajasthan", course: "Evangelism & Church Planting", role: "Evangelist", yearsMinistry: 7, scholarship: true, date: "May 17, 2026", status: "PENDING" },
  { id: "APP-005", name: "Pastor George Abraham", email: "george@ipc.com", phone: "+91 98765 55555", church: "Indian Pentecostal Church", state: "Andhra Pradesh", course: "Biblical Counselling & Care", role: "Senior Pastor", yearsMinistry: 18, scholarship: false, date: "May 16, 2026", status: "APPROVED" },
  { id: "APP-006", name: "Priya Singh", email: "priya@bethel.org", phone: "+91 98765 66666", church: "Bethel Church", state: "Uttar Pradesh", course: "Worship Arts & Ministry", role: "Worship Leader", yearsMinistry: 4, scholarship: true, date: "May 15, 2026", status: "INFO_REQUESTED" },
  { id: "APP-007", name: "Samuel Oommen", email: "samuel@agchurch.com", phone: "+91 98765 77777", church: "Assemblies of God", state: "Karnataka", course: "Old Testament Survey", role: "Lay Leader / Elder", yearsMinistry: 2, scholarship: false, date: "May 14, 2026", status: "REJECTED" },
];

const statusConfig: Record<Status, { label: string; color: string; bg: string }> = {
  PENDING:        { label: "Pending",        color: "#C47D11", bg: "rgba(196,125,17,0.1)" },
  UNDER_REVIEW:   { label: "Under Review",   color: "#1A3066", bg: "rgba(26,48,102,0.1)" },
  APPROVED:       { label: "Approved",       color: "#3D7A4B", bg: "rgba(61,122,75,0.1)" },
  REJECTED:       { label: "Rejected",       color: "#B03A2E", bg: "rgba(176,58,46,0.1)" },
  INFO_REQUESTED: { label: "Info Requested", color: "#7B3F9E", bg: "rgba(123,63,158,0.1)" },
};

export default function AdminApplicationsPage() {
  const [apps, setApps] = useState<Application[]>(mockApplications);
  const [selected, setSelected] = useState<Application | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("ALL");
  const [search, setSearch] = useState("");
  const [adminNote, setAdminNote] = useState("");

  const filtered = apps.filter((a) => {
    const matchStatus = filterStatus === "ALL" || a.status === filterStatus;
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.email.toLowerCase().includes(search.toLowerCase()) ||
      a.course.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const updateStatus = (id: string, status: Status) => {
    setApps((prev) => prev.map((a) => a.id === id ? { ...a, status, notes: adminNote || a.notes } : a));
    setSelected((prev) => prev?.id === id ? { ...prev, status } : prev);
    setAdminNote("");
  };

  const counts = {
    ALL: apps.length,
    PENDING: apps.filter((a) => a.status === "PENDING").length,
    UNDER_REVIEW: apps.filter((a) => a.status === "UNDER_REVIEW").length,
    APPROVED: apps.filter((a) => a.status === "APPROVED").length,
    REJECTED: apps.filter((a) => a.status === "REJECTED").length,
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
        <div>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>Applications</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Review and process student admission applications.</p>
        </div>
        <button style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 1.25rem", background: "var(--cream-mid)", border: "1px solid var(--border-light)", borderRadius: "10px", fontSize: "0.85rem", fontWeight: 600, color: "var(--navy-deep)", cursor: "pointer" }}>
          <Download size={15} /> Export CSV
        </button>
      </div>

      {/* Status Filter Tabs */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        {Object.entries(counts).map(([status, count]) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              border: filterStatus === status ? "2px solid var(--gold-primary)" : "1.5px solid var(--border-light)",
              background: filterStatus === status ? "var(--gold-pale)" : "var(--cream-light)",
              color: filterStatus === status ? "var(--gold-dark)" : "var(--text-secondary)",
              fontWeight: 600,
              fontSize: "0.82rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
            }}
          >
            {status.replace("_", " ")}
            <span style={{ background: filterStatus === status ? "var(--gold-primary)" : "var(--border-light)", color: filterStatus === status ? "white" : "var(--text-muted)", borderRadius: "999px", padding: "0 0.4rem", fontSize: "0.72rem", fontWeight: 700 }}>
              {count}
            </span>
          </button>
        ))}
      </div>

      {/* Search */}
      <div style={{ position: "relative", marginBottom: "1.5rem", maxWidth: "400px" }}>
        <Search size={16} style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
        <input
          type="text"
          className="form-input"
          style={{ paddingLeft: "2.5rem" }}
          placeholder="Search by name, email, or course..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: selected ? "1fr 420px" : "1fr", gap: "1.5rem", alignItems: "start" }}>
        {/* Table */}
        <div className="card-cream" style={{ overflow: "hidden" }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Applicant</th>
                <th>Course</th>
                <th>State</th>
                <th>Ministry</th>
                <th>Scholarship</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={8} style={{ textAlign: "center", padding: "3rem", color: "var(--text-muted)" }}>No applications found</td></tr>
              ) : (
                filtered.map((app) => {
                  const sc = statusConfig[app.status];
                  return (
                    <tr key={app.id} style={{ cursor: "pointer", background: selected?.id === app.id ? "var(--gold-pale)" : undefined }} onClick={() => setSelected(app)}>
                      <td>
                        <div style={{ fontWeight: 600, color: "var(--navy-deep)", fontSize: "0.875rem" }}>{app.name}</div>
                        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{app.email}</div>
                      </td>
                      <td style={{ maxWidth: "180px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "0.85rem" }}>{app.course}</td>
                      <td style={{ fontSize: "0.85rem" }}>{app.state}</td>
                      <td style={{ fontSize: "0.82rem" }}>{app.role} · {app.yearsMinistry}y</td>
                      <td>{app.scholarship ? <span style={{ color: "var(--warning)", fontWeight: 700, fontSize: "0.8rem" }}>Yes</span> : <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>No</span>}</td>
                      <td style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{app.date}</td>
                      <td>
                        <span style={{ padding: "0.25rem 0.625rem", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700, background: sc.bg, color: sc.color }}>
                          {sc.label}
                        </span>
                      </td>
                      <td>
                        <button onClick={(e) => { e.stopPropagation(); setSelected(app); }} style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.78rem", color: "var(--gold-dark)", fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}>
                          <Eye size={13} /> Review
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Detail Panel */}
        {selected && (
          <div className="card-cream" style={{ padding: "1.75rem", position: "sticky", top: "80px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
              <div>
                <h4 style={{ fontSize: "1rem", marginBottom: "0.25rem" }}>{selected.name}</h4>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{selected.id} · {selected.date}</div>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", fontSize: "1.25rem", lineHeight: 1 }}>×</button>
            </div>

            {/* Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {[
                ["Email", selected.email],
                ["Phone", selected.phone],
                ["Church", selected.church],
                ["State", selected.state],
                ["Course", selected.course],
                ["Role", selected.role],
                ["Years in Ministry", `${selected.yearsMinistry} years`],
                ["Scholarship Request", selected.scholarship ? "✦ Yes — Financial assistance needed" : "No"],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", gap: "0.75rem", fontSize: "0.85rem", borderBottom: "1px solid var(--border-light)", paddingBottom: "0.625rem" }}>
                  <span style={{ fontWeight: 600, color: "var(--navy-deep)", minWidth: "130px", flexShrink: 0 }}>{label}</span>
                  <span style={{ color: label === "Scholarship Request" && selected.scholarship ? "var(--warning)" : "var(--text-secondary)" }}>{value}</span>
                </div>
              ))}
            </div>

            {/* Current Status */}
            <div style={{ marginBottom: "1.25rem" }}>
              <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--navy-deep)", marginBottom: "0.375rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Current Status</div>
              <span style={{ padding: "0.375rem 0.875rem", borderRadius: "999px", fontSize: "0.8rem", fontWeight: 700, background: statusConfig[selected.status].bg, color: statusConfig[selected.status].color }}>
                {statusConfig[selected.status].label}
              </span>
            </div>

            {/* Admin Notes */}
            <div style={{ marginBottom: "1.25rem" }}>
              <label className="form-label" htmlFor="admin-note">Admin Notes</label>
              <textarea
                id="admin-note"
                className="form-input"
                rows={3}
                value={adminNote}
                onChange={(e) => setAdminNote(e.target.value)}
                placeholder="Add review notes (optional)..."
                style={{ resize: "vertical", fontSize: "0.85rem" }}
              />
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {selected.status !== "APPROVED" && (
                <button onClick={() => updateStatus(selected.id, "APPROVED")} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.75rem", background: "var(--success)", color: "white", border: "none", borderRadius: "10px", fontWeight: 700, fontSize: "0.875rem", cursor: "pointer" }}>
                  <CheckCircle size={16} /> Approve Application
                </button>
              )}
              {selected.status !== "UNDER_REVIEW" && selected.status !== "APPROVED" && (
                <button onClick={() => updateStatus(selected.id, "UNDER_REVIEW")} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.75rem", background: "var(--navy-mid)", color: "white", border: "none", borderRadius: "10px", fontWeight: 700, fontSize: "0.875rem", cursor: "pointer" }}>
                  <Eye size={16} /> Mark Under Review
                </button>
              )}
              {selected.status !== "INFO_REQUESTED" && selected.status !== "APPROVED" && (
                <button onClick={() => updateStatus(selected.id, "INFO_REQUESTED")} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.75rem", background: "#7B3F9E", color: "white", border: "none", borderRadius: "10px", fontWeight: 700, fontSize: "0.875rem", cursor: "pointer" }}>
                  <MessageSquare size={16} /> Request More Info
                </button>
              )}
              {selected.status !== "REJECTED" && selected.status !== "APPROVED" && (
                <button onClick={() => updateStatus(selected.id, "REJECTED")} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.75rem", background: "transparent", color: "var(--danger)", border: "2px solid var(--danger)", borderRadius: "10px", fontWeight: 700, fontSize: "0.875rem", cursor: "pointer" }}>
                  <XCircle size={16} /> Reject Application
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
