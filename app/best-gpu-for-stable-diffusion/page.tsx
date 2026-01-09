import dynamic from 'next/dynamic'

export const metadata = {
  title: 'Best GPUs for Stable Diffusion (2025) – RTX 4060 Ti vs 4070 vs 4090',
  description:
    'Best GPU for Stable Diffusion in 2025. VRAM-focused buying guide for RTX 4060 Ti, RTX 4070, RTX 4090. India, USA & UK.',
}

// Client-only component
const GeoAffiliate = dynamic(() => import('@/modules/GeoAffiliate'), {
  ssr: false,
})

export default function BestGPUPage() {
  /**
   * ✅ ONLY COUNTRIES YOU HAVE AFFILIATE IDs FOR
   * IN = India
   * US = USA
   * GB = United Kingdom
   * default = fallback (USA = highest earnings)
   */
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
              "description": "Best budget GPU for Stable Diffusion with enough VRAM.",
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
              "description": "Best overall GPU for Stable Diffusion in 2025.",
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
              "description": "24GB VRAM GPU for professional AI image generation.",
              "offers": {
                "@type": "Offer",
                "url": "https://amzn.to/4juPUEC",
                "availability": "https://schema.org/InStock"
              }
            }
          ])
        }}
      />

      {/* ================= FAQ SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What GPU is best for Stable Diffusion?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The RTX 4070 is the best overall GPU for Stable Diffusion in 2025. Professionals should choose the RTX 4090 for its 24GB VRAM."
                }
              },
              {
                "@type": "Question",
                "name": "How much VRAM do I need for Stable Diffusion?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "At least 12GB VRAM works, but 16GB VRAM is strongly recommended for Stable Diffusion XL and ControlNet."
                }
              },
              {
                "@type": "Question",
                "name": "Can AMD GPUs run Stable Diffusion?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "AMD GPUs can run Stable Diffusion, but NVIDIA GPUs are recommended due to CUDA support and better ecosystem tools."
                }
              },
              {
                "@type": "Question",
                "name": "Is RTX 4060 Ti good for Stable Diffusion?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The RTX 4060 Ti 16GB is the best budget GPU for Stable Diffusion without VRAM issues."
                }
              }
            ]
          })
        }}
      />

      {/* ================= CONTENT ================= */}
      <section style={{ marginBottom: 50 }}>
        <h1>Best GPUs for Stable Diffusion (2025)</h1>
        <p style={{ fontSize: 18 }}>
          Stable Diffusion is <strong>VRAM-bound</strong>. Choosing the wrong GPU
          causes slow generations and memory errors.
        </p>
      </section>

      <section style={{ marginBottom: 60 }}>
        <h2>Quick Recommendations</h2>
        <table border={1} cellPadding={12} width="100%">
          <tbody>
            <tr>
              <td>Best Budget</td>
              <td>RTX 4060 Ti (16GB)</td>
            </tr>
            <tr>
              <td>Best Overall</td>
              <td>RTX 4070</td>
            </tr>
            <tr>
              <td>Best Professional</td>
              <td>RTX 4090</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Check Live Prices</h2>
        <p style={{ color: '#555' }}>
          We automatically open the correct Amazon store based on your country.
        </p>

        <GeoAffiliate products={products} />
      </section>

      {/* ================= FAQ (VISIBLE) ================= */}
      <section style={{ marginTop: 60 }}>
        <h2>Frequently Asked Questions</h2>

        <h3>What GPU is best for Stable Diffusion?</h3>
        <p>
          The RTX 4070 offers the best balance of VRAM, performance, and power
          efficiency for most users.
        </p>

        <h3>How much VRAM do I need?</h3>
        <p>
          16GB VRAM is recommended for Stable Diffusion XL and advanced workflows.
        </p>

        <h3>Can AMD GPUs run Stable Diffusion?</h3>
        <p>
          They can, but NVIDIA GPUs are strongly recommended due to CUDA support.
        </p>
      </section>

    </main>
  )
}
