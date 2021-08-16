import "./App.css";
import GuessThirdAngle from "./guess-third-angle";
import Hypotenuse from "./hypotenuse";
import Area from "./area";
import Header from "./header";
import { useState } from "react";
import SumOfAngles from "./sum-of-angles";
import Footer from "./footer";

function App() {
  const [route, setRoute] = useState("area");
  let element = <Area />;
  if (route === "area") {
    element = <Area />;
  } else if (route === "hypotenuse") {
    element = <Hypotenuse />;
  } else if (route === "third") {
    element = <GuessThirdAngle />;
  } else if (route === "sum") {
    element = <SumOfAngles />;
  } else {
    element = <Area />;
  }
  return (
    <>
      <Header setRoute={setRoute} />
      <div className="container">
        <main className="main">{element}</main>
      </div>
      <Footer />
    </>
  );
}

export default App;
