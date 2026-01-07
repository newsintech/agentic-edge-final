// lib/geo.ts
import { NextApiRequest } from "next";

export const detectCountryFromIP = (req: NextApiRequest): string => {
  const countryCode = req.headers['x-vercel-ip-country']?.toString() || 'US';
  const supportedCountries = ['IN', 'US', 'UK', 'CA', 'DE', 'FR', 'IT', 'ES', 'NL'];
  return supportedCountries.includes(countryCode) ? countryCode : 'US';
};
