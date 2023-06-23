
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    invoices: [],
    selectedInvoice: null,
};

const invoicesSlice = createSlice({
    name: "invoices",
    initialState,
    reducers: {
        //Actions
        invoicesData: (state, action) => {

            state.invoices = action.payload
        },
        selectInvoice: (state, action) => {
            state.selectedInvoice = action.payload
        }
        //some other actions....
    },
})


export const { invoicesData, selectInvoice } = invoicesSlice.actions;

export default invoicesSlice.reducer