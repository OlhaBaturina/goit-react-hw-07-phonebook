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
    changeFilterValue,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError
} from './contact-actions';


const contactsReducer = createReducer([], {
    
    [fetchContactSuccess]: (state, {payload}) => payload,

    [addContactSuccess]: (state, {payload}) => {
          return [...state, payload];

    },
    
    [deleteContactSuccess]: (state, {payload}) => {
        return state.filter(({id})=> id !== payload);
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
