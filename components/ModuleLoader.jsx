'use client';

import dynamic from 'next/dynamic';

export default function ModuleLoader({ moduleName, fallback }) {
  const DynamicModule = dynamic(
    () => import(`../modules/${moduleName}`),
    {
      loading: () => fallback,
      ssr: false,
    }
  );

  return <DynamicModule />;
}
