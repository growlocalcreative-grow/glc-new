import { Hammer, ExternalLink, Tractor, Map, Heart, Leaf } from 'lucide-react';

const tools = [
  {
    icon: <Tractor size={26} color="#FFD700" />,
    name: 'RebaLove Ranch',
    emoji: 'Ranch',
    tagline: 'Custom ranch sitting app',
    description: 'A custom app built for a small local ranch to manage sitting schedules, animal care notes, and coordination with ranch sitters.',
    tag: 'Ranch Management',
    bg: '#3D4337',
  },
  {
    icon: <Map size={26} color="#FFD700" />,
    name: 'Gold Country Directory',
    emoji: 'Directory',
    tagline: 'Resource hub for the foothills',
    description: 'A community resource hub serving the foothill communities with easy-to-find local businesses, services, and organizations.',
    tag: 'Community Resource',
    bg: '#2d3129',
  },
  {
    icon: <Heart size={26} color="#FFD700" />,
    name: 'The Wedding Elephant App',
    emoji: 'Planning',
    tagline: 'Planning tool for couples',
    description: 'A wedding planning tool built for couples in the Northern Foothill Sierras region, bringing all the details into one calm place.',
    tag: 'Event Planning',
    bg: '#3D4337',
  },
  {
    icon: <Leaf size={26} color="#FFD700" />,
    name: 'Sage & Sand',
    emoji: 'Makers',
    tagline: 'Calm hub for craft makers',
    description: 'A phone-friendly hub for market vendors and craft makers to manage inventory, plan market weekends, and track sales.',
    tag: 'Market Vendor Tool',
    bg: '#2d3129',
  },
];

export default function Tools() {
  return (
    <section id="tools" style={{ backgroundColor: '#FFFFFF', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(61,67,55,0.08)', borderRadius: '100px', padding: '0.35rem 0.9rem', marginBottom: '1.25rem' }}>
            <Hammer size={12} color="#3D4337" />
            <span style={{ fontSize: '0.7rem', color: '#3D4337', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Tools I&apos;ve Built</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#1A1A1A', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            Tools for Folks Around Here
          </h2>
          <div className="gold-bar" style={{ margin: '0 auto 1rem' }} />
          <p style={{ color: '#666666', fontSize: '1rem', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
            Each one started with a real problem I kept watching a neighbor wrestle with. So I built something calm and simple to fix it.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="card-lift"
              style={{ backgroundColor: tool.bg, borderRadius: '14px', overflow: 'hidden', border: '1px solid rgba(161,166,140,0.2)' }}
            >
              <div style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(255,215,0,0.12)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {tool.icon}
                  </div>
                  <span style={{ fontSize: '0.68rem', color: '#A1A68C', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', border: '1px solid rgba(161,166,140,0.3)', borderRadius: '100px', padding: '0.2rem 0.6rem' }}>
                    {tool.tag}
                  </span>
                </div>
                <h3 style={{ color: '#F7F4ED', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.35rem' }}>{tool.name}</h3>
                <p style={{ color: '#A1A68C', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.75rem' }}>{tool.tagline}</p>
                <p style={{ color: 'rgba(247,244,237,0.65)', fontSize: '0.875rem', lineHeight: 1.65 }}>{tool.description}</p>
              </div>
              <div style={{ padding: '1rem 1.75rem', borderTop: '1px solid rgba(161,166,140,0.15)', display: 'flex', justifyContent: 'flex-end' }}>
                <span style={{ fontSize: '0.78rem', color: '#A1A68C', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  Local build <ExternalLink size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
