import React from "react";
import "./App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Features from "./components/Features";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

import Register from "./Register";
import Login from "./Login";
import StudentList from "./StudentList";

function App() {
  return (
    <div>
      <Header />
      <Navbar />

      <Register />
      <Login />

      <About />
      <Features />

      <StudentList />

      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
