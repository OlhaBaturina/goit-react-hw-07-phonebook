import React from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import action from '../../redux/contact-actions';

const Contacts = () => {
    const contacts = useSelector(({ contacts, filter }) => {
        const visibleContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
        );
        return visibleContacts;
    });

    const dispatch = useDispatch();

    return (
        <div>
            <ul className={s.thumb}>
                {contacts &&
                    contacts.map(contact => {
                        return (
                            <li className={s.contactList} key={contact.id}>
                                {contact.name}: {contact.number}
                                <button
                                    className={s.button}
                                    type="button"
                                    onClick={() => {
                                        dispatch(
                                            action.handleDelete(contact.id),
                                        );
                                    }}
                                >
                                    Delete
                                </button>
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Contacts;

Contacts.propTypes = {
    contacts: PropTypes.array,
    deleteFunction: PropTypes.func,
};
