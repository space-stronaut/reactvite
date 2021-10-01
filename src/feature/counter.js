import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : 'counter',
    initialState : {
        value : parseInt(localStorage.getItem('value')) ? parseInt(localStorage.getItem('value')) : 0 
    },
    reducers : {
        increment : (state) => {
            localStorage.setItem('value', state.value +=1)
        }
    }
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer