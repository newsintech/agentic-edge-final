import dynamic from 'next/dynamic'

export const metadata = {
  title: 'Best GPUs for Stable Diffusion (2025) – RTX 4060 Ti vs 4070 vs 4090',
  description:
    'Best GPU for Stable Diffusion in 2025. VRAM-focused buying guide for RTX 4060 Ti, RTX 4070, RTX 4090. India, USA & UK.',
}
<section style={{ marginBottom: 40 }}>
  <h3>Recommended GPUs by Budget</h3>

  <ul style={{ fontSize: 17, lineHeight: 1.8 }}>
    <li>
      <strong>Budget Pick:</strong> RTX 4060 Ti (16GB) — best entry GPU for Stable Diffusion
    </li>
    <li>
      <strong>Value Pick:</strong> RTX 4070 — fastest GPU before diminishing returns
    </li>
    <li>
      <strong>Pro Pick:</strong> RTX 4090 — zero compromises, 24GB VRAM
    </li>
  </ul>

  <p style={{ color: '#555' }}>
    👉 Click below to see <strong>current prices in your country</strong>.
  </p>
</section>

const GeoAffiliate = dynamic(() => import('@/modules/GeoAffiliate'), {
  ssr: false,
})

export default function BestGPUPage() {
  const products = [
    {
      productName: 'RTX 4060 Ti (16GB)',
      in: 'https://amzn.to/4bpSVnD',
      us: 'https://amzn.to/3N9UnAI',
      gb: 'https://amzn.to/4sCvfTu',
      default: 'https://amzn.to/3N9UnAI',
    },
    {
      productName: 'RTX 4070',
      in: 'https://amzn.to/4jPlRId',
      us: 'https://amzn.to/49rBsbY',
      gb: 'https://amzn.to/3Z2MjEj',
      default: 'https://amzn.to/49rBsbY',
    },
    {
      productName: 'RTX 4090',
      in: 'https://amzn.to/4swtebg',
      us: 'https://amzn.to/4juPUEC',
      gb: 'https://amzn.to/4jt5r7S',
      default: 'https://amzn.to/4juPUEC',
    },
  ]

  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>

      {/* ================= JUMP NAVIGATION ================= */}
      <nav
        style={{
          background: '#f5f5f5',
          padding: '15px',
          borderRadius: 8,
          marginBottom: 40,
        }}
      >
        <strong>Jump to:</strong>{' '}
        <a href="#quick-picks">Quick Picks</a> ·{' '}
        <a href="#buying-guide">Buying Guide</a> ·{' '}
        <a href="#prices">Live Prices</a> ·{' '}
        <a href="#faqs">FAQs</a>
      </nav>

      {/* ================= PRODUCT SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "RTX 4060 Ti (16GB)",
              "brand": "NVIDIA",
              "description": "Best budget GPU for Stable Diffusion.",
              "offers": {
                "@type": "Offer",
                "url": "https://amzn.to/3N9UnAI",
                "availability": "https://schema.org/InStock"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "RTX 4070",
              "brand": "NVIDIA",
              "description": "Best overall GPU for Stable Diffusion.",
              "offers": {
                "@type": "Offer",
                "url": "https://amzn.to/49rBsbY",
                "availability": "https://schema.org/InStock"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "RTX 4090",
              "brand": "NVIDIA",
              "description": "24GB VRAM GPU for professional AI workloads.",
              "offers": {
                "@type": "Offer",
                "url": "https://amzn.to/4juPUEC",
                "availability": "https://schema.org/InStock"
              }
            }
          ])
        }}
      />

      {/* ================= HERO ================= */}
      <section>
        <h1>Best GPUs for Stable Diffusion (2025)</h1>
        <p>
          Stable Diffusion performance depends on VRAM more than raw GPU power.
          These are the only GPUs worth buying in 2025.
        </p>
      </section>

      {/* ================= QUICK PICKS ================= */}
      <section id="quick-picks" style={{ marginTop: 60 }}>
        <h2>Quick Recommendations</h2>
        <ul>
          <li><strong>Best Budget:</strong> RTX 4060 Ti (16GB)</li>
          <li><strong>Best Overall:</strong> RTX 4070</li>
          <li><strong>Best Professional:</strong> RTX 4090</li>
        </ul>
      </section>

      {/* ================= BUYING GUIDE ================= */}
      <section id="buying-guide" style={{ marginTop: 60 }}>
        <h2>What Actually Matters for Stable Diffusion</h2>
        <ul>
          <li>VRAM is more important than CUDA cores</li>
          <li>16GB VRAM is the real minimum for SDXL</li>
          <li>NVIDIA GPUs are strongly recommended</li>
          <li>Efficiency matters for long AI workloads</li>
        </ul>
      </section>

      {/* ================= PRICES ================= */}
      <section id="prices" style={{ marginTop: 60 }}>
        <h2>Check Live Prices (Auto Geo-Detected)</h2>
        <p>
          We automatically open the correct Amazon store for your country.
        </p>
        <GeoAffiliate products={products} />
      </section>

      {/* ================= FAQ ================= */}
      <section id="faqs" style={{ marginTop: 60 }}>
        <h2>Frequently Asked Questions</h2>

        <h3>What GPU is best for Stable Diffusion?</h3>
        <p>The RTX 4070 is the best overall choice for most users.</p>

        <h3>How much VRAM do I need?</h3>
        <p>16GB VRAM is recommended for Stable Diffusion XL.</p>

        <h3>Can AMD GPUs run Stable Diffusion?</h3>
        <p>They can, but NVIDIA GPUs are strongly recommended.</p>
      </section>

    </main>
  )
}
