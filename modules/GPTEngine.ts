import { GPUs, GPU } from './GPUData';
import { GeoAffiliateHelper, Region } from './GeoAffiliateHelper';

/* ---------- Types ---------- */

export type UserProfile = {
  region: Region; // ✅ FIXED: was string
  budget: number;
  minVRAM: number;
};

export type GPTDecision = {
  gpu: string;
  vram: number;
  price: number;
  score: number;
  decision: 'Suitable' | 'Too Low VRAM' | 'Over Budget' | 'Unsupported Region';
  confidence: number;
  lastEvaluated: string;
  assumptions: string[];
  affiliateLink?: string;
};

/* ---------- Engine ---------- */

export function runGPTEngine(profile: UserProfile): GPTDecision[] {
  const now = new Date().toISOString();

  return GPUs.map((gpu: GPU) => {
    const assumptions: string[] = [];
    let decision: GPTDecision['decision'] = 'Suitable';

    if (!gpu.regionSupport.includes(profile.region)) {
      decision = 'Unsupported Region';
      assumptions.push(`Not available in ${profile.region}`);
    } else if (gpu.vram < profile.minVRAM) {
      decision = 'Too Low VRAM';
      assumptions.push(`Requires at least ${profile.minVRAM}GB VRAM`);
    } else if (gpu.price > profile.budget) {
      decision = 'Over Budget';
      assumptions.push(`Budget limit is ₹${profile.budget}`);
    } else {
      assumptions.push('All constraints satisfied');
    }

    const scoreMap: Record<GPTDecision['decision'], number> = {
      Suitable: 95,
      'Too Low VRAM': 40,
      'Over Budget': 55,
      'Unsupported Region': 20,
    };

    return {
      gpu: gpu.name,
      vram: gpu.vram,
      price: gpu.price,
      score: scoreMap[decision],
      decision,
      confidence: scoreMap[decision],
      lastEvaluated: now,
      assumptions,
      affiliateLink:
        decision === 'Suitable'
          ? GeoAffiliateHelper.getAffiliateUrlForASIN(
              gpu.name,
              profile.region
            )
          : undefined,
    };
  }).sort((a, b) => b.score - a.score);
}
