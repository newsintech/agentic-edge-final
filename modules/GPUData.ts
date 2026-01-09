// modules/GPUData.ts
export interface GPU {
  name: string;
  vram: number;
  price: number;
  regionSupport: string[];
}

export const GPUs: GPU[] = [
  { name: 'NVIDIA RTX 4090', vram: 24, price: 260000, regionSupport: ['IN', 'US', 'EU'] },
  { name: 'NVIDIA RTX 4080', vram: 16, price: 160000, regionSupport: ['IN', 'US', 'EU'] },
  { name: 'NVIDIA RTX 4070 Ti', vram: 12, price: 120000, regionSupport: ['IN', 'US', 'EU'] },
  { name: 'NVIDIA RTX 3060', vram: 12, price: 50000, regionSupport: ['IN', 'US', 'EU'] },
  { name: 'AMD RX 7900 XTX', vram: 24, price: 180000, regionSupport: ['US', 'EU'] },
];
