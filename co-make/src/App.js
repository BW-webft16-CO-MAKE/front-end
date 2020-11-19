import { Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import SignUp from "./components/SignUp";
import Nav from "./components/Nav";
import Posts from "./components/AllPosts";
import Create from "./components/CreatePost";
import SignIn from "./components/SignIn";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <div>
      <Nav />
      <Route exact path="/" component={MainPage} />
      <PrivateRoute path="/allposts" component={Posts} />
      <Route path="/signin" component={SignIn} />
      <PrivateRoute path="/create" component={Create} />
      <Route path="/signup" component={SignUp} />
    </div>
  );
}
export default App;
