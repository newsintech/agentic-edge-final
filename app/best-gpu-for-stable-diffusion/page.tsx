export default function Page() {
  return (
    export const metadata = {
  title: 'Best GPUs for Stable Diffusion (2025) – India & USA',
  description:
    'Best GPU for Stable Diffusion in 2025. RTX 4060 Ti vs 4070 vs 4090. VRAM-focused buying guide for India and USA.',
};

export default function BestGPUPage() {
  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
      {/* HERO */}
      <section style={{ marginBottom: 50 }}>
        <h1>Best GPUs for Stable Diffusion (2025)</h1>
        <p style={{ fontSize: 18, lineHeight: 1.6 }}>
          Stable Diffusion is <strong>VRAM-bound</strong>, not hype-bound.
          If you buy the wrong GPU, you’ll hit out-of-memory errors,
          slow generation times, and wasted money.
        </p>
        <p style={{ fontSize: 18 }}>
          Below are the <strong>only GPUs worth buying</strong> for local
          AI image generation in 2025 — tested for India 🇮🇳 and USA 🇺🇸 buyers.
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

      {/* BUYING ADVICE */}
      <section style={{ marginBottom: 60 }}>
        <h2>What Actually Matters for Stable Diffusion</h2>

        <ul style={{ fontSize: 17, lineHeight: 1.7 }}>
          <li><strong>VRAM &gt; CUDA cores</strong> (16GB minimum recommended)</li>
          <li>NVIDIA only (CUDA support is non-negotiable)</li>
          <li>Power efficiency matters for long generation runs</li>
          <li>Consumer GPUs outperform workstation cards for the price</li>
        </ul>
      </section>

      {/* PLACEHOLDER FOR AFFILIATE (STEP B) */}
      <section>
        <h2>Check Live Prices (India & USA)</h2>
        <p>
          Prices and availability vary heavily by region.
          We automatically show the correct Amazon store below.
        </p>

        {/* GeoAffiliate will be injected here in Step B */}
      </section>
    </main>
  );
}
