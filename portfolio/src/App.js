import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  const [changeTheme, setChangeTheme] = useState(false);
  return (
    <div
      className={`${
        changeTheme ? "ligth" : "dark"
      } w-full h-screen flex flex-col items-center `}
    >
      <Header changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
      <Main changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
      <Footer />
    </div>
  );
}

export default App;
