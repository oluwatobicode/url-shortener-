import "./App.css";

import Boost from "./components/Boost/Boost";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
// import Shortner from "./components/Shortner/Shortner";
import Statics from "./components/Statics/Statics";
import CodingNinja from "./components/Coding/CodingNinja";

export default function App() {
  return (
    <div>
      <Navbar />

      <Hero />

      {/* <Shortner /> */}

      <Statics />

      <Boost />

      <Footer />

      <CodingNinja />
    </div>
  );
}
