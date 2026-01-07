import ModuleLoader from '../components/ModuleLoader';
import { detectCountryFromIP } from '../lib/geo';

export default async function Home() {
  const country = detectCountryFromIP();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <ModuleLoader
        moduleName="01-hero/hero"
        fallback={<div style={{ padding: 100, textAlign: 'center' }}>Loading hero…</div>}
      />

      <ModuleLoader
        moduleName="affiliate"
        moduleProps={{ country }}
        fallback={<div style={{ padding: 50, textAlign: 'center' }}>Loading deals…</div>}
      />
    </div>
  );
}
