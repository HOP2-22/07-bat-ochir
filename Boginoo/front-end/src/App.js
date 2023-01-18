import "./App.css";
import Home from "./Page/Home-default";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./Page/Login";
import Signup from "./Page/Signup";
function App() {
  return (
    <BrowserRouter className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
