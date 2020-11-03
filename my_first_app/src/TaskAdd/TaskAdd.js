import React from 'react'
import './TaskAdd.css'

const InputTaskTag = ({ value, onChange, placeholder }) => (
    <input
        className='task-input'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
)


class TaskAdd extends React.Component {
    state = {
        inputName: '',
        inputDescription: '',
    }

    addTask = () => {
        this.props.handleChange(this.state.inputName, this.state.inputDescription)
        this.setState({inputName: '', inputDescription: ''})
    }

    handleInputNameChange = event => {
        const { value } = event.target
        let newState = {...this.state}
        newState.inputName = value
        this.setState(newState)
    }

    handleInputDescriptionChange = event => {
        const { value } = event.target
        let newState = {...this.state}
        newState.inputDescription = value
        this.setState(newState)
    }

    render() {
        return (
            <div className='task-add'>
                <div className='panel-add'>
                    <InputTaskTag value={this.state.inputName} onChange={this.handleInputNameChange} placeholder='Type the name of the task' />
                    <InputTaskTag value={this.state.inputDescription} onChange={this.handleInputDescriptionChange} placeholder='Type the description of the task' />
                    <button onClick={this.addTask} className='task-add-button'>Add task</button>
                </div>
            </div>
        )

    }
}

export default TaskAdd