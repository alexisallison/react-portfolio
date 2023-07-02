import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./Navbar.jsx";
import './styles/App.css';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route index element={<Layout />} />
      <Route path="/About" element={<About />} />
      <Route path="/Work" element={<Work />} />
      <Route path="/Contact" element={<Contact />} />
      </Routes></Router>
    
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
