import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import MainRoute from './components/Router';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Data from "./Data";
import "./App.scss"
function App() {
  return (
    <Router>
      <Nav />
      <MainRoute Data={Data} />
      <Footer />
    </Router>
  );
}
export default App;
