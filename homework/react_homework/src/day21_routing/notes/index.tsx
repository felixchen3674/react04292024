import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Header from '../Header';
import NotFound from './Pages/NotFound';
import Post from './Pages/Post';

// set up your routes here
export default function Day21Play() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
        <Route path="/post/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
