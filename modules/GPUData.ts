// modules/GPUData.ts
export type GPU = {
  id: string;
  name: string;
  vramGB: number;
  tier?: 'budget'|'mid'|'high';
  amazonASIN?: string; // optional affiliate identifier
};

export const GPUs: GPU[] = [
  { id: 'rtx3060', name: 'NVIDIA RTX 3060', vramGB: 12, tier: 'mid', amazonASIN: 'B08W8DGK3X' },
  { id: 'rtx4070', name: 'NVIDIA RTX 4070', vramGB: 12, tier: 'high', amazonASIN: 'B0B5Z6....' },
  { id: 'rx7600',  name: 'AMD RX 7600',   vramGB: 8,  tier: 'budget', amazonASIN: 'B0XXXX' },
  // add more as needed
];
