import ThemeContext from "./context/ThemeContext";
import Home from "./context/Home";

function App() {
  return (
    <ThemeContext>
      <Home />
    </ThemeContext>
  );
}
export default App;
