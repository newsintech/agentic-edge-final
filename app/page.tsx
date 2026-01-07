// app/page.tsx
import ModuleLoader from '../components/ModuleLoader';
import { detectCountryFromIP } from '../lib/geo';
import React from 'react';

export default async function Home({}) {
  // Server-side: detect country
  const country = detectCountryFromIP(); // we’ll read IP from headers below

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      {/* HERO MODULE */}
      <ModuleLoader 
        moduleName="01-hero/hero.tsx"
        fallback={<div style={{ padding: '100px 20px', textAlign: 'center' }}>Loading Hero...</div>}
      />

      {/* AFFILIATE MODULE */}
      <ModuleLoader 
        moduleName="affiliate.tsx"
        moduleProps={{ country }}
        fallback={<div style={{ textAlign: 'center', padding: '50px' }}>Loading affiliate products...</div>}
      />
    </div>
  );
}
