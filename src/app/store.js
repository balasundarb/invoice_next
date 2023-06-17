import { configureStore } from "@reduxjs/toolkit";

import themeReducer from '../slices/themeSlice'
import payeeReducer from '../slices/payeeSlice'


export const store = configureStore({
    reducer:{
        theme : themeReducer,
        payee : payeeReducer,
    }
})