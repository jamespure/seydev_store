import React from "react";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import classes from "./headerStyles.module.css";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;
