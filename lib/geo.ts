// lib/geo.ts
import { headers } from 'next/headers';

export function detectCountryFromIP(): string {
  const h = headers();
  const country =
    h.get('x-vercel-ip-country') ||
    process.env.VERCEL_COUNTRY ||
    'US';

  const supported = ['IN', 'US', 'UK', 'CA', 'DE', 'FR', 'IT', 'ES', 'NL'];
  return supported.includes(country) ? country : 'US';
}
