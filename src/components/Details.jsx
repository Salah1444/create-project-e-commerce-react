import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, ToggleDetail } from "../redux/storeSlice";
import {FaArrowLeftLong} from "react-icons/fa6";
function Details() {
  const dispatch = useDispatch();
  const itemDetail = useSelector(state => state.store.itemDetail);
  return (
    <div className="grid fixed right-0 p-15 top-0 w-full h-full overflow-scroll z-30 bg-gray-50">
    <FaArrowLeftLong onClick={() => dispatch(ToggleDetail())} size={24} className="self-end mr-4 mt-4 cursor-pointer"/>
      <div className="flex w-full p-4  justify-around">
        <div className="img-thumbnail rounded overflow-hidden">
          <img
          className="bg-white hover:scale-115 transition-all duration-300 ease-in-out  "
          src={itemDetail.thumbnail}
          alt={itemDetail.title}
        />
        </div>
        
        <div className="info">
          <h2 className="text-black text-2xl text-start font-bold">
            Informations :
          </h2>
          <ul className="list-disc mt-4 ml-8 text-start text-lg">
            <li className="list-item">
              <strong>Name : </strong>
              {itemDetail.title}
            </li>
            <li>
              <strong>Stock : </strong>
              {itemDetail.stock}
            </li>
            <li>
              <strong>Category : </strong>
              {itemDetail.category}
            </li>
            <li>
              <strong>warranty : </strong>
              {itemDetail.warrantyInformation}
            </li>
            <li>
              <strong>Sku : </strong>
              {itemDetail.sku}
            </li>
            <li>
              <strong>Brand : </strong>
              {itemDetail.brand}
            </li>
            <li>
              <strong>Price : </strong>
              {itemDetail.price} $
            </li>
          </ul>
          <button
            onClick={() => dispatch(AddToCart(itemDetail))}
            className="bg-blue-500 text-white w-full px-4 py-2 rounded mt-4 hover:bg-blue-600"
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="flex m-4 p-4  justify-around">
        <div className="description  w-1/2">
          <h2 className="text-black text-2xl text-start font-bold">
            Description :
          </h2>
          <p className="mt-4 ml-8 text-justify w-1/2 text-lg">
            {itemDetail.description}
          </p>
        </div>
        <div className="qr-code ">
          <h2 className="text-black text-2xl text-start font-bold">QrCode :</h2>
          <img
            className="mt-4 "
            src={itemDetail.meta["qrCode"]}
            alt="QR Code"
          />
        </div>
      </div>
      <div className="m-4 p-4 ">
        <h2 className="text-black text-2xl mb-4 text-start font-bold">
          Reviews :
        </h2>
        <ul role="list" class="divide-y divide-white/5">
          {
            /* Reviews Section */

            itemDetail.reviews.map((rev, index) => (
              <li class="flex justify-between gap-x-6 py-5" key={index}>
                <div class="flex min-w-0 gap-x-4">
                  <img
                    src="https://filmvacatures.nl/img/placeholder.png"
                    alt=""
                    class="size-12 flex-none rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                  />
                  <div class="min-w-0 flex-auto">
                    <p class="text-sm/6 font-semibold text-black">
                      {rev.reviewerName}
                    </p>
                    <p class="mt-1 truncate text-xs/5 text-gray-500">
                      {rev.comment}
                    </p>
                  </div>
                </div>
                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p class="text-sm/6  text-black">{"⭐".repeat(rev.rating)}</p>
                  <p class="mt-1 text-xs/5 text-gray-400">
                    <span>{rev.reviewerEmail}</span>
                  </p>
                </div>
              </li>
            ))
          }
        </ul>
        <button className="bg-blue-500 text-white w-1/12 px-4 py-2 rounded mt-4 hover:bg-blue-600">Add Review</button>
      </div>
    </div>
  );
}

export default Details;
