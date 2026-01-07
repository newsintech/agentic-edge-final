'use client';

import dynamic from 'next/dynamic';
import React from 'react';

interface ModuleLoaderProps {
  moduleName: string;
  fallback: React.ReactNode;
  moduleProps?: Record<string, any>;
}

const ModuleLoader: React.FC<ModuleLoaderProps> = ({ moduleName, fallback, moduleProps = {} }) => {
  const DynamicModule = dynamic(() => import(`../modules/${moduleName}`), {
    loading: () => fallback,
    ssr: false,
  });

  return <DynamicModule {...moduleProps} />;
};

export default ModuleLoader;
