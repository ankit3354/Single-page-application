import React from "react";
import { Footer, Header } from "./components";
import { Outlet } from "react-router";
import LocomotiveScroll from "locomotive-scroll";

export default function Layout() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
