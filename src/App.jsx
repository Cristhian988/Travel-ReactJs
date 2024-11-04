import "./App.css";
import About from "./components/About";
import Destination from "./components/Destination";
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
        <div id="destination">
          <Destination />
        </div>
        <div id="about">
          <About />
        </div>
      </main>
    </>
  );
}

export default App;
