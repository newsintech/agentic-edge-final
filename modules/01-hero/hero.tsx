'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HeroModule() {
  const router = useRouter();

  const [benchmarkCount, setBenchmarkCount] = useState(0);
  const [toolCount, setToolCount] = useState(0);
  const [privacyScore, setPrivacyScore] = useState(0);

  useEffect(() => {
    let benchmark = 0;
    let tool = 0;
    let privacy = 0;

    const benchmarkInterval = setInterval(() => {
      benchmark += 5;
      if (benchmark >= 245) {
        benchmark = 245;
        clearInterval(benchmarkInterval);
      }
      setBenchmarkCount(benchmark);
    }, 30);

    const toolInterval = setInterval(() => {
      tool += 3;
      if (tool >= 89) {
        tool = 89;
        clearInterval(toolInterval);
      }
      setToolCount(tool);
    }, 40);

    const privacyInterval = setInterval(() => {
      privacy += 2;
      if (privacy >= 100) {
        privacy = 100;
        clearInterval(privacyInterval);
      }
      setPrivacyScore(privacy);
    }, 20);

    // 🔒 CLEANUP (VERY IMPORTANT)
    return () => {
      clearInterval(benchmarkInterval);
      clearInterval(toolInterval);
      clearInterval(privacyInterval);
    };
  }, []);

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #000428 0%, #004e92 100%)',
        color: 'white',
        padding: '80px 20px',
        textAlign: 'center',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          zIndex: 1,
          position: 'relative',
        }}
      >
        {/* SEO-FRIENDLY H1 */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: '900',
            marginBottom: '20px',
            background: 'linear-gradient(45deg, #00c6ff, #0072ff, #ff00cc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          AgenticEdge – AI Hardware Benchmarks & Privacy-First Computing
        </h1>

        <p
          style={{
            fontSize: '1.4rem',
            maxWidth: '800px',
            margin: '0 auto 40px',
            opacity: '0.9',
          }}
        >
          Real-world AI hardware benchmarks, local AI tools, and privacy-focused
          computing — tested honestly, without cloud dependency.
        </p>

        {/* STATS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            maxWidth: '900px',
            margin: '0 auto 50px',
          }}
        >
          <StatBox value={`${benchmarkCount}+`} label="Hardware Benchmarked" color="#00ff88" />
          <StatBox value={`${toolCount}+`} label="Local AI Tools" color="#ffaa00" />
          <StatBox value={`${privacyScore}%`} label="Privacy Guaranteed" color="#ff0088" />
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => router.push('/benchmarks')}
            style={primaryButton}
          >
            🔍 View Benchmarks
          </button>

          <button
            onClick={() => router.push('/tools')}
            style={secondaryButton}
          >
            ⚡ Local AI Tools
          </button>
        </div>
      </div>
    </section>
  );
}

/* SMALL HELPER COMPONENT */
function StatBox({ value, label, color }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '25px',
        borderRadius: '15px',
        border: '1px solid rgba(255,255,255,0.2)',
      }}
    >
      <div style={{ fontSize: '3rem', fontWeight: '800', color, marginBottom: '10px' }}>
        {value}
      </div>
      <div style={{ opacity: '0.8' }}>{label}</div>
    </div>
  );
}

const primaryButton = {
  background: 'linear-gradient(45deg, #00c6ff, #0072ff)',
  color: 'white',
  border: 'none',
  padding: '16px 32px',
  fontSize: '1.1rem',
  fontWeight: '600',
  borderRadius: '50px',
  cursor: 'pointer',
};

const secondaryButton = {
  background: 'transparent',
  color: 'white',
  border: '2px solid rgba(255,255,255,0.3)',
  padding: '16px 32px',
  fontSize: '1.1rem',
  fontWeight: '600',
  borderRadius: '50px',
  cursor: 'pointer',
};
