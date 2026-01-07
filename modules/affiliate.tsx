'use client';

interface Product {
  name: string;
  asin: string;
  price: string;
  reason: string;
}

interface AffiliateProps {
  country: string;
}

export default function AffiliateModule({ country }: AffiliateProps) {
  const products: Product[] = [
    {
      name: 'NVIDIA RTX 3060 12GB',
      asin: 'B09K1F2K2P',
      price: 'Best value GPU for AI',
      reason: 'Stable Diffusion + LLMs',
    },
    {
      name: 'AMD Ryzen 9 5900X',
      asin: 'B08164VTWH',
      price: 'High-core CPU',
      reason: 'AI workloads & multitasking',
    },
    {
      name: 'Corsair 32GB DDR4 RAM',
      asin: 'B081XWLQKS',
      price: 'Minimum for LLMs',
      reason: 'Local AI memory needs',
    },
  ];

  const amazonMap: Record<string, { domain: string; tag: string }> = {
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

  const { domain, tag } = amazonMap[country] || amazonMap.US;

  return (
    <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
        🔥 Recommended AI Hardware
      </h2>

      <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
        {products.map(p => (
          <div key={p.asin} style={{
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            padding: '24px',
          }}>
            <h3>{p.name}</h3>
            <p>{p.reason}</p>

            <a
              href={`https://${domain}/dp/${p.asin}?tag=${tag}`}
              target="_blank"
              rel="nofollow sponsored noopener"
              style={{
                display: 'inline-block',
                marginTop: '12px',
                background: '#ff9900',
                padding: '10px 18px',
                borderRadius: '8px',
                fontWeight: 600,
                color: '#000',
                textDecoration: 'none',
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
