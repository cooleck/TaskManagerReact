import React from 'react';
import {connect} from 'react-redux';
import {handleAddTask} from "../../actions/task";

import styles from './TaskAdd.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const InputTaskTag = ({value, onChange, placeholder}) => (
    <input
        className={cx('Task-input', 'Task-field')}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
)

const mapDispatchToProps = (dispatch) => ({
    dispatchOnAddTask: (task) => dispatch(handleAddTask(task))
})

const mapStateToProps = (state) => ({
    theme: state.theme.theme
});

class TaskAddComponent extends React.Component {
    state = {
        lastId: this.props.lastId,
        inputName: '',
        inputDescription: '',
    }

    handleInputNameChange = event => {
        const {value} = event.target
        let newState = {...this.state}
        newState.inputName = value
        this.setState(newState)
    }

    handleInputDescriptionChange = event => {
        const {value} = event.target
        let newState = {...this.state}
        newState.inputDescription = value
        this.setState(newState)
    }

    onAddTask = () => {
        this.props.dispatchOnAddTask(
            {
                task: {
                    id: this.state.lastId + 1,
                    name: this.state.inputName,
                    description: this.state.inputDescription,
                    completed: false
                },
                projectId: this.props.projectId
            })
        this.setState( {lastId: this.state.lastId + 1} )
    }


    render() {
        const theme = this.props.theme;

        return (
            <div className={cx('Task-add')}>
                <div className={cx('Task-panel-add', `Task-theme-${theme}`)}>
                    <InputTaskTag value={this.state.inputName} onChange={this.handleInputNameChange}
                                  placeholder='Type the name of the task'/>
                    <InputTaskTag value={this.state.inputDescription} onChange={this.handleInputDescriptionChange}
                                  placeholder='Type the description of the task'/>
                    <button onClick={this.onAddTask} className={cx('Task-add-button', 'Task-field')}>Add task</button>
                </div>
            </div>
        )

    }
}

export const TaskAdd = connect(mapStateToProps, mapDispatchToProps)(TaskAddComponent);