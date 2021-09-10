import React, { useEffect }  from 'react';
import s from './Contact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {fetchData, deleteContact} from '../../redux/contacts-operations';


const Contacts = () => {
    
    const contacts = useSelector(({ contacts, filter }) => {
        const visibleContacts = contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
        );
        return visibleContacts;
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
      }, [dispatch]);

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
                                            deleteContact(contact.id),
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

