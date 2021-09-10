import axios from 'axios';
import {
    addContactSuccess, 
    addContactError, 
    addContactRequest,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError, 
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError 
} from './contact-actions';

axios.defaults.baseURL = 'http://localhost:3000';

export const fetchData = () => dispatch =>{
    
    dispatch(fetchContactRequest());

    axios
    .get('/contacts')
    .then(({data})=> dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)))
};


export const getSubmitData = (text) => dispatch =>{
    
    dispatch(addContactRequest());

    axios
    .post('/contacts', text)
    .then(({data})=> dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)))
};


export const deleteContact = (contactId) => dispatch => {
    
    dispatch(deleteContactRequest());

    axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)))
};
