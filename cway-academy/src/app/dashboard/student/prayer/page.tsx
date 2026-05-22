"use client";
import { useState } from "react";
import { Heart, Send, CheckCircle } from "lucide-react";

export default function PrayerPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", request: "", isPublic: false });
  const [submitted, setSubmitted] = useState(false);

  const publicRequests = [
    { name: "Pastor James", subject: "Church Planting in Tribal Area", time: "2 days ago", prayers: 24 },
    { name: "Sister Mary", subject: "Healing from illness", time: "3 days ago", prayers: 41 },
    { name: "Anonymous", subject: "Breakthrough in ministry", time: "5 days ago", prayers: 18 },
    { name: "Evangelist David", subject: "Resources for rural outreach", time: "1 week ago", prayers: 37 },
  ];

  if (submitted) {
    return (
      <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", maxWidth: "440px" }}>
          <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "linear-gradient(135deg, var(--gold-primary), var(--gold-dark))", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
            <CheckCircle size={36} color="white" />
          </div>
          <h3 style={{ marginBottom: "0.75rem" }}>Prayer Request Submitted</h3>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Your request has been received. Our prayer team will be lifting your need before the Lord. May God move mightily in your situation.
          </p>
          <div className="scripture-block" style={{ marginTop: "1.5rem" }}>
            "The effective, fervent prayer of a righteous man avails much."
            <span className="scripture-reference">— James 5:16 (NKJV)</span>
          </div>
          <button onClick={() => setSubmitted(false)} className="btn-primary" style={{ marginTop: "1.5rem" }}>Submit Another Request</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "0.25rem" }}>Prayer Requests</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Submit your needs and stand in prayer with the CWAY Academy community.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "2rem" }}>
        {/* Form */}
        <div className="card-cream" style={{ padding: "2rem" }}>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>Submit a Prayer Request</h3>
          <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div><label className="form-label" htmlFor="pr-name">Your Name</label><input id="pr-name" className="form-input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Optional" /></div>
              <div><label className="form-label" htmlFor="pr-email">Email</label><input id="pr-email" type="email" className="form-input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Optional" /></div>
            </div>
            <div><label className="form-label" htmlFor="pr-subject">Prayer Subject *</label><input id="pr-subject" className="form-input" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="e.g. Healing, Ministry breakthrough, Guidance..." required /></div>
            <div><label className="form-label" htmlFor="pr-request">Your Prayer Request *</label><textarea id="pr-request" className="form-input" rows={5} value={form.request} onChange={(e) => setForm({ ...form, request: e.target.value })} placeholder="Share your prayer need..." required style={{ resize: "vertical" }} /></div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <input id="pr-public" type="checkbox" checked={form.isPublic} onChange={(e) => setForm({ ...form, isPublic: e.target.checked })} style={{ width: "16px", height: "16px", accentColor: "var(--gold-primary)" }} />
              <label htmlFor="pr-public" style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Share this request with the prayer community (anonymously if preferred)</label>
            </div>
            <button type="submit" className="btn-primary" style={{ justifyContent: "center", gap: "0.5rem" }}>
              <Send size={16} /> Submit Prayer Request
            </button>
          </form>
        </div>

        {/* Community Requests */}
        <div>
          <h3 style={{ fontSize: "1.1rem", marginBottom: "1.25rem" }}>Community Prayer Wall</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {publicRequests.map((req) => (
              <div key={req.subject} className="card-cream" style={{ padding: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--navy-deep)" }}>{req.subject}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{req.name} · {req.time}</div>
                  </div>
                  <button style={{ display: "flex", alignItems: "center", gap: "4px", padding: "0.375rem 0.75rem", background: "rgba(201,168,76,0.1)", border: "none", borderRadius: "999px", color: "var(--gold-dark)", fontSize: "0.75rem", fontWeight: 700, cursor: "pointer" }}>
                    <Heart size={12} fill="var(--gold-primary)" color="var(--gold-primary)" /> {req.prayers} Praying
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="scripture-block" style={{ marginTop: "1.5rem", fontSize: "0.95rem" }}>
            "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God."
            <span className="scripture-reference">— Philippians 4:6 (NIV)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
