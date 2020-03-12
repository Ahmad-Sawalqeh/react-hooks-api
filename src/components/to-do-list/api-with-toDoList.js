/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { When } from '../if/index.js';
import Modal from '../modal/modal.js';
import Header from '../header/header.js';

// import useFetch from '../hooks/useFetch.js';
import useForm from '../hooks/useForm.js';

import './toDoList.scss';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

function ToDoList (props) {

  const [ todoList, setTodoList ] = useState([]);

  const [ item, handleInputChange, details, showDetails, toggleDetails] = useForm(todoList);
  // const [ addItem, deleteItem, toggleComplete ] = useFetch(item);

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

  useEffect (() => {
    const _updateState = data => {
      setTodoList(data.results);
    };
    callAPI( todoAPI, 'GET', undefined, _updateState );

    // return fetch(todoAPI, {
    //   method: 'GET',
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   headers: { 'Content-Type': 'application/json', },
    //   body: undefined,
    // })
    //   .then(response => response.json())
    //   .then(data => setTodoList(data.results))
    //   .catch( (e) => console.error(e) );

  },[]);

  return (
    <>
      <Header todoList={todoList}/>

      <section className="todo">
        <fieldset>
          <div>
            <h3>Add Item</h3>
            <form onSubmit={addItem}>
              <label>
                <span>To Do Item</span>
                <input
                  name="text"
                  placeholder="Add To Do List Item"
                  required
                  onChange={handleInputChange}
                />
              </label>
              {/* <label>
                <span>Difficulty Rating  </span>
                <input type="range" min="1" max="5" name="difficulty" defaultValue="3" onChange={handleInputChange} />
              </label> */}

              <label>Difficulty:
                <select name= "difficulty" onChange={handleInputChange}>
                  <option value ="1">1</option>
                  <option value ="2">2</option>
                  <option value ="3">3</option>
                  <option value ="4">4</option>
                  <option value ="5">5</option>
                </select>
              </label>

              <label>
                <span>Assigned To  </span>
                <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
              </label>

              <label>
                <span>Due  </span>
                <input type="date" name="due" onChange={handleInputChange} />
              </label>
              <button className='add'c>Add Item</button>
            </form>
          </div>
        </fieldset>

        <div>
          <ul>
            { todoList.map(item => (
              <li
                className={`complete-${item.complete.toString()}`}
                key={item._id}
              >
                <span onClick={() => toggleComplete(item._id)}>
                  {item.text}
                </span>
                <button onClick={() => toggleDetails(item._id)}>
                  Details
                </button>
                <button onClick={() => deleteItem(item._id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <When condition={showDetails}>
        <Modal title="To Do Item" close={toggleDetails}>
          <div className="todo-details">
            <header>
              <span>Assigned To: {details.assignee}</span>
              <span className='due'>Due: {details.due}</span>
            </header>
            <div className="item">
              {details.text}
            </div>
          </div>
        </Modal>
      </When>
    </>
  );
}

export default ToDoList;


/*********************************************/

// import React from 'react';
// import { When } from '../if/index.js';
// import Modal from '../modal/modal.js';

// import './toDoList.scss';

// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

// class ToDo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todoList: [],
//       item: {},
//       showDetails: false,
//       details: {},
//     };
//   }

//   handleInputChange = e => {
//     this.setState({ item: {...this.state.item, [e.target.name]: e.target.value} });
//   };

//   callAPI = (url, method='get', body, handler, errorHandler) => {

//     return fetch(url, {
//       method: method,
//       mode: 'cors',
//       cache: 'no-cache',
//       headers: { 'Content-Type': 'application/json' },
//       body: body ? JSON.stringify(body) : undefined,
//     })
//       .then(response => response.json())
//       .then(data => typeof handler === 'function' ? handler(data) : null )
//       .catch( (e) => typeof errorHandler === 'function' ? errorHandler(e) : console.error(e)  );
//   };

//   addItem = (e) => {

//     e.preventDefault();
//     e.target.reset();

//     const _updateState = newItem =>
//       this.setState({
//         todoList: [...this.state.todoList, newItem],
//       });

//     this.callAPI( todoAPI, 'POST', this.state.item, _updateState );

//   };

//   deleteItem = id => {

//     const _updateState = (results) =>
//       this.setState({
//         todoList: this.state.todoList.filter(item => item._id !== id),
//       });

//     this.callAPI( `${todoAPI}/${id}`, 'DELETE', undefined, _updateState );

//   };

//   saveItem = updatedItem => {

//     const _updateState = (newItem) =>
//       this.setState({
//         todoList: this.state.todoList.map(item =>
//           item._id === newItem._id ? newItem : item
//         ),
//       });

//     this.callAPI( `${todoAPI}/${updatedItem.id}`, 'PUT', updatedItem, _updateState );

//   };

//   toggleComplete = id => {
//     let item = this.state.todoList.filter(i => i._id === id)[0] || {};
//     if (item._id) {
//       item.complete = !item.complete;
//       this.saveItem(item);
//     }
//   };

//   toggleDetails = id => {
//     let showDetails = ! this.state.showDetails;
//     let details = this.state.todoList.filter( item => item._id === id )[0] || {};
//     this.setState({details, showDetails});
//   }

//   getTodoItems = () => {
//     const _updateState = data => this.setState({ todoList: data.results });
//     this.callAPI( todoAPI, 'GET', undefined, _updateState );
//   };

//   componentDidMount = () => {
//     this.getTodoItems();
//   }

//   render() {

//     return (
//       <>
//         <header>
//           <h2>
//             There are
//             {this.state.todoList.filter( item => !item.complete ).length}
//             Items To Complete
//           </h2>
//         </header>

//         <section className="todo">

//           <div>
//             <h3>Add Item</h3>
//             <form onSubmit={this.addItem}>
//               <label>
//                 <span>To Do Item</span>
//                 <input
//                   name="text"
//                   placeholder="Add To Do List Item"
//                   onChange={this.handleInputChange}
//                 />
//               </label>
//               <label>
//                 <span>Difficulty Rating</span>
//                 <input type="range" min="1" max="5" name="difficulty" defaultValue="3" onChange={this.handleInputChange} />
//               </label>
//               <label>
//                 <span>Assigned To</span>
//                 <input type="text" name="assignee" placeholder="Assigned To" onChange={this.handleInputChange} />
//               </label>
//               <label>
//                 <span>Due</span>
//                 <input type="date" name="due" onChange={this.handleInputChange} />
//               </label>
//               <button>Add Item</button>
//             </form>
//           </div>

//           <div>
//             <ul>
//               { this.state.todoList.map(item => (
//                 <li
//                   className={`complete-${item.complete.toString()}`}
//                   key={item._id}
//                 >
//                   <span onClick={() => this.toggleComplete(item._id)}>
//                     {item.text}
//                   </span>
//                   <button onClick={() => this.toggleDetails(item._id)}>
//                     Details
//                   </button>
//                   <button onClick={() => this.deleteItem(item._id)}>
//                     Delete
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </section>

//         <When condition={this.state.showDetails}>
//           <Modal title="To Do Item" close={this.toggleDetails}>
//             <div className="todo-details">
//               <header>
//                 <span>Assigned To: {this.state.details.assignee}</span>
//                 <span>Due: {this.state.details.due}</span>
//               </header>
//               <div className="item">
//                 {this.state.details.text}
//               </div>
//             </div>
//           </Modal>
//         </When>
//       </>
//     );
//   }
// }

// export default ToDo;
