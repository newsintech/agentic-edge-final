'use client';

import { useState, useEffect } from 'react';

export default function ModuleLoader({ moduleName, fallback = null }) {
  const [Module, setModule] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Dynamically import module - if fails, show fallback
    import(`../modules/${moduleName}`)
      .then(module => {
        setModule(() => module.default);
      })
      .catch(err => {
        console.warn(`Module ${moduleName} failed to load:`, err);
        setError(true);
      });
  }, [moduleName]);

  if (error) {
    return fallback || <div style={{
      border: '2px dashed #ff4444',
      padding: '20px',
      borderRadius: '10px',
      background: '#fff5f5',
      color: '#ff4444',
      textAlign: 'center'
    }}>
      ⚠️ Module temporarily unavailable
    </div>;
  }

  if (!Module) {
    return fallback || <div style={{
      border: '2px dashed #ddd',
      padding: '20px',
      borderRadius: '10px',
      background: '#f9f9f9',
      textAlign: 'center'
    }}>
      Loading module...
    </div>;
  }

  return <Module />;
}
