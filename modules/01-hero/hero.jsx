'use client';

import { useEffect, useState } from 'react';

export default function HeroModule() {
  const [benchmarkCount, setBenchmarkCount] = useState(0);
  const [toolCount, setToolCount] = useState(0);
  const [privacyScore, setPrivacyScore] = useState(0);

  useEffect(() => {
    // Animate counters
    const animateCounters = () => {
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
    };

    animateCounters();
  }, []);

  return (
    <section style={{
      background: 'linear-gradient(135deg, #000428 0%, #004e92 100%)',
      color: 'white',
      padding: '80px 20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(41, 196, 255, 0.1) 0%, transparent 50%)',
        animation: 'pulse 4s infinite'
      }}></div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Main Title with Gradient */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: '900',
          marginBottom: '20px',
          background: 'linear-gradient(45deg, #00c6ff, #0072ff, #ff00cc)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-1px',
          lineHeight: '1.2'
        }}>
          AGENTICEDGE
        </h1>
        
        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
          maxWidth: '700px',
          margin: '0 auto 40px',
          opacity: '0.9',
          lineHeight: '1.6'
        }}>
          Your hub for <strong style={{ color: '#00ffff' }}>AI hardware benchmarks</strong>, 
          <strong style={{ color: '#ff9900' }}> local AI tools</strong>, and 
          <strong style={{ color: '#ff66cc' }}> privacy-focused computing</strong>
        </p>
        
        {/* Live Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px',
          maxWidth: '800px',
          margin: '0 auto 50px'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '25px',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <div style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: '#00ff88',
              marginBottom: '10px'
            }}>{benchmarkCount}+</div>
            <div style={{ opacity: '0.8' }}>Hardware Benchmarked</div>
          </div>
          
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '25px',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <div style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: '#ffaa00',
              marginBottom: '10px'
            }}>{toolCount}+</div>
            <div style={{ opacity: '0.8' }}>Local AI Tools</div>
          </div>
          
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            padding: '25px',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <div style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: '#ff0088',
              marginBottom: '10px'
            }}>{privacyScore}%</div>
            <div style={{ opacity: '0.8' }}>Privacy Guaranteed</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button style={{
            background: 'linear-gradient(45deg, #00c6ff, #0072ff)',
            color: 'white',
            border: 'none',
            padding: '16px 32px',
            fontSize: '1.1rem',
            fontWeight: '600',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 10px 20px rgba(0, 114, 255, 0.3)'
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'translateY(-3px)'}
          onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
            🔍 View Benchmarks
          </button>
          
          <button style={{
            background: 'transparent',
            color: 'white',
            border: '2px solid rgba(255,255,255,0.3)',
            padding: '16px 32px',
            fontSize: '1.1rem',
            fontWeight: '600',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            backdropFilter: 'blur(10px)'
          }}
          onMouseOver={e => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
            e.currentTarget.style.borderColor = '#00ffff';
          }}
          onMouseOut={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
          }}>
            ⚡ Try Local Tools
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div style={{
          marginTop: '60px',
          animation: 'bounce 2s infinite'
        }}>
          <div style={{ fontSize: '0.9rem', opacity: '0.7', marginBottom: '10px' }}>
            Scroll to explore
          </div>
          <div style={{
            width: '24px',
            height: '40px',
            border: '2px solid rgba(255,255,255,0.3)',
            borderRadius: '12px',
            margin: '0 auto',
            position: 'relative'
          }}>
            <div style={{
              width: '4px',
              height: '8px',
              background: 'white',
              borderRadius: '2px',
              position: 'absolute',
              left: '50%',
              top: '8px',
              transform: 'translateX(-50%)',
              animation: 'scroll 2s infinite'
            }}></div>
          </div>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @keyframes scroll {
          0% { opacity: 1; top: 8px; }
          100% { opacity: 0; top: 24px; }
        }
      `}</style>
    </section>
  );
}
