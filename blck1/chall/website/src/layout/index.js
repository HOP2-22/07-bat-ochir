import React from "react";
import { useContext } from "react";
import Footer from "../component/footer";
import Header from "../component/header";
import { ColorModeContext } from "../Context/Context";

const Layout = ({ children }) => {
  const { theme } = useContext(ColorModeContext);
  return (
    <div
      style={{
        backgroundColor: theme ? "red" : "blue",
      }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
