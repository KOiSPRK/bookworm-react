import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from "./components/pages/Homepage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import UserRoute from "./components/routes/UserRoute";

const App = () =>
<div className="ui container">
  <Route path="/" exact component={Homepage} />
  <Route path="/login" exact component={LoginPage} />
  <UserRoute path="/dashboard" exact component={DashboardPage} />
</div>

export default App;
