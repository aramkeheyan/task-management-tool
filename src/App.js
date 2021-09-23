import React from "react";
import "./App.css";
import Navbar from "./components/navbar/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StickyFooter from "./containers/footer";
//import { StickyFooter } from "./containers/footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route></Route>
        </Switch>
      </Router>

      <Router>
        <StickyFooter />
      </Router>
    </>
  );
}

export default App;
