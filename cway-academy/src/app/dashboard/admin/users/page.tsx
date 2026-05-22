"use client";
import { useState } from "react";
import { Search, Filter, UserPlus, Edit2, Trash2, Shield, GraduationCap, BookOpen } from "lucide-react";

type Role = "ADMIN" | "INSTRUCTOR" | "STUDENT";

interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  state: string;
  courses: number;
  joinDate: string;
  isActive: boolean;
}

const mockUsers: User[] = [
  { id: "U001", name: "Administrator", email: "admin@cwayacademy.org", role: "ADMIN", state: "Karnataka", courses: 0, joinDate: "Jan 1, 2024", isActive: true },
  { id: "U002", name: "Dr. [Academic Dean]", email: "dean@cwayacademy.org", role: "INSTRUCTOR", state: "Karnataka", courses: 3, joinDate: "Feb 1, 2024", isActive: true },
  { id: "U003", name: "Rev. [Ministry Director]", email: "ministry@cwayacademy.org", role: "INSTRUCTOR", state: "Karnataka", courses: 2, joinDate: "Feb 15, 2024", isActive: true },
  { id: "U004", name: "Samuel Raju", email: "samuel@church.com", role: "STUDENT", state: "Kerala", courses: 3, joinDate: "Mar 10, 2024", isActive: true },
  { id: "U005", name: "Sunita Devi", email: "sunita@ministry.org", role: "STUDENT", state: "Bihar", courses: 1, joinDate: "Apr 5, 2024", isActive: true },
  { id: "U006", name: "Thomas Chacko", email: "thomas@church.in", role: "STUDENT", state: "Tamil Nadu", courses: 2, joinDate: "Apr 20, 2024", isActive: false },
  { id: "U007", name: "Meena Rajput", email: "meena@gospel.org", role: "STUDENT", state: "Rajasthan", courses: 1, joinDate: "May 1, 2024", isActive: true },
];

const roleConfig: Record<Role, { label: string; color: string; bg: string; icon: typeof Shield }> = {
  ADMIN:      { label: "Admin",      color: "var(--danger)",   bg: "rgba(176,58,46,0.1)",   icon: Shield },
  INSTRUCTOR: { label: "Instructor", color: "var(--navy-mid)", bg: "rgba(26,48,102,0.1)",   icon: BookOpen },
  STUDENT:    { label: "Student",    color: "var(--success)",  bg: "rgba(61,122,75,0.1)",   icon: GraduationCap },
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState<string>("ALL");

  const filtered = users.filter((u) => {
    const matchRole = filterRole === "ALL" || u.role === filterRole;
    const matchSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    return matchRole && matchSearch;
  });

  const toggleActive = (id: string) => setUsers((p) => p.map((u) => u.id === id ? { ...u, isActive: !u.isActive } : u));

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
        <div>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>User Management</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Manage all platform users, roles, and access.</p>
        </div>
        <button className="btn-primary" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem" }}>
          <UserPlus size={16} /> Invite User
        </button>
      </div>

      {/* Summary Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
        {[
          { label: "Total Users", value: users.length, color: "var(--navy-deep)" },
          { label: "Admins", value: users.filter((u) => u.role === "ADMIN").length, color: "var(--danger)" },
          { label: "Instructors", value: users.filter((u) => u.role === "INSTRUCTOR").length, color: "var(--navy-mid)" },
          { label: "Students", value: users.filter((u) => u.role === "STUDENT").length, color: "var(--success)" },
        ].map(({ label, value, color }) => (
          <div key={label} className="card-cream" style={{ padding: "1.25rem" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.75rem", fontWeight: 700, color, lineHeight: 1 }}>{value}</div>
            <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "0.25rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ position: "relative", flex: 1, maxWidth: "360px" }}>
          <Search size={16} style={{ position: "absolute", left: "0.875rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
          <input className="form-input" style={{ paddingLeft: "2.5rem" }} placeholder="Search users..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {["ALL", "ADMIN", "INSTRUCTOR", "STUDENT"].map((r) => (
            <button key={r} onClick={() => setFilterRole(r)} style={{ padding: "0.5rem 1rem", borderRadius: "8px", border: filterRole === r ? "2px solid var(--gold-primary)" : "1.5px solid var(--border-light)", background: filterRole === r ? "var(--gold-pale)" : "var(--cream-light)", color: filterRole === r ? "var(--gold-dark)" : "var(--text-secondary)", fontWeight: 600, fontSize: "0.8rem", cursor: "pointer" }}>
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="card-cream" style={{ overflow: "hidden" }}>
        <table className="data-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>State</th>
              <th>Courses</th>
              <th>Joined</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user) => {
              const rc = roleConfig[user.role];
              const RoleIcon = rc.icon;
              return (
                <tr key={user.id}>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: rc.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <RoleIcon size={16} color={rc.color} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--navy-deep)" }}>{user.name}</div>
                        <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span style={{ padding: "0.25rem 0.625rem", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700, background: rc.bg, color: rc.color }}>
                      {rc.label}
                    </span>
                  </td>
                  <td style={{ fontSize: "0.85rem" }}>{user.state}</td>
                  <td style={{ fontSize: "0.85rem" }}>{user.courses}</td>
                  <td style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{user.joinDate}</td>
                  <td>
                    <button onClick={() => toggleActive(user.id)} style={{ padding: "0.25rem 0.625rem", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700, background: user.isActive ? "rgba(61,122,75,0.1)" : "rgba(176,58,46,0.1)", color: user.isActive ? "var(--success)" : "var(--danger)", border: "none", cursor: "pointer" }}>
                      {user.isActive ? "Active" : "Inactive"}
                    </button>
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <button style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.78rem", color: "var(--navy-mid)", fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}>
                        <Edit2 size={13} /> Edit
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
