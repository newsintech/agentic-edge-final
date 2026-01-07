import ModuleLoader from '../components/ModuleLoader';
import { GetServerSideProps } from 'next';
import { detectCountryFromIP } from '../lib/geo';

type HomeProps = {
  country: string;
};

export default function Home({ country }: HomeProps) {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* HERO MODULE */}
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

      {/* MONETIZATION MODULE */}
      <ModuleLoader 
        moduleName="02-monetization/affiliate.jsx"
        fallback={
          <div style={{ 
            maxWidth: '1200px', 
            margin: '40px auto', 
            padding: '0 20px',
            textAlign: 'center'
          }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
              🔒 Loading Hardware Recommendations...
            </h2>
            <p style={{ textAlign: 'center', color: '#666', marginBottom: '40px' }}>
              Amazon affiliate products will appear here shortly
            </p>
          </div>
        }
        // Pass country as a prop to the module
        moduleProps={{ country }}
      />

      {/* BENCHMARKS SECTION */}
      <div style={{ background: '#f8f9fa', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
            ⚡ Benchmarks Module (Coming Soon)
          </h2>
          <p style={{ textAlign: 'center', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
            Live GPU performance comparisons and real-world AI workload data
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ background: '#222', color: 'white', padding: '40px 20px', textAlign: 'center', marginTop: '60px' }}>
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

// Server-side IP detection
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const country = detectCountryFromIP(req as any);
  return {
    props: { country },
  };
};
