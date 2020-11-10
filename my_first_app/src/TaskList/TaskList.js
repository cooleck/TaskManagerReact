import React from 'react'
import Task from '../Task/Task'
import TaskAdd from '../TaskAdd/TaskAdd'

class TaskList extends React.Component {
    state = {
        tasks: [
            {
                id: 1,
                name: 'Купить продукты.',
                description: 'Хлеб, молоко, сыр.',
                completed: true
            },

            {
                id: 2,
                name: 'Сдать ДЗ во время.',
                description: 'Очень сложно.',
                completed: false
            },

            {
                id: 3,
                name: 'Сдать сессию на 10.',
                description: 'Невозможно.',
                completed: true
            },

            {
                id: 4,
                name: 'Сделать проект.',
                description: 'К 26 января.',
                completed: true
            },

            {
                id: 5,
                name: 'Поспать.',
                description: 'Минимум 8 часов.',
                completed: false
            },

            {
                id: 6,
                name: 'Запушить коммит',
                description: 'Как можно скорее.',
                completed: true
            },

            {
                id: 7,
                name: 'Поесть.',
                description: 'В Burger Heroes.',
                completed: false
            }
        ]
    }

    handleChangeStatus =(id) => {
        let taskIndex = this.state.tasks.findIndex(x => (x.id === id))
        const newTasks = this.state.tasks
        newTasks[taskIndex].completed = newTasks[taskIndex].completed ? false : true
        this.setState({tasks: newTasks})
    }



    handleAddTask = (inputName, inputDescription) => {
        let id = this.state.tasks[this.state.tasks.length - 1].id + 1
        let newTask = {
            id: id,
            name: inputName,
            description: inputDescription,
            completed: false
        }
        this.setState(currentState => ({tasks: [...currentState.tasks, newTask]}))
    }

    render() {
        return (
            <div>
                <TaskAdd handleChange={this.handleAddTask} />
                <div>
                    {this.state['tasks'].map(x => <Task data={x} key={x.id} changeStatus={this.handleChangeStatus} />)}
                </div>
            </div>
        )
    }
}

export default TaskList;