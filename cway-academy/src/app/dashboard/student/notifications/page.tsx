"use client";
import { useState } from "react";
import { Bell, BookOpen, Award, Calendar, MessageSquare, Heart, CheckCircle, Filter } from "lucide-react";

type NotifType = "LESSON" | "QUIZ" | "CERT" | "ANNOUNCEMENT" | "ASSIGNMENT" | "PRAYER";

interface Notification {
  id: string;
  type: NotifType;
  title: string;
  body: string;
  time: string;
  read: boolean;
}

const typeConfig: Record<NotifType, { icon: typeof Bell; color: string; bg: string }> = {
  LESSON:       { icon: BookOpen,    color: "var(--navy-mid)",  bg: "rgba(26,48,102,0.1)" },
  QUIZ:         { icon: CheckCircle, color: "var(--success)",   bg: "rgba(61,122,75,0.1)" },
  CERT:         { icon: Award,       color: "var(--gold-dark)", bg: "rgba(201,168,76,0.1)" },
  ANNOUNCEMENT: { icon: Bell,        color: "var(--danger)",    bg: "rgba(176,58,46,0.1)" },
  ASSIGNMENT:   { icon: Calendar,    color: "#7B3F9E",          bg: "rgba(123,63,158,0.1)" },
  PRAYER:       { icon: Heart,       color: "var(--gold-dark)", bg: "rgba(201,168,76,0.08)" },
};

const initialNotifs: Notification[] = [
  { id: "N1", type: "ANNOUNCEMENT", title: "New Live Session Scheduled", body: "A live Q&A on Systematic Theology has been scheduled for May 24 at 6:00 PM IST. Don't miss it!", time: "2 hours ago", read: false },
  { id: "N2", type: "ASSIGNMENT", title: "Assignment Due in 3 Days", body: "Your essay 'The Doctrine of God' for Foundations of Biblical Theology is due on May 22, 2026.", time: "5 hours ago", read: false },
  { id: "N3", type: "QUIZ", title: "Quiz Passed! Score: 88%", body: "Congratulations! You passed the Christology Foundations quiz with a score of 88/100.", time: "Yesterday", read: true },
  { id: "N4", type: "CERT", title: "Certificate Ready to Download", body: "Your Certificate of Completion for Old Testament Survey is now available in your certificates section.", time: "3 days ago", read: true },
  { id: "N5", type: "LESSON", title: "New Lesson Available", body: "Module 3 of Foundations of Biblical Theology is now available. Continue your study!", time: "4 days ago", read: true },
  { id: "N6", type: "PRAYER", title: "Prayer Request Update", body: "The CWAY Academy prayer team has prayed for your request submitted last week. Be encouraged!", time: "5 days ago", read: true },
];

export default function StudentNotificationsPage() {
  const [notifs, setNotifs] = useState<Notification[]>(initialNotifs);
  const [filter, setFilter] = useState("ALL");

  const unread = notifs.filter((n) => !n.read).length;

  const markAllRead = () => setNotifs((p) => p.map((n) => ({ ...n, read: true })));
  const markRead = (id: string) => setNotifs((p) => p.map((n) => n.id === id ? { ...n, read: true } : n));

  const filtered = notifs.filter((n) => {
    if (filter === "UNREAD") return !n.read;
    if (filter !== "ALL") return n.type === filter;
    return true;
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2rem" }}>
        <div>
          <h2 style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>Notifications</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
            {unread > 0 ? `${unread} unread notification${unread > 1 ? "s" : ""}` : "All caught up!"}
          </p>
        </div>
        {unread > 0 && (
          <button onClick={markAllRead} style={{ padding: "0.5rem 1rem", background: "var(--cream-mid)", border: "1px solid var(--border-light)", borderRadius: "8px", fontSize: "0.82rem", fontWeight: 600, color: "var(--navy-deep)", cursor: "pointer" }}>
            Mark all as read
          </button>
        )}
      </div>

      {/* Filter */}
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        {["ALL", "UNREAD", "ANNOUNCEMENT", "ASSIGNMENT", "LESSON", "QUIZ", "CERT"].map((f) => (
          <button key={f} onClick={() => setFilter(f)} style={{ padding: "0.375rem 0.875rem", borderRadius: "999px", border: filter === f ? "2px solid var(--gold-primary)" : "1.5px solid var(--border-light)", background: filter === f ? "var(--gold-pale)" : "var(--cream-light)", color: filter === f ? "var(--gold-dark)" : "var(--text-secondary)", fontWeight: 600, fontSize: "0.78rem", cursor: "pointer" }}>
            {f === "CERT" ? "Certificates" : f.charAt(0) + f.slice(1).toLowerCase()}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "3rem", color: "var(--text-muted)" }}>
            <Bell size={36} color="var(--border-light)" style={{ margin: "0 auto 1rem" }} />
            <p>No notifications in this category.</p>
          </div>
        ) : filtered.map((notif) => {
          const tc = typeConfig[notif.type];
          const Icon = tc.icon;
          return (
            <div
              key={notif.id}
              onClick={() => markRead(notif.id)}
              style={{
                display: "flex",
                gap: "1rem",
                padding: "1.25rem 1.5rem",
                background: notif.read ? "var(--cream-light)" : "white",
                border: `1.5px solid ${notif.read ? "var(--border-light)" : "var(--gold-light)"}`,
                borderRadius: "12px",
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: notif.read ? "none" : "var(--shadow-sm)",
              }}
            >
              <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: tc.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={20} color={tc.color} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.375rem" }}>
                  <span style={{ fontWeight: notif.read ? 500 : 700, fontSize: "0.9rem", color: "var(--navy-deep)" }}>{notif.title}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                    <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", flexShrink: 0 }}>{notif.time}</span>
                    {!notif.read && <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--gold-primary)", flexShrink: 0 }} />}
                  </div>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>{notif.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
