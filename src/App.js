import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";
function App() {
  const user = JSON.parse(localStorage.getItem("profile"))
  return (
    <>
      <GoogleOAuthProvider clientId="692487812579-ba14u0ap3rlp6d4hdl5d9ju08ukft6k9.apps.googleusercontent.com">
        <Router>
          <Container maxWidth="xl">
            <Navbar />
            <Switch>
              <Route path="/" exact component={()=><Redirect to="/posts" />} />
              <Route path="/posts" exact component={Home} />
              <Route path="/posts/search" exact component={Home} />
              <Route path="/posts/:id"  component={PostDetails} />
              <Route path="/auth" exact component={()=>(!user?<Auth/>:<Redirect to="/posts"/>)} />
            </Switch>
          </Container>
        </Router>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
