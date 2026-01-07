export default function HeroModule() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #000428 0%, #004e92 100%)',
      color: 'white',
      padding: '80px 20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(41, 196, 255, 0.2) 0%, transparent 50%)',
        animation: 'pulse 4s infinite'
      }}></div>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
        {/* Main Title with Glitch Effect */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: '900',
          marginBottom: '20px',
          letterSpacing: '-1px',
          textShadow: '0 0 30px rgba(0, 150, 255, 0.5)',
          position: 'relative'
        }}>
          <span style={{
            color: '#00ffff',
            animation: 'glitch 3s infinite'
          }}>AGENTIC</span>
          <span style={{
            color: '#ff00ff',
            animation: 'glitch 3s infinite reverse'
          }}>EDGE</span>
        </h1>
        
        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
          maxWidth: '700px',
          margin: '0 auto 40px',
          opacity: '0.9',
          lineHeight: '1.6'
        }}>
          Your hub for <strong>AI hardware benchmarks</strong>, <strong>local AI tools</strong>, 
          and <strong>privacy-focused computing</strong>. Real-world performance data.
        </p>
        
        {/* Live Stats Counter */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          <div className="stat-item">
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#00ff88',
              marginBottom: '5px'
            }} id="benchmark-count">0</div>
            <div style={{ opacity: '0.8' }}>Hardware Benchmarked</div>
          </div>
          <div className="stat-item">
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#ffaa00',
              marginBottom: '5px'
            }} id="tool-count">0</div>
            <div style={{ opacity: '0.8' }}>Local AI Tools</div>
          </div>
          <div className="stat-item">
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#ff0088',
              marginBottom: '5px'
            }} id="privacy-score">0%</div>
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
            padding: '15px 30px',
            fontSize: '1.1rem',
            fontWeight: '600',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'transform 0.3s, box-shadow 0.3s',
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
            padding: '15px 30px',
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
      </div>
      
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        
        .stat-item {
          text-align: center;
          min-width: 150px;
        }
      `}</style>
      
      {/* Animate counters */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Animate counters
            function animateCounter(id, target, suffix = '') {
              let element = document.getElementById(id);
              let count = 0;
              let increment = target / 100;
              let timer = setInterval(() => {
                count += increment;
                if (count >= target) {
                  count = target;
                  clearInterval(timer);
                }
                element.textContent = Math.floor(count) + suffix;
              }, 20);
            }
            
            animateCounter('benchmark-count', 245);
            animateCounter('tool-count', 89);
            animateCounter('privacy-score', 100, '%');
          });
        `
      }} />
    </section>
  );
}
