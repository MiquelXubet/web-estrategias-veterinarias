import React from "react";
import { Outlet } from "react-router-dom";
import Mainheader from "../Main-Header/Main-Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <>
      <Mainheader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
