import React from "react";
import "./App.css";
import Navbar from "./components/navbar/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StickyFooter from "./containers/footer";
import ColumnSelectorGrid from './components/TasksTable';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          {" "}
          <Navbar />
          <ColumnSelectorGrid />
          <StickyFooter />
        </Route>
      </Switch>
  </div>
  );
}

export default App;
