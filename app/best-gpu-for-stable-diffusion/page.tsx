export const metadata = {
  title: 'Best GPUs for Stable Diffusion (India & USA) - 2025',
  description:
    'Best GPU for Stable Diffusion in 2025. RTX 3060 vs 4060 Ti vs 4070. India and USA buying guide.',
};

import GeoAffiliate from "@/modules/GeoAffiliate";

export default function BestGPUPage() {
  const products = [
    {
      productName: "NVIDIA RTX 4060 Ti - 16GB (example)",
      us: "https://www.amazon.com/dp/PLACEHOLDER-US",
      in: "https://www.amazon.in/dp/PLACEHOLDER-IN",
      gb: "https://www.amazon.co.uk/dp/PLACEHOLDER-GB",
      ca: "https://www.amazon.ca/dp/PLACEHOLDER-CA",
      de: "https://www.amazon.de/dp/PLACEHOLDER-DE",
      default: "https://www.amazon.com"
    },
    {
      productName: "NVIDIA RTX 3060 - 12GB (example)",
      us: "https://www.amazon.com/dp/PLACEHOLDER-US-2",
      in: "https://www.amazon.in/dp/PLACEHOLDER-IN-2",
      gb: "https://www.amazon.co.uk/dp/PLACEHOLDER-GB-2",
      ca: "https://www.amazon.ca/dp/PLACEHOLDER-CA-2",
      de: "https://www.amazon.de/dp/PLACEHOLDER-DE-2",
      default: "https://www.amazon.com"
    }
  ];

  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
      <h1>Best GPUs for Stable Diffusion (2025) – India & USA</h1>

      <p>
        Stable Diffusion is <strong>VRAM-bound</strong>. Below are the GPUs worth buying for
        local AI image generation — with country-aware affiliate links.
      </p>

      <h2>Quick Recommendation</h2>

      <table border={1} cellPadding={10} style={{ marginBottom: 30 }}>
        <thead>
          <tr>
            <th>GPU</th>
            <th>VRAM</th>
            <th>Best for</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RTX 4060 Ti</td>
            <td>16 GB</td>
            <td>Best balance of cost and VRAM for 512–1024px image generation</td>
          </tr>
          <tr>
            <td>RTX 3060</td>
            <td>12 GB</td>
            <td>Budget option, slower for large models</td>
          </tr>
        </tbody>
      </table>

      <h2>Buyers — Country-aware prices</h2>
      <p className="text-sm text-gray-600 mb-6">
        We may earn a commission when you buy through affiliate links. Prices vary by country.
      </p>

      {/* Geo-aware affiliate cards (module) */}
      <GeoAffiliate products={products} className="mb-8" />

      <section style={{ marginTop: 40 }}>
        <h3>Why country-aware links?</h3>
        <p>
          Amazon has different marketplaces and affiliate program IDs per country. This component
          automatically opens the best marketplace link for the visitor's country when possible.
        </p>
      </section>
    </main>
  );
}
