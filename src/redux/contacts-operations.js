import axios from 'axios';
import {
    addContactSuccess, 
    addContactError, 
    addContactRequest,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,  
    changeFilterValue
} from './contact-actions';

axios.defaults.baseURL = 'http://localhost:3000/contacts';

export const getSubmitData = (text) => dispatch =>{
    const contact = {
        text,
        completed: false,
    };

    dispatch(addContactRequest());

    axios
    .post('/contact', contact)
    .then(({data})=> dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)))
};


export const deleteContact = (contactId) => dispatch => {
    
    dispatch(deleteContactRequest());

    axios
    .delete(`/contact/${contactId}`)
    .then(()=> dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)))
};
// export default {getSubmitData,}