import React from 'react';
import ForgotPassPage from './Pages/ForgotPassPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
//https://reactjs.org/docs/dom-elements.html#style
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact>
            <LoginPage></LoginPage>
          </Route>
          <Route path="/signup" exact>
            <SignupPage></SignupPage>
          </Route>
          <Route path="/forgotPassword" exact>
            <ForgotPassPage></ForgotPassPage>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
