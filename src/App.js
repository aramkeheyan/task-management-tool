import React from "react";
import "./App.css";
import Navbar from "./components/navbar/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StickyFooter from "./containers/footer";
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
  );
}

export default App;
