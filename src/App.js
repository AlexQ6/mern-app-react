import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage";
import "./App.css"

const App = () => {
  return (
    <>
      <Router>
        <Route path="/" exact render={(props) => <HomePage { ...props } />} />
        {/* <Route path="/order" render={props => <OrderPage { ...props } />}  /> */}
      </Router>
    </>
  );
};

export default App;
