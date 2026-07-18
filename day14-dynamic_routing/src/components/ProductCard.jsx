import React, { useContext, useState } from "react";
import { Star } from "lucide-react";
import { MyStore } from "../context/MyStore";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react";

const ProductCard = ({ product }) => {
  const [singleProdData, setSingleProdData] = useState({});

  let { id } = useParams();

  let getSingleProdData = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleProdData(res.data);
    } catch (error) {
      console.log("Detail API error", error);
    }
  };

  useEffect(() => {
    getSingleProdData();
  }, []);

  let navigate = useNavigate();

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:-translate-y-2">
      {/* Product Image */}
      <div
        onClick={() => navigate(`/detail/${product.id}`)}
        className="bg-gray-100 h-64 flex items-center justify-center p-6 overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Category */}
        <span className="w-fit bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="fill-yellow-400 text-yellow-400" size={18} />
            <span className="font-semibold">{product.rating.rate}</span>
            <span className="text-gray-400 text-sm">
              ({product.rating.count} Reviews)
            </span>
          </div>

          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Button */}

        <button className="mt-2 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition duration-300 cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
