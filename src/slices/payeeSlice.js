import axios from "axios";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    payee: [],
};

const payeeSlice = createSlice({
    name: "payee",
    initialState,
    reducers: {
        //Actions
        payeeData: async (state) => {

            const payeeNames = await axios.get('/api/create/newPayee')
            state.payee = [...payeeNames]
            console.log(payeeNames)
        }
        //some other actions....
    },
})

export const { switchMode } = payeeSlice.actions;

export default payeeSlice.reducer