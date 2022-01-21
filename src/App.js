import './App.css';
import {BrowserRouter as Router, Switch, Route, useLocation, useHistory} from 'react-router-dom';
import React from 'react';
import Cards from './components/cards';
import Nav from './components/nav';
import Background from './components/background';
import Title from './components/title';
import RotateElement from './components/rotate-element';
import Events from './components/about';
import { AnimatePresence } from "framer-motion";
import EventDetails from './components/event-details';
import Touch from './components/get-in-touch';
import Contact from './components/contact';
import News from './components/news';
import Footer from './components/footer';


function App() {

  return (
    <React.Fragment>
          
      <Router basename="/">
        <Route render={({location}) => (
          <React.Fragment>
          
        <AnimatePresence exitBeforeEnter={false} >
          <Background key="bg" />
          <Nav key="nav" />
          <RotateElement key="rotate" />
          <Title key="title" />
        <Switch location={location} key={location.pathname}>
          <Route path="/home">
            <Cards key="cards" />
            <Touch />
          </Route>
          <Route path="/events">
            <Events key="events" />
          </Route>
          <Route path="/event-details/:id">
            <EventDetails key="deets" />
          </Route>
          <Route path="/news">
            <News key="new" />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
        </AnimatePresence>
        </React.Fragment>
         )} />
      </Router>
    </React.Fragment>
  );
}

export default App;
