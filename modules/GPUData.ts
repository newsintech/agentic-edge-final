export type GPU = {
  name: string;
  vram: number;
  price: number;
  regionSupport: string[];
};

export const GPUs: GPU[] = [
  { name: 'NVIDIA RTX 4090', vram: 24, price: 200000, regionSupport: ['IN', 'US', 'EU'] },
  { name: 'NVIDIA RTX 4080', vram: 16, price: 150000, regionSupport: ['IN', 'US', 'EU'] },
  { name: 'NVIDIA RTX 4070 Ti', vram: 12, price: 90000, regionSupport: ['IN', 'US', 'EU'] },
  { name: 'AMD RX 7900 XTX', vram: 24, price: 180000, regionSupport: ['IN', 'US', 'EU'] },
  { name: 'AMD RX 7900 XT', vram: 20, price: 160000, regionSupport: ['IN', 'US', 'EU'] },
];
