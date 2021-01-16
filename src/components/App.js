import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
// import { Container } from "react-bootstrap";
import LandingPage from "./landingpage/LandingPage";
import FarmerDashBoard from "./farmerDashboard/DashBoard";

const App = () => {
  const loggedin = localStorage.getItem("farmerpwd");
  console.log(loggedin);
  return (
    <Router>
      <Switch>
        {!loggedin && <Route path='/' component={LandingPage} exact />}
        <Route path='/farmer/dashboard' component={FarmerDashBoard} />
        {loggedin && <Redirect from='/' to='/farmer/dashboard' exact />}
      </Switch>
    </Router>
  );
};

export default App;
