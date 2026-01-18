import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, ToggleDetail, AddToFavorit } from "../redux/storeSlice";
import { FaHeart } from "react-icons/fa";

function Card({ item }) {
  const dispatch = useDispatch();
  const favor = useSelector(st => st.store.favorit);

  const isFavorit = favor.some(f => f.id === item.id);

  return (
    <div className="group text-center">
      <div className="relative">
        <FaHeart
          onClick={() => dispatch(AddToFavorit(item))}
          size={27}
          className={`absolute right-2 top-2 cursor-pointer transition-colors
            ${isFavorit ? "text-red-500" : "text-amber-50 hover:text-red-500"}`}
        />

        <img
          src={item.images?.[0]}
          alt={item.title}
          className="aspect-square w-full rounded-lg bg-gray-200 object-cover xl:aspect-7/8"
        />
      </div>

      <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{item.price} $</p>

      <button
        onClick={() => dispatch(AddToCart(item))}
        className="bg-amber-600 p-3 w-1/2 hover:opacity-75"
      >
        Add To Cart
      </button>

      <button
        onClick={() => dispatch(ToggleDetail(item))}
        className="bg-amber-300 p-3 w-1/2 hover:opacity-75"
      >
        Learn more ...
      </button>
    </div>
  );
}

export default Card;
