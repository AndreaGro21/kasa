import React from 'react';
import {BrowserRouter as Router,} from 'react-router-dom';

/* import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons' */

/*     <FontAwesomeIcon icon={ffaCoffee} /> */

/* library.add(fab, faCheckSquare, faCoffee) */

import MainRoute from './components/Router';
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import "./App.scss"
function App() {
  return (
    <Router>
    <Nav />
    <MainRoute />
    <Footer />
    </Router>
  );
}

export default App;
