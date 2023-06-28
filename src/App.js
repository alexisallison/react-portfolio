import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import './App.css';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Work" element={<Work />} />
      <Route path="Contact" element={<Contact />} />
      </Route>
      </Routes></BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
