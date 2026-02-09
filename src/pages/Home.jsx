import React from "react";
import Slide from "../components/Slide";
import all from "../assets/All_Products.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ActivateLink, FilterProducts } from "../redux/storeSlice";
import Card from "../components/Card";
import { FaCartShopping } from "react-icons/fa6";

/* =======================
   Categories Data
======================= */
const categories = [
  { name: "All", img: all },
  {
    name: "beauty",
    img: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
  },
  {
    name: "fragrances",
    img: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp",
  },
  {
    name: "furniture",
    img: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp",
  },
  {
    name: "groceries",
    img: "https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp",
  },
];

function Home() {
  const products = useSelector((st) => st.store.allProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCategoryClick = (name) => {
    dispatch(FilterProducts(name));
    navigate("/Shop");
  };

  const featuredProducts = products.filter(
    (item) => item.rating > 4.77
  );

  return (
    <main className="home-page w-full">
      <Slide />

      <section className="my-12 text-center">
        <h1 className="text-3xl font-bold uppercase tracking-wide mb-3">
          Shop by Category
        </h1>
        <p className="text-gray-500 font-semibold mb-8">
          Find exactly what you need from our wide range of categories.
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {categories.map((cat) => (
            <div key={cat.name} className="flex flex-col items-center">
              <img
                src={cat.img}
                alt={cat.name}
                onClick={() => handleCategoryClick(cat.name)}
                className="
                  w-32 h-32 object-cover rounded-full border-4
                  cursor-pointer
                  transition-all duration-300 ease-in-out
                  hover:scale-110 hover:border-amber-400 hover:shadow-lg
                "
              />
              <span className="mt-3 text-lg font-medium capitalize">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      
      <section className="my-12">
        <h1 className="text-3xl font-bold uppercase tracking-wide text-center mb-3">
          Featured Products
        </h1>
        <p className="text-gray-500 font-semibold text-center mb-8">
          Hand-picked products chosen by our customers
        </p>

        <div className="
          grid grid-cols-1 gap-8 px-6
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
        ">
          {featuredProducts.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="flex justify-center my-14">
        <Link
          to="/Shop"
          onClick={() => dispatch(ActivateLink("Shop"))}
          className="
            group flex items-center gap-3
            bg-gray-900 text-white font-bold
            px-10 py-5 rounded-full
            transition-all duration-300 ease-in-out
            hover:scale-105 hover:bg-gray-800 hover:shadow-xl
          "
        >
          Start Shopping Today
          <FaCartShopping
            size={22}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </section>
    </main>
  );
}

export default Home;
