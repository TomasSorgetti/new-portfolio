import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    technologies: [],
};

export const technologySlice = createSlice({
    name: "technologies",
    initialState,
    reducers: {
        setTechnologies: (state, action) => {
            state.technologies = action.payload;
        },
    },
});

export const { setTechnologies } = technologySlice.actions;
export default technologySlice.reducer;
