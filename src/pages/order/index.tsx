import { useState } from "react"

type Product = {
  name: string
  price: number
  image: string
}

const products: Product[] = [
  {
    name: "Apple Biscuit",
    price: 25000,
    image: "https://i.pinimg.com/736x/55/b8/c3/55b8c3a7f594ad3196a4c1acc38860fa.jpg"
  },
  {
    name: "Susuwatari Biscuit",
    price: 25000,
    image: "https://i.pinimg.com/736x/c8/0d/32/c80d32a6f5f15bdc2746caf756ed02fb.jpg"
  },
  {
    name: "Matcha Oreo Biscuit",
    price: 25000,
    image: "https://i.pinimg.com/736x/40/de/1c/40de1c387ed778d5d09063d7799705fa.jpg"
  },
  {
    name: "SET Scary Biscuit",
    price: 25000,
    image: "https://i.pinimg.com/736x/13/27/4f/13274f74781055e82755fb91fbb58453.jpg"
  },
  {
    name: "Almond Biscuit",
    price: 25000,
    image: "https://i.pinimg.com/1200x/3c/67/61/3c6761ea665d3f61bbcbbbcc4713885e.jpg"
  },
  {
    name: "Choco Marshmallow Biscuit",
    price: 25000,
    image: "https://i.pinimg.com/736x/e3/42/73/e34273e8cb5c7599bd86c08b60c525dc.jpg"
  }
]

const Order = () => {
  const [qty, setQty] = useState<number[]>(Array(products.length).fill(0))

  const increase = (index: number) => {
    const newQty = [...qty]
    newQty[index]++
    setQty(newQty)
  }

  const decrease = (index: number) => {
    const newQty = [...qty]
    if (newQty[index] > 0) newQty[index]--
    setQty(newQty)
  }

  const totalItems = qty.reduce((a, b) => a + b, 0)
  const totalPrice = qty.reduce(
    (sum, q, i) => sum + q * products[i].price,
    0
  )

  return (
    <div className="bg-[#F4F0EA] min-h-screen font-[Figtree]">

      <section className="px-10 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">
          Treat Yourself with Our Biscuits
        </h2>
        <p className="text-center text-[#cfa689] mb-12">
          Choose your favorites and enjoy the sweetness
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img
                src={product.image}
                className="product-image"
              />
              <h3 className="product-title">{product.name}</h3>
              <p className="product-price">
  Rp {product.price.toLocaleString("id-ID")}
</p>

              <div className="qty-wrapper">
                <button
                  onClick={() => decrease(index)}
                  className="btn-minus"
                >
                  −
                </button>
                <span>{qty[index]}</span>
                <button
                  onClick={() => increase(index)}
                  className="btn-plus"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>

          <div className="flex justify-between mb-3">
            <span>Total Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between font-semibold text-lg mb-6">
            <span>Total Price</span>
            <span>Rp {totalPrice.toLocaleString("id-ID")}</span>
          </div>

          <button
            className="w-full py-3 bg-[#CFA689] text-white rounded-full font-semibold hover:opacity-80 transition"
          >
            PLACE ORDER
          </button>
        </div>
      </section>
    </div>
  )
}

export default Order
