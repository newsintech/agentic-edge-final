/* ---------- Region Type ---------- */
export type Region = 'IN' | 'US' | 'UK' | 'EU';

/* ---------- Affiliate Helper ---------- */
export const GeoAffiliateHelper = {
  getAffiliateUrlForASIN(
    asinOrName: string,
    region: Region = 'US'
  ): string {
    const affiliateIds: Record<Region, string> = {
      IN: 'yourindiaaffiliate-21',
      US: 'yourusaffiliate-20',
      UK: 'yourukaffiliate-21',
      EU: 'youreuaffiliate-21',
    };

    const baseUrls: Record<Region, string> = {
      IN: 'https://www.amazon.in/dp/',
      US: 'https://www.amazon.com/dp/',
      UK: 'https://www.amazon.co.uk/dp/',
      EU: 'https://www.amazon.de/dp/',
    };

    return `${baseUrls[region]}${encodeURIComponent(
      asinOrName
    )}?tag=${affiliateIds[region]}`;
  },

  getFallbackSearchUrl(
    productName: string,
    region: Region = 'US'
  ): string {
    const searchUrls: Record<Region, string> = {
      IN: 'https://www.amazon.in/s?k=',
      US: 'https://www.amazon.com/s?k=',
      UK: 'https://www.amazon.co.uk/s?k=',
      EU: 'https://www.amazon.de/s?k=',
    };

    return `${searchUrls[region]}${encodeURIComponent(productName)}`;
  },
};
