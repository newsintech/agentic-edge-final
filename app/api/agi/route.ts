// app/api/agi/route.ts
import { NextResponse } from 'next/server';
import { GPUs } from '@/modules/GPUData';
import { GeoAffiliateHelper } from '@/modules/GeoAffiliateHelper';

// Simple "invisible AGI" logic
export async function POST(request: Request) {
  try {
    const { event, region = 'DEFAULT' } = await request.json();

    // event.type could be 'page_view', 'click', 'scroll', etc.
    // event.data can include page info, GPU interest, etc.

    // Decide what to recommend based on event type
    let recommendedGPU = GPUs[0]; // default
    if (event.page === 'stable-diffusion') {
      // Example rule: if user wants SDXL models, pick high VRAM GPU
      const desiredVRAM = event.data?.desiredVRAM || 12;
      recommendedGPU = GPUs.find(g => g.vramGB >= desiredVRAM) || GPUs[0];
    }

    // Prepare invisible affiliate link
    const affiliateUrl = GeoAffiliateHelper.getAffiliateUrlForASIN(
      recommendedGPU.amazonASIN,
      region as any
    ) || GeoAffiliateHelper.getFallbackSearchUrl(recommendedGPU.name, region as any);

    // Response can include instructions for the frontend or analytics
    const reply = {
      recommendedGPU: recommendedGPU.name,
      affiliateUrl,
      message: `AGI suggests ${recommendedGPU.name} for your workload.`
    };

    return NextResponse.json(reply);

  } catch (err: any) {
    console.error('AGI API error:', err);
    return NextResponse.json({ error: 'AGI failed' }, { status: 500 });
  }
}
