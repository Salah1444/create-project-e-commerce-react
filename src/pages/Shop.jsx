import { useDispatch, useSelector } from "react-redux";
import Directory from "../components/Directory";
import all from "../assets/All_Products.png";
import { FilterProducts } from "../redux/storeSlice";
function Shop() {
  const loading = useSelector(st => st.store.loading);
  const category = [
    {
       name: "All",
      img: all,

    },
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
  const dispatch =useDispatch();
  return (
    <div className="mt-16">
    <h1 className="text-3xl font-bold  my-8">Ou Categories :</h1>
        <div className="flex justify-around mb-8">
        {category.map((cat,i) => (
          <div key={i} className="flex flex-col items-center">
            <img onClick={()=>dispatch(FilterProducts(cat.name))} src={cat.img} alt={cat.name} className="w-32 h-32 object-cover border-4 rounded-full mb-2 duration-300 hover:border-amber-300 cursor-pointer "/>
            <span className="text-lg font-medium">{cat.name}</span>
            </div>
        ))}
        </div>
    <h2 className="text-3xl font-bold mb-5">Our Products :</h2>
      <Directory  />
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            <h2 className="text-2xl text-white font-semibold tracking-wide">
              Loading...
            </h2>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Shop;
