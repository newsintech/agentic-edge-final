export type Region = 'IN' | 'US' | 'EU' | 'UNKNOWN';

export function detectRegion(): Region {
  if (typeof navigator === 'undefined') return 'UNKNOWN';

  const lang = navigator.language.toLowerCase();

  if (lang.includes('en-in')) return 'IN';
  if (lang.includes('en-us')) return 'US';
  if (lang.includes('en-gb') || lang.includes('de')) return 'EU';

  return 'UNKNOWN';
}

export function getAffiliateSearchUrl(
  keyword: string,
  region: Region
) {
  switch (region) {
    case 'IN':
      return `https://www.amazon.in/s?k=${encodeURIComponent(keyword)}`;
    case 'US':
      return `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
    default:
      return `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
  }
}
