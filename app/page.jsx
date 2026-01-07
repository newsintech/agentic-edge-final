import ModuleLoader from '../components/ModuleLoader';

export default function Home() {
  return (
    <main>
      {/* Module 1: Hero - If fails, shows fallback */}
      <ModuleLoader 
        moduleName="01-hero/hero.jsx"
        fallback={
          <div style={{
            background: '#000428',
            color: 'white',
            padding: '100px 20px',
            textAlign: 'center'
          }}>
            <h1>AgenticEdge</h1>
            <p>AI Hardware & Privacy Computing</p>
          </div>
        }
      />
      
      {/* Module 2: Monetization - Will add later */}
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2>💰 Monetization Module Coming Soon</h2>
        <p>Affiliate products will appear here</p>
      </div>
      
      {/* Module 3: Benchmarks - Will add later */}
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2>⚡ Benchmarks Module Coming Soon</h2>
        <p>Hardware performance tables will appear here</p>
      </div>
    </main>
  );
}
