import React from 'react';
import {connect} from 'react-redux';

import { Task } from '../Task/Task';
import { TaskAdd } from '../TaskAdd/TaskAdd';

const mapStateToProps = (state) => ({
    tasks: state.task.tasks
})

const TaskListComponent = ({ tasks }) => {
    return (
        <div className="TaskList-theme-classic">
            <TaskAdd lastId={tasks.length}/>
            <div>
                {tasks.map(x => <Task data={x} key={x.id} />)}
            </div>
        </div>
    );
};

export const TaskList = connect(mapStateToProps)(TaskListComponent);