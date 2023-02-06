import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Animation from "./components/Animation";
import Bio from "./components/Bio";
import Hobby from "./components/Hobby";
import Work from "./components/Work";
import OnWeb from "./components/OnWeb";

function App() {
  const [changeTheme, setChangeTheme] = useState(false);
  return (
    <div
      className={`${
        changeTheme ? "ligth" : "dark"
      } w-full  flex flex-col items-center  gap-6 p-0`}
    >
      <Header changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
      <div className="w-[620px]   flex flex-col items-center gap-10">
        <Animation />
        <Main changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
        <Work changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
        <Bio changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
        <Hobby changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
        <OnWeb changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
      </div>

      <Footer changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
    </div>
  );
}

export default App;
