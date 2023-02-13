import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Banner from "./components/Banner";
import Bio from "./components/Bio";
import Hobby from "./components/Hobby";
import Work from "./components/Work";
import OnWeb from "./components/OnWeb";
import Hidden from "./components/Hidden";

function App() {
  const [changeTheme, setChangeTheme] = useState(false);
  return (
    <div
      className={`${
        changeTheme ? "ligth" : "dark"
      } w-full flex flex-col items-center gap-6 `}
    >
      <Header changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
      <Hidden changeTheme={changeTheme} />
      <div className="w-[90%] sm:w-[80%] md:w-[620px]   flex flex-col items-center gap-10">
        <Banner />
        <Main changeTheme={changeTheme} />
        <Work changeTheme={changeTheme} />
        <Bio changeTheme={changeTheme} />
        <Hobby changeTheme={changeTheme} />
        <OnWeb changeTheme={changeTheme} />
      </div>

      <Footer changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
    </div>
  );
}

export default App;
