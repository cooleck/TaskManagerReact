import React from 'react';
import './App.css';
import TaskList from '../TaskList/TaskList'

function App() {
  return (
      <div>
        <h1 className="Title">Task Tracker</h1>
        <TaskList />
      </div>
  )
}

export default App;
