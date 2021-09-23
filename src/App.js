import React from "react";
import "./App.css";
import Navbar from "./components/navbar/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StickyFooter from "./containers/footer";

function App() {
  return (
    <Switch>
      <Route path="/">
        {" "}
        <Navbar />
        <StickyFooter />
      </Route>
    </Switch>
  );
}

export default App;
