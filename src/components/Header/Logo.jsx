import React from "react";
import { SiCodesignal } from "react-icons/si";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <div>
        <Link to="/">
          <SiCodesignal className="text-2xl text-cyan-500 hover:text-cyan-200" />
        </Link>
      </div>
    </>
  );
}

export default Logo;
