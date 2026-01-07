'use client';

export default function AffiliateModule({ country }) {
  const products = [
    { name: 'NVIDIA RTX 3060 12GB', asin: 'B09K1F2K2P', price: '₹34,900', reason: 'Best value GPU for local AI & Stable Diffusion' },
    { name: 'AMD Ryzen 9 5900X', asin: 'B08164VTWH', price: '₹31,469', reason: 'Excellent CPU for AI workloads & multitasking' },
    { name: 'Corsair 32GB DDR4 RAM', asin: 'B081XWLQKS', price: '₹23,599', reason: 'Minimum RAM for local LLMs' },
  ];

  // Map countries to Amazon domain + tag
  const amazonMap = {
    IN: { domain: 'amazon.in', tag: 'agenticedge-21' },
    US: { domain: 'amazon.com', tag: 'usagenticedge-20' },
    UK: { domain: 'amazon.co.uk', tag: 'amkvin-21' },
    CA: { domain: 'amazon.ca', tag: 'usagenticedge-20' },
    DE: { domain: 'amazon.de', tag: 'usagenticedge-20' },
    FR: { domain: 'amazon.fr', tag: 'usagenticedge-20' },
    IT: { domain: 'amazon.it', tag: 'usagenticedge-20' },
    ES: { domain: 'amazon.es', tag: 'usagenticedge-20' },
    NL: { domain: 'amazon.nl', tag: 'usagenticedge-20' },
  };

  const getLink = (asin) => {
    const { domain, tag } = amazonMap[country] || amazonMap.US;
    return `https://${domain}/dp/${asin}/?tag=${tag}`;
  };

  return (
    <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
        🔥 Recommended AI Hardware
      </h2>

      <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {products.map((p) => (
          <div key={p.asin} style={{
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
          }}>
            <h3>{p.name}</h3>
            <p style={{ color: '#555', margin: '10px 0' }}>{p.reason}</p>
            <p style={{ fontWeight: 'bold' }}>{p.price}</p>

            <a
              href={getLink(p.asin)}
              target="_blank"
              rel="nofollow sponsored noopener"
              style={{
                display: 'inline-block',
                marginTop: '15px',
                padding: '12px 20px',
                background: '#ff9900',
                color: '#000',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none'
              }}
            >
              👉 Buy on Amazon
            </a>
          </div>
        ))}
      </div>

      <p style={{ marginTop: '30px', textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
        As an Amazon Associate, we earn from qualifying purchases.
      </p>
    </section>
  );
}
