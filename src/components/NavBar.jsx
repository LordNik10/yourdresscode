import React from "react";
import logo from "../assests/logo";
import { theme } from "../config/theme";

function NavBar() {
  return (
    <div
      className="container"
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <img src={logo} />
    </div>
  );
}

export default NavBar;
