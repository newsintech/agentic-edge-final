'use client';

import React, { useEffect, useState } from 'react';
import { runAGI } from '@/modules/GPTEngine';

export default function BestGPUPage() {
  const [gpus, setGpus] = useState<any[]>([]);

  useEffect(() => {
    const result = runAGI({
      page: '/best-gpu-for-stable-diffusion',
      signals: { minVRAM: 12 },
    });

    if (result.data) {
      setGpus(result.data);
    }
  }, []);

  return (
    <main style={{ padding: 32 }}>
      <h1>Best GPU for Stable Diffusion</h1>

      {gpus.map(gpu => (
        <div key={gpu.name}>
          <strong>{gpu.name}</strong> — {gpu.vram}GB VRAM
        </div>
      ))}
    </main>
  );
}
