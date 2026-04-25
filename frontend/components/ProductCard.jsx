import { useState } from "react";
import { useCart } from "../src/context/CartContext";

function ProductCard({ product }) {

  const {orders, updateCart} = useCart();
  const qty = orders.find(o => o.id === product.id)?.qty || 0;

  return (
    <div className="border border-slate-700 hover:border-yellow-500 hover:bg-linear-to-br from-yellow-700  flex flex-col p-3 rounded-xl">

  {/* Image */}
  <div className="bg-white text-black h-36 w-full flex items-center justify-center rounded-lg overflow-hidden select-none">
    <img src={product.img} alt={product.name} className="h-full object-contain" />
  </div>

  {/* Category */}
  <p className="uppercase text-xs text-gray-300 mt-2">
    {product.category}
  </p>

  {/* Name */}
  <p className="text-sm font-semibold mt-1">
    {product.name}
  </p>

  {/* Description */}
  <p className="text-xs text-gray-400 mt-1 line-clamp-2">
    {product.description}
  </p>

  {/* Bottom row */}
  <div className="flex items-center justify-between mt-auto pt-3 select-none">
    <span className="font-bold text-yellow-400">
      ₹{product.price}
    </span>

    {qty === 0 ? (
      <button 
        onClick={() => updateCart(product, "add")}
        className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-md cursor-pointer">
        Add
      </button>
    ) : (
      <div className="flex items-center gap-2 bg-yellow-500 text-black px-2 py-1 rounded-md text-sm select-none">
        <button 
        className="cursor-pointer font-bold hover:bg-yellow-400 rounded" 
        onClick={() => updateCart(product, "remove")}>-</button>

        <span>{qty}</span>

        <button 
        className="cursor-pointer font-bold hover:bg-yellow-400 rounded" 
        onClick={() => updateCart(product, "add")}>+</button>
      </div>
    )}
    
  </div>

</div>
  );
}

export default ProductCard;