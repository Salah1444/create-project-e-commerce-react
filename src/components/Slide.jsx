import { useState } from "react";
import { imgs } from "../assets/imgs_slider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Slide() {
  const [index, setIndex] = useState(0);
  const prevSlide = () => {
    setIndex(index === 0 ? imgs.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === imgs.length - 1 ? 0 : index + 1);
  };
  return (
    <div className="mt-16 overflow-hidden relative">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${index * 100}vw)` }}
      >
        {imgs.map((img) => (
          <div key={img.id} className="w-screen h-screen flex-shrink-0">
            <img
              src={img.url}
              className="w-full h-full"
            />
            <h2 className="absolute text-4xl top-1/4 ml-20 text-start w-100 font-extrabold rounded-3xl p-20  shadow-2xl shadow-amber-50">{img.name}</h2>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-10 top-1/2 
                   p-3 bg-black/60 text-white rounded-full z-10">
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-10 top-1/2 
                   p-3 bg-black/60 text-white rounded-full z-10">
        <FaChevronRight />
      </button>
      <div className="
        absolute bottom-0 w-full h-1/4
        bg-linear-to-t from-gray-900 to-transparent
        flex justify-center items-end pb-6
      ">
        {imgs.map((_, i) => (
          <div
            key={i}
            className={`h-3.5 w-3.5 rounded-full mx-1
              ${i === index ? "bg-purple-600" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slide;
