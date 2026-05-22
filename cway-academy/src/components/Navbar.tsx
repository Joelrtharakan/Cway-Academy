"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, BookOpen } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Courses",
    href: "/courses",
    dropdown: [
      { label: "All Courses", href: "/courses" },
      { label: "Certificate Programs", href: "/courses?level=CERTIFICATE" },
      { label: "Diploma Programs", href: "/courses?level=DIPLOMA" },
      { label: "Short Courses", href: "/courses?level=BEGINNER" },
      { label: "Course Overview", href: "/courses/overview" },
    ],
  },
  { label: "Leadership", href: "/leadership" },
  { label: "Blog", href: "/blog" },
  {
    label: "Get Involved",
    href: "/get-involved",
    dropdown: [
      { label: "Partner With Us", href: "/get-involved#partner" },
      { label: "Donate", href: "/donate" },
      { label: "Prayer Requests", href: "/prayer" },
      { label: "Volunteer", href: "/get-involved#volunteer" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}
            aria-label="CWAY Academy Home"
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, var(--navy-deep), var(--navy-mid))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <BookOpen size={22} color="var(--gold-light)" />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: "var(--navy-deep)",
                  lineHeight: 1.1,
                }}
              >
                CWAY Academy
              </div>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "var(--gold-dark)",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Coach · Challenge · Commission
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <div
                key={link.href}
                style={{ position: "relative" }}
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    padding: "0.5rem 1rem",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: pathname === link.href ? "var(--gold-dark)" : "var(--navy-deep)",
                    textDecoration: "none",
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                    backgroundColor:
                      pathname === link.href ? "var(--gold-pale)" : "transparent",
                  }}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown
                      size={14}
                      style={{
                        transition: "transform 0.2s",
                        transform: activeDropdown === link.label ? "rotate(180deg)" : "none",
                      }}
                    />
                  )}
                </Link>

                {link.dropdown && activeDropdown === link.label && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 8px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "var(--cream-light)",
                      border: "1px solid var(--border-light)",
                      borderRadius: "12px",
                      boxShadow: "var(--shadow-lg)",
                      padding: "0.5rem",
                      minWidth: "200px",
                      zIndex: 200,
                    }}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        style={{
                          display: "block",
                          padding: "0.625rem 1rem",
                          fontSize: "0.875rem",
                          color: "var(--text-secondary)",
                          textDecoration: "none",
                          borderRadius: "8px",
                          transition: "all 0.15s",
                          fontWeight: 500,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "var(--gold-pale)";
                          e.currentTarget.style.color = "var(--gold-dark)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "var(--text-secondary)";
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="hidden-mobile">
            <Link href="/apply" className="btn-outline-gold" style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}>
              Apply Now
            </Link>
            <Link href="/login" className="btn-primary" style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}>
              Student Login
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              color: "var(--navy-deep)",
              display: "none",
            }}
            className="show-mobile"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            background: "var(--cream-light)",
            borderTop: "1px solid var(--border-light)",
            padding: "1rem",
          }}
        >
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                style={{
                  display: "block",
                  padding: "0.875rem 1rem",
                  fontWeight: 500,
                  color: pathname === link.href ? "var(--gold-dark)" : "var(--text-primary)",
                  textDecoration: "none",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  backgroundColor: pathname === link.href ? "var(--gold-pale)" : "transparent",
                  marginBottom: "0.25rem",
                }}
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div style={{ paddingLeft: "1rem", marginBottom: "0.5rem" }}>
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      style={{
                        display: "block",
                        padding: "0.5rem 1rem",
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        borderRadius: "8px",
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--border-light)" }}>
            <Link href="/apply" className="btn-outline-gold" style={{ textAlign: "center" }}>
              Apply Now
            </Link>
            <Link href="/login" className="btn-primary" style={{ textAlign: "center" }}>
              Student Login
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
