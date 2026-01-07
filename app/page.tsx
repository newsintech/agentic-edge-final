import { GetServerSideProps } from 'next';
import ModuleLoader from '../components/ModuleLoader';
import { detectCountryFromIP } from '../lib/geo';
import React from 'react';

interface HomeProps {
  country: string;
}

const Home: React.FC<HomeProps> = ({ country }) => {
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
};

export default Home;

// Server-side IP detection
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const country = detectCountryFromIP(req as any);
  return {
    props: { country },
  };
};
