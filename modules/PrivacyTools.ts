// modules/PrivacyTools.ts
export interface PrivacyTool {
  name: string;
  affiliateLink?: string;
}

export const PrivacyTools: PrivacyTool[] = [
  { name: 'ProtonVPN', affiliateLink: 'https://protonvpn.com?affiliate=yourID' },
  { name: 'NordVPN', affiliateLink: 'https://nordvpn.com?affiliate=yourID' },
  { name: 'Tails OS', affiliateLink: undefined },
];

