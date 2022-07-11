import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { ICleint}  from '../../assets/types/ClientsTypes'
interface ICleintsState {
    clients: ICleint[];
}

const initialState: ICleintsState = {
    clients: []
};

const newClient = {id:123, name: 'Karina1', telephone: '77878848'}


export const clientsSlice = createSlice({
    name: 'Clients',
    initialState,
    reducers: {
        addClient: (state, actions) => {state.clients.push(actions.payload)},
        removeClient: () => {}
    }
})

export const clientsAction = clientsSlice.actions

export default clientsSlice.reducer;