import React from 'react';
import ForgotPassPage from './Pages/ForgotPassPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
//https://reactjs.org/docs/dom-elements.html#style

function App() {
  return (
    <div className="App">
      <LoginPage></LoginPage>
      <SignupPage></SignupPage>
      <ForgotPassPage></ForgotPassPage>
    </div>
  );
}

export default App;
