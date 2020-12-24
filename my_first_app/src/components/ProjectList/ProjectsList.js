import React from 'react';
import { connect } from 'react-redux';
import { Project } from '../Project/Project';
import { ProjectAdd } from '../ProjectAdd/ProjectAdd';

const mapStateToProps = (state) => ({
    projects: state.project.projects
});

const ProjectListComponent = ({ projects }) => {
    return (
        <div>
            <ProjectAdd projectId={projects.length}/>
            <div>
                {projects.map(x => (<Project key={x.id} id={x.id}/>))}
            </div>
        </div>
    )
}

export const ProjectList = connect(mapStateToProps)(ProjectListComponent);