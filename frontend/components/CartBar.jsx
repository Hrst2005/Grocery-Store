import { useCart } from "../src/context/CartContext";
import { useNavigate } from "react-router";

function CartBar() {
  const { orders } = useCart();
  const navigate = useNavigate();

  const totalItems = orders.reduce((sum, item) => sum + item.qty, 0);

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 
    bg-slate-900 border border-slate-700 hover:border-yellow-500
    text-white px-6 py-3 rounded-xl shadow-md hover:shadow-xl
    flex items-center gap-3 z-50 
    transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    
    onClick={() => navigate("/cart")}
    >

      {/* Text */}
      <span className="text-sm">
        <span className="font-semibold text-yellow-400">
          {totalItems}
        </span>{" "}
        item{totalItems > 1 ? "s" : ""} added to cart.
      </span>

      {/* Checkout */}
      <span className="underline text-yellow-400 
      hover:text-yellow-300 font-semibold transition">
        Checkout →
      </span>

    </div>
  );
}

export default CartBar;