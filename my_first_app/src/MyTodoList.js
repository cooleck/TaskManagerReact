import React from 'react'
import './MyTodoList.css'

class MyTodoList extends React.Component {
    state = {
        tasks: [
            {
                id: 74342,
                name: 'Name of the task',
                description: 'What needs to be done',
                completed: true
            },

            {
                id: 22356,
                name: 'Name of the task',
                description: 'What needs to be done',
                completed: true
            },

            {
                id: 12535,
                name: 'Name of the task',
                description: 'What needs to be done',
                completed: false
            },

            {
                id: 9835,
                name: 'Name of the task',
                description: 'What needs to be done',
                completed: true
            },

            {
                id: 545656,
                name: 'Name of the task',
                description: 'What needs to be done',
                completed: false
            }
        ]
    }

    task = (x) => {

        return (
            <div className={"Task " + (x['completed'] ? "Completed" : "NotCompleted")} key={x['id']}>
                <h2 className="Task">Task {x['id']}</h2>
                <ul>
                    <li>Name: {x['name']}</li>
                    <li>Description: {x['description']}</li>
                    <li>Completed: {x['completed'].toString()}</li>
                </ul>
                <button onClick={console.log("Task id completed status = d")}>Get status</button>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.state['tasks'].map(x => this.task(x))}
            </div>
        )
    }
}

export default MyTodoList;