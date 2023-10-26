import "./App.css";

import Boost from "./components/Boost/Boost";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
// import Shortner from "./components/Shortner/Shortner";
import Statics from "./components/Statics/Statics";
import CodingNinja from "./components/Coding/CodingNinja";
import { useState } from "react";

export default function App() {
  const [Oldlink, setOldLink] = useState([]);

  function addToList(link) {
    setOldLink((Oldlink) => [...Oldlink, link]);
    console.log(Oldlink);
  }

  return (
    <div>
      <Navbar />

      <Hero />

      {/* <Shortner /> */}

      <Statics addToList={addToList} Oldlink={Oldlink} />

      <Boost />

      <Footer />

      <CodingNinja />
    </div>
  );
}
