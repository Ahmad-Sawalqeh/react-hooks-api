/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const useFetch = (item) => {

  const [ todoList, setTodoList ] = useState([]);

  function addItem (e) {
    e.preventDefault();
    e.target.reset();
    const _updateState = newItem =>{
      setTodoList([...todoList, newItem]);
    };
    callAPI( todoAPI, 'POST', item, _updateState );
  }

  function deleteItem (id) {
    const _updateState = results => {
      setTodoList(todoList.filter(item => item._id !== id),);
    };
    callAPI( `${todoAPI}/${id}`, 'DELETE', undefined, _updateState );
  }

  function saveItem (updatedItem) {
    const _updateState = newItem => {
      setTodoList(todoList.map(item => item._id === newItem._id ? newItem : item ));
    };
    callAPI( `${todoAPI}/${updatedItem.id}`, 'PUT', updatedItem, _updateState );
  }

  function toggleComplete (id) {
    let newItem = todoList.filter(i => i._id === id)[0] || {};
    if (newItem._id) {
      newItem.complete = !newItem.complete;
      saveItem(newItem);
    }
  }

  // useEffect(() => {
  const callAPI = (url, method = 'get', body, handler, errorHandler) => {
    return fetch(url, {
      method: method,
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json', },
      body: body ? JSON.stringify(body) : undefined,
    })
      .then(response => response.json())
      .then(data => typeof handler === 'function' ? handler(data) : null )
      .catch( (e) => typeof errorHandler === 'function' ? errorHandler(e) : console.error(e) );
  };

  // callAPI(url, method, body, handler);

  // }, [url]);

  return [ addItem, deleteItem, toggleComplete ];
};

export default useFetch;
