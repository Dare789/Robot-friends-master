import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name:"searchField",
    initialState: {value:" "},
    reducers:{
        searchField:(state, action) => {
            state.value = action.payload
        }
    }
})
export const { searchField } = searchSlice.actions

export default searchSlice.reducer