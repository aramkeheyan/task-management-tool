import React from "react";
import "./App.css";
import Navbar from "./components/navbar/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FooterContainer } from "./containers/footer";

function App() {
  return (
    <>
      <FooterContainer />
      <Router>
        <Navbar />
        <Switch>
          <Route></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
