import ModuleLoader from '../components/ModuleLoader';

export default function Home() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <ModuleLoader
        moduleName="01-hero/hero"
        fallback={<div>Loading hero…</div>}
      />

      <ModuleLoader
        moduleName="affiliate"
        fallback={<div>Loading deals…</div>}
      />
    </div>
  );
}
