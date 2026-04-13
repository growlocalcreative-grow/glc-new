import { Globe, Search, Share2, Monitor, Smartphone, Palette, Wrench } from 'lucide-react';

const services = [
  {
    icon: <Globe size={22} color="#3D4337" />,
    title: 'Website Rescues',
    body: "Something's broken, outdated, or just... embarrassing. Let's fix it. No judgement — I've seen it all around here.",
    highlight: false,
  },
  {
    icon: <Search size={22} color="#3D4337" />,
    title: 'Google Setup & Local SEO',
    body: "Your Google Business Profile is either helping you or hiding you. Let's make sure folks around the Divide can actually find you.",
    highlight: false,
  },
  {
    icon: <Share2 size={22} color="#3D4337" />,
    title: 'Social Media Help',
    body: "Posting without a plan is exhausting. I'll help you figure out what actually makes sense for your kind of business.",
    highlight: false,
  },
  {
    icon: <Monitor size={22} color="#3D4337" />,
    title: 'Quick Tech & Tutorials',
    body: "Stuck on something? We sit down together, I walk you through it, and you leave knowing how to do it yourself.",
    highlight: false,
  },
  {
    icon: <Smartphone size={22} color="#FFD700" />,
    title: 'Simple Web & Mobile Tools',
    body: "Got a recurring headache in your business? I build calm, phone-friendly tools that fix exactly that.",
    highlight: true,
    badge: 'NEW',
  },
  {
    icon: <Palette size={22} color="#3D4337" />,
    title: 'Branding for Local Folks',
    body: "Logo, colors, fonts, the whole vibe. Let's get your look consistent so people remember you.",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: '#F7F4ED', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(61,67,55,0.08)', borderRadius: '100px', padding: '0.35rem 0.9rem', marginBottom: '1.25rem' }}>
            <Wrench size={12} color="#3D4337" />
            <span style={{ fontSize: '0.7rem', color: '#3D4337', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Services</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#1A1A1A', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            Web Help &amp; Simple Tools
          </h2>
          <div className="gold-bar" style={{ margin: '0 auto 1rem' }} />
          <p style={{ color: '#666666', fontSize: '1rem', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            Practical, jargon-free help for the real problems local businesses actually face.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {services.map((service) => (
            <div
              key={service.title}
              className="card-lift service-card"
              style={{
                backgroundColor: service.highlight ? '#3D4337' : '#FFFFFF',
                borderRadius: '12px',
                padding: '1.75rem',
                border: service.highlight ? '1px solid rgba(255,215,0,0.3)' : '1px solid #E5E5E5',
                position: 'relative',
              }}
            >
              {service.badge && (
                <span style={{
                  position: 'absolute', top: '1.25rem', right: '1.25rem',
                  backgroundColor: '#FFD700', color: '#1A1A1A',
                  fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em',
                  padding: '0.2rem 0.55rem', borderRadius: '100px',
                }}>
                  {service.badge}
                </span>
              )}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  className="service-icon-wrap"
                  style={{ backgroundColor: service.highlight ? 'rgba(255,215,0,0.15)' : 'rgba(61,67,55,0.08)' }}
                >
                  {service.icon}
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, color: service.highlight ? '#F7F4ED' : '#1A1A1A', marginBottom: '0.5rem', fontSize: '1rem' }}>
                    {service.title}
                  </h3>
                  <p style={{ color: service.highlight ? 'rgba(247,244,237,0.7)' : '#666666', fontSize: '0.875rem', lineHeight: 1.7 }}>
                    {service.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#contact" className="btn-forest" style={{ textDecoration: 'none' }}>
            <Wrench size={16} />
            Talk About Your Situation
          </a>
        </div>
      </div>
    </section>
  );
}
