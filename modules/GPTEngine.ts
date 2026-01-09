// modules/GPTEngine.ts
import { GPUs } from './GPUData';
import { GeoAffiliate } from './GeoAffiliate';
import { PrivacyTools } from './PrivacyTools';

export type UserProfile = {
  region: string;
  minVRAM?: number;
  budget?: number;
  interests?: 'AI Hardware' | 'Privacy Tools' | 'Local AI';
};

export type EvaluationResult = {
  name: string;
  type: 'GPU' | 'PrivacyTool';
  decision: 'Suitable' | 'Unsuitable' | 'Wait' | 'UnsupportedRegion';
  score: number; // 0-100
  confidence: number; // 0-100%
  lastEvaluated: string;
  assumptions: string[];
  affiliateLink?: string;
};

// Core invisible AGI evaluator
export async function evaluateProfile(profile: UserProfile): Promise<EvaluationResult[]> {
  const now = new Date().toISOString();
  const results: EvaluationResult[] = [];

  // Evaluate GPUs
  GPUs.forEach((gpu) => {
    let decision: EvaluationResult['decision'];
    const assumptions: string[] = [];

    if (!gpu.regionSupport.includes(profile.region)) {
      decision = 'UnsupportedRegion';
      assumptions.push(`GPU not available in ${profile.region}`);
    } else if (profile.minVRAM && gpu.vram < profile.minVRAM) {
      decision = 'Unsuitable';
      assumptions.push(`VRAM below minimum of ${profile.minVRAM}GB`);
    } else if (profile.budget && gpu.price > profile.budget) {
      decision = 'Unsuitable';
      assumptions.push(`Price above budget of ₹${profile.budget}`);
    } else {
      decision = 'Suitable';
      assumptions.push('All constraints satisfied');
    }

    const scoreMap: Record<EvaluationResult['decision'], number> = {
      Suitable: 95,
      Unsuitable: 40,
      Wait: 60,
      UnsupportedRegion: 20,
    };

    results.push({
      name: gpu.name,
      type: 'GPU',
      decision,
      score: scoreMap[decision],
      confidence: scoreMap[decision],
      lastEvaluated: now,
      assumptions,
      affiliateLink: decision === 'Suitable' ? GeoAffiliate.getLink(gpu.name, profile.region) : undefined,
    });
  });

  // Evaluate Privacy Tools
  PrivacyTools.forEach((tool) => {
    results.push({
      name: tool.name,
      type: 'PrivacyTool',
      decision: 'Suitable',
      score: 90,
      confidence: 90,
      lastEvaluated: now,
      assumptions: ['Reputable, privacy-first tool'],
      affiliateLink: tool.affiliateLink || undefined,
    });
  });

  return results;
}

