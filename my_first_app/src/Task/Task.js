import React from 'react'
import './Task.css'

class Task extends React.Component {

    changeTaskStatus(id, fun) {
        fun(id)
    }

    render() {
        const x = this.props.data

        return (
            <div className="container">
                <div className={"Task " + (x.completed ? "Completed" : "NotCompleted")} key={x.id}>
                    <div className="TaskContent">
                        <h2 className = "TaskContent">Task {x.id}</h2>
                        <ul className="TaskContent">
                            <li>Name: {x.name}</li>
                            <li>Description: {x.description}</li>
                            <li>Completed: {x.completed.toString()}</li>
                        </ul>
                    </div>
                    <div className="buttons">
                        <button onClick={() => console.log(this, 'Task ' + x.id + ' completed status = ' + x.completed)} className='GetStatus'>Get status</button>
                        <button onClick={() => this.changeTaskStatus(x.id, this.props.changeStatus)} className="ChangeStatus">Change Status</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task