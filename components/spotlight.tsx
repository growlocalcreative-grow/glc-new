import { Leaf, Package, Calendar, ClipboardList, DollarSign, SquareCheck as CheckSquare, ChartBar as BarChart2, Sparkles } from 'lucide-react';

const features = [
  { icon: <Package size={16} color="#FFD700" />, label: 'Inventory' },
  { icon: <Calendar size={16} color="#FFD700" />, label: 'Market Calendar' },
  { icon: <ClipboardList size={16} color="#FFD700" />, label: 'Pack Lists' },
  { icon: <DollarSign size={16} color="#FFD700" />, label: 'Sales Tracking' },
  { icon: <CheckSquare size={16} color="#FFD700" />, label: 'Production Tasks' },
  { icon: <BarChart2 size={16} color="#FFD700" />, label: 'Planning Tools' },
];

export default function Spotlight() {
  return (
    <section id="spotlight" style={{ backgroundColor: '#FFFFFF', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'rgba(61,67,55,0.08)', borderRadius: '100px', padding: '0.35rem 0.9rem', marginBottom: '1.25rem' }}>
            <Sparkles size={12} color="#3D4337" />
            <span style={{ fontSize: '0.7rem', color: '#3D4337', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Latest Tool Spotlight</span>
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#1A1A1A', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
            Sage &amp; Sand
          </h2>
          <div className="gold-bar" style={{ margin: '0 auto' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#3D3D3D', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '1.25rem' }}>
              I kept watching market vendors and craft makers juggling a dozen different apps, notebooks, and half-remembered spreadsheets every time market weekend rolled around. The prep stress was real.
            </p>
            <p style={{ color: '#3D3D3D', lineHeight: 1.8, fontSize: '1.05rem', marginBottom: '2rem' }}>
              So I built <strong style={{ color: '#3D4337' }}>Sage &amp; Sand</strong> — a calm, phone-friendly hub that brings everything into one place.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {features.map((f) => (
                <div
                  key={f.label}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', backgroundColor: '#F7F4ED', borderRadius: '8px', padding: '0.7rem 1rem', border: '1px solid #E5E5E5' }}
                >
                  {f.icon}
                  <span style={{ color: '#1A1A1A', fontSize: '0.875rem', fontWeight: 600 }}>{f.label}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-gold" style={{ textDecoration: 'none' }}>
              <Leaf size={16} />
              Tell Me About Your Market Chaos
            </a>
          </div>

          <div className="spotlight-card" style={{ borderRadius: '16px', padding: '2.5rem', overflow: 'hidden', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '160px', height: '160px', backgroundColor: 'rgba(161,166,140,0.06)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '100px', height: '100px', backgroundColor: 'rgba(255,215,0,0.05)', borderRadius: '50%' }} />

            <div style={{ position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '52px', height: '52px', backgroundColor: 'rgba(255,215,0,0.15)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Leaf size={26} color="#FFD700" />
                </div>
                <div>
                  <div style={{ color: '#F7F4ED', fontWeight: 800, fontSize: '1.2rem' }}>Sage &amp; Sand</div>
                  <div style={{ color: '#A1A68C', fontSize: '0.78rem', fontWeight: 500 }}>Market Vendor Hub</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { label: "This Saturday's Market", sub: 'Gold Hill Faire · 3 vendors registered', dot: '#FFD700' },
                  { label: 'Inventory Check', sub: '24 items packed · 3 restocks needed', dot: '#A1A68C' },
                  { label: 'Sales This Month', sub: '$1,840 · 12% above target', dot: '#6db86d' },
                  { label: 'Next Production Run', sub: 'Soy candles × 40 · starts Monday', dot: '#A1A68C' },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{ backgroundColor: 'rgba(247,244,237,0.06)', borderRadius: '8px', padding: '0.85rem 1rem', border: '1px solid rgba(161,166,140,0.15)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                  >
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.dot, flexShrink: 0 }} />
                    <div>
                      <div style={{ color: '#F7F4ED', fontSize: '0.85rem', fontWeight: 600 }}>{item.label}</div>
                      <div style={{ color: '#A1A68C', fontSize: '0.75rem', marginTop: '0.1rem' }}>{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '1.5rem', padding: '0.75rem 1rem', backgroundColor: 'rgba(255,215,0,0.1)', borderRadius: '8px', border: '1px solid rgba(255,215,0,0.2)', textAlign: 'center' }}>
                <span style={{ color: '#FFD700', fontSize: '0.8rem', fontWeight: 600 }}>Phone-friendly · Works offline · One calm place</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
