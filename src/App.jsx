export default function App() {
  const products = [
    {
      name: 'OM KIND Premium Formula',
      desc: 'Luxury Ayurvedic wellness support crafted for strength and vitality.',
      price: '₹2,499',
      image:
        'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'OM KIND Gold Wellness',
      desc: 'Premium herbal blend inspired by timeless wellness traditions.',
      price: '₹3,199',
      image:
        'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'OM KIND Royal Blend',
      desc: 'Elegant wellness formula designed for premium lifestyle support.',
      price: '₹2,899',
      image:
        'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <div
      style={{
        background: '#f8f4ec',
        color: '#1f1f1f',
        fontFamily: 'Georgia, serif',
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '25px 40px',
          background: '#f8f4ec',
          borderBottom: '1px solid #d9c6a7',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <h1
          style={{
            color: '#6d4c27',
            fontSize: '32px',
            margin: 0,
          }}
        >
          OM KIND
        </h1>

        <div
          style={{
            display: 'flex',
            gap: '25px',
            fontSize: '16px',
          }}
        >
          <a href="#home" style={linkStyle}>Home</a>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#products" style={linkStyle}>Products</a>
          <a href="#reviews" style={linkStyle}>Reviews</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        style={{
          padding: '120px 20px',
          textAlign: 'center',
          background:
            'linear-gradient(to bottom, #f8f4ec, #efe3cf)',
        }}
      >
        <p
          style={{
            letterSpacing: '4px',
            color: '#8b6b3f',
          }}
        >
          PREMIUM AYURVEDIC WELLNESS
        </p>

        <h1
          style={{
            fontSize: '82px',
            color: '#2f2417',
            margin: '20px 0',
          }}
        >
          OM KIND
        </h1>

        <p
          style={{
            maxWidth: '850px',
            margin: 'auto',
            fontSize: '20px',
            lineHeight: '2',
            color: '#5a4c3b',
          }}
        >
          Old money luxury inspired Ayurvedic wellness experience crafted with
          premium herbal traditions and modern elegance.
        </p>

        <div
          style={{
            marginTop: '45px',
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          <button style={primaryBtn}>Explore Products</button>
          <button style={secondaryBtn}>Order On WhatsApp</button>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          padding: '100px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1300px',
            margin: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop"
            alt="OM KIND"
            style={{
              width: '100%',
              borderRadius: '30px',
              boxShadow: '0 25px 60px rgba(0,0,0,0.18)',
            }}
          />

          <div>
            <p style={{ color: '#8b6b3f', letterSpacing: '3px' }}>
              HERITAGE WELLNESS
            </p>

            <h2
              style={{
                fontSize: '56px',
                color: '#2f2417',
              }}
            >
              Luxury Ayurveda For Modern Lifestyle
            </h2>

            <p
              style={{
                lineHeight: '2',
                color: '#5a4c3b',
                fontSize: '18px',
                marginTop: '25px',
              }}
            >
              OM KIND blends elegance, herbal wellness, and refined luxury into
              one premium healthcare experience designed for daily vitality and
              wellness support.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2,1fr)',
                gap: '18px',
                marginTop: '35px',
              }}
            >
              {[
                'Premium Herbal Blend',
                'Luxury Wellness',
                'Daily Vitality',
                'Performance Support',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    background: '#efe3cf',
                    padding: '20px',
                    borderRadius: '18px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: '#6d4c27',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        style={{
          padding: '100px 20px',
          background: '#2f2417',
        }}
      >
        <div style={{ maxWidth: '1300px', margin: 'auto' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#d7b98c', letterSpacing: '4px' }}>
              PREMIUM COLLECTION
            </p>

            <h2
              style={{
                color: '#fff',
                fontSize: '56px',
                marginTop: '20px',
              }}
            >
              Our Products
            </h2>
          </div>

          <div
            style={{
              marginTop: '60px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
              gap: '30px',
            }}
          >
            {products.map((product) => (
              <div
                key={product.name}
                style={{
                  background: '#f8f4ec',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.18)',
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: '100%',
                    height: '260px',
                    objectFit: 'cover',
                  }}
                />

                <div style={{ padding: '30px' }}>
                  <h3
                    style={{
                      color: '#6d4c27',
                      fontSize: '28px',
                    }}
                  >
                    {product.name}
                  </h3>

                  <p
                    style={{
                      color: '#555',
                      lineHeight: '1.9',
                      marginTop: '15px',
                    }}
                  >
                    {product.desc}
                  </p>

                  <h4
                    style={{
                      marginTop: '20px',
                      color: '#2f2417',
                      fontSize: '24px',
                    }}
                  >
                    {product.price}
                  </h4>

                  <button style={{ ...primaryBtn, width: '100%' }}>
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section
        id="reviews"
        style={{
          padding: '100px 20px',
          textAlign: 'center',
        }}
      >
        <p style={{ color: '#8b6b3f', letterSpacing: '3px' }}>
          CUSTOMER EXPERIENCE
        </p>

        <h2
          style={{
            fontSize: '52px',
            color: '#2f2417',
            marginTop: '20px',
          }}
        >
          Trusted By Wellness Lovers
        </h2>

        <div
          style={{
            maxWidth: '1200px',
            margin: '60px auto 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: '25px',
          }}
        >
          {[
            'Elegant packaging and premium wellness feel.',
            'Luxury Ayurvedic branding that looks world class.',
            'Amazing product presentation and modern experience.',
          ].map((review) => (
            <div
              key={review}
              style={{
                background: '#fff',
                padding: '35px',
                borderRadius: '24px',
                boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
              }}
            >
              <p
                style={{
                  color: '#5a4c3b',
                  lineHeight: '2',
                  fontSize: '18px',
                }}
              >
                “{review}”
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          background: '#efe3cf',
          padding: '90px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
            gap: '25px',
          }}
        >
          <div style={contactCard}>
            <h3 style={contactTitle}>WhatsApp</h3>
            <p>+91 XXXXX XXXXX</p>
          </div>

          <div style={contactCard}>
            <h3 style={contactTitle}>Email</h3>
            <p>support@omkind.com</p>
          </div>

          <div style={contactCard}>
            <h3 style={contactTitle}>Manufactured By</h3>
            <p>SIDDHAM ENTERPRISES</p>
          </div>
        </div>
      </section>

      {/* WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/91"
        target="_blank"
        rel="noreferrer"
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          background: '#25D366',
          color: 'white',
          padding: '18px 24px',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: 'bold',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        }}
      >
        WhatsApp
      </a>

      {/* FOOTER */}
      <footer
        style={{
          background: '#2f2417',
          color: '#d7b98c',
          textAlign: 'center',
          padding: '35px',
          letterSpacing: '2px',
        }}
      >
        © 2026 OM KIND — Premium Ayurvedic Wellness
      </footer>
    </div>
  )
}

const linkStyle = {
  textDecoration: 'none',
  color: '#5a4c3b',
  fontWeight: 'bold',
}

const primaryBtn = {
  padding: '16px 34px',
  background: '#7b5a33',
  color: 'white',
  border: 'none',
  borderRadius: '50px',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: '20px',
}

const secondaryBtn = {
  padding: '16px 34px',
  background: 'transparent',
  color: '#7b5a33',
  border: '2px solid #7b5a33',
  borderRadius: '50px',
  fontSize: '16px',
  cursor: 'pointer',
}

const contactCard = {
  background: '#fff',
  padding: '35px',
  borderRadius: '24px',
  textAlign: 'center',
}

const contactTitle = {
  color: '#7b5a33',
  marginBottom: '15px',
}
