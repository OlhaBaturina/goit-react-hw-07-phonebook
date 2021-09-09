import { createAction } from '@reduxjs/toolkit';

const getSubmitData = createAction('contacts/getSubmitData');
const handleDelete = createAction('contacts/handleDelete');
const changeFilterValue = createAction('contacts/changeFilterValue');

export default { getSubmitData, handleDelete, changeFilterValue };
