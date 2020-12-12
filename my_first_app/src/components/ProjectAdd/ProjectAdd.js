import React from "react";
import {connect} from 'react-redux';

import {handleAddProject} from "../../actions/project";

import styles from './ProjectAdd.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const InputProjectTag = ({value, onChange, placeholder}) => (
    <input
        className={cx('Project-field', 'Project-input')}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
)

const mapStateToProps = (state) => ({
    theme: state.theme.theme
});

const mapDispatchToProps = (dispatch) => ({
    handleAddProject: (project) => dispatch(handleAddProject(project))
});

class ProjectAddComponent extends React.Component {
    state = {
        lastId: this.props.projectId,
        inputName: ''
    }

    handleInputNameChange = (event) => {
        const {value} = event.target;
        this.setState({inputName: value});
    }

    onAddProject = () => {
        this.props.handleAddProject({
            id: this.state.lastId + 1,
            name: this.state.inputName,
            tasks: []
        })
        this.setState({lastId: this.state.lastId + 1})
    }

    render() {
        return (
            <div className={cx('ProjectAdd-container')}>
                <div className={cx('ProjectAdd', `ProjectAdd-theme-${this.props.theme}`)}>
                    <InputProjectTag value={this.state.inputName} placeholder='Введите имя проекта'
                                     onChange={this.handleInputNameChange}/>
                    <button className={cx('Project-field', 'Project-add-button')} onClick={this.onAddProject}>Добавить проект</button>
                </div>
            </div>
        )

    }
}

export const ProjectAdd = connect(mapStateToProps, mapDispatchToProps)(ProjectAddComponent);