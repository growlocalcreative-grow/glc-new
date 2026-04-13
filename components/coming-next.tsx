import { Clock, Church, MapPin, HandHeart, Building2 } from 'lucide-react';

const items = [
  {
    icon: <Church size={20} color="#A1A68C" />,
    title: 'Church Volunteer Hub',
    description: 'Simple signup, scheduling, and coordination for church volunteer teams. No more spreadsheets or phone trees.',
    status: 'In Design',
  },
  {
    icon: <MapPin size={20} color="#A1A68C" />,
    title: 'Local Events Board',
    description: "One spot to find what's happening around the Georgetown Divide — no Facebook required.",
    status: 'Planned',
  },
  {
    icon: <HandHeart size={20} color="#A1A68C" />,
    title: 'Nonprofit Intake Tool',
    description: 'Calm, simple intake forms and client tracking built for small nonprofits who need clarity without complexity.',
    status: 'Planned',
  },
  {
    icon: <Building2 size={20} color="#A1A68C" />,
    title: 'Community Directory 2.0',
    description: 'An always-fresh, easy-to-update directory for local businesses across the Divide and surrounding foothills.',
    status: 'Planned',
  },
];

export default function ComingNext() {
  return (
    <section id="coming" style={{ backgroundColor: '#F7F4ED', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(61,67,55,0.08)', borderRadius: '100px', padding: '0.35rem 0.9rem', marginBottom: '1.25rem' }}>
            <Clock size={12} color="#3D4337" />
            <span style={{ fontSize: '0.7rem', color: '#3D4337', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>What&apos;s Coming Next</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#1A1A1A', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            On the Workbench
          </h2>
          <div className="gold-bar" style={{ margin: '0 auto 1rem' }} />
          <p style={{ color: '#666666', fontSize: '1rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            These are the next problems I&apos;m watching my neighbors wrestle with. If one of these hits home, let&apos;s talk.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {items.map((item) => (
            <div
              key={item.title}
              className="card-lift coming-item"
              style={{ backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '1.75rem', border: '1px solid #E5E5E5', borderLeft: '3px solid #A1A68C' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ width: '44px', height: '44px', backgroundColor: 'rgba(61,67,55,0.07)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: item.status === 'In Design' ? '#3D4337' : '#999', border: `1px solid ${item.status === 'In Design' ? '#3D4337' : '#E5E5E5'}`, borderRadius: '100px', padding: '0.2rem 0.6rem' }}>
                  {item.status}
                </span>
              </div>
              <h3 style={{ fontWeight: 700, color: '#1A1A1A', marginBottom: '0.5rem', fontSize: '1rem' }}>{item.title}</h3>
              <p style={{ color: '#666666', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.description}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', backgroundColor: '#3D4337', borderRadius: '14px', border: '1px solid rgba(161,166,140,0.2)' }}>
          <p style={{ color: '#F7F4ED', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            Got an idea that&apos;s not on this list? If you&apos;ve got a recurring headache in your business or community, I want to hear it.
          </p>
          <a href="#contact" className="btn-gold" style={{ textDecoration: 'none' }}>
            Share Your Idea
          </a>
        </div>
      </div>
    </section>
  );
}
