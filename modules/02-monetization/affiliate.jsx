'use client';

import { useState, useEffect } from 'react';

/* ======================================================
   AMAZON ONELINK CONFIG (SINGLE TRACKING ID)
   ====================================================== */

const AMAZON_TRACKING_ID = 'agenticedge-20'; // ONE ID ONLY

function getAmazonLink(asin) {
  // REAL OneLink-compatible URL
  return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TRACKING_ID}`;
}

/* ======================================================
   MONETIZATION MODULE
   ====================================================== */

export default function MonetizationModule() {
  const [products, setProducts] = useState([]);
  const [userRegion, setUserRegion] = useState('Detecting...');

  useEffect(() => {
    // Region detection ONLY for UI (NOT for links)
    if (typeof window !== 'undefined') {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      if (timezone.includes('Europe')) setUserRegion('United Kingdom / Europe');
      else if (timezone.includes('Asia')) setUserRegion('India / Asia');
      else setUserRegion('United States / Global');
    }

    // Product data
    const initialProducts = [
      {
        id: 1,
        name: 'AMD Ryzen 9 7950X',
        category: 'CPU',
        price: '$599',
        originalPrice: '$699',
        asin: 'B0C4N5PJVC',
        rating: 4.8,
        features: ['16 Cores', '5.7GHz Boost', 'Local AI'],
        badge: "Editor's Choice",
        description:
          'High-performance CPU for local AI inference, model training, and privacy-first computing.'
      },
      {
        id: 2,
        name: 'NVIDIA RTX 4090',
        category: 'GPU',
        price: '$1,599',
        originalPrice: '$1,999',
        asin: 'B0CHHZ8V2T',
        rating: 4.9,
        features: ['24GB VRAM', 'CUDA', 'AI Acceleration'],
        badge: 'Benchmark Leader',
        description:
          'The gold standard GPU for offline AI workloads and confidential computation.'
      },
      {
        id: 3,
        name: 'Framework Laptop 16',
        category: 'Laptop',
        price: '$1,699',
        originalPrice: '$1,899',
        asin: 'B0C5J8BQ8G',
        rating: 4.7,
        features: ['Upgradeable', 'Open BIOS', 'Privacy Switches'],
        badge: 'Privacy Focused',
        description:
          'Repairable, modular laptop built for users who value ownership and privacy.'
      }
    ];

    const productsWithLinks = initialProducts.map((product) => ({
      ...product,
      affiliateLink: getAmazonLink(product.asin)
    }));

    setProducts(productsWithLinks);
  }, []);

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #0a192f, #112240)',
        padding: '80px 20px',
        color: '#e6f1ff'
      }}
    >
      {/* ================= HEADER ================= */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto 60px',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            display: 'inline-block',
            padding: '10px 24px',
            borderRadius: '999px',
            background: 'rgba(100,255,218,0.1)',
            border: '1px solid rgba(100,255,218,0.3)',
            marginBottom: '25px',
            fontSize: '0.95rem'
          }}
        >
          🌍 Viewing from: <strong>{userRegion}</strong>
        </div>

        <h2
          style={{
            fontSize: '2.8rem',
            fontWeight: 800,
            marginBottom: '20px',
            background: 'linear-gradient(45deg, #64ffda, #4091ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Privacy-First AI Hardware
        </h2>

        <p
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            fontSize: '1.15rem',
            color: '#a8b2d1',
            lineHeight: 1.7
          }}
        >
          We independently test hardware for <strong>local AI performance</strong> and{' '}
          <strong>privacy-preserving computing</strong>.  
          These affiliate links help fund open research — at no extra cost to you.
        </p>
      </div>

      {/* ================= PRODUCTS ================= */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '30px'
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              background: 'linear-gradient(135deg, #112240, #0a192f)',
              borderRadius: '20px',
              border: '1px solid rgba(64,145,255,0.25)',
              padding: '30px',
              position: 'relative'
            }}
          >
            {product.badge && (
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #64ffda, #4091ff)',
                  color: '#0a192f'
                }}
              >
                {product.badge}
              </div>
            )}

            <div
              style={{
                fontSize: '0.85rem',
                color: '#64ffda',
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}
            >
              {product.category}
            </div>

            <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>
              {product.name}
            </h3>

            <p style={{ color: '#a8b2d1', marginBottom: '18px' }}>
              {product.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {product.features.map((f, i) => (
                <span
                  key={i}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    background: 'rgba(100,255,218,0.1)',
                    border: '1px solid rgba(100,255,218,0.25)',
                    color: '#64ffda'
                  }}
                >
                  {f}
                </span>
              ))}
            </div>

            <div
              style={{
                marginTop: '25px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 800 }}>
                  {product.price}
                </div>
                <div
                  style={{
                    fontSize: '0.9rem',
                    color: '#8892b0',
                    textDecoration: 'line-through'
                  }}
                >
                  {product.originalPrice}
                </div>
              </div>

              <a
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '12px 24px',
                  borderRadius: '12px',
                  border: '2px solid rgba(100,255,218,0.4)',
                  color: '#64ffda',
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                Buy on Amazon ↗
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ================= LEGAL / DISCLOSURE ================= */}
      <div
        style={{
          maxWidth: '900px',
          margin: '80px auto 0',
          padding: '24px',
          borderRadius: '16px',
          background: 'rgba(17,34,64,0.6)',
          border: '1px solid rgba(64,145,255,0.3)',
          fontSize: '0.85rem',
          color: '#8892b0'
        }}
      >
        <strong>Affiliate Disclosure:</strong>  
        AgenticEdge participates in the Amazon Associates Program.  
        Amazon OneLink automatically redirects you to your local Amazon store and
        ensures commissions are tracked correctly.
      </div>
    </section>
  );
}
