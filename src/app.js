/* eslint-disable no-unused-vars */
import React from 'react';

import Footer from './components/footer/footer.js';

// import ToDoList from './components/to-do-list/toDoList.js';
import ToDoList from './components/to-do-list/api-with-toDoList.js';
import SettingProvider from './components/context/context.js';

// import Auth from './components/auth/auth.js';
import Login from './components/auth/login.js';
import LoginContext from './components/auth/login-context.js';

import './app.scss';

function App(){

  return(
    <SettingProvider>
      <div className="container">
        <LoginContext>
          <Login />
        </LoginContext>
        <ToDoList />
        <Footer />
      </div>
    </SettingProvider>
    // <SettingProvider>
    //   <div className="container">
    //     <Login />
    //     <ToDoList />
    //     <Footer />
    //   </div>
    // </SettingProvider>
  );

}

export default App;
