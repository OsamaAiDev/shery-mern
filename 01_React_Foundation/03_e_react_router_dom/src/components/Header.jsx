import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-emerald-600 py-7 px-10 text-white flex  items-center justify-between ">
      <h2 className="text-3xl">Sheryians</h2>
      <div className="flex gap-10">
        {/* <a className="text-xl" href="/">
          Home
        </a>
        <a className="text-xl" href="/about">
          About
        </a>
        <a className="text-xl" href="/product">
          Product
        </a>
        <a className="text-xl" href="/contact">
          Contact
        </a> */}
        <Link className="text-lg" to="/">
          Home
        </Link>
        <Link className="text-lg" to="/about">
          About
        </Link>
        <Link className="text-lg" to="/product">
          Product
        </Link>
        <Link className="text-lg" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
