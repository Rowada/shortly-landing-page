import React from "react";
import { Nav } from "./components/Header/Nav";
import { Hero } from "./components/Header/Hero";
import { Features } from "./components/Features/Features";
import { Banner } from "./components/Banners/Banner";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
