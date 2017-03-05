// Import CSS
import '../css/master.sass';
import ToDoList from './ToDoList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <MuiThemeProvider>
    <ToDoList/>
  </MuiThemeProvider>
);

// Render!
ReactDOM.render(<App />, document.getElementById('main'));
