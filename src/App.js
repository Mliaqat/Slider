import React from "react";
import "./App.css";
import BodySection from "./Component/Body/BodySection";
import Carsole from "./Component/Carsole/Carsole";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <BodySection />
      <Carsole />
      <Footer />
    </>
  );
}

export default App;
