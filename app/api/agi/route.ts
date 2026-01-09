import { NextResponse } from 'next/server';
import { GPUs } from '@/modules/GPUData';
import {
  detectRegion,
  getAffiliateSearchUrl,
} from '@/modules/GeoAffiliateHelper';

export async function POST(req: Request) {
  try {
    const region = detectRegion();

    const recommended = GPUs.filter(gpu => gpu.vram >= 12);

    const enriched = recommended.map(gpu => ({
      ...gpu,
      affiliateUrl: getAffiliateSearchUrl(gpu.name, region),
    }));

    return NextResponse.json({
      region,
      intent: 'BUY_GPU',
      results: enriched,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'AGI engine failed' },
      { status: 500 }
    );
  }
}
