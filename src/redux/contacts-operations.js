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

axios.defaults.baseURL = 'http://localhost:3000';

export const getSubmitData = (text) => dispatch =>{
    // const contact = {
    //     text,
    //     completed: false,
    // };
console.log(text);

    dispatch(addContactRequest());

    axios
    .post('/contacts', text)
    .then(({data})=> dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)))
};


export const deleteContact = (contactId) => dispatch => {
    console.log(contactId);
    dispatch(deleteContactRequest());

    axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)))
};
// export default {getSubmitData,}