import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//styles
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();

// ========================================
//
// //functional component - takes props as input and outputs an element
// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>;
// }
//
// //same component above as ES6 class - takes props as input and outputs an element
// // class Welcome extends React.Component {
// //   render(){
// //     return <h1>Hello, {this.props.name}</h1>;
// //   }
// // }
//
// // All React components must act like pure functions with respect to their props.
// // i.e. React components must never modify their props (their input)
// // Instead, React components should modify their state (their output)
// // State allows React components to change their output over time in response to
// // user actions, network responses, and anything else, without violating this rule
//
//
//
// //render(element, React DOM root);
// // render the element into the root DOM node
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
