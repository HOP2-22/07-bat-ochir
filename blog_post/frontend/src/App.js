import { Provider } from "./Context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Desktop from "./pages/Desktop";

//import Layout
import Layout from "./Layout/Layout";

function App() {
  return (
    <Provider>
      {/* <Layout>
      <Routes>
        <Route path="/" element={<Desktop />} />
      </Routes>
    </Layout> */}
      <Desktop />
    </Provider>
  );
}

export default App;
