import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, ToggleFavorit,DeletElementFromFarovit} from "../redux/storeSlice";
import { FaTrashCan, FaX } from "react-icons/fa6";

function DropFavorit() {
  const favorit = useSelector((state) => state.store.favorit);
  const dispatch = useDispatch();

  return (
    <div className="bg-white z-20 fixed right-0 top-0 w-1/4 h-full p-5">
      <h1 className="text-2xl flex justify-between mb-6 text-center">
        Favorits
        <FaX
          className="cursor-pointer"
          onClick={() => dispatch(ToggleFavorit())}
          size={24}
        />
      </h1>

      <hr />

      <ul className="divide-y overflow-y-scroll h-[85%]">
        {favorit.map((el) => (
          <React.Fragment key={el.id}>
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex gap-x-4">
                <img
                  src={el.images?.[0]}
                  alt={el.title}
                  className="size-12 rounded-full bg-gray-200"
                />

                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {el.title}
                  </p>
                </div>
              </div>

              <FaTrashCan
                className="cursor-pointer text-gray-500 hover:text-red-500 transition-colors"
                onClick={() => dispatch(DeletElementFromFarovit(el))}
              />
            </li>

            <button
              onClick={() => dispatch(AddToCart(el))}
              className="w-full bg-amber-600 py-2 text-white hover:opacity-80"
            >
              Add To Cart
            </button>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default DropFavorit;
