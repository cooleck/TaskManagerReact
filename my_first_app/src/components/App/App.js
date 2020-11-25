import React from 'react';
import classnames from 'classnames/bind';
import { connect } from 'react-redux';

import './App.scss';
import {TaskList} from '../TaskList/TaskList';
import styles from './App.scss';
import { ChangeTheme } from '../ChangeTheme/ChangeTheme'

const cx = classnames.bind(styles);

const mapStateToProps = (state) => ({
    theme: state.theme.theme
});

const AppComponent = ({theme}) => {
    return (
        <div className={cx('container', `container-theme-${theme}`)}>
            <h1 className="Title">Task Tracker</h1>
            <ChangeTheme />
            <TaskList/>
        </div>
    )
}

export const App = connect(mapStateToProps)(AppComponent);
