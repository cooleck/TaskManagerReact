import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ProjectList } from "./ProjectList/ProjectsList";
import {TaskList} from "./TaskList/TaskList";

export default function Routes() {
    return (
        <Switch>
            <Route path='/projects/:projectId' component={TaskList}/>
            <Route exact path='/projects' component={ProjectList} />

            <Redirect to='/projects' />
        </Switch>
    )
}