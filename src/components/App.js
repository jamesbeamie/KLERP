import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import LandingPage from "./landingpage/LandingPage";
import FarmerDashBoard from "./farmerDashboard/DashBoard";

const App = () => {
  return (
    <Router>
      <main>
        <Route path='/' component={LandingPage} exact />
        <Route path='/farmer/dashboard' component={FarmerDashBoard} />
      </main>
    </Router>
  );
};

export default App;
