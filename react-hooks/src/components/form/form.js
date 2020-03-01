import React from 'react';
import './form.scss';

function Form() {
  return (
    <form>
      <div>
        <label>To Do Item Text:</label>
        <input type='text'></input>
      </div>
      <div>
        <label>Assigned To:</label>
        <input type='text'></input>
      </div>
      <div>
        <label>status:</label>
        <input type='text' placeholder='complete or incomplete'></input>
      </div>
      <div>
        <label>Difficulty:</label>
        <input type='number' max='5' min='1'></input>
      </div>
    </form>
  )
}

export default Form;