// modules/GeoAffiliateHelper.ts
export const GeoAffiliateHelper = {
  getLink: (gpuName: string, region: string) => {
    const baseLinks: Record<string, string> = {
      IN: 'https://www.amazon.in/s?k=',
      US: 'https://www.amazon.com/s?k=',
      GB: 'https://www.amazon.co.uk/s?k=',
      CA: 'https://www.amazon.ca/s?k=',
      DE: 'https://www.amazon.de/s?k=',
    };
    const query = encodeURIComponent(gpuName);
    const base = baseLinks[region] || baseLinks['US'];
    return `${base}${query}&tag=yourAffiliateID`;
  },
};
