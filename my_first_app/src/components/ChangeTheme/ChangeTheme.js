import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames/bind';

import {handleChangeTheme} from '../../actions/theme';
import styles from './ChangeTheme.module.scss';

const cx = classnames.bind(styles);

const mapDispatchToProps = (dispatch) => ({
    dispatchOnChangeTheme: (theme) => dispatch(handleChangeTheme(theme))
})

const mapStateToProps = (state) => ({
    theme: state.theme.theme
})

const ChangeThemeComponent = ({theme, dispatchOnChangeTheme}) => {
    const onChangeTheme = (e) => {
        dispatchOnChangeTheme(e.target.value);
    };

    return (
        <div className={cx('ChangeTheme')}>
            <div>
                <input
                    type='radio'
                    id='classic'
                    value='classic'
                    onChange={onChangeTheme}
                    checked={theme === 'classic'}
                />
                <label htmlFor="classic">Classic Theme</label>
            </div>
            <div>
                <input
                    type='radio'
                    id='dark'
                    value='dark'
                    onChange={onChangeTheme}
                    checked={theme === 'dark'}
                />
                <label htmlFor="dark">Dark Theme</label>
            </div>
        </div>
    );
};

export const ChangeTheme = connect(mapStateToProps, mapDispatchToProps)(ChangeThemeComponent);
