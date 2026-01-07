// lib/geo.ts
export const detectCountryFromIP = (): string => {
  // Use Vercel environment header for country
  const countryCode = process.env.VERCEL_COUNTRY || 'US';
  const supportedCountries = ['IN', 'US', 'UK', 'CA', 'DE', 'FR', 'IT', 'ES', 'NL'];
  return supportedCountries.includes(countryCode) ? countryCode : 'US';
};
