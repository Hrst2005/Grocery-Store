import { useCart } from "../src/context/CartContext";

function Cart() {
  const { orders, updateCart, clearCart } = useCart();
  // totals
  const subtotal = orders.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // discount logic
  let discount = 0;
  if (subtotal > 2000) discount = subtotal * 0.1;
  else if (subtotal > 1000) discount = subtotal * 0.05;

  const discountedTotal = subtotal - discount;

  // tax
  const tax = discountedTotal * 0.05;

  const finalTotal = discountedTotal + tax;

  const handleCheckout = () => {
    alert("Order placed. Thank you!");
    clearCart();
  };

  return (
    <div className="pt-24 px-6 text-white min-h-screen">

      <h1 className="text-2xl font-bold mb-6"></h1>

      {/* Empty Cart */}
      {orders.length === 0 ? (
        <div className="text-center text-gray-400 mt-20">
          <h1>Your cart is empty🛒</h1>
        </div>
      ) : (
        <>
          {/*Items */}
          <div className="flex flex-col gap-4">

            {orders.map(item => (
              <div
                key={item.id}
                className="grid grid-cols-3 items-center bg-slate-800 p-4 rounded-lg"
              >

                {/* Left: Info */}
                <div className="flex flex-col justify-center">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-400">₹{item.price}</p>
                </div>

                {/* Center: Counter */}
                <div className="flex justify-center">
                  <div className="flex items-center bg-yellow-500 text-black rounded-md overflow-hidden select-none">

                    <button
                      className="w-8 h-8 flex items-center justify-center font-bold leading-none hover:bg-yellow-400"
                      onClick={() => updateCart(item, "remove")}
                    >
                      -
                    </button>

                    <span className="w-8 h-8 flex items-center justify-center font-semibold leading-none">
                      {item.qty}
                    </span>

                    <button
                      className="w-8 h-8 flex items-center justify-center font-bold leading-none hover:bg-yellow-400"
                      onClick={() => updateCart(item, "add")}
                    >
                      +
                    </button>

                  </div>
                </div>

                {/* Right: Price */}
                <div className="flex justify-end font-bold">
                  ₹{item.price * item.qty}
                </div>

              </div>
            ))}

          </div>

          {/* Bill Section */}
          <div className="mt-8 bg-slate-900 p-6 rounded-xl border border-slate-700 max-w-md ml-auto">

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-2 text-green-400">
              <span>Discount</span>
              <span>-₹{discount.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Tax (5%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>

            <hr className="my-3 border-slate-700" />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-yellow-400">
                ₹{finalTotal.toFixed(2)}
              </span>
            </div>

            {/* Checkout */}
            <button
              onClick={handleCheckout}
              className="w-full mt-4 bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Pay
            </button>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;