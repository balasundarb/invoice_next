import { configureStore } from "@reduxjs/toolkit";

import themeReducer from '../slices/themeSlice'
import payeeReducer from '../slices/payeeSlice'
import invoicesReducer from "@/slices/invoicesSlice";


export const store = configureStore({
    reducer:{
        theme : themeReducer,
        payeeData : payeeReducer,
        invoiceData: invoicesReducer,
    }
})