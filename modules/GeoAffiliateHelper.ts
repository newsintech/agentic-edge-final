// modules/GeoAffiliateHelper.ts
type Region = 'IN' | 'US' | 'UK' | 'DE' | 'DEFAULT';

export const GeoAffiliateHelper = {
  getAffiliateUrlForASIN(asin: string | undefined, region: Region = 'DEFAULT') {
    if (!asin) return null;
    // Basic mapping - replace with your affiliate tag logic
    const tags: Record<Region,string> = {
      IN: 'your-india-tag-21',
      US: 'your-us-tag-20',
      UK: 'your-uk-tag-21',
      DE: 'your-de-tag-21',
      DEFAULT: 'your-global-tag-21'
    };

    const tag = tags[region] ?? tags.DEFAULT;

    // Map region to Amazon domain
    const domain: Record<Region,string> = {
      IN: 'amazon.in',
      US: 'amazon.com',
      UK: 'amazon.co.uk',
      DE: 'amazon.de',
      DEFAULT: 'amazon.com'
    };

    const d = domain[region] ?? domain.DEFAULT;
    return `https://${d}/dp/${asin}/?tag=${tag}`;
  },

  // Graceful fallback: returns a safe search URL if ASIN missing
  getFallbackSearchUrl(productName: string, region: Region = 'DEFAULT') {
    const domain = region === 'IN' ? 'amazon.in' : 'amazon.com';
    const q = encodeURIComponent(productName);
    return `https://${domain}/s?k=${q}`;
  }
};
