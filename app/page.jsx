import ModuleLoader from '../components/ModuleLoader';

export default function Home() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* HERO MODULE - Isolated, won't break other sections */}
      <ModuleLoader 
        moduleName="01-hero/hero.jsx"
        fallback={
          <div style={{
            background: '#000428',
            color: 'white',
            padding: '100px 20px',
            textAlign: 'center'
          }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>AgenticEdge</h1>
            <p style={{ fontSize: '1.2rem', opacity: '0.9' }}>
              AI Hardware & Privacy Computing
            </p>
          </div>
        }
      />
      
      {/* MONETIZATION SECTION - Coming Next */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '40px auto', 
        padding: '0 20px' 
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '30px',
          color: '#333'
        }}>
          💰 Monetization Module (Next Step)
        </h2>
        <p style={{ 
          textAlign: 'center', 
          color: '#666',
          marginBottom: '40px'
        }}>
          Amazon affiliate products will appear here
        </p>
      </div>
      
      {/* BENCHMARKS SECTION - Coming Later */}
      <div style={{ 
        background: '#f8f9fa',
        padding: '60px 20px'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '30px',
            color: '#333'
          }}>
            ⚡ Benchmarks Module (Coming Soon)
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Live GPU performance comparisons and real-world AI workload data
          </p>
        </div>
      </div>
      
      {/* FOOTER */}
      <footer style={{ 
        background: '#222',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center',
        marginTop: '60px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
            © 2024 AgenticEdge - AI Hardware & Privacy Computing
          </p>
          <p style={{ fontSize: '0.9rem', opacity: '0.7' }}>
            Real-world benchmarks for local AI hardware and tools
          </p>
        </div>
      </footer>
    </div>
  );
}
