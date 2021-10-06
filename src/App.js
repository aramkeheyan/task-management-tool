import React from "react";
import "./App.css";
import Navbar from "./components/navbar/index";
import { Switch, Route } from "react-router-dom";
import StickyFooter from "./containers/footer";
import ColumnSelectorGrid from "./components/TasksTable";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Navbar />
          <ColumnSelectorGrid />
          <StickyFooter />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
