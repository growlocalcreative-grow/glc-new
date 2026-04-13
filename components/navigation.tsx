'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Tools', href: '#tools' },
    { label: 'Services', href: '#services' },
    { label: 'Spotlight', href: '#spotlight' },
    { label: "What's Next", href: '#coming' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? '#2d3129' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(161,166,140,0.2)' : 'none',
        transition: 'background-color 0.3s ease, border-bottom 0.3s ease',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <Image
              src="/logo.PNG",
              alt="Grow Local Creative Logo",
              width={120},
              hight=[120],
              priority,
              style={{ objectFit: 'contain' }},
            />
          </a>
            }}>
 
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav-link" style={{ fontSize: '0.9rem', textDecoration: 'none' }}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-gold" style={{ padding: '0.5rem 1.2rem', fontSize: '0.875rem', borderRadius: '5px', textDecoration: 'none' }}>
              Let&apos;s Talk
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#F7F4ED', padding: '0.25rem' }}
            className="md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div style={{ backgroundColor: '#2d3129', borderTop: '1px solid rgba(161,166,140,0.2)', padding: '1rem 1.5rem 1.5rem' }} className="md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ display: 'block', color: '#F7F4ED', padding: '0.75rem 0', textDecoration: 'none', fontSize: '1rem', fontWeight: 500, borderBottom: '1px solid rgba(161,166,140,0.15)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn-gold"
            style={{ marginTop: '1.25rem', display: 'inline-flex', textDecoration: 'none' }}
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </nav>
  );
}
