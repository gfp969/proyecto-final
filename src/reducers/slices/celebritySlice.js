import { createSlice } from '@reduxjs/toolkit';

const celSlice = createSlice({
    name: "cel",
    initialState: { celebrities_list: [] },
    reducers: {
        setCel: (state, action) => {
            state.celebrities_list = [...state.celebrities_list, action.payload];
        },
        removeCel: (state, action) => {
            const celId = action.payload;

            state.celebrities_list = state.celebrities_list.filter(cel => cel.id !== celId);
        }
    }
})

export const { setCel, removeCel } = celSlice.actions;
export default celSlice.reducer;