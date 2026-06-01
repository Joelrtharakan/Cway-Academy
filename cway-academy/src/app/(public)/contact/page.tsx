import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { EmailCard } from "@/components/EmailCard";

export const metadata = {
  title: "Contact Us",
  description: "Contact CWAY Academy — reach our admissions team, faculty, or ministry partnership office. Located in Bangalore, India.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="parchment-bg" style={{ padding: "5rem 0 3rem" }}>
        <div className="container reveal">
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
          <div className="contact-layout-grid reveal">
            {/* Info */}
            <div className="reveal stagger-1">
              <h3 style={{ marginBottom: "2rem" }}>Contact Information</h3>
              {[
                { Icon: MapPin, label: "Address", value: "CWAY MISSIONS Religious Trust\nBangalore, Karnataka, India" },
                { Icon: Mail, label: "Email", value: <a href="mailto:support@cwayacademy.com" style={{ textDecoration: "underline" }}>support@cwayacademy.com</a> },
                { Icon: Phone, label: "Phone", value: "+91 96638 31220" },
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

            {/* Email Card Replacement */}
            <div className="reveal stagger-2" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <EmailCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
