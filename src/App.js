import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddEvent from './Components/AddEvent/AddEvent';
import AllEvents from "./Components/AllEvents/AllEvents";

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <AllEvents></AllEvents>
        </Route>
        <Route path='/addEvent'>
          <AddEvent></AddEvent>
        </Route>
        <Route path='/allEvent'>
          <AllEvents></AllEvents>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
