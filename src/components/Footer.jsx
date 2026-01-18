import React from "react";
import logo from "./../assets/react.svg";
import { FaFacebook, FaGithub, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-amber-950 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ===== Company Info ===== */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-10 h-10" />
            <strong className="text-xl">E-Commerce</strong>
          </div>

          <p className="text-sm text-justify bg-amber-900/60 p-3 rounded">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas officia culpa esse quibusdam nostrum maxime.
          </p>

          <div>
            <strong className="block mb-2">Follow us :</strong>
            <div className="flex gap-4">
              <FaGithub className="icon" />
              <FaFacebook className="icon" />
              <FaWhatsapp className="icon" />
            </div>
          </div>
        </div>

        {/* ===== Pages ===== */}
        <div>
          <h2 className="text-xl font-bold mb-4">Pages</h2>
          <ul className="space-y-2 ml-5 list-disc">
            {["Home", "About", "Shop", "Contact"].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-amber-300 transition"
              >
                <Link to={`${item}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Contact ===== */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <FaEnvelope /> support@ecommerce.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhone /> +212 6 00 00 00 00
            </p>
            <p>📍 Morocco</p>
          </div>
        </div>

      </div>

      {/* ===== Bottom ===== */}
      <div className="border-t border-amber-800 mt-10 pt-4 text-center text-sm text-amber-200">
        © {new Date().getFullYear()} E-Commerce. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
