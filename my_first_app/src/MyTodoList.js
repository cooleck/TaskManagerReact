import React from 'react'
import './MyTodoList.css'

class MyTodoList extends React.Component {
    state = {
        tasks: [
            {
                id: 74342,
                name: 'Купить продукты.',
                description: 'Хлеб, молоко, сыр.',
                completed: true
            },

            {
                id: 22356,
                name: 'Сдать ДЗ во время.',
                description: 'Очень сложно.',
                completed: false
            },

            {
                id: 12535,
                name: 'Сдать сессию на 10.',
                description: 'Невозможно.',
                completed: true
            },

            {
                id: 9835,
                name: 'Сделать проект.',
                description: 'К 26 января.',
                completed: true
            },

            {
                id: 545656,
                name: 'Поспать.',
                description: 'Минимум 8 часов.',
                completed: false
            },

            {
                id: 9755,
                name: 'Запушить коммит',
                description: 'Как можно скорее.',
                completed: true
            },

            {
                id: 53762,
                name: 'Поесть.',
                description: 'В Burger Heroes.',
                completed: false
            }
        ]
    }

    task = (x) => {

        return (
            <div className={"Task " + (x['completed'] ? "Completed" : "NotCompleted")} key={x['id']}>
                <h2 className="Task">Task {x['id']}</h2>
                <ul className="Task">
                    <li>Name: {x['name']}</li>
                    <li>Description: {x['description']}</li>
                    <li>Completed: {x['completed'].toString()}</li>
                </ul>
                <button onClick={console.log.bind(this, 'Task ' + x['id'] + ' completed status = ' + x['completed'])} className='GetStatus'>Get status</button>
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