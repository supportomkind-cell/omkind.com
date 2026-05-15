export default function App() {
  return (
    <div
      style={{
        backgroundColor: '#f8f4ec',
        color: '#1f1f1f',
        fontFamily: 'Georgia, serif',
        minHeight: '100vh',
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          padding: '90px 20px',
          textAlign: 'center',
          background:
            'linear-gradient(to bottom, #f8f4ec, #efe3cf)',
          borderBottom: '1px solid #d6c3a5',
        }}
      >
        <p
          style={{
            letterSpacing: '4px',
            color: '#8b6b3f',
            fontSize: '14px',
          }}
        >
          PREMIUM AYURVEDIC WELLNESS
        </p>

        <h1
          style={{
            fontSize: '78px',
            margin: '20px 0',
            color: '#2f2417',
            fontWeight: 'bold',
          }}
        >
          OM KIND
        </h1>

        <p
          style={{
            maxWidth: '850px',
            margin: 'auto',
            fontSize: '20px',
            lineHeight: '1.9',
            color: '#5a4c3b',
          }}
        >
          Crafted with timeless Ayurvedic traditions and refined herbal
          wellness philosophy to support strength, vitality, recovery,
          performance, and premium daily wellness.
        </p>

        <button
          style={{
            marginTop: '40px',
            padding: '18px 42px',
            backgroundColor: '#7b5a33',
            color: '#fff',
            border: 'none',
            borderRadius: '50px',
            fontSize: '18px',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          }}
        >
          Explore Collection
        </button>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section
        style={{
          padding: '90px 20px',
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
          <div>
            <img
              src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop"
              alt="OM KIND"
              style={{
                width: '100%',
                borderRadius: '30px',
                boxShadow: '0 25px 60px rgba(0,0,0,0.18)',
              }}
            />
          </div>

          <div>
            <p
              style={{
                color: '#8b6b3f',
                letterSpacing: '3px',
                fontSize: '14px',
              }}
            >
              HERITAGE WELLNESS
            </p>

            <h2
              style={{
                fontSize: '52px',
                marginTop: '20px',
                color: '#2f2417',
              }}
            >
              Old Money Luxury Meets Ayurveda
            </h2>

            <p
              style={{
                marginTop: '25px',
                lineHeight: '2',
                fontSize: '18px',
                color: '#5a4c3b',
              }}
            >
              OM KIND blends premium herbal traditions with sophisticated
              wellness aesthetics designed for modern lifestyle support,
              luxury branding, and natural vitality.
            </p>

            <div
              style={{
                marginTop: '35px',
                display: 'grid',
                gridTemplateColumns: 'repeat(2,1fr)',
                gap: '18px',
              }}
            >
              {[
                'Premium Herbal Blend',
                'Luxury Wellness',
                'Performance Support',
                'Daily Vitality',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    backgroundColor: '#efe3cf',
                    padding: '18px',
                    borderRadius: '18px',
                    textAlign: 'center',
                    color: '#5c4322',
                    fontWeight: 'bold',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section
        style={{
          backgroundColor: '#2f2417',
          color: '#fff',
          padding: '90px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: 'auto',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              letterSpacing: '3px',
              color: '#c7a978',
            }}
          >
            WHY PEOPLE TRUST OM KIND
          </p>

          <h2
            style={{
              fontSize: '52px',
              marginTop: '20px',
            }}
          >
            Premium Ayurvedic Experience
          </h2>

          <div
            style={{
              marginTop: '60px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
              gap: '30px',
            }}
          >
            {[
              {
                title: 'Luxury Ingredients',
                desc: 'Selected premium herbal ingredients inspired by traditional Ayurvedic wellness.',
              },
              {
                title: 'Elegant Branding',
                desc: 'Designed with refined old money aesthetics and premium healthcare identity.',
              },
              {
                title: 'Modern Wellness',
                desc: 'Supports active lifestyle, wellness routine, and natural vitality.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: '#f8f4ec',
                  color: '#222',
                  padding: '40px',
                  borderRadius: '28px',
                }}
              >
                <h3
                  style={{
                    color: '#7b5a33',
                    fontSize: '28px',
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    marginTop: '18px',
                    lineHeight: '1.9',
                    color: '#555',
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section
        style={{
          padding: '90px 20px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            color: '#8b6b3f',
            letterSpacing: '3px',
          }}
        >
          WELLNESS PHILOSOPHY
        </p>

        <h2
          style={{
            fontSize: '50px',
            color: '#2f2417',
            marginTop: '20px',
          }}
        >
          Crafted For Premium Lifestyle
        </h2>

        <p
          style={{
            maxWidth: '900px',
            margin: '35px auto',
            lineHeight: '2',
            fontSize: '19px',
            color: '#5a4c3b',
          }}
        >
          OM KIND represents refined Ayurvedic wellness inspired by heritage,
          purity, elegance, and modern luxury health branding.
        </p>
      </section>

      {/* CONTACT */}
      <section
        style={{
          backgroundColor: '#efe3cf',
          padding: '80px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
            gap: '25px',
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '35px',
              borderRadius: '24px',
            }}
          >
            <h3 style={{ color: '#7b5a33' }}>WhatsApp</h3>
            <p style={{ color: '#555' }}>+91 XXXXX XXXXX</p>
          </div>

          <div
            style={{
              backgroundColor: '#fff',
              padding: '35px',
              borderRadius: '24px',
            }}
          >
            <h3 style={{ color: '#7b5a33' }}>Email</h3>
            <p style={{ color: '#555' }}>support@omkind.com</p>
          </div>

          <div
            style={{
              backgroundColor: '#fff',
              padding: '35px',
              borderRadius: '24px',
            }}
          >
            <h3 style={{ color: '#7b5a33' }}>Manufactured By</h3>
            <p style={{ color: '#555' }}>SIDDHAM ENTERPRISES</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: '#2f2417',
          color: '#c9b18d',
          textAlign: 'center',
          padding: '30px',
          letterSpacing: '2px',
        }}
      >
        © 2026 OM KIND — Premium Ayurvedic Wellness
      </footer>
    </div>
  )
}
