import { Heart, MapPin, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: '#F7F4ED', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(61,67,55,0.08)', borderRadius: '100px', padding: '0.35rem 0.9rem', marginBottom: '1.25rem' }}>
              <MapPin size={12} color="#3D4337" />
              <span style={{ fontSize: '0.7rem', color: '#3D4337', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>About Me</span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#1A1A1A', lineHeight: 1.2, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
              A Neighbor,<br />Not a Corporation
            </h2>

            <div className="gold-bar" style={{ marginBottom: '1.75rem' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ color: '#3D3D3D', lineHeight: 1.8, fontSize: '1rem' }}>
                Hi, I&apos;m your local professional button pusher. I live right here in Cool, CA, and I spend a lot of time sitting across the table from good people in the Foothills — makers, small business owners, church volunteers, nonprofit heroes — who just want their tech to work without the headache.
              </p>
              <p style={{ color: '#3D3D3D', lineHeight: 1.8, fontSize: '1rem' }}>
                That&apos;s where I come in. I know about 10% more than you do about this stuff — and honestly, that&apos;s usually enough. I&apos;m not here to impress you with jargon or oversell you on things you don&apos;t need.
              </p>
              <p style={{ color: '#3D3D3D', lineHeight: 1.8, fontSize: '1rem' }}>
                I&apos;m here to spot the messy patterns, push the right buttons, and help you get back to what you actually love doing.
              </p>
              <p style={{ color: '#3D3D3D', lineHeight: 1.8, fontSize: '1rem' }}>
                Over the years I&apos;ve helped local businesses get their websites sorted, set up Google the right way, untangle social media, and generally calm the chaos. More recently, I&apos;ve started building simple, phone-friendly tools and PWA apps — one neighbor at a time — for the real problems I keep seeing right here in our community.
              </p>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <a href="#contact" className="btn-forest" style={{ textDecoration: 'none' }}>
                <Heart size={16} />
                Let&apos;s Sit Down &amp; Talk
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              {
                icon: <Users size={22} color="#3D4337" />,
                title: 'Who I Serve',
                body: 'Small business owners, nonprofits, churches, craft makers, and market vendors across the Georgetown Divide, El Dorado & Placer Counties.',
              },
              {
                icon: <MapPin size={22} color="#3D4337" />,
                title: 'Based Right Here',
                body: 'I\'m not remote. I\'m in Cool, CA — a neighbor who knows the roads, knows the community, and shows up in person when it helps.',
              },
              {
                icon: <Heart size={22} color="#3D4337" />,
                title: 'My Promise',
                body: 'No jargon. No overselling. No shame. Just clear, honest help with your tech so you can focus on what you actually love.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="card-lift"
                style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '1.5rem', border: '1px solid #E5E5E5', display: 'flex', gap: '1.1rem', alignItems: 'flex-start' }}
              >
                <div style={{ width: '44px', height: '44px', backgroundColor: 'rgba(161,166,140,0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {card.icon}
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, color: '#1A1A1A', marginBottom: '0.4rem', fontSize: '0.95rem' }}>{card.title}</h3>
                  <p style={{ color: '#666666', fontSize: '0.875rem', lineHeight: 1.65 }}>{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
