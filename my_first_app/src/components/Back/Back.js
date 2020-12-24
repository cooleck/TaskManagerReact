import React from 'react';
import styles from './Back.module.scss';
import classNames from 'classnames/bind';
import {Link} from "react-router-dom";

const cx = classNames.bind(styles);

const Back = () => {
    return (
        <div className={cx('back')}>
            <Link to={'/projects'}>
                <button className={cx('back_button')}>
                    Список проектов
                </button>
            </Link>
        </div>
    )
}

export default Back;