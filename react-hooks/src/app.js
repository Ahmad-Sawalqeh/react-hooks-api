/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';

import './app.scss';

function App(){

  render(){
    return(
      <React.Fragment>
        <div className="container">
          <Header />
          <Form update={this.handleUpdate} />
          <Footer />
        </div>
      </React.Fragment>
    );
  };

}

export default App;
