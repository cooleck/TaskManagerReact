import React from "react";

import {Link} from "react-router-dom";
import {connect} from 'react-redux';

import styles from './Project.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const mapStateToProps = (state) => ({
    projects: state.project.projects,
    theme: state.theme.theme
})

const ProjectComponent = ({theme, projects, id}) => {
    const projectIndex = projects.findIndex(x => (x.id === id));
    const project = projects[projectIndex];

    return (
        <>
            <div className={cx('Project-container')}>
                <div className={cx('Project', `Project-theme-${theme}`)}>
                    <h1>Project #{project.id}</h1>
                    <ul>
                        <li>Name: {project.name}</li>
                        <li>Tasks number: {project.tasks.length}</li>
                    </ul>
                    <Link to={`/projects/${id}`}>
                        <div className={cx('link', `link-theme-${theme}`)}>
                            <h3> View more </h3>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export const Project = connect(mapStateToProps)(ProjectComponent);