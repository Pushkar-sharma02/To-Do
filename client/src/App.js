import logo from './logo.svg';
import './App.css';
//components  
import Header from './components/Header';
import ToDoform from './components/TodoForm';
import Todos from './components/Todos';
import React from 'react';

function App() {
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <ToDoform />
        <Todos/>
    </div>
  );
}

export default App;