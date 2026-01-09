'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  // Lightweight invisible AGI ping (not GPU logic)
  useEffect(() => {
    fetch('/api/agi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: { type: 'homepage_view' },
        region: 'IN',
      }),
    }).catch(() => {});
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>AgenticEdge</h1>

      <p>
        Autonomous AI systems for hardware intelligence, local AI computing,
        and privacy-first decision engines.
      </p>

      <section style={{ marginTop: '2rem' }}>
        <h2>Live Engines</h2>

        <ul>
          <li>
            <Link href="/best-gpu-for-stable-diffusion">
              Stable Diffusion GPU Capability Engine →
            </Link>
          </li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem', opacity: 0.6 }}>
        <p>
          Invisible AGI operates continuously in the background.
          No chat bubbles. No UI noise.
        </p>
      </section>
    </main>
  );
}
