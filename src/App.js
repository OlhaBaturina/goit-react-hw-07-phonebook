import React from 'react';
import { useSelector} from 'react-redux';
import { Form } from './Components/Form/Form';
import Contacts from './Components/Contact/Contact';
import Filter from './Components/Filter/Filter';
import CustomLoader from './Components/Loader/Loader';
import s from './App.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const App = () => {
    
    const showLoader = useSelector(({ loading }) => loading);

    return (
        <>
            <h1 className={s.title}>PhoneBook</h1>
            <Form />
            {showLoader && <CustomLoader/>}
            <h2 className={s.title}>Contacts</h2>
            <Filter />
            <Contacts />
            <ToastContainer/>
            
        </>
    );
};
