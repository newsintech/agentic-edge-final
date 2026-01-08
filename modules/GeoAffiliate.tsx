'use client'

import { useEffect, useState } from 'react'

export interface AffiliateLink {
  productName: string;
  in?: string;
  us?: string;
  gb?: string;
  ca?: string;
  de?: string;
  default: string;
}


interface GeoAffiliateProps {
  products: AffiliateLink[]
  className?: string
}

export default function GeoAffiliate({ products, className = '' }: GeoAffiliateProps) {
  const [userCountry, setUserCountry] = useState('US')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const detect = async () => {
      try {
        const res = await fetch('https://www.cloudflare.com/cdn-cgi/trace')
        const txt = await res.text()
        const match = txt.match(/loc=([A-Z]{2})/)
        if (match) setUserCountry(match[1])
      } catch {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
        if (tz.includes('Kolkata')) setUserCountry('IN')
        else if (tz.includes('London')) setUserCountry('GB')
        else if (tz.includes('Toronto')) setUserCountry('CA')
        else if (tz.includes('Berlin')) setUserCountry('DE')
      } finally {
        setLoading(false)
      }
    }
    detect()
  }, [])

  const getLink = (p: AffiliateLink) => {
    const map: Record<string, keyof AffiliateLink> = {
      US: 'us',
      IN: 'in',
      GB: 'gb',
      CA: 'ca',
      DE: 'de'
    }
    return p[map[userCountry]] || p.default
  }

  if (loading) {
    return <div className="h-12 bg-gray-200 rounded animate-pulse" />
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {products.map((p, i) => (
        <div
          key={i}
          onClick={() => window.open(getLink(p), '_blank', 'noopener,noreferrer')}
          className="border rounded-lg p-4 hover:border-orange-500 hover:shadow-lg cursor-pointer bg-white"
        >
          <h3 className="font-semibold text-lg">{p.productName}</h3>
          <p className="text-sm text-gray-500 mt-1">
            🌍 Local Amazon store ({userCountry})
          </p>
          <button className="mt-3 bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold">
            Check Price →
          </button>
        </div>
      ))}
    </div>
  )
}
