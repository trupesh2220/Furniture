import React from "react";
import WebNavbar from "./WebNavbar";

function Header() {
  return (
    <>
      <div className="bg-white shadow-xl ">
        <div className="container mx-auto px-3 py-3">
          <WebNavbar/>
        </div>
      </div>
    </>
  );
}

export default Header;
