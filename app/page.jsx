export default function Home() {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <h1>🚀 AgenticEdge - AI Hardware Hub</h1>
      <p>Real-world benchmarks for local AI hardware and privacy computing.</p>
      
      <div style={{ 
        border: '2px solid green', 
        padding: '20px', 
        margin: '20px 0',
        borderRadius: '10px'
      }}>
        <h2>💰 Monetization Section</h2>
        <p>Affiliate links will appear here...</p>
      </div>
      
      <div style={{ 
        border: '2px solid blue', 
        padding: '20px', 
        margin: '20px 0',
        borderRadius: '10px'
      }}>
        <h2>🖥️ Hardware Benchmarks</h2>
        <p>GPU comparisons will be here...</p>
      </div>
    </div>
  );
}
