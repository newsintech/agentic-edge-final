import dynamic from 'next/dynamic'

/* ===================== METADATA ===================== */
export const metadata = {
  title: 'Best GPUs for Stable Diffusion (2025) – RTX 4060 Ti vs 4070 vs 4090',
  description:
    'Best GPU for Stable Diffusion in 2025. VRAM-focused buying guide for RTX 4060 Ti, RTX 4070, RTX 4090. India, USA & UK.',
}

/* ===================== CLIENT COMPONENT ===================== */
const GeoAffiliate = dynamic(() => import('@/modules/GeoAffiliate'), {
  ssr: false,
})

/* ===================== PAGE ===================== */
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

      {/* ===================== JUMP NAV ===================== */}
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

      {/* ===================== SCHEMA: PRODUCTS + FAQ ===================== */}
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
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What GPU is best for Stable Diffusion?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The RTX 4070 offers the best balance of VRAM, performance, and price for most Stable Diffusion users."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much VRAM do I need for Stable Diffusion?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "At least 12GB VRAM is required, but 16GB or more is recommended for SDXL models."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can AMD GPUs run Stable Diffusion?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AMD GPUs can run Stable Diffusion with workarounds, but NVIDIA GPUs are strongly recommended due to CUDA support."
                  }
                }
              ]
            }
          ])
        }}
      />

      {/* ===================== HERO ===================== */}
      <section>
        <h1>Best GPUs for Stable Diffusion (2025)</h1>
        <p>
          Stable Diffusion is <strong>VRAM-bound</strong>, not hype-bound.
          Choosing the wrong GPU leads to out-of-memory errors and wasted money.
        </p>
      </section>

      {/* ===================== BUDGET PICKS ===================== */}
      <section style={{ marginTop: 40 }}>
        <h3>Recommended GPUs by Budget</h3>
        <ul style={{ fontSize: 17, lineHeight: 1.8 }}>
          <li><strong>Budget Pick:</strong> RTX 4060 Ti (16GB)</li>
          <li><strong>Value Pick:</strong> RTX 4070</li>
          <li><strong>Pro Pick:</strong> RTX 4090</li>
        </ul>
        <p style={{ color: '#555' }}>
          👉 Click below to see <strong>live prices in your country</strong>.
        </p>
      </section>

      {/* ===================== QUICK PICKS ===================== */}
      <section id="quick-picks" style={{ marginTop: 60 }}>
        <h2>Quick Recommendations</h2>
        <ul>
          <li><strong>Best Budget:</strong> RTX 4060 Ti (16GB)</li>
          <li><strong>Best Overall:</strong> RTX 4070</li>
          <li><strong>Best Professional:</strong> RTX 4090</li>
        </ul>
      </section>

      {/* ===================== BUYING GUIDE ===================== */}
      <section id="buying-guide" style={{ marginTop: 60 }}>
        <h2>What Actually Matters for Stable Diffusion</h2>
        <ul>
          <li>VRAM matters more than CUDA cores</li>
          <li>16GB VRAM is ideal for SDXL</li>
          <li>NVIDIA GPUs offer best compatibility</li>
          <li>Efficiency matters for long AI workloads</li>
        </ul>
      </section>

      {/* ===================== PRICES ===================== */}
      <section id="prices" style={{ marginTop: 60 }}>
  <h2>Check Live Prices (Auto Geo-Detected)</h2>
  <p>
    We automatically open the correct Amazon store for your region.
  </p>

  <GeoAffiliate products={products} />

  {/* PRICE PSYCHOLOGY (BOOSTS CLICKS) */}
  <p style={{ fontSize: 15, color: '#666', marginTop: 20 }}>
    GPU prices fluctuate weekly due to supply and demand.
    Checking live prices ensures you don’t overpay.
  </p>
</section>


      {/* ===================== FAQ ===================== */}
      <section id="faqs" style={{ marginTop: 60 }}>
        <h2>Frequently Asked Questions</h2>

        <h3>What GPU is best for Stable Diffusion?</h3>
        <p>The RTX 4070 is the best overall choice for most users.</p>

        <h3>How much VRAM do I need?</h3>
        <p>16GB VRAM is recommended for Stable Diffusion XL and future models.</p>

        <h3>Can AMD GPUs run Stable Diffusion?</h3>
        <p>Yes, but NVIDIA GPUs are strongly recommended for stability.</p>
      </section>

      {/* ===================== AUTHORITY ===================== */}
      <section style={{ marginTop: 80 }}>
        <hr />
        <h3>About AgenticEdge</h3>
        <p>
          AgenticEdge is an independent research site focused on AI hardware,
          local AI execution, and privacy-first computing.
        </p>
      </section>

    </main>
  )
}
