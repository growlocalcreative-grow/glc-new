'use client';

import { Mail, Phone, MapPin, Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <section
        id="contact"
        style={{ background: 'linear-gradient(135deg, #3D4337 0%, #2d3129 100%)', padding: '6rem 1.5rem' }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(161,166,140,0.15)', borderRadius: '100px', padding: '0.35rem 0.9rem', marginBottom: '1.5rem' }}>
            <Mail size={12} color="#A1A68C" />
            <span style={{ fontSize: '0.7rem', color: '#A1A68C', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Get In Touch</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#F7F4ED', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            Got a problem or an idea<br />
            <span style={{ color: '#FFD700' }}>that&apos;s driving you nuts?</span>
          </h2>

          <p style={{ color: 'rgba(247,244,237,0.7)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '560px', margin: '0 auto 2.5rem' }}>
            Whether it&apos;s your website, your Google setup, your market prep chaos, or something I haven&apos;t even thought of yet — let&apos;s sit down and talk it through. I&apos;m right here in Cool, helping one neighbor at a time across the Divide and beyond.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}>
            <a
              href="mailto:growlocalcreative@gmail.com"
              className="btn-gold"
              style={{ textDecoration: 'none' }}
            >
              <Mail size={16} />
              growlocalcreative@gmail.com
            </a>
            <a
              href="tel:9168694142"
              className="btn-ghost-cream"
              style={{ textDecoration: 'none' }}
            >
              <Phone size={16} />
              916-869-4142
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            {[
              { icon: <Mail size={18} color="#FFD700" />, label: 'Email', value: 'growlocalcreative@gmail.com', href: 'mailto:growlocalcreative@gmail.com' },
              { icon: <Phone size={18} color="#FFD700" />, label: 'Phone', value: '916-869-4142', href: 'tel:9168694142' },
              { icon: <MapPin size={18} color="#FFD700" />, label: 'Location', value: 'Cool, CA', href: null },
            ].map((contact) => (
              <div
                key={contact.label}
                style={{ backgroundColor: 'rgba(247,244,237,0.06)', border: '1px solid rgba(161,166,140,0.2)', borderRadius: '10px', padding: '1.25rem', textAlign: 'center' }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>{contact.icon}</div>
                <div style={{ color: '#A1A68C', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>{contact.label}</div>
                {contact.href ? (
                  <a href={contact.href} style={{ color: '#F7F4ED', fontSize: '0.85rem', fontWeight: 500, textDecoration: 'none', wordBreak: 'break-all' }}>{contact.value}</a>
                ) : (
                  <span style={{ color: '#F7F4ED', fontSize: '0.85rem', fontWeight: 500 }}>{contact.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: '#1A1A1A', padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ width: '30px', height: '30px', backgroundColor: '#3D4337', border: '1.5px solid #A1A68C', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Leaf size={15} color="#FFD700" />
            </div>
            <div>
              <div style={{ color: '#F7F4ED', fontWeight: 700, fontSize: '0.9rem' }}>Grow Local Creative</div>
              <div style={{ color: '#666666', fontSize: '0.7rem' }}>Cool, CA · Georgetown Divide</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center' }}>
            {[
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Tools', href: '#tools' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ color: '#666666', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F7F4ED')}
                onMouseLeave={e => (e.currentTarget.style.color = '#666666')}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ color: '#444', fontSize: '0.78rem', textAlign: 'right' }}>
            <div>Serving El Dorado &amp; Placer Counties</div>
            <div style={{ marginTop: '0.25rem' }}>&copy; {new Date().getFullYear()} Grow Local Creative. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  );
}
