// app/modules/affiliate.jsx
export default function AffiliateSection({ country }) {
  // List of products with ASINs
  const amazonProducts = [
    { name: "AMD Ryzen 9 7950X", asin: "B09XYZ1234", description: "Best CPU for ML", price: "$599" },
    { name: "NVIDIA RTX 4090", asin: "B08ABC5678", description: "AI GPU Powerhouse", price: "$1599" },
    { name: "AI Laptop Pro", asin: "B07LMN9876", description: "Best laptop for local AI", price: "$2499" },
  ];

  // Map country codes to Amazon domain & affiliate tag
  const amazonMap = {
    IN: { domain: "amazon.in", tag: "agenticedge-21" },
    US: { domain: "amazon.com", tag: "usagenticedge-20" },
    UK: { domain: "amazon.co.uk", tag: "amkvin-21" },
    CA: { domain: "amazon.ca", tag: "usagenticedge-20" },
    DE: { domain: "amazon.de", tag: "usagenticedge-20" },
    FR: { domain: "amazon.fr", tag: "usagenticedge-20" },
    IT: { domain: "amazon.it", tag: "usagenticedge-20" },
    ES: { domain: "amazon.es", tag: "usagenticedge-20" },
    NL: { domain: "amazon.nl", tag: "usagenticedge-20" },
  };

  // Generate Amazon link per product
  const getLink = (asin) => {
    const { domain, tag } = amazonMap[country] || amazonMap.US;
    return `https://${domain}/dp/${asin}?tag=${tag}`;
  };

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

      {amazonProducts.map((product) => (
        <div key={product.asin} style={{ marginBottom: '10px' }}>
          <a
            href={getLink(product.asin)}
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
            <strong>{product.name}</strong> - {product.price} ({product.description})
          </a>
        </div>
      ))}

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
