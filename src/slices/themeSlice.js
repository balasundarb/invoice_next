
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Darkmode: false,
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        //Actions
        switchMode: (state) => {
            state.Darkmode = !state.Darkmode
        }
        //some other actions....
    },
});

export const { switchMode } = themeSlice.actions;

export default themeSlice.reducer