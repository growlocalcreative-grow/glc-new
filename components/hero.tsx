import { MapPin, ChevronDown, ArrowRight, Wrench } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-gradient"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '68px' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '5rem 1.5rem 4rem', width: '100%' }}>
        <div style={{ maxWidth: '760px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(161,166,140,0.15)', border: '1px solid rgba(161,166,140,0.3)', borderRadius: '100px', padding: '0.4rem 1rem', marginBottom: '2rem' }}>
            <MapPin size={13} color="#A1A68C" />
            <span style={{ fontSize: '0.75rem', color: '#A1A68C', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Cool, CA &middot; Georgetown Divide &middot; Northern Foothill Sierras
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 800, color: '#F7F4ED', lineHeight: 1.15, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Your Neighborhood{' '}
            <span style={{ color: '#FFD700' }}>Button Pusher</span>{' '}
            in the Foothills
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(247,244,237,0.75)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '620px' }}>
            Serving small businesses, nonprofits, churches, and makers across the Georgetown Divide and El Dorado &amp; Placer Counties — pushing the right buttons so life stays simpler, calmer, and more focused on what you actually love.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '4rem' }}>
            <a href="#services" className="btn-gold" style={{ textDecoration: 'none' }}>
              <Wrench size={16} />
              See How I Can Help
            </a>
            <a href="#tools" className="btn-ghost-cream" style={{ textDecoration: 'none' }}>
              Explore My Tools
              <ArrowRight size={16} />
            </a>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {[
              { number: '10+', label: 'Years helping locals' },
              { number: 'Local', label: 'Cool, CA based' },
              { number: '4', label: 'Tools built & growing' },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FFD700', lineHeight: 1 }}>{stat.number}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(247,244,237,0.55)', marginTop: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '2.5rem' }}>
        <a href="#about" style={{ color: 'rgba(247,244,237,0.4)', animation: 'bounce 2s infinite', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem', textDecoration: 'none' }}>
          <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(247,244,237,0.4)' }}>Scroll</span>
          <ChevronDown size={20} />
        </a>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}
