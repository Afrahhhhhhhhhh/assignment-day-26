import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div className="bg-[#F4F0EA]">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#B28A66] px-4 md:px-10 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center font-[Figtree]">
        <div>
          <h1 className="text-4xl md:text-[80px] font-bold text-black mb-4 leading-tight">
            Crumbs, Cream,<br />Happiness
          </h1>
          <p className="text-lg md:text-[32px] text-white mb-6">
            Every bite brings comfort and a little joy — a simple sweetness that makes your day feel brighter.
          </p>
          <button className="px-10 py-4 bg-white text-black rounded-full font-semibold text-sm md:text-2xl hover:opacity-80">
            See All Menu →
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src="https://i.pinimg.com/1200x/c0/bf/1a/c0bf1a44da5908a9839b6d2255579a27.jpg"
            className="w-full max-w-[250px] md:max-w-[500px] rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="py-16 px-4 md:px-10 text-center font-[Figtree]">
        <h2 className="text-3xl font-bold mb-2">OUR SIGNATURE</h2>
        <p className="text-gray-600 mb-10">Try them all to enjoy the full experience</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="signature-card">
            <img
              src="https://i.pinimg.com/736x/55/b8/c3/55b8c3a7f594ad3196a4c1acc38860fa.jpg"
              className="signature-image"
            />
            <h3 className="signature-name">Apple Biscuit</h3>
            <p className="signature-desc">A delicate biscuit infused with real apple essence.</p>
            <p className="signature-price">Rp 25.000</p>
            <button className="signature-btn">Add to cart</button>
          </div>

          <div className="signature-card">
            <img
              src="https://i.pinimg.com/736x/c8/0d/32/c80d32a6f5f15bdc2746caf756ed02fb.jpg"
              className="signature-image"
            />
            <h3 className="signature-name">Susuwatari Biscuit</h3>
            <p className="signature-desc">Strawberry chocolate flavor with cute topping.</p>
            <p className="signature-price">Rp 25.000</p>
            <button className="signature-btn">Add to cart</button>
          </div>

          <div className="signature-card">
            <img
              src="https://i.pinimg.com/736x/40/de/1c/40de1c387ed778d5d09063d7799705fa.jpg"
              className="signature-image"
            />
            <h3 className="signature-name">Matcha Oreo</h3>
            <p className="signature-desc">Matcha biscuit with creamy Oreo filling.</p>
            <p className="signature-price">Rp 25.000</p>
            <button className="signature-btn">Add to cart</button>
          </div>

          <div className="signature-card">
            <img
              src="https://i.pinimg.com/736x/13/27/4f/13274f74781055e82755fb91fbb58453.jpg"
              className="signature-image"
            />
            <h3 className="signature-name">SET Scary Set</h3>
            <p className="signature-desc">6 flavors in one colorful set.</p>
            <p className="signature-price">Rp 25.000</p>
            <button className="signature-btn">Add to cart</button>
          </div>
        </div>
      </section>

      {/* PROMO */}
      <section className="px-4 md:px-10 py-16 font-[Figtree]">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-2">
          HOT DEALS, FRESH BISCUITS
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Sweet bites, sweet prices
        </p>
      </section>
    </div>
  )
}

export default Home
