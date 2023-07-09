import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import Contact from "./pages/Contact.jsx";
import './styles/App.css';

function App() {
  return (
    <Router>
   
    <Routes> 
      <Route path="/" element={<Layout />} >
       <Route index element={<Home />} />

      
      <Route path="/About" element={<About />} />
      <Route path="/Work" element={<Work />} />
      <Route path="/Contact" element={<Contact />} />
       </Route></Routes></Router>
    
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
