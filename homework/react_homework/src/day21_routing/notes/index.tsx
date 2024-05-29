
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import Profile from "./Profile";
import NotFound from "./NotFound";
import SinglePost from "./SinglePost";

// set up your routes here
export default function Day21Play() {
  return (
    <div>
      {/* basename is adding prefix url to the routes */}
      <Router basename="test">
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/profile"}>Profile</Link>
        </div>
        {/* In v6 , we use Routes instead of switch, which has the same function that only takes the first matching route */}
        <Switch>
          {/* component only accept the component not function and exact means only value when the url is exactly the same
        if we don't add exact on the home page , it will override the others even the url address is changed */}
          <Route path="/" component={Homepage} exact />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path={"/post/:id"} component={SinglePost} />
          <Route component={NotFound} />
          {/* <Homepage /> */}
        </Switch>
      </Router>
    </div>
  );
}
