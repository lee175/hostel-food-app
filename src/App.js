import React, { useState } from 'react';
import './components/css/layout.css'
import './components/css/animation.css';
import './components/css/color.css';

import Student from './student'
import CanteenOwner from './CanteenOwner'
import Admin from './Admin'
import LoginSignup from './LoginSignup'

// not-logged-in
//student
//canteen owner
//admin
let logIn = 'student';

function App() {

  if (logIn === 'student') {
    return (
      <Student />
    )
  }
  if (logIn === 'canteenOwner') {
    return (
      <CanteenOwner />
    )
  }
  if (logIn === 'admin') {
    return (
      <Admin />
    )
  }
  if (logIn === 'none') {
    return (
      <LoginSignup />
    )
  }

  // return (
  //   <div className="index">
  //     <MainMenu windowDimensions={windowDimensions} />
  //     <Switch>
  //       <Route path="/canteen">
  //         <div className="layout" style={{ height: finalH }}>
  //           <LayoutALeft canteen={canteen} changeCanteen={changeCanteen} cart={cart} UpdateCart={UpdateCart} />
  //           <LayoutARight canteen={canteen} changeCart={changeCart} />
  //         </div>
  //       </Route>
  //       <Route path="/profile"></Route>
  //       <Route path="/orders"></Route>
  //       <Route path="/favourites"></Route>
  //       <Route path="/loginsignup">
  //         <div id="login_signup_form" style={{ height: finalH }}>
  //           <LoginSignupForm />
  //         </div>
  //       </Route>
  //       <Route path="/">
  //       </Route>
  //     </Switch>
  //   </div>
  // );
}


export default App;
