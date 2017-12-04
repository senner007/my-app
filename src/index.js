import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// function App2 () {
//   return (
//   <div>
//     <h1>Hello there from App2</h1>
//   </div>
//   )
// }
// ReactDOM.render(<App2 />, document.getElementById('root'));
