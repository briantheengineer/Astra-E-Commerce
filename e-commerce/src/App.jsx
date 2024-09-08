import './App.css'
import Navbar from './components/Navbar'
import Landing from './Landing';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
            <Route path="/landing"> <Landing /> </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
