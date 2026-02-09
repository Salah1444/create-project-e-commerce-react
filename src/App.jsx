import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import DropCart from "./components/DropCart";
import Details from "./components/Details";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import { fetchData } from "./redux/storeSlice";
import DropFavorit from "./components/DropFavorit";
function App() {
  const dispatch = useDispatch();
  const isVisibl = useSelector(state => state.store.DetailisVisible);
  const isVisible = useSelector((state) => state.store.isVisible);
  const favoritState =  useSelector((state) => state.store.DropFavoritState);
  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
    {isVisible ? <DropCart/> : null}
    {isVisibl ?<Details />: null}
    {favoritState ?<DropFavorit />: null}
    <Footer/>
    </>
  );
}

export default App;
