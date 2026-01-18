import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ToggleCart,
  InCreaseQuantite,
  DeCreaseQuantite,
} from "../redux/storeSlice";
import { FaMinus, FaPlus, FaX } from "react-icons/fa6";

function DropCart() {
  const cart = useSelector((state) => state.store.cart);
  const total = useSelector((st) => st.store.total);
  const dispatch = useDispatch();

  return (
    <div className="bg-white z-20 fixed right-0 top-0 w-1/4 h-full p-5">
      <h1 className="text-2xl flex justify-between mb-6 text-center">
        Shop cart
        <FaX
          className="cursor-pointer"
          onClick={() => dispatch(ToggleCart())}
          size={24}
        />
      </h1>

      <hr />

      <ul className="divide-y overflow-y-scroll h-[80%]">
        {cart.map((el) => (
          <li key={el.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4">
              <img
                src={el.images?.[0]}
                alt={el.title}
                className="size-12 rounded-full bg-gray-200"
              />

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {el.title.length < 10
                    ? el.title
                    : el.title.slice(0, 7) + "..."}
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-800 mb-1">
                Quantité
              </p>

              <div className="flex items-center gap-2">
                <FaPlus
                  className="cursor-pointer text-green-600"
                  onClick={() => dispatch(InCreaseQuantite(el.id))}
                />

                <span>{el.quantite}</span>

                <FaMinus
                  className="cursor-pointer text-red-600"
                  onClick={() => dispatch(DeCreaseQuantite(el.id))}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <hr />

      <div className="flex justify-end gap-4 mt-4 font-semibold">
        <span>Total:</span>
        <span>{total?.toFixed(2)} $</span>
      </div>
    </div>
  );
}

export default DropCart;
