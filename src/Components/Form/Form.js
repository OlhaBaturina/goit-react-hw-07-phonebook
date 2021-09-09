import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import action from '../../redux/contact-actions';
import { toast } from 'react-toastify';

export function Form() {
    Form.propTypes = {
        submitMethod: PropTypes.func,
    };

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [id, setId] = useState('');

    const handleClick = event => {
        const { value, name, id } = event.target;

        switch (name) {
            case 'name':
                setName(value.trim());
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
        setId(id);
    };

    const contact = useSelector(({ contacts }) =>
        contacts.map(({ name }) => name),
    );

    const handleSubmit = event => {
        event.preventDefault();
        if (contact.includes(name.toLowerCase())) {
            return toast.error('Hey, this name always here!');
        }
        dispatch(action.getSubmitData({ name, number, id }));
        resetState();
    };

    const resetState = () => {
        setName('');
        setNumber('');
        setId('');
    };

    return (
        <form className={s.thumb} onSubmit={handleSubmit}>
            <label>
                <span className={s.name}>Name</span>
                <input
                    className={s.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={name}
                    onChange={handleClick}
                    id={uuidv4()}
                />
            </label>

            <label>
                <span className={s.name}>Number</span>
                <input
                    type="tel"
                    className={s.input}
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={handleClick}
                    value={number}
                    id={uuidv4()}
                />
            </label>
            <button type="submit" className={s.button}>
                Save contact
            </button>
        </form>
    );
}
