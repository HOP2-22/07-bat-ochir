import React from "react";
import Footer from "../component/footer";
import Header from "../component/header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
