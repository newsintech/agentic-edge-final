// lib/amazon.ts
type Store = {
  domain: string;
  tag: string;
};

const amazonStores: Record<string, Store> = {
  IN: { domain: "amazon.in", tag: "agenticedge-21" },
  US: { domain: "amazon.com", tag: "usagenticedge-20" },
  UK: { domain: "amazon.co.uk", tag: "amkvin-21" },
  CA: { domain: "amazon.ca", tag: "usagenticedge-20" },
  DE: { domain: "amazon.de", tag: "usagenticedge-20" },
  FR: { domain: "amazon.fr", tag: "usagenticedge-20" },
  IT: { domain: "amazon.it", tag: "usagenticedge-20" },
  ES: { domain: "amazon.es", tag: "usagenticedge-20" },
  NL: { domain: "amazon.nl", tag: "usagenticedge-20" },
};

export const getAmazonLink = (asin: string, countryCode: string) => {
  const store = amazonStores[countryCode] || amazonStores.US;
  return `https://${store.domain}/dp/${asin}?tag=${store.tag}`;
};
