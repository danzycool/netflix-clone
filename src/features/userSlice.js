import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        unsetUser: (state) => {
            state.user = null
        }
    }
});

export const { setUser, unsetUser } = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;