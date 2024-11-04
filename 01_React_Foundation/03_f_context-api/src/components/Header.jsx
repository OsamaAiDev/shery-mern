import React, { useContext } from "react";
import { DataContext } from "../context/UserContext";

const Header = () => {
  const userData = useContext(DataContext);
  return <div>Header {userData.age}</div>;
};

export default Header;
