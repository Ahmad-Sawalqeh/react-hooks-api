/* eslint-disable no-unused-vars */
// import React from 'react';
// import { LoginContext } from './login-context.js';
// // import { JsonWebTokenError } from 'jsonwebtoken';

// const If = props => {
//   return props.condition ? props.children : null;
// }

// function Login (props){

//   const contextType = LoginContext;

//   const [user , setUser] = useState('');

//   function handleChange (e){
//     setUser({...user, [e.target.name]: e.target.value,} );
//   }

//   function handleSubmit (e){
//     e.preventDefault();
//     this.context.login(username, password);
//     e.target.reset();
//   }

//   render() {
//     return (
//       <>
//         <If condition={this.context.loggedIn}>
//           <button onClick={this.context.logout}>Log Out!</button>
//         </If>

//         <If condition={!this.context.loggedIn}>
//           <form onSubmit={handleSubmit}>
//             <input name="username" onChange={handleChange} placeholder="Username"/>
//             <input name="password" onChange={handleChange} placeholder="Password"/>
//             <button>Log In!</button>
//           </form>
//         </If>
//       </>
//     );
//   }
// }

// export default Login;


/*********************************************************/

import React from 'react';
import { LoginContext } from './login-context.js';
// import { JsonWebTokenError } from 'jsonwebtoken';

import './login.scss';

const If = props => {
  return props.condition ? props.children : null;
};

class Login extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name] : e.target.value, });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.context.login(this.state.username, this.state.password);
    e.target.reset();
  }

  render() {
    return (
      <>
        <div className="container loginHeader">
          <If condition={this.context.loggedIn}>
            <button className='logout' onClick={this.context.logout}>Log Out</button>
          </If>

          <If condition={!this.context.loggedIn}>
            <form onSubmit={this.handleSubmit}>
              <label>Username:
                <input name="username" onChange={this.handleChange} placeholder='Enter your name'/>
              </label>
              <button className='login'>Log In!</button><br />
              <label>Password:
                <input name="password" onChange={this.handleChange} placeholder='Enter your password'/>
              </label>
            </form>
          </If>
        </div>
      </>
    );
  }
}

export default Login;
