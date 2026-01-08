'use client'

import React from 'react'

interface ModuleLoaderProps {
  modules: string[]
}

export default function ModuleLoader({ modules }: ModuleLoaderProps) {
  return (
    <div className="min-h-screen">
      {modules.map((modulePath, index) => {
        try {
          const Module = require(`@/modules/${modulePath}`).default
          return <Module key={index} />
        } catch (error) {
          console.error(`Failed to load module: ${modulePath}`, error)
          return null
        }
      })}
    </div>
  )
}
