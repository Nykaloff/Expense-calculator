import { createSlice } from "@reduxjs/toolkit";
import { ICleints}  from '../../assets/types/ClientsTypes'
interface ICleintsState {
    clients: ICleints[];
}

const initialState: ICleintsState = {
    clients: [{id: 1231, name:'Karina', telephone:'77808668'}]
}

export const clientsSlice = createSlice({
    name: 'Clients',
    initialState,
    reducers: {

    }
})

export default clientsSlice.reducer;