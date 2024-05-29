import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Header from "./Header";
import NonFound from "./Pages/NonFound";
import Post from "./Pages/Post";

export default function Homepage() {

  const [login, setLogin] = useState(false)

  return (
    <BrowserRouter basename="/tutorial">
      <div>
        <Header />
      <button onClick={()=>setLogin(!login)}>{login? "logout":"login"}</button>
      {/* <div>Day 21 Router Homepage</div> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/profile">
          <Profile login ={login}/>
        </Route>
        <Route path="/post/:id" component={Post} />
        <Route component={NonFound} />
      </Switch>
      </div>
    </BrowserRouter>
  );
}
