import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },

    }
});

export const { setOrigin, setDestination, setTravelTimeInformation } = counterSlice.actions;

// Selectors
export const selectOrigin = (state) => state.counter.origin;
export const selectDestination = (state) => state.counter.destination;
export const selectTravelTimeInformation = (state) => state.counter.travelTimeInformation;

export default counterSlice.reducer;