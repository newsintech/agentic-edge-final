export default function AffiliateSection() {
  return (
    <div style={{ 
      border: '2px solid #3498db', 
      padding: '20px', 
      borderRadius: '8px',
      backgroundColor: '#e8f4fc',
      margin: '20px 0'
    }}>
      <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>🔥 Hot AI Hardware Deals</h3>
      <p style={{ color: '#34495e', marginBottom: '15px' }}>
        Check these affiliate links (supports our site):
      </p>
      
      <div style={{ marginBottom: '10px' }}>
        <a 
          href="https://amzn.to/49aPoZ5"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#2980b9',
            textDecoration: 'none',
            borderLeft: '4px solid #3498db',
            paddingLeft: '10px',
            display: 'block',
            marginBottom: '8px'
          }}
        >
          <strong>AMD Ryzen 9 7950X</strong> - $599 (Best CPU for ML)
        </a>
      </div>
      
      <button
        style={{
          backgroundColor: '#e74c3c',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
        onClick={() => alert('More deals coming soon!')}
      >
        View All Deals
      </button>
    </div>
  );
}
