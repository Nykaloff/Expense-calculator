import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    procedures: [
        {
            id: 1,
            name: 'Ягодицы'
        },
        {
            id: 2,
            name: 'Ноги полностью'
        },
        {
            id: 3,
            name: 'Ноги бедра'
        },
        {
            id: 4,
            name: 'Ноги до колена'
        },
        {
            id: 5,
            name: 'Бикини классическое'
        },
        {
            id: 6,
            name: 'Бикини среднее'
        },
        {
            id: 7,
            name: 'Бикини глубокое'
        },
        {
            id: 8,
            name: 'Живот/полоска'
        },
        {
            id: 9,
            name: 'Руки полностью'
        },
        {
            id: 10,
            name: 'Подмышечные впадины'
        },
        {
            id: 11,
            name: 'Верхняя губа/нос  '
        }
    ]
};

export const namesProceduresSlice = createSlice({
    name: 'Procedures',
    initialState,
    reducers: {}
})

export default namesProceduresSlice.reducer;