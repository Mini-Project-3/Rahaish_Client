import React from 'react';
//https://reactjs.org/docs/dom-elements.html#style
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import WelcomePage from './Pages/auth/WelcomePage';
import Auth from './Pages/auth/Auth';
import AppContainer from './Pages/appContainer/AppContainer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <WelcomePage></WelcomePage>
          </Route>
          <Route path={["/login", "/signup", "/forgotPassword"]} exact>
            <Auth></Auth>
          </Route>
          <Route path={["/dashBoard", "/flat", "/house", "/plot", "/wishlist", "/uploadplot", "/uploadflat", "/uploadhouse", "/innertemplate"]}>
            <AppContainer></AppContainer>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
