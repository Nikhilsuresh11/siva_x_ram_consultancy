"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/* ─── Contact info — edit here ──────────────────────────── */
const PHONE     = "+91 98765 43210";   // ← your real number
const PHONE_RAW = "+919876543210";     // ← no spaces
const WHATSAPP  = "+919876543210";     // ← WhatsApp number
const EMAIL     = "sivaxram@gmail.com";// ← your real email
const ADDRESS   = "Trichy Road, Opp. FB Cakes, Sulur, Coimbatore – 641402";

/* ─── Thumbnails — replace files in public/cars/ with your own images ─ */
const THUMBS = [
  { src: "/cars/thumb1.png", label: "Hyundai Creta"  },
  { src: "/cars/thumb2.png", label: "Tata Nexon"     },
  { src: "/cars/thumb3.png", label: "Maruti Swift"   },
];

/* ─── SVG Icons ─────────────────────────────────────────── */
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.46 11.46 0 003.58.57 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1 11.46 11.46 0 00.57 3.58 1 1 0 01-.25 1.02l-2.2 2.19z"/>
  </svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);
const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="26" height="26">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);

/* ─── Scroll reveal hook ─────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Page ───────────────────────────────────────────────── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  useScrollReveal();

  const navLinks = [
    { href: "#home",     label: "Home"     },
    { href: "#services", label: "Services" },
    { href: "#about",    label: "About"    },
    { href: "#contact",  label: "Contact"  },
  ];

  return (
    <>
      {/* ══ NAVBAR ══════════════════════════════════════════ */}
      <nav className="navbar" role="navigation" aria-label="Main navigation">
        {/* Left links */}
        <ul className="nav-links" style={{ flex: 1 }}>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
        </ul>

        {/* Center logo */}
        <div className="nav-logo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#f97316">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
          </svg>
          SIVA<span>_X_</span>RAM
        </div>

        {/* Right links */}
        <ul className="nav-links" style={{ flex: 1, justifyContent: "flex-end" }}>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><span className="nav-badge">SULUR</span></li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="nav-mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
          style={{ background: "none", border: "none", color: "#fff" }}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* ══ MOBILE MENU ══════════════════════════════════════ */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} role="dialog" aria-modal="true">
        <button
          onClick={() => setMenuOpen(false)}
          style={{ position: "absolute", top: 20, right: 20, background: "none", border: "none", color: "#fff", cursor: "pointer" }}
        >
          <CloseIcon />
        </button>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href={`tel:${PHONE_RAW}`} style={{ color: "#f97316" }}>{PHONE}</a>
      </div>

      {/* ══ HERO ═════════════════════════════════════════════ */}
      <section id="home" className="hero">
        {/* Background image */}
        <div className="hero-bg">
          <Image
            src="/cars/hero.png"
            alt="Luxury car hero"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>

        {/* Floating featured card */}
        <div className="featured-card" aria-label="Featured vehicle card">
          <Image
            src="/cars/featured.png"
            alt="Royal Enfield Classic 350"
            width={155}
            height={190}
            className="featured-card-img"
            style={{ objectFit: "cover" }}
          />
          <div className="featured-card-body">
            <div className="featured-card-tag">🏍️ Featured Bike</div>
            <div className="featured-card-name">Royal Enfield Classic 350</div>
            <div className="featured-card-meta">
              <span style={{ color: "#f97316" }}>✦</span>
              <span>Best Deal</span>
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="hero-content">
          {/* Left — headline */}
          <div className="hero-text">
            <div className="hero-eyebrow">Coimbatore&apos;s Trusted Vehicle Consultancy</div>
            <h1 className="hero-headline">
              Indian Cars &amp;<br />
              <em>Bikes,</em><br />
              Best Deals
            </h1>
            <p className="hero-sub">
              Maruti · Hyundai · Tata · Honda · Royal Enfield &amp; more.
              Buy, sell or exchange — best price, zero hassle, right here in Sulur.
            </p>
            <div className="hero-actions">
              <a href={`tel:${PHONE_RAW}`} id="hero-call-btn" className="btn-primary">
                <PhoneIcon /> Call Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                id="hero-whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>
          </div>

          {/* Right — thumbnails */}
          <div className="hero-thumbs" aria-label="Vehicle gallery thumbnails">
            {THUMBS.map((t) => (
              <div key={t.src} className="thumb-card">
                <Image
                  src={t.src}
                  alt={t.label}
                  fill
                  sizes="170px"
                  style={{ objectFit: "cover" }}
                />
                <div className="thumb-overlay" />
                <span className="thumb-label">{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Orange accent bar at very bottom */}
        <div className="accent-bar" style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 15 }} />
      </section>

      {/* ══ ABOUT ════════════════════════════════════════════ */}
      <section id="about" className="section">
        <div className="about-grid">
          {/* Image side */}
          <div className="reveal about-img-wrap">
            <Image
              src="/cars/thumb2.png"
              alt="Tata Nexon — quality Indian vehicles"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
            <div className="about-badge">
              10+
              <small>Years Exp.</small>
            </div>
          </div>

          {/* Text side */}
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="section-eyebrow">Who We Are</div>
            <h2 className="section-title">More Than<br />A Dealership</h2>
            <p className="section-sub">
              At SIVA_X_RAM Consultancy, we connect buyers and sellers of popular Indian
              cars &amp; bikes — Maruti, Hyundai, Tata, Honda, Royal Enfield, Bajaj &amp; more.
              Transparent deals, expert guidance, all in Sulur, Coimbatore.
            </p>

            <div className="stats-row">
              {[["500+","Happy Clients"],["1000+","Deals Closed"],["10+","Years Exp."]].map(([n,l])=>(
                <div key={l} className="stat">
                  <div className="stat-num">{n}</div>
                  <div className="stat-label">{l}</div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary" style={{ display: "inline-flex" }}>
              Get In Touch <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ══ SERVICES ═════════════════════════════════════════ */}
      <section id="services" className="section" style={{ paddingTop: 0 }}>
        <div className="reveal">
          <div className="section-eyebrow">What We Offer</div>
          <h2 className="section-title">Our Services</h2>
        </div>

        <div className="services-grid">
          {[
            { img: "/cars/thumb1.png", num: "01", title: "Buy",      tag: "Creta · Nexon · Swift"     },
            { img: "/cars/thumb2.png", num: "02", title: "Sell",     tag: "Best Resale Value"         },
            { img: "/cars/thumb3.png", num: "03", title: "Exchange", tag: "Upgrade to Your Dream Car"  },
          ].map((s, i) => (
            <div key={s.num} className="reveal service-card" style={{ transitionDelay: `${i * 0.1}s` }}>
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width:600px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="service-card-overlay" />
              <div className="service-card-content">
                <div className="service-card-num">{s.num}</div>
                <div className="service-card-title">{s.title}</div>
                <span className="service-card-tag">{s.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CONTACT ══════════════════════════════════════════ */}
      <section id="contact" className="section" style={{ background: "#0a0a0a" }}>
        <div className="reveal">
          <div className="section-eyebrow">Reach Us</div>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-sub">We&apos;re available 7 days a week. Tap any card to connect instantly.</p>
        </div>

        <div className="contact-grid">
          {/* Phone */}
          <a href={`tel:${PHONE_RAW}`} id="contact-phone" className="contact-card reveal">
            <div className="contact-icon">📞</div>
            <div>
              <div className="contact-label">Phone</div>
              <div className="contact-value">{PHONE}</div>
              <div className="contact-hint">Tap to call →</div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP}`}
            id="contact-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card reveal"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="contact-icon green">💬</div>
            <div>
              <div className="contact-label">WhatsApp</div>
              <div className="contact-value">{PHONE}</div>
              <div className="contact-hint" style={{ color: "#22c55e" }}>Chat instantly →</div>
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            id="contact-email"
            className="contact-card reveal"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="contact-icon purple">✉️</div>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-value" style={{ fontSize: "0.9rem" }}>{EMAIL}</div>
              <div className="contact-hint" style={{ color: "#a855f7" }}>Send a message →</div>
            </div>
          </a>

          {/* Address */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
            id="contact-address"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card reveal"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="contact-icon blue">📍</div>
            <div>
              <div className="contact-label">Address</div>
              <div className="contact-value" style={{ fontSize: "0.88rem" }}>{ADDRESS}</div>
              <div className="contact-hint" style={{ color: "#60a5fa" }}>Open in Maps →</div>
            </div>
          </a>
        </div>
      </section>

      {/* ══ FOOTER ═══════════════════════════════════════════ */}
      <footer className="footer">
        <div className="footer-top">
          <div>
            <div className="nav-logo" style={{ marginBottom: 8 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#f97316">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
              SIVA<span>_X_</span>RAM
            </div>
            <p style={{ fontSize: "0.82rem", color: "#475569", maxWidth: 260 }}>
              Trichy Road, Opp. FB Cakes,<br />Sulur, Coimbatore – 641402
            </p>
          </div>
          <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
            {[["Home","#home"],["Services","#services"],["About","#about"],["Contact","#contact"]].map(([l,h])=>(
              <a key={l} href={h} style={{ color:"#475569", textDecoration:"none", fontSize:"0.85rem", transition:"color 0.2s" }}
                onMouseEnter={e=>(e.currentTarget.style.color="#f97316")}
                onMouseLeave={e=>(e.currentTarget.style.color="#475569")}
              >{l}</a>
            ))}
          </div>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} SIVA_X_RAM CONSULTANCY. All rights reserved. · Sulur, Coimbatore.
        </p>
      </footer>
    </>
  );
}
