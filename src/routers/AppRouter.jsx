import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { LoginScreen } from '../components/auth/LoginScreen';
import { HomeScreen } from '../components/jobu/HomeScreen';




// import {AuthRouter} from './AuthRouter';
export const AppRouter = () => {

    return(
      <Router>
           <>
              <Switch>
                  <Route
                    exact path="/login"
                    component={  LoginScreen }
                  />

                 <Route
                    path="/"
                    component={ HomeScreen }
                  />
                   <Redirect to="/" />
              </Switch>

             </>
      </Router>
   )
}
