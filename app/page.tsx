// app/best-gpu-for-stable-diffusion/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { GPUs } from '../../modules/GPUData';
import { GeoAffiliateHelper } from '../../modules/GeoAffiliateHelper';

export const metadata: Metadata = {
  title: 'Stable Diffusion Compute Capability Engine',
  description: 'Autonomous evaluation of GPUs for Stable Diffusion with VRAM, budget, and regional constraints.',
};

type CapabilityScore = {
  gpu: string;
  vram: number;
  score: number;
  decision: 'Suitable' | 'Too Low VRAM' | 'Over Budget' | 'Unsupported Region';
  confidence: number; // 0-100%
  lastEvaluated: string;
  assumptions: string[];
};

function evaluateGPU(
  gpu: { name: string; vram: number; price: number; regionSupport: string[] },
  userRegion: string,
  minVRAM: number,
  budget: number
): CapabilityScore {
  const now = new Date().toISOString();
  let decision: CapabilityScore['decision'];
  const assumptions: string[] = [];

  if (!gpu.regionSupport.includes(userRegion)) {
    decision = 'Unsupported Region';
    assumptions.push(`GPU not officially available in ${userRegion}`);
  } else if (gpu.vram < minVRAM) {
    decision = 'Too Low VRAM';
    assumptions.push(`Minimum VRAM required is ${minVRAM}GB`);
  } else if (gpu.price > budget) {
    decision = 'Over Budget';
    assumptions.push(`User budget is ₹${budget}`);
  } else {
    decision = 'Suitable';
    assumptions.push('All constraints satisfied');
  }

  const scoreMap: Record<CapabilityScore['decision'], number> = {
    Suitable: 95,
    'Too Low VRAM': 40,
    'Over Budget': 50,
    'Unsupported Region': 20,
  };

  return {
    gpu: gpu.name,
    vram: gpu.vram,
    score: scoreMap[decision],
    decision,
    confidence: scoreMap[decision],
    lastEvaluated: now,
    assumptions,
  };
}

export default function BestGPUPage() {
  const userRegion = 'IN'; // India-aware
  const minVRAM = 10; // GB
  const budget = 80000; // INR

  const evaluations: CapabilityScore[] = GPUs.map((gpu) =>
    evaluateGPU(gpu, userRegion, minVRAM, budget)
  );

  evaluations.sort((a, b) => b.score - a.score);

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Stable Diffusion Compute Capability Engine</h1>
      <p>
        This page autonomously evaluates GPUs for Stable Diffusion based on VRAM, budget, and regional availability.
      </p>

      <section style={{ marginTop: '2rem' }}>
        {evaluations.map((e) => (
          <div
            key={e.gpu}
            style={{
              marginBottom: '1.5rem',
              border: '1px solid #ccc',
              padding: '1rem',
              borderRadius: '8px',
            }}
          >
            <h2>{e.gpu}</h2>
            <p>VRAM: {e.vram}GB</p>
            <p>Score: {e.score}/100</p>
            <p>
              Decision: <strong>{e.decision}</strong>
            </p>
            <p>Confidence: {e.confidence}%</p>
            <p>Last Evaluated: {e.lastEvaluated}</p>
            <p>Assumptions: {e.assumptions.join('; ')}</p>
            {e.decision === 'Suitable' && (
              <p>
                <a
                  href={GeoAffiliateHelper.getLink(e.gpu, userRegion)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy / Check Price
                </a>
              </p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
