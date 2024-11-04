import React from "react";
import Nav2 from "./Nav2";

const Header = () => {
  return (
    <>
      <nav className=" bg-emerald-950 flex items-center justify-between px-5 py-10">
        <h2 className="text-2xl">Sheryians</h2>
        <Nav2 />
      </nav>
    </>
  );
};

export default Header;
