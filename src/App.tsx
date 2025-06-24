import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

import Home from "./Component/Home";
import About from "./Component/About";
import Services from "./Component/Services";
import Contact from "./Component/Contact";
import Book from "./Component/Book";
import Emergency from "./Component/Emergency";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
        <Route path="/emergency" element={<Emergency />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
