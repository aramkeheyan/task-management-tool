import React from "react";
import "./App.css";
import Navbar from "./components/navbar/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StickyFooter from "./containers/footer";
<<<<<<< HEAD
import TasksTable from "./components/TasksTable";

function App() {
  return (
    <Switch>
      <Route path="/">
        {" "}
        <Navbar />
        <TasksTable />
        <StickyFooter />
      </Route>
    </Switch>
=======
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
>>>>>>> c8a2b11114f9cc5f4db300026d7829311f44411c
  );
}

export default App;
