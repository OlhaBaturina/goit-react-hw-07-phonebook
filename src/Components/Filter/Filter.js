import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import action from '../../redux/contact-actions';
import { getFilter } from '../../redux/contact-filter';

const Filter = () => {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();
    return (
        <label className={s.label}>
            Filter contact by name
            <input
                className={s.input}
                type="text"
                value={value}
                onChange={evt => {
                    dispatch(action.changeFilterValue(evt.target.value));
                }}
            />
        </label>
    );
};

export default Filter;

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};
