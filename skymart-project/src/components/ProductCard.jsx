import React from "react";
import { Star, ShoppingCart, Check } from "lucide-react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const isInCart = useSelector((state) =>
    state.cart.cartItems.some((item) => item.id === product.id),
  );

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      }),
    );
    toast.success("Product Added To Cart");
  };

  return (
    <div className="group bg-white rounded-[28px] overflow-hidden shadow-md hover:shadow-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative bg-gray-100 h-72 flex items-center justify-center p-8">
        {/* Category */}
        <span className="absolute top-4 left-4 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        <img
          src={product.image}
          alt={product.title}
          className="h-44 object-contain transition duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-gray-500 capitalize">{product.category}</p>

        <h2 className="text-xl font-bold text-gray-800 mt-2 line-clamp-2 min-h-15">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-3">
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-gray-800">
            {product.rating.rate}
          </span>

          <span className="text-gray-500 text-sm">
            ({product.rating.count})
          </span>
        </div>

        <hr className="my-5 border-gray-200" />

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-green-600">
            ${product.price}
          </span>

          {isInCart ? (
            <button className="flex items-center gap-2 bg-green-500 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-semibold transition">
              <Check size={18} />
              Added
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold transition"
            >
              <ShoppingCart size={18} />
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
