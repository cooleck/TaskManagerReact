import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyTodoList from './MyTodoList.js'

function App() {
  return (
      <div>
        <h1 className="Title">Task Tracker</h1>
        <MyTodoList />
      </div>
  )
}

export default App;
