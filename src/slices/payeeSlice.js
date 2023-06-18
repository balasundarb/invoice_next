import axios from "axios";


const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    payees: [],
};


const payeeSlice = createSlice({
    name: "payee",
    initialState,
    reducers: {
        //Actions
        payeeData: (state, action) => {

            state.payees = action.payload
        }
        //some other actions....
    },
})


export const { payeeData } = payeeSlice.actions;

export default payeeSlice.reducer