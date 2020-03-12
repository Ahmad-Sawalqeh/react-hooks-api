/* eslint-disable no-unused-vars */
import React from 'react';

import Footer from './components/footer/footer.js';
// import ToDoList from './components/to-do-list/toDoList.js';
import ToDoList from './components/to-do-list/api-with-toDoList.js';


import './app.scss';

function App(){

  return(
    <React.Fragment>
      <div className="container">
        <ToDoList />
        <Footer />
      </div>
    </React.Fragment>
  );

}

export default App;
