'use client';

import { useState, useEffect } from 'react';

// Your affiliate tag - REPLACE WITH YOUR OWN when you get it
const YOUR_AFFILIATE_TAG = 'agenticedge-20';

export default function MonetizationModule() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "AMD Ryzen 9 7950X",
      category: "CPU",
      price: "$599",
      originalPrice: "$699",
      discount: "14%",
      affiliateLink: `https://www.amazon.com/dp/B0C4N5PJVC?tag=${YOUR_AFFILIATE_TAG}`,
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop",
      rating: 4.8,
      features: ["16 Cores", "5.7GHz Boost", "AI Acceleration"],
      badge: "BEST VALUE"
    },
    {
      id: 2,
      name: "NVIDIA RTX 4090",
      category: "GPU",
      price: "$1,599",
      originalPrice: "$1,999",
      discount: "20%",
      affiliateLink: `https://www.amazon.com/dp/B0CHHZ8V2T?tag=${YOUR_AFFILIATE_TAG}`,
      image: "https://images.unsplash.com/photo-1591470426680-86c82e5cb3c3?w=400&h=300&fit=crop",
      rating: 4.9,
      features: ["24GB GDDR6X", "DLSS 3", "4K AI Rendering"],
      badge: "TOP PERFORMER"
    },
    {
      id: 3,
      name: "Apple M2 Ultra",
      category: "Workstation",
      price: "$3,999",
      originalPrice: "$4,499",
      discount: "11%",
      affiliateLink: `https://www.amazon.com/dp/B0C5J8BQ8G?tag=${YOUR_AFFILIATE_TAG}`,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w-400&h=300&fit=crop",
      rating: 4.7,
      features: ["24-Core CPU", "76-Core GPU", "Unified Memory"],
      badge: "MAC PRO"
    }
  ]);

  const [trackedClicks, setTrackedClicks] = useState(0);
  const [estimatedEarnings, setEstimatedEarnings] = useState(0);

  // Track clicks and calculate earnings
  const trackClick = (productName, commission = 5) => {
    setTrackedClicks(prev => prev + 1);
    setEstimatedEarnings(prev => prev + (commission * 0.01)); // $0.05 per click estimate
    
    // Send to analytics (simplified)
    console.log(`Affiliate click: ${productName}`);
  };

  // Add Amazon Associates disclaimer
  useEffect(() => {
    // This ensures compliance with Amazon's requirements
    const disclaimer = document.createElement('div');
    disclaimer.id = 'amazon-disclaimer';
    disclaimer.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: white;
      border: 2px solid #ff9900;
      border-radius: 10px;
      padding: 15px;
      max-width: 300px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      z-index: 1000;
      display: none;
      font-size: 12px;
      color: #333;
    `;
    disclaimer.innerHTML = `
      <strong>Amazon Associates Disclosure</strong>
      <p style="margin: 8px 0">AgenticEdge is a participant in the Amazon Services LLC Associates Program.</p>
      <button onclick="this.parentElement.style.display='none'" 
        style="background: #ff9900; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer">
        Got it
      </button>
    `;
    document.body.appendChild(disclaimer);
    
    // Show disclaimer on first visit
    if (!localStorage.getItem('disclaimer-shown')) {
      setTimeout(() => {
        disclaimer.style.display = 'block';
        localStorage.setItem('disclaimer-shown', 'true');
      }, 3000);
    }
    
    return () => {
      if (document.getElementById('amazon-disclaimer')) {
        document.body.removeChild(disclaimer);
      }
    };
  }, []);

  return (
    <section style={{
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      padding: '60px 20px',
      position: 'relative'
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto 50px',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'inline-block',
          background: 'linear-gradient(45deg, #ff9900, #ff6600)',
          color: 'white',
          padding: '8px 20px',
          borderRadius: '20px',
          fontWeight: '600',
          fontSize: '0.9rem',
          marginBottom: '20px'
        }}>
          💰 EARN WHILE YOU LEARN
        </div>
        
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '800',
          color: '#333',
          marginBottom: '15px'
        }}>
          Recommended AI Hardware
        </h2>
        
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          These affiliate links support our independent testing at <strong>no extra cost to you</strong>. 
          We earn a small commission if you purchase.
        </p>
        
        {/* Earnings Tracker */}
        <div style={{
          background: 'rgba(255, 153, 0, 0.1)',
          border: '2px dashed #ff9900',
          borderRadius: '15px',
          padding: '15px',
          margin: '30px auto',
          maxWidth: '500px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{ textAlign: 'center', padding: '10px' }}>
            <div style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: '#ff6600'
            }}>{trackedClicks}</div>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>Clicks Tracked</div>
          </div>
          
          <div style={{ textAlign: 'center', padding: '10px' }}>
            <div style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              color: '#00a859'
            }}>${estimatedEarnings.toFixed(2)}</div>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>Estimated Earnings</div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
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
            background: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            border: '1px solid #eee',
            position: 'relative'
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
          }}>
            {/* Badge */}
            {product.badge && (
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: product.badge === 'BEST VALUE' ? '#00a859' : 
                           product.badge === 'TOP PERFORMER' ? '#ff9900' : '#007bff',
                color: 'white',
                padding: '5px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600',
                zIndex: '2'
              }}>
                {product.badge}
              </div>
            )}
            
            {/* Image */}
            <div style={{
              height: '200px',
              background: `linear-gradient(45deg, #f5f5f5, #e0e0e0)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{
                width: '180px',
                height: '180px',
                background: '#f0f0f0',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem'
              }}>
                {product.category === 'CPU' && '⚡'}
                {product.category === 'GPU' && '🎮'}
                {product.category === 'Workstation' && '💻'}
              </div>
              
              {/* Discount Badge */}
              <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '15px',
                background: '#ff4444',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '10px',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                SAVE {product.discount}
              </div>
            </div>
            
            {/* Product Info */}
            <div style={{ padding: '25px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '15px'
              }}>
                <div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#666',
                    marginBottom: '5px'
                  }}>
                    {product.category}
                  </div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: '#333',
                    margin: '0 0 10px 0'
                  }}>
                    {product.name}
                  </h3>
                </div>
                
                {/* Rating */}
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#ff9900',
                    fontWeight: '600'
                  }}>
                    ⭐ {product.rating}/5
                  </div>
                </div>
              </div>
              
              {/* Features */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '20px'
              }}>
                {product.features.map((feature, idx) => (
                  <span key={idx} style={{
                    background: '#f0f7ff',
                    color: '#0066cc',
                    padding: '5px 10px',
                    borderRadius: '15px',
                    fontSize: '0.85rem'
                  }}>
                    {feature}
                  </span>
                ))}
              </div>
              
              {/* Price */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px'
              }}>
                <div>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    color: '#333'
                  }}>
                    {product.price}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#999',
                    textDecoration: 'line-through'
                  }}>
                    {product.originalPrice}
                  </div>
                </div>
              </div>
              
              {/* Affiliate Button */}
              <a
                href={product.affiliateLink}
                target="_blank"
                rel="noopener noreferrer sponsored"
                onClick={() => trackClick(product.name, 5)}
                style={{
                  display: 'block',
                  width: '100%',
                  background: 'linear-gradient(45deg, #ff9900, #ff6600)',
                  color: 'white',
                  textAlign: 'center',
                  padding: '15px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'transform 0.2s',
                  cursor: 'pointer'
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                🔗 Check Price on Amazon
              </a>
              
              {/* Disclaimer */}
              <div style={{
                fontSize: '0.75rem',
                color: '#888',
                textAlign: 'center',
                marginTop: '15px',
                lineHeight: '1.4'
              }}>
                *As an Amazon Associate we earn from qualifying purchases.
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* How It Works */}
      <div style={{
        maxWidth: '800px',
        margin: '60px auto 0',
        background: 'white',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        border: '1px solid #eee'
      }}>
        <h3 style={{
          textAlign: 'center',
          fontSize: '1.5rem',
          fontWeight: '700',
          color: '#333',
          marginBottom: '25px'
        }}>
          💡 How This Supports Our Work
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '25px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(45deg, #00c6ff, #0072ff)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 15px',
              fontSize: '1.5rem'
            }}>🔬</div>
            <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>Independent Testing</h4>
            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.5' }}>
              Commissions fund our hardware testing lab
            </p>
          </div>
          
          <div>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(45deg, #00d2ff, #3a7bd5)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 15px',
              fontSize: '1.5rem'
            }}>📊</div>
            <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>Free Content</h4>
            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.5' }}>
              All benchmarks and guides remain free
            </p>
          </div>
          
          <div>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(45deg, #ff7e5f, #feb47b)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 15px',
              fontSize: '1.5rem'
            }}>⚡</div>
            <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>No Extra Cost</h4>
            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.5' }}>
              You pay the same price on Amazon
            </p>
          </div>
        </div>
      </div>
      
      {/* Amazon Associates Compliance */}
      <div style={{
        maxWidth: '800px',
        margin: '40px auto 0',
        padding: '20px',
        background: '#fff8e1',
        borderLeft: '4px solid #ff9900',
        borderRadius: '10px',
        fontSize: '0.85rem',
        color: '#5d4037'
      }}>
        <strong>Amazon Associates Disclosure:</strong> AgenticEdge is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases.
      </div>
    </section>
  );
}
