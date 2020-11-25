import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import styles from './Task.module.scss';
import { handleChangeStatus } from "../../actions/task";


const cx = classNames.bind(styles);

const mapStateToProps = (state, props) => {
    const taskIndex = state.task.tasks.findIndex(x => (x.id === props.data.id));
    return {
        completed: state.task.tasks[taskIndex].completed
    }
}

const mapDispatchToProps = (dispatch) => ({
    dispatchOnChangeStatus: (id) => dispatch(handleChangeStatus(id))
})

class TaskComponent extends React.Component {

    changeTaskStatus(id, fun) {
        fun(id)
    }

    render() {
        const data = this.props.data
        const completed = this.props.completed;

        const onChangeStatus = () => {
            this.props.dispatchOnChangeStatus(data.id)
        }

        return (
            <div className={cx('container')}>
                <div className={cx('Task', {'Task-completed': completed, 'Task-not-completed': !completed})} key={data.id}>
                    <div className={cx('Task-content')}>
                        <h2 className ={cx('Task-content')}>Task {data.id}</h2>
                        <ul>
                            <li>Name: {data.name}</li>
                            <li>Description: {data.description}</li>
                            <li>Completed: {completed.toString()}</li>
                        </ul>
                    </div>
                    <div className={cx('buttons')}>
                        <button onClick={() => console.log(this, 'Task ' + data.id + ' completed status = ' + completed)} className={cx('GetStatus')}>Get status</button>
                        <button onClick={onChangeStatus} className={cx('ChangeStatus')}>Change Status</button>
                    </div>
                </div>
            </div>
        )
    }
}

export const Task = connect(mapStateToProps, mapDispatchToProps)(TaskComponent);