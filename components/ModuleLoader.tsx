'use client';

import dynamic from 'next/dynamic';
import React, { ReactElement } from 'react';

interface ModuleLoaderProps {
  moduleName: string;
  fallback: ReactElement;
  moduleProps?: Record<string, any>;
}

export default function ModuleLoader({
  moduleName,
  fallback,
  moduleProps = {},
}: ModuleLoaderProps) {
  const DynamicModule = dynamic(
    () => import(`../modules/${moduleName}`),
    {
      loading: () => fallback,
      ssr: false,
    }
  );

  return <DynamicModule {...moduleProps} />;
}
import dynamic from 'next/dynamic';
import React, { ReactElement } from 'react';

interface ModuleLoaderProps {
  moduleName: string;
  fallback: ReactElement; // <- must be a ReactElement, not ReactNode
  moduleProps?: Record<string, any>;
}

const ModuleLoader: React.FC<ModuleLoaderProps> = ({ moduleName, fallback, moduleProps = {} }) => {
  const DynamicModule = dynamic(() => import(`../modules/${moduleName}`), {
    loading: () => fallback, // TS is now happy
    ssr: false,
  });

  return <DynamicModule {...moduleProps} />;
};

export default ModuleLoader;
