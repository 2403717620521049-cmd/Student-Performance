import React from "react";
import "./style.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Features from "./components/Features";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <About />
      <Features />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;