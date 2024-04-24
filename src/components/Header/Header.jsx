import React from "react";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <header className="sticky z-50 top-0">
        <main>
          <NavBar />
        </main>
      </header>
    </>
  );
}
