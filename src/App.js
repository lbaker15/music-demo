import './App.css';
import {HashRouter as Router, Switch, Route, useLocation, useHistory} from 'react-router-dom';
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
import Intro from './components/intro';


function App() {

  return (
    <React.Fragment>
          
      <Router basename="/">
        <Route render={({location}) => (
          <React.Fragment>
          
        <AnimatePresence exitBeforeEnter={false} >
          <Background key="bg" />
          <Nav key="nav" />
          
          
        
        <Switch location={location} key={location.pathname}>
          <Route path="/featured-events">
            <Intro key="intro" />
          </Route>
          <Route path="/home">
            <RotateElement key="rotate" />
            <Title key="title" />
            <Cards key="cards" />
            <Touch />
          </Route>
          <Route path="/events">
            <RotateElement key="rotate" />
            <Title key="title" />
            <Events key="events" />
          </Route>
          <Route path="/event-details/:id">
            <RotateElement key="rotate" />
            <Title key="title" />
            <EventDetails key="deets" />
          </Route>
          <Route path="/news">
            <RotateElement key="rotate" />
            <Title key="title" />
            <News key="new" />
          </Route>
          <Route path="/contact">
            <RotateElement key="rotate" />
            <Title key="title" />
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
