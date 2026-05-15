export default function OMKindWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white text-gray-800">
      {/* HERO SECTION */}
      <section className="px-6 py-16 md:px-20 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-amber-700">
            OM KIND
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-medium text-gray-700">
            Premium Ayurvedic Wellness Formula
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Traditional wellness blend crafted with powerful herbal ingredients
            to support strength, stamina, workout performance, and daily energy.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-4 rounded-2xl text-lg shadow-lg transition">
              Order Now
            </button>

            <button className="border border-amber-700 text-amber-700 px-8 py-4 rounded-2xl text-lg hover:bg-amber-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="px-6 md:px-20 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-amber-100">
            <img
              src="https://images.unsplash.com/photo-1585435557343-3b092031d4f7?q=80&w=1200&auto=format&fit=crop"
              alt="OM KIND Product"
              className="rounded-2xl w-full h-[420px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              Natural Power & Wellness Support
            </h2>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Designed for modern lifestyle support with a premium herbal blend.
              Crafted professionally for daily wellness and performance.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                'Workout Support',
                'Daily Energy',
                'Mind Wellness',
                'Traditional Formula',
              ].map((item) => (
                <div
                  key={item}
                  className="bg-amber-100 text-amber-800 p-4 rounded-2xl font-semibold shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-amber-700 text-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Why Choose OM KIND?</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Premium Ingredients',
                desc: 'Traditional herbal ingredients selected with care and quality.',
              },
              {
                title: 'Daily Wellness',
                desc: 'Supports active lifestyle and regular wellness routine.',
              },
              {
                title: 'Trusted Formula',
                desc: 'Professionally packed with premium branding and quality standards.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white text-gray-800 rounded-3xl p-8 shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-amber-700">
                  {card.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INGREDIENTS */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Premium Herbal Blend
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Crafted using traditional wellness ingredients and modern packaging.
          </p>

          <div className="grid md:grid-cols-4 gap-5 mt-12">
            {['Honey', 'Herbal Extracts', 'Natural Blend', 'Ayurvedic Support'].map(
              (item) => (
                <div
                  key={item}
                  className="border border-amber-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
                >
                  <p className="font-bold text-lg text-amber-700">{item}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-16 px-6 md:px-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Contact Us</h2>

          <p className="mt-5 text-gray-300 text-lg">
            For orders, dealership, and customer support.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="font-bold text-xl">WhatsApp</h3>
              <p className="mt-2 text-gray-300">+91 XXXXX XXXXX</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="font-bold text-xl">Email</h3>
              <p className="mt-2 text-gray-300">support@omkind.com</p>
            </div>

            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="font-bold text-xl">Manufactured By</h3>
              <p className="mt-2 text-gray-300">SIDDHAM ENTERPRISES</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 text-center py-6 text-sm">
        © 2026 OM KIND. All Rights Reserved.
      </footer>
    </div>
  );
}
