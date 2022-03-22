import { createSlice } from "@reduxjs/toolkit";
import { robots } from "../robots";

export const droidSlice = createSlice({
    name:"droid",
    initialState: {value:[]},
    reducers:{
        droid:(state, action) => {
            state.value = action.payload
        }
    }
})
export const { droid } = droidSlice.actions

export default droidSlice.reducer