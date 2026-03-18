import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ToggleCart,
  InCreaseQuantite,
  DeCreaseQuantite,
} from "../store/storeSlice";
import { FaMinus, FaPlus, FaX } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function DropCart() {
  const cart = useSelector((state) => state.store.cart);
  const total = useSelector((st) => st.store.total);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

      <ul className="divide-y overflow-y-scroll h-[70%]">
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
      <button   
            onClick={()=>{navigate('/order');dispatch(ToggleCart())}}
            className={`block w-full  rounded-md cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-700 bg-amber-600   px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-colors`}
          >
            Take it
          </button>
    </div>
  );
}

export default DropCart;
