import React, { Children } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <div className="">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
export default Layout;
