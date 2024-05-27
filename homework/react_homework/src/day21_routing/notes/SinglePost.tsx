import { useState } from "react";
import {
  Link,
  Redirect,
  Route,
  Switch,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import SubPage1 from "./SubPage1";
import SubPage2 from "./SubPage2";

export default function SinglePost() {
  const { id }: any = useParams();
  const [redirect, setRedirect] = useState(false);
  console.log(useLocation()); // to getting the query info from the url
  console.log(new URLSearchParams(useLocation().search));
  const query = new URLSearchParams(useLocation().search);

  const { path, url } = useRouteMatch();
  const handleBackToHome = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div>Post Id is {id}</div>
      {/* using query.get function to accquire the info of name */}
      <div>Searching for name:{query.get("name")}</div>
      <div>token is {query.get("token")}</div>
      <button onClick={handleBackToHome}>Back to Home</button>
      {/* using the redirect component from react router dom to link back to the page you want 
      However,We use useNavigate to perform the same functionality*/}
      <div>
        <Link to={`${url}/subpage1`}>SubPage1</Link>
        <Link to={`${url}/subpage2`}>SubPage2</Link>
        {/* in V6 we can use "subpage1" to replace url and path, like <Link to={"subpage1"}>SubPage1</Link> */}
      </div>
      <div>
        <Switch>
          <Route path={`${path}/subpage1`} component={SubPage1} exact />
          <Route path={`${path}/subpage2`} component={SubPage2} />
        </Switch>

        {/* using the useroutermatch to extract the path and url to make it easy to render the subpage from current url */}
      </div>
    </div>
  );
}
