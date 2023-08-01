import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import MainRoute from './components/Router';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Card from './components/Card';

import "./App.scss"
function App() {
  return (
    <Router>
      <Nav />
      {/* <MainRoute /> */}
      <Card />
      <Footer />
    </Router>
  );
}

export default App;
