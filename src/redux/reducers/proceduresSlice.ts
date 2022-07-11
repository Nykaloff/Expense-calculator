import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    procedures: []
};


export const proceduresSlice = createSlice({
    name: 'Procedures',
    initialState,
    reducers: {
        addProcedure: (state, actions) => {state.procedures.push()},
        removeProcedure: () => {}
    }
})

export const proceduresAction = proceduresSlice.actions

export default proceduresSlice.reducer;