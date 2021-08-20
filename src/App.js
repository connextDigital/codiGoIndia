import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LandingPage from './landingPage/landingPage';
import LoginPage from './loginPage/loginPage';
import DashBoard from './Dashboard/Dashboard';
import AllCourses from './AllCourses/AllCourses';
import PageNotFound from './PageNotFound';

import { UserContext } from './MainContext';

import { defaultUser } from './DefaultUser';

const App = () => {
  let [signedInUser, setsignedInUser] = useState(defaultUser);
  return (
    <Router>
      <UserContext.Provider value={{ signedInUser, setsignedInUser }}>
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route exact path='/login'>
            <LoginPage />
          </Route>
          <Route exact path='/dashboard'>
            <DashBoard />
          </Route>
          <Route exact path='/all-courses'>
            <AllCourses />
          </Route>

          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
