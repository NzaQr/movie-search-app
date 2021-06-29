import React from "react";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
        </Switch>
      </Router>
    </div>
  );
}
