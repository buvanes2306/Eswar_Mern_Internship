import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    users: [''],
};
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users = [...state.users, action.payload]; // Corrected typo
            //using slice oparator
        },
    },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;