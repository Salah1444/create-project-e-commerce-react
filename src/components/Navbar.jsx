
import logo from "./../assets/react.svg";
import { useDispatch, useSelector } from "react-redux";
import { ActivateLink, ToggleCart,ToggleFavorit } from "../redux/storeSlice";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
function Navbar() {
  const dispatch = useDispatch();
  const {cart,active} = useSelector((state) => state.store);
  return (
    <nav className="flex z-10 top-0 fixed bg-amber-950 w-full opacity-75 h-16 justify-between items-center text-xl text-white">
      <div className="logo flex cursor-pointer items-center ml-2.5">
        <img src={logo} alt="logo" />
      </div>
      <div className="links ">
        <Link to={'/'} onClick={()=>dispatch(ActivateLink('Home'))} className={`link mr-4.5 cursor-pointer hover:text-amber-300 ${active == "Home"? "text-amber-300":""}`}>
          Home
        </Link>
       <Link to={'/About'}  onClick={()=>dispatch(ActivateLink('About'))}  className={`link mr-4.5 cursor-pointer hover:text-amber-300 ${active == "About"? "text-amber-300":""}`}>
          About
        </Link>
        <Link to={'/Shop'} onClick={()=>dispatch(ActivateLink('Shop'))} className={`link mr-4.5 cursor-pointer hover:text-amber-300 ${active == "Shop"? "text-amber-300":""}`}>
          Shop
        </Link>
        <Link to={'/Contact'} onClick={()=>dispatch(ActivateLink('Contact'))} className={`link mr-4.5 cursor-pointer hover:text-amber-300 ${active == "Contact"? "text-amber-300":""}`}>
          Contact
        </Link>
      </div>
      <div className="icons flex">
        <div
          className="mr-4.5 relative cursor-pointer"
          onClick={() => dispatch(ToggleCart())}
        >
          {cart.length>0 ? <span className="absolute bg-red-600 p-1 rounded-full -top-1 -right-1.5"></span> :null
          }
          <FaCartShopping />
        </div>
        <div className="mr-4.5  cursor-pointer" onClick={()=>dispatch(ToggleFavorit())}>
          <FaHeart />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
