'use client';

import { useEffect, useState } from 'react';

export default function ModuleLoader({ moduleName, fallback = null }) {
  const [Module, setModule] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Try to load the module
    const loadModule = async () => {
      try {
        // Dynamic import - if module doesn't exist, it throws error
        const module = await import(`../modules/${moduleName}`);
        setModule(() => module.default);
      } catch (err) {
        console.log(`Module ${moduleName} failed to load (safe):`, err.message);
        setError(true);
      }
    };

    loadModule();
  }, [moduleName]);

  // If error, show fallback
  if (error) {
    return fallback || (
      <div style={{
        border: '2px dashed #ff6b6b',
        padding: '40px',
        borderRadius: '10px',
        background: '#fff5f5',
        color: '#ff4444',
        textAlign: 'center',
        margin: '20px 0'
      }}>
        ⚠️ Module temporarily unavailable
      </div>
    );
  }

  // If still loading, show loading state
  if (!Module) {
    return fallback || (
      <div style={{
        border: '2px dashed #ddd',
        padding: '40px',
        borderRadius: '10px',
        background: '#f9f9f9',
        textAlign: 'center',
        margin: '20px 0'
      }}>
        Loading module...
      </div>
    );
  }

  // Render the module
  return <Module />;
}
