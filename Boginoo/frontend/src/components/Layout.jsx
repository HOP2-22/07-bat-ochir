import React, { Children } from "react";
import { Header } from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="w-full h-[100%] flex flex-col justify-betweens">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
export default Layout;
