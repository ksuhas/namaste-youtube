import { createSlice, current } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
    },
    reducers: {
        cacheResults: (state, action) => {
            return { ...state, ...action.payload };
        }
    }
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;


/*
Note : In Reducers
1) Most importantly, you need to ensure that you either mutate the state argument or return a new state, but not both.
2) console.log("state====>", current(state)) // Useful for logging the state Object
*/