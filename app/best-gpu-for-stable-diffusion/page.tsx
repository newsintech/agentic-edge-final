export const metadata = {
  title: 'Best GPUs for Stable Diffusion (India & USA) – 2025',
  description:
    'Best GPU for Stable Diffusion in 2025. RTX 3060 vs 4060 Ti vs 4070. India and USA buying guide.',
};

export default function BestGPUPage() {
  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
      <h1>Best GPUs for Stable Diffusion (2025) – India & USA</h1>

      <p>
        Stable Diffusion is <strong>VRAM-bound</strong>. Below are the only GPUs
        worth buying for local AI image generation.
      </p>

      <h2>Quick Recommendation</h2>

      <table border={1} cellPadding={10} style={{ marginBottom: 30 }}>
        <thead>
          <tr>
            <th>GPU</th>
            <th>VRAM</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RTX 3060</td>
            <td>12GB</td>
            <td>Best value</td>
          </tr>
          <tr>
            <td>RTX 4060 Ti</td>
            <td>16GB</td>
            <td>SDXL users</td>
          </tr>
          <tr>
            <td>RTX 4070</td>
            <td>12GB</td>
            <td>Faster inference</td>
          </tr>
        </tbody>
      </table>

      <h2>RTX 3060 (12GB) — Best Overall</h2>
      <p>Best balance of price, VRAM, and community support.</p>

      <p>
        🇮🇳{' '}
        <a
          href="https://www.amazon.in/dp/B08WRKXG3Q?tag=agenticedge-21"
          target="_blank"
          rel="nofollow sponsored noopener"
        >
          Buy RTX 3060 on Amazon India
        </a>
      </p>

      <p>
        🇺🇸{' '}
        <a
          href="https://www.amazon.com/dp/B08WPRMVWB?tag=agenticedge-20"
          target="_blank"
          rel="nofollow sponsored noopener"
        >
          Buy RTX 3060 on Amazon USA
        </a>
      </p>

      <h2>RTX 4060 Ti (16GB) — Best for SDXL</h2>

      <p>
        🇮🇳{' '}
        <a
          href="https://www.amazon.in/dp/B0C7J8Y8HL?tag=agenticedge-21"
          target="_blank"
          rel="nofollow sponsored noopener"
        >
          Buy RTX 4060 Ti (16GB) India
        </a>
      </p>

      <p>
        🇺🇸{' '}
        <a
          href="https://www.amazon.com/dp/B0C7J8Y8HL?tag=agenticedge-20"
          target="_blank"
          rel="nofollow sponsored noopener"
        >
          Buy RTX 4060 Ti (16GB) USA
        </a>
      </p>

      <p style={{ marginTop: 40, fontSize: 14, color: '#666' }}>
        As an Amazon Associate, we earn from qualifying purchases.
      </p>
    </main>
  );
}
