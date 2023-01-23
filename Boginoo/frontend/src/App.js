import "./App.css";
import cookie from "js-cookie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "./Context/Context";
import Layout from "./components/Layout";
import Outside from "./Page/Outside";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Signup from "./Page/Signup";
import Redirect from "./Page/Redirect";

function App() {
  return (
    <BrowserRouter className="app">
      <Provider>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" exact element={<Outside />} />
            <Route path="/:redirect" element={<Redirect />} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
