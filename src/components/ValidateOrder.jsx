import { useSelector } from "react-redux";
import { motion } from "framer-motion";
function ValidateOrder() {
  const { cart } = useSelector((st) => st.store);
  return (
    
    
    <motion.div
  initial={{ y: "-100vh"}}
  animate={{
    y: ["-100vh", 0],
   
  }}
  transition={{
    duration: 1.2,
    ease: "easeOut"
  }}
  className="absolute top-0 py-12 w-full px-40 min-h-screen z-20 bg-white"
>
      <div className="mx-auto  max-w-2xl text-center">
        <h2 className="text-4xl font-semibold  text-balance text-amber-600 sm:text-5xl">
          Welcome again
        </h2>
       
      </div>
      <form method="POST" className="mx-auto flex justify-between  w-full ">
        <div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className={`block w-full rounded-md bg-white  px-3.5 py-2 text-base text-amber-950 outline-1 -outline-offset-1   outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2   focus:outline-amber-400`}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  className={`block w-full rounded-md bg-white  px-3.5 py-2 text-base text-amber-950 outline-1 -outline-offset-1   outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2   focus:outline-amber-400`}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`block w-full rounded-md bg-white  px-3.5 py-2 text-base text-amber-950 outline-1 -outline-offset-1   outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2   focus:outline-amber-400`}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Phone
              </label>
              <div className="mt-2.5">
                <input
                  id="phone"
                  name="phone"
                  type="tele"
                  className={`block w-full rounded-md bg-white  px-3.5 py-2 text-base text-amber-950 outline-1 -outline-offset-1   outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2   focus:outline-amber-400`}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="adresse"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                City
              </label>
              <div className="mt-2.5">
                <input
                  id="adresse"
                  name="adresse"
                  type="text"
                  className={`block w-full rounded-md bg-white  px-3.5 py-2 text-base text-amber-950 outline-1 -outline-offset-1   outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2   focus:outline-amber-400`}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="zip"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                ZIP
              </label>
              <div className="mt-2.5">
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  className={`block w-full rounded-md bg-white  px-3.5 py-2 text-base text-amber-950 outline-1 -outline-offset-1   outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2   focus:outline-amber-400`}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
            <div>
              <label
                htmlFor="zip"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Mode Paiment
              </label>
              <div className="mt-2.5">
                <select
                  id="zip"
                  name="zip"
                  type="text"
                  className={`block w-full rounded-md bg-white  px-3.5 py-2 text-base text-amber-950 outline-1 -outline-offset-1   outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2   focus:outline-amber-400`}
                >
                  <option value="ByCart">By Cart</option>
                  <option value="Deliv">After Delevery</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="w-90 overflow-x-auto">
          <table className="w-full text-sm md:text-base ">
            <thead>
              <tr className="border-b-2 border-gray-200 text-gray-600 uppercase text-xs md:text-sm">
                <th className="py-4">Name</th>
                <th className="py-4">Qte</th>
                <th className="py-4">Total</th>
              </tr>
            </thead>

            <tbody className="overflow-scroll">
              {cart &&
                cart.map((it, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                  >
                    <td className="py-4 font-medium">
                      {it.title.slice(0, 18)}...
                    </td>

                    <td className="py-4 text-center"><span className="bg-green-300 border-2 border-green-600  px-3 rounded-md">{it.quantite}</span></td>

                    <td className="py-4 font-semibold text-center">{it.totalUn} DH</td>
                  </tr>
                ))}
            </tbody>

            <tfoot>
              <tr className="border-b-2 border-gray-300 bg-gray-50">
                <td colSpan="2" className="py-4 text-right font-semibold">
                  Total Général :
                </td>

                <td className="py-4 font-bold text-lg text-amber-600">
                  {cart?.reduce((total, item) => total + item.totalUn, 0)} $
                </td>
              </tr>
            </tfoot>
          </table>
          <button></button>
          <button
            type="submit"
            disabled={cart.length == 0}
            className={`block w-full  rounded-md cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-700 bg-amber-600   px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-colors`}
          >
            Proceed to checkout
          </button>
        </div>
      </form>
    </motion.div>
    
  );
}

export default ValidateOrder;
