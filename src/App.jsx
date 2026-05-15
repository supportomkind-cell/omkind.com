export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#fffaf5',
        padding: '40px',
        textAlign: 'center',
        fontFamily: 'Arial',
      }}
    >
      <h1
        style={{
          color: '#b45309',
          fontSize: '60px',
        }}
      >
        OM KIND
      </h1>

      <p
        style={{
          fontSize: '24px',
          color: '#555',
        }}
      >
        Premium Ayurvedic Wellness Formula
      </p>

      <img
        src="https://images.unsplash.com/photo-1585435557343-3b092031d4f7?q=80&w=1200&auto=format&fit=crop"
        alt="OM KIND"
        style={{
          width: '100%',
          maxWidth: '700px',
          borderRadius: '20px',
          marginTop: '30px',
        }}
      />

      <p
        style={{
          maxWidth: '800px',
          margin: '30px auto',
          lineHeight: '1.8',
          color: '#666',
        }}
      >
        Traditional wellness blend crafted with premium herbal ingredients
        designed for modern lifestyle support and wellness.
      </p>

      <button
        style={{
          background: '#b45309',
          color: 'white',
          border: 'none',
          padding: '15px 35px',
          borderRadius: '10px',
          fontSize: '18px',
          cursor: 'pointer',
        }}
      >
        Order Now
      </button>
    </div>
  )
}
