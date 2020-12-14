import React from 'react'
import classNames from 'classnames/bind'

import styles from './Task.module.scss'

const cx = classNames.bind(styles);

class Task extends React.Component {

    changeTaskStatus(id, fun) {
        fun(id)
    }

    render() {
        const x = this.props.data

        return (
            <div className={cx('container')}>
                <div className={cx('Task', {'Task-completed': x.completed, 'Task-not-completed': !x.completed})} key={x.id}>
                    <div className={cx('Task-content')}>
                        <h2 className ={cx('Task-content')}>Task {x.id}</h2>
                        <ul>
                            <li>Name: {x.name}</li>
                            <li>Description: {x.description}</li>
                            <li>Completed: {x.completed.toString()}</li>
                        </ul>
                    </div>
                    <div className={cx('buttons')}>
                        <button onClick={() => console.log(this, 'Task ' + x.id + ' completed status = ' + x.completed)} className={cx('GetStatus')}>Get status</button>
                        <button onClick={() => this.changeTaskStatus(x.id, this.props.changeStatus)} className={cx('ChangeStatus')}>Change Status</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task