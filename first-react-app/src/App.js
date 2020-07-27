import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //       <h1>Hi, I'm a React App</h1>
  //     </div>
  //   );
  // }

  render() {
    // ? React will interprete by default h1 as a string    
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App');
    // ? So If we would need to create another html/react element, we would need to do the following
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
