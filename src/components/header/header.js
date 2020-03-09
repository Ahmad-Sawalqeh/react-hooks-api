/* eslint-disable no-unused-vars */
import React from 'react';
// import React, { useState } from 'react';
import './header.scss';

function Header(props) {

  return (
    <header>
      <h1>
        <span>There are </span>
        {props.todoList.filter( item => !item.complete ).length}
        <span> Items To Complete</span>
      </h1>
    </header>
  );

}

export default Header;
