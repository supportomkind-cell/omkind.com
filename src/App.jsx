// src/App.jsx

export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        background: '#fffaf5',
        color: '#222',
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          padding: '80px 20px',
          textAlign: 'center',
          background: 'linear-gradient(to bottom, #fff7ed, white)',
        }}
      >
        <h1
          style={{
            fontSize: '70px',
            color: '#b45309',
            marginBottom: '10px',
            fontWeight: 'bold',
          }}
        >
          OM KIND
        </h1>

        <p
          style={{
            fontSize: '28px',
            color: '#555',
          }}
        >
          Premium Ayurvedic Wellness Formula
        </p>

        <p
          style={{
            maxWidth: '900px',
            margin: '30px auto',
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#666',
          }}
        >
          Traditional wellness blend crafted with premium herbal ingredients
          designed for modern lifestyle support, strength, energy, and wellness.
        </p>

        <button
          style={{
            background: '#b45309',
            color: 'white',
            border: 'none',
            padding: '16px 40px',
            borderRadius: '12px',
            fontSize: '18px',
            cursor: 'pointer',
          }}
        >
          Order Now
        </button>
      </section>

      {/* PRODUCT SECTION */}
      <section
        style={{
          padding: '80px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center',
          }}
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1585435557343-3b092031d4f7?q=80&w=1200&auto=format&fit=crop"
              alt="OM KIND"
              style={{
                width: '100%',
                borderRadius: '25px',
                boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
              }}
            />
          </div>

          <div>
            <h2
              style={{
                fontSize: '42px',
                color: '#111',
              }}
            >
              Natural Wellness Support
            </h2>

            <p
              style={{
                marginTop: '20px',
                lineHeight: '1.9',
                color: '#666',
                fontSize: '18px',
              }}
            >
              Crafted using traditional herbal wellness ingredients and modern
              premium manufacturing standards.
            </p>

            <div
              style={{
                marginTop: '30px',
                display: 'grid',
                gridTemplateColumns: 'repeat(2,1fr)',
                gap: '15px',
              }}
            >
              {[
                'Workout Support',
                'Daily Energy',
                'Mind Wellness',
                'Premium Formula',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    background: '#fef3c7',
                    padding: '18px',
                    borderRadius: '16px',
                    fontWeight: 'bold',
                    color: '#92400e',
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
          background: '#b45309',
          color: 'white',
          padding: '80px 20px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: 'auto',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: '44px',
            }}
          >
            Why Choose OM KIND?
          </h2>

          <div
            style={{
              marginTop: '50px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
            }}
          >
            {[
              {
                title: 'Premium Ingredients',
                desc: 'Carefully selected wellness ingredients for daily support.',
              },
              {
                title: 'Professional Packaging',
                desc: 'Modern branding with premium healthcare style design.',
              },
              {
                title: 'Trusted Formula',
                desc: 'Inspired by traditional wellness practices and quality.',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: 'white',
                  color: '#222',
                  padding: '35px',
                  borderRadius: '25px',
                }}
              >
                <h3
                  style={{
                    color: '#b45309',
                    fontSize: '24px',
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    marginTop: '15px',
                    color: '#666',
                    lineHeight: '1.8',
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        style={{
          padding: '80px 20px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '44px',
            color: '#111',
          }}
        >
          Contact Us
        </h2>

        <p
          style={{
            marginTop: '20px',
            color: '#666',
            fontSize: '18px',
          }}
        >
          For customer support, dealership, and product orders.
        </p>

        <div
          style={{
            marginTop: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            maxWidth: '1000px',
            marginInline: 'auto',
          }}
        >
          <div
            style={{
              background: 'white',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
            }}
          >
            <h3>WhatsApp</h3>
            <p>+91 XXXXX XXXXX</p>
          </div>

          <div
            style={{
              background: 'white',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
            }}
          >
            <h3>Email</h3>
            <p>support@omkind.com</p>
          </div>

          <div
            style={{
              background: 'white',
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
            }}
          >
            <h3>Manufactured By</h3>
            <p>SIDDHAM ENTERPRISES</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: '#111',
          color: '#999',
          textAlign: 'center',
          padding: '25px',
        }}
      >
        © 2026 OM KIND. All Rights Reserved.
      </footer>
    </div>
  )
}
