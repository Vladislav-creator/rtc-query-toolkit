import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';
import { filtersReducer } from './filtersSlice';
export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(contactsApi.middleware)
});