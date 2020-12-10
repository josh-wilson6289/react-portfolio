import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <Router>
    <Navbar/>
      <Route exact path="/index.html" component={Home} />
      <Route exact path="/contact.html" component={Contact} />
      <Route exact path="/portfolio.html" component={Portfolio} />
    <Footer/>
    </Router>
    
  );
}

export default App;
