export const metadata = {
  title: 'AgenticEdge – AI Hardware, Local AI & Privacy Computing',
  description:
    'Independent benchmarks, buying guides, and real-world analysis of AI hardware, local AI tools, and privacy-first computing.',
}

export default function HomePage() {
  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '50px 20px' }}>

      {/* ================= HERO ================= */}
      <section style={{ marginBottom: 80 }}>
        <h1>AgenticEdge</h1>
        <h2 style={{ fontWeight: 400 }}>
          AI Hardware · Local AI · Privacy-First Computing
        </h2>
        <p style={{ fontSize: 18, maxWidth: 800 }}>
          AgenticEdge provides independent, real-world benchmarks and buying
          guides for running AI models locally — without cloud lock-in.
        </p>
      </section>

      {/* ================= TRUST / EXPERTISE ================= */}
      <section style={{ marginBottom: 80 }}>
        <h2>Why Trust AgenticEdge?</h2>
        <ul>
          <li>Hands-on testing of GPUs for Stable Diffusion & LLMs</li>
          <li>Focus on VRAM, thermals, efficiency — not marketing hype</li>
          <li>Privacy-first approach to AI computing</li>
          <li>No sponsored rankings or paid placements</li>
        </ul>
      </section>

      {/* ================= CORE TOPIC PILLARS ================= */}
      <section style={{ marginBottom: 80 }}>
        <h2>Core Topics We Cover</h2>

        <div style={{ display: 'grid', gap: 30, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>

          <div>
            <h3>🧠 AI Hardware</h3>
            <p>GPUs, CPUs, RAM, and system builds optimized for AI workloads.</p>
          </div>

          <div>
            <h3>🎨 Stable Diffusion</h3>
            <p>Real-world GPU performance, VRAM limits, and model compatibility.</p>
          </div>

          <div>
            <h3>🤖 Local LLMs</h3>
            <p>Running LLMs locally using consumer and workstation hardware.</p>
          </div>

          <div>
            <h3>🔒 Privacy Computing</h3>
            <p>Local-first tools that avoid cloud tracking and data leakage.</p>
          </div>

        </div>
      </section>

      {/* ================= FLAGSHIP GUIDES ================= */}
      <section style={{ marginBottom: 80 }}>
        <h2>Flagship Guides</h2>

        <ul>
          <li>
            <a href="/best-gpu-for-stable-diffusion">
              Best GPU for Stable Diffusion (2025)
            </a>
          </li>
          <li>
            Best Budget AI PC Build (Coming Soon)
          </li>
          <li>
            Local LLM Hardware Requirements (Coming Soon)
          </li>
        </ul>
      </section>

      {/* ================= WHO THIS IS FOR ================= */}
      <section style={{ marginBottom: 80 }}>
        <h2>Who AgenticEdge Is For</h2>
        <ul>
          <li>AI creators & researchers</li>
          <li>Developers running models locally</li>
          <li>Privacy-conscious users</li>
          <li>Buyers who care about real performance</li>
        </ul>
      </section>

      {/* ================= BRAND VISION ================= */}
      <section>
        <h2>Our Vision</h2>
        <p style={{ maxWidth: 900 }}>
          As AI becomes more powerful, running models locally will matter more
          than ever. AgenticEdge exists to help users choose the right hardware,
          stay private, and remain independent from cloud monopolies.
        </p>
      </section>

    </main>
  )
}
