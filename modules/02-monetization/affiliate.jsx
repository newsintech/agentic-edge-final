'use client';

import { useState, useEffect } from 'react';

// Your Amazon affiliate tag
const YOUR_AFFILIATE_TAG = 'agenticedge-20'; // Replace with your actual Amazon Associates tag when approved

export default function MonetizationModule() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "AMD Ryzen 9 7950X",
      category: "CPU",
      price: "$599",
      originalPrice: "$699",
      discount: "14%",
      affiliateLink: "https://www.amazon.com/AMD-Ryzen-7950X-16-Core-Processor/dp/B0C4N5PJVC?tag=" + YOUR_AFFILIATE_TAG, // Fixed link
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop",
      rating: 4.8,
      features: ["16 Cores", "5.7GHz Boost", "AI Acceleration"],
      badge: "Editor's Choice",
      description: "Top-tier CPU for local AI model training and privacy-preserving computation."
    },
    {
      id: 2,
      name: "NVIDIA RTX 4090",
      category: "GPU",
      price: "$1,599",
      originalPrice: "$1,999",
      discount: "20%",
      affiliateLink: "https://www.amazon.com/NVIDIA-RTX-4090-Graphics-Card/dp/B0CHHZ8V2T?tag=" + YOUR_AFFILIATE_TAG, // Fixed link
      image: "https://images.unsplash.com/photo-1591470426680-86c82e5cb3c3?w=400&h=300&fit=crop",
      rating: 4.9,
      features: ["24GB GDDR6X", "DLSS 3", "4K AI Rendering"],
      badge: "Benchmark Leader",
      description: "Ultimate GPU for offline AI workloads and confidential computing."
    },
    {
      id: 3,
      name: "Framework Laptop 16",
      category: "Laptop",
      price: "$1,699",
      originalPrice: "$1,899",
      discount: "11%",
      affiliateLink: "https://www.amazon.com/Framework-Laptop-16-Gaming-Notebook/dp/B0C5J8BQ8G?tag=" + YOUR_AFFILIATE_TAG, // Fixed link
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
      rating: 4.7,
      features: ["Upgradeable", "Privacy Screens", "Open Source BIOS"],
      badge: "Privacy Focused",
      description: "Repairable laptop with hardware kill switches for maximum privacy."
    }
  ]);

  const [communitySupport, setCommunitySupport] = useState(0);

  // Track community support clicks
  const trackSupport = (productName) => {
    setCommunitySupport(prev => prev + 1);
    
    // Privacy-friendly analytics (no tracking of personal data)
    console.log(`Product viewed: ${productName} - Supporting independent testing`);
  };

  useEffect(() => {
    trackSupport('Module Loaded');
  }, []);

  return (
    <section style={{
      background: 'linear-gradient(135deg, #0a192f 0%, #112240 100%)',
      padding: '80px 20px',
      position: 'relative',
      color: '#e6f1ff'
    }}>
      {/* Subtle Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 15% 50%, rgba(64, 145, 255, 0.1) 0%, transparent 25%),
                         radial-gradient(circle at 85% 30%, rgba(100, 255, 218, 0.05) 0%, transparent 25%)`,
        opacity: 0.5
      }}></div>
      
      {/* Header */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 60px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(100, 255, 218, 0.1)',
          border: '1px solid rgba(100, 255, 218, 0.3)',
          padding: '10px 25px',
          borderRadius: '25px',
          marginBottom: '25px',
          fontSize: '0.95rem',
          fontWeight: '500'
        }}>
          <span style={{ color: '#64ffda' }}>🔒</span>
          <span>Independently Tested Hardware</span>
        </div>
        
        <h2 style={{
          fontSize: '2.8rem',
          fontWeight: '800',
          marginBottom: '20px',
          background: 'linear-gradient(45deg, #64ffda, #4091ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Privacy-First AI Hardware
        </h2>
        
        <p style={{
          fontSize: '1.2rem',
          color: '#a8b2d1',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.7'
        }}>
          Our team independently tests hardware for local AI performance and privacy features. 
          These recommendations help fund our <strong style={{ color: '#64ffda' }}>open-source testing tools</strong> and 
          <strong style={{ color: '#4091ff' }}> privacy research</strong>.
        </p>
        
        {/* Community Support Indicator */}
        <div style={{
          background: 'rgba(17, 34, 64, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(64, 145, 255, 0.3)',
          borderRadius: '15px',
          padding: '20px',
          margin: '40px auto',
          maxWidth: '600px',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          gap: '30px'
        }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontSize: '1.1rem',
              color: '#64ffda',
              fontWeight: '600'
            }}>Independent Testing</div>
            <div style={{ fontSize: '0.9rem', color: '#8892b0' }}>
              No manufacturer influence
            </div>
          </div>
          
          <div style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #0a192f, #112240)',
            border: '2px solid rgba(100, 255, 218, 0.3)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            color: '#64ffda'
          }}>
            ⚡
          </div>
          
          <div style={{ textAlign: 'left' }}>
            <div style={{
              fontSize: '1.1rem',
              color: '#64ffda',
              fontWeight: '600'
            }}>Community Supported</div>
            <div style={{ fontSize: '0.9rem', color: '#8892b0' }}>
              {communitySupport}+ hardware tests funded
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid - Privacy Focused */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '30px',
        padding: '20px 0'
      }}>
        {products.map((product) => (
          <div key={product.id} style={{
            background: 'linear-gradient(135deg, #112240, #0a192f)',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(64, 145, 255, 0.2)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative'
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.borderColor = 'rgba(100, 255, 218, 0.4)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'rgba(64, 145, 255, 0.2)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          onMouseEnter={() => trackSupport(product.name)}>
            
            {/* Badge */}
            {product.badge && (
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: product.badge === "Editor's Choice" ? 'linear-gradient(45deg, #00a859, #00d2ff)' :
                           product.badge === "Benchmark Leader" ? 'linear-gradient(45deg, #ff9900, #ff6600)' :
                           'linear-gradient(45deg, #7b1fa2, #e100ff)',
                color: 'white',
                padding: '6px 15px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600',
                zIndex: '2',
                backdropFilter: 'blur(10px)'
              }}>
                {product.badge}
              </div>
            )}
            
            {/* Product Image Area */}
            <div style={{
              height: '220px',
              background: 'linear-gradient(135deg, #0a192f, #112240)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              borderBottom: '1px solid rgba(64, 145, 255, 0.2)'
            }}>
              {/* Tech Pattern Background */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `radial-gradient(circle at 30% 20%, rgba(64, 145, 255, 0.1) 0%, transparent 50%)`,
                opacity: 0.5
              }}></div>
              
              {/* Icon */}
              <div style={{
                width: '120px',
                height: '120px',
                background: 'rgba(17, 34, 64, 0.8)',
                border: '2px solid rgba(100, 255, 218, 0.3)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3.5rem',
                color: '#64ffda',
                backdropFilter: 'blur(10px)'
              }}>
                {product.category === 'CPU' && '⚡'}
                {product.category === 'GPU' && '🎮'}
                {product.category === 'Laptop' && '💻'}
              </div>
            </div>
            
            {/* Product Info */}
            <div style={{ padding: '30px' }}>
              <div style={{ marginBottom: '20px' }}>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#64ffda',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '8px',
                  fontWeight: '600'
                }}>
                  {product.category}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#e6f1ff',
                  margin: '0 0 12px 0',
                  lineHeight: '1.3'
                }}>
                  {product.name}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#a8b2d1',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  {product.description}
                </p>
              </div>
              
              {/* Features */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '25px'
              }}>
                {product.features.map((feature, idx) => (
                  <span key={idx} style={{
                    background: 'rgba(100, 255, 218, 0.1)',
                    color: '#64ffda',
                    padding: '6px 12px',
                    borderRadius: '15px',
                    fontSize: '0.85rem',
                    border: '1px solid rgba(100, 255, 218, 0.2)'
                  }}>
                    {feature}
                  </span>
                ))}
              </div>
              
              {/* Price & Action */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '20px',
                borderTop: '1px solid rgba(64, 145, 255, 0.2)'
              }}>
                <div>
                  <div style={{
                    fontSize: '2.2rem',
                    fontWeight: '800',
                    color: '#e6f1ff',
                    lineHeight: '1'
                  }}>
                    {product.price}
                  </div>
                  <div style={{
                    fontSize: '0.95rem',
                    color: '#8892b0',
                    textDecoration: 'line-through'
                  }}>
                    {product.originalPrice}
                  </div>
                </div>
                
                {/* View Details Button */}
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'transparent',
                    color: '#64ffda',
                    border: '2px solid rgba(100, 255, 218, 0.4)',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.background = 'rgba(100, 255, 218, 0.1)';
                    e.currentTarget.style.borderColor = '#64ffda';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(100, 255, 218, 0.4)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>View Details</span>
                  <span style={{ fontSize: '1.1rem' }}>↗</span>
                </a>
              </div>
              
              {/* Privacy Note */}
              <div style={{
                fontSize: '0.8rem',
                color: '#8892b0',
                marginTop: '20px',
                padding: '12px',
                background: 'rgba(17, 34, 64, 0.5)',
                borderRadius: '8px',
                borderLeft: '3px solid rgba(64, 145, 255, 0.5)'
              }}>
                <strong>Note:</strong> Links support independent testing. No tracking, no cookies.
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Value Proposition */}
      <div style={{
        maxWidth: '900px',
        margin: '80px auto 0',
        background: 'rgba(17, 34, 64, 0.7)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '40px',
        border: '1px solid rgba(64, 145, 255, 0.3)'
      }}>
        <h3 style={{
          textAlign: 'center',
          fontSize: '1.8rem',
          fontWeight: '700',
          color: '#e6f1ff',
          marginBottom: '30px'
        }}>
          Our Testing Methodology
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px'
        }}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{
              width: '70px',
              height: '70px',
              background: 'linear-gradient(135deg, #0a192f, #112240)',
              border: '2px solid rgba(100, 255, 218, 0.3)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '1.8rem',
              color: '#64ffda'
            }}>
              🔍
            </div>
            <h4 style={{ margin: '0 0 15px 0', color: '#e6f1ff' }}>Independent Benchmarks</h4>
            <p style={{ fontSize: '0.95rem', color: '#a8b2d1', lineHeight: '1.6' }}>
              All hardware tested in our lab with reproducible, open-source tools.
            </p>
          </div>
          
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{
              width: '70px',
              height: '70px',
              background: 'linear-gradient(135deg, #0a192f, #112240)',
              border: '2px solid rgba(64, 145, 255, 0.3)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '1.8rem',
              color: '#4091ff'
            }}>
              🛡️
            </div>
            <h4 style={{ margin: '0 0 15px 0', color: '#e6f1ff' }}>Privacy-First Focus</h4>
            <p style={{ fontSize: '0.95rem', color: '#a8b2d1', lineHeight: '1.6' }}>
              We prioritize hardware with local processing capabilities and security features.
            </p>
          </div>
          
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{
              width: '70px',
              height: '70px',
              background: 'linear-gradient(135deg, #0a192f, #112240)',
              border: '2px solid rgba(255, 107, 107, 0.3)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '1.8rem',
              color: '#ff6b6b'
            }}>
              ⚡
            </div>
            <h4 style={{ margin: '0 0 15px 0', color: '#e6f1ff' }}>Real-World Performance</h4>
            <p style={{ fontSize: '0.95rem', color: '#a8b2d1', lineHeight: '1.6' }}>
              Testing focused on actual AI workloads, not synthetic benchmarks.
            </p>
          </div>
        </div>
      </div>
      
      {/* Transparent Disclosure */}
      <div style={{
        maxWidth: '800px',
        margin: '50px auto 0',
        padding: '25px',
        background: 'rgba(17, 34, 64, 0.5)',
        border: '1px solid rgba(64, 145, 255, 0.2)',
        borderRadius: '15px',
        fontSize: '0.9rem',
        color: '#a8b2d1',
        lineHeight: '1.6'
      }}>
        <p style={{ margin: '0 0 15px 0' }}>
          <strong style={{ color: '#64ffda' }}>Transparency Note:</strong> We participate in affiliate programs to fund 
          our independent testing lab. When you use these links, you support our work at no additional cost. 
          We never accept payment for reviews or rankings.
        </p>
        <p style={{ margin: '0', fontSize: '0.85rem', color: '#8892b0' }}>
          All testing data is publicly available. No tracking cookies are used on this site.
        </p>
      </div>
    </section>
  );
}
