// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createReducer } from '@reduxjs/toolkit';
import {
    addContactSuccess, 
    addContactError, 
    addContactRequest,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError, 
    changeFilterValue
} from './contact-actions';
// import {getSubmitData} from './contacts-operations'

const contactsReducer = createReducer([], {
    [addContactSuccess]: (state, {payload}) => {
        console.log('state:', state);
        console.log('action:', payload)
        return [...state, payload];
    },

    [deleteContactSuccess]: (state, {payload}) => {
        state.filter(({id})=> id !== payload);
    },
});

export const loading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
 })

export const filterReducer = createReducer('', {
    [changeFilterValue]: (_, action) => {
        return action.payload;
    },
});

export default { contactsReducer, filterReducer };
