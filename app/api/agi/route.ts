import { NextResponse } from 'next/server';
import { GPUs, GPU } from '@/modules/GPUData';
import { GeoAffiliateHelper } from '@/modules/GeoAffiliateHelper';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { event, region } = body;

    let recommendedGPU: GPU | null = null;

    // Desired VRAM coming from invisible AGI signal
    const desiredVRAM: number = event?.data?.desiredVRAM ?? 12;

    // Pick first GPU that satisfies VRAM requirement
    recommendedGPU =
      GPUs.find((g) => g.vram >= desiredVRAM && g.regionSupport.includes(region)) ??
      GPUs[0];

    const affiliateUrl = GeoAffiliateHelper.getAffiliateUrlForASIN(
      recommendedGPU.name,
      region
    );

    return NextResponse.json({
      ok: true,
      reasoning: {
        desiredVRAM,
        selectedGPU: recommendedGPU.name,
        vram: recommendedGPU.vram,
        region,
      },
      affiliateUrl,
    });
  } catch (error) {
    console.error('AGI route error:', error);
    return NextResponse.json(
      { ok: false, error: 'AGI processing failed' },
      { status: 500 }
    );
  }
}
