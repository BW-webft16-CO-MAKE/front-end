import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import MainPage from './components/MainPage';
import SignUp from './components/SignUp';
// import { SignIn } from './components/SignIn'
function App() {
  const initialSignUpValues = {
    className: ""
  }
  const [formValues, setFormValues] = useState(initialSignUpValues)

  // const inputChange = (className) => {
  //   setFormValues({ formValues, [className]: value })
  // }

  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        {/* <Route path='/signin'>
          <SignIn />
        </Route> */}
        <Route path='/signup'>
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
};
export default App
