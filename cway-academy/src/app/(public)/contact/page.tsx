import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description: "Contact CWAY Academy — reach our admissions team, faculty, or ministry partnership office. Located in Bangalore, India.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="parchment-bg" style={{ padding: "5rem 0 3rem" }}>
        <div className="container">
          <div className="section-label">Get in Touch</div>
          <h1 style={{ marginBottom: "1rem" }}>We Would Love to <span className="gradient-text-gold">Hear From You</span></h1>
          <div className="gold-divider gold-divider-left" />
          <p style={{ maxWidth: "520px", fontSize: "1.05rem", lineHeight: 1.9, color: "var(--text-secondary)" }}>
            Whether you have questions about admissions, courses, partnerships, or simply
            want to connect — our team is here and ready to serve you.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="contact-layout-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem", alignItems: "start" }}>
            {/* Info */}
            <div>
              <h3 style={{ marginBottom: "2rem" }}>Contact Information</h3>
              {[
                { Icon: MapPin, label: "Address", value: "CWAY MISSIONS Religious Trust\nBangalore, Karnataka, India" },
                { Icon: Mail, label: "Email", value: "info@cwayacademy.org\nadmissions@cwayacademy.org" },
                { Icon: Phone, label: "Phone", value: "+91 (080) XXXX-XXXX" },
                { Icon: Clock, label: "Office Hours", value: "Monday – Friday: 9am – 5pm IST\nSaturday: 9am – 1pm IST" },
              ].map(({ Icon, label, value }) => (
                <div key={label} style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
                  <div className="feature-icon" style={{ width: "48px", height: "48px", flexShrink: 0 }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--navy-deep)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.375rem" }}>{label}</div>
                    <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, whiteSpace: "pre-line" }}>{value}</div>
                  </div>
                </div>
              ))}

              <div className="scripture-block" style={{ marginTop: "2rem" }}>
                "The Lord bless you and keep you; the Lord make His face shine upon you, and be gracious to you."
                <span className="scripture-reference">— Numbers 6:24–25</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-cream" style={{ padding: "2.5rem" }}>
              <h3 style={{ marginBottom: "0.5rem" }}>Send Us a Message</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
                We typically respond within 1–2 business days.
              </p>
              <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div className="form-row-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label className="form-label" htmlFor="contact-first">First Name *</label>
                    <input id="contact-first" type="text" className="form-input" placeholder="Samuel" required />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="contact-last">Last Name *</label>
                    <input id="contact-last" type="text" className="form-input" placeholder="Raju" required />
                  </div>
                </div>
                <div>
                  <label className="form-label" htmlFor="contact-email">Email Address *</label>
                  <input id="contact-email" type="email" className="form-input" placeholder="pastor@church.com" required />
                </div>
                <div>
                  <label className="form-label" htmlFor="contact-phone">Phone Number</label>
                  <input id="contact-phone" type="tel" className="form-input" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="form-label" htmlFor="contact-subject">Subject *</label>
                  <select id="contact-subject" className="form-input">
                    <option value="">Select a subject...</option>
                    <option value="admissions">Admissions Enquiry</option>
                    <option value="courses">Course Information</option>
                    <option value="scholarship">Scholarship Information</option>
                    <option value="partnership">Ministry Partnership</option>
                    <option value="donation">Donation Enquiry</option>
                    <option value="faculty">Faculty Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="form-label" htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    className="form-input"
                    rows={5}
                    placeholder="How can we help you?"
                    required
                    style={{ resize: "vertical" }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ justifyContent: "center", gap: "0.5rem" }}>
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
