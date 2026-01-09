import { detectRegion } from './GeoAffiliateHelper';
import { GPUs } from './GPUData';

export type AGIEvent = {
  page: string;
  signals?: Record<string, any>;
};

export type Intent =
  | 'BUY_GPU'
  | 'RESEARCH_GPU'
  | 'PRIVACY_TOOLS'
  | 'UNKNOWN';

function detectIntent(event: AGIEvent): Intent {
  if (event.page.includes('best-gpu')) return 'BUY_GPU';
  if (event.page.includes('vram')) return 'RESEARCH_GPU';
  if (event.page.includes('privacy')) return 'PRIVACY_TOOLS';
  return 'UNKNOWN';
}

export function runAGI(event: AGIEvent) {
  const region = detectRegion();
  const intent = detectIntent(event);

  return {
    intent,
    region,
    data:
      intent === 'BUY_GPU'
        ? GPUs.filter(g => g.vram >= 12)
        : null,
  };
}
