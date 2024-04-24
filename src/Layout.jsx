import React from "react";
import { Footer, Header } from "./components";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
