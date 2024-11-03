import "./App.css";
import Features from "./components/Features";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="features">
          <Features />
        </div>
      </main>
    </>
  );
}

export default App;
