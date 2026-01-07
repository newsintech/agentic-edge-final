// lib/geo.ts
export const detectCountryFromIP = (): string => {
  // Use Vercel header for country if deployed
  const countryCode = process.env.VERCEL_COUNTRY || 'US';
  const supportedCountries = ['IN', 'US', 'UK', 'CA', 'DE', 'FR', 'IT', 'ES', 'NL'];
  return supportedCountries.includes(countryCode) ? countryCode : 'US';
};
