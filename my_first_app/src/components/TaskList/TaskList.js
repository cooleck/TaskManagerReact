import React from 'react';
import { connect } from 'react-redux';

import { Task } from '../Task/Task';
import { TaskAdd } from '../TaskAdd/TaskAdd';

import classNames from 'classnames/bind';
import styles from './TaskList.module.scss';
import {Redirect} from "react-router-dom";

const cx = classNames.bind(styles);

const mapStateToProps = (state) => ({
    projects: state.project.projects,
    theme: state.theme.theme
})

const TaskListComponent = ({ projects, match , theme}) => {
    const { projectId } = match.params;
    let tasks;
    try {
        tasks = projects.find(x => (x.id == projectId)).tasks;
    }
    catch {
        return (
            <Redirect to='/projects' />
        )
    }
    return (
        <div>
            <TaskAdd lastId={tasks.length} projectId={projectId} />
            <div className={cx(`TaskList-theme-${theme}`)}>
                {tasks.map(x => <Task data={x} key={x.id} projectId={projectId}/>)}
            </div>
        </div>
    );
};

export const TaskList = connect(mapStateToProps)(TaskListComponent);