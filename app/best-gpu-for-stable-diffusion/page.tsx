import dynamic from 'next/dynamic';

export const metadata = {
  title: 'Best GPUs for Stable Diffusion (2025) – India & USA',
  description:
    'Best GPU for Stable Diffusion in 2025. RTX 4060 Ti vs 4070 vs 4090. VRAM-focused buying guide for India and USA.',
};

// Client-only import (prevents build & routing issues)
const GeoAffiliate = dynamic(() => import('@/modules/GeoAffiliate'), {
  ssr: false,
});

export default function BestGPUPage() {
  // NOTE: All keys required by AffiliateLink interface are present: in, us, gb, ca, de, default
  const products = [
    {
      productName: 'RTX 4060 Ti (16GB)',
      in: 'https://amzn.to/4bpSVnD',
      us: 'https://amzn.to/4aRUOJE',
      uk: 'https://amzn.to/4sCvfTu',
      default: 'https://www.amazon.com',
    },
    {
      productName: 'RTX 4070',
      in: 'https://amzn.to/4jPlRId',
      us: 'https://amzn.to/49rBsbY',
      uk: 'https://amzn.to/3Z2MjEj',
      default: 'https://www.amazon.com',
    },
    {
      productName: 'RTX 4090',
      in: 'https://amzn.to/4swtebg',
      us: 'https://amzn.to/4juPUEC',
      uk: 'https://amzn.to/4jt5r7S',
      default: 'https://www.amazon.com',
    },
  ];

  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
      
      {/* --- STEP 1: PRODUCT SCHEMA JSON-LD --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "RTX 4060 Ti (16GB)",
              "image": "https://YOUR_SITE_URL/images/rtx4060ti.jpg",
              "description": "Cheapest GPU that runs Stable Diffusion models comfortably.",
              "brand": "NVIDIA",
              "offers": {
                "@type": "Offer",
                "url": "https://www.amazon.com/dp/REPLACE_WITH_YOUR_US_LINK",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "RTX 4070",
              "image": "https://YOUR_SITE_URL/images/rtx4070.jpg",
              "description": "Excellent speed, efficiency, and availability for AI workloads.",
              "brand": "NVIDIA",
              "offers": {
                "@type": "Offer",
                "url": "https://www.amazon.com/dp/REPLACE_WITH_YOUR_US_LINK_2",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "RTX 4090",
              "image": "https://YOUR_SITE_URL/images/rtx4090.jpg",
              "description": "24GB VRAM GPU — perfect for professional AI image generation.",
              "brand": "NVIDIA",
              "offers": {
                "@type": "Offer",
                "url": "https://www.amazon.com/dp/REPLACE_WITH_YOUR_US_LINK_3",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            }
          ])
        }}
      />

      {/* HERO */}
      <section style={{ marginBottom: 50 }}>
        <h1>Best GPUs for Stable Diffusion (2025)</h1>
        <p style={{ fontSize: 18, lineHeight: 1.6 }}>
          Stable Diffusion is <strong>VRAM-bound</strong>, not hype-bound.
          Buying the wrong GPU causes out-of-memory errors, slow generations,
          and wasted money.
        </p>
        <p style={{ fontSize: 18 }}>
          These are the <strong>only GPUs worth buying</strong> for local
          AI image generation in 2025 — validated for India 🇮🇳 and USA 🇺🇸.
        </p>
      </section>

      {/* QUICK PICKS */}
      <section style={{ marginBottom: 60 }}>
        <h2>Quick Recommendations</h2>

        <table border={1} cellPadding={12} width="100%">
          <thead>
            <tr>
              <th>Use Case</th>
              <th>GPU</th>
              <th>Why It Wins</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Best Budget</td>
              <td>RTX 4060 Ti (16GB)</td>
              <td>Cheapest GPU that runs SD models comfortably</td>
            </tr>
            <tr>
              <td>Best Overall</td>
              <td>RTX 4070</td>
              <td>Excellent speed, efficiency, and availability</td>
            </tr>
            <tr>
              <td>Best Professional</td>
              <td>RTX 4090</td>
              <td>24GB VRAM = zero compromises</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* BUYING LOGIC */}
      <section style={{ marginBottom: 60 }}>
        <h2>What Actually Matters for Stable Diffusion</h2>
        <ul style={{ fontSize: 17, lineHeight: 1.7 }}>
          <li><strong>VRAM &gt; CUDA cores</strong> (16GB minimum recommended)</li>
          <li>NVIDIA only (CUDA support is non-negotiable)</li>
          <li>Power efficiency matters for long generation runs</li>
          <li>Consumer GPUs beat workstation cards for the price</li>
        </ul>
      </section>

      {/* MONEY SECTION */}
      <section>
        <h2>Check Live Prices (India & USA)</h2>
        <p style={{ color: '#555' }}>
          Prices vary by region. We automatically open the correct Amazon store.
        </p>

        {/* Revenue block — client component */}
        <GeoAffiliate products={products} />
      </section>
    </main>
  );
}
