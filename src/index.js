import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = () => (
  
  <h1>Welcome to BitHub</h1>
  
)
  
ReactDOM.render(
  <App />,
  document.getElementById('root') || document.createElement('div'),
  );
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default App;