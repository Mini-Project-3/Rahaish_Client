import React from 'react';
//https://reactjs.org/docs/dom-elements.html#style
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import WelcomePage from './Pages/auth/WelcomePage';
import Auth from './Pages/auth/Auth';
import AppContainer from './Pages/appContainer/AppContainer';
import { LS_AUTH_TOKEN } from './Constants/constants';
import { axiosRequest, axiosResponse } from './axios/axios';

function App() {

  axiosRequest();
  axiosResponse();

  const token = localStorage.getItem(LS_AUTH_TOKEN);

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <WelcomePage></WelcomePage>
          </Route>
          <Route path={["/login", "/signup", "/forgotPassword"]} exact>
            {token ? <Redirect to="/dashboard" /> : <Auth></Auth>}
          </Route>
          <Route path={["/dashBoard", "/flat", "/house", "/plot", "/wishlist", "/uploadplot", "/uploadflat", "/uploadhouse", "/uploadplot", "/innertemplate"]}>
            {token ? <AppContainer></AppContainer> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
