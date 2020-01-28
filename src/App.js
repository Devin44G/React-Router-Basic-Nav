import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route} from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    {/* HOME ROUTE */}
    <Route exact path='/'>
      <Home />
    </Route>
    {/* ABOUT ROUTE */}
    <Route path='/about'>
      <About />
    </Route>
    {/* CONTACT ROUTE */}
    <Route path='/contact'>
      <Contact />
    </Route>;
  </div>
);

export default App;
