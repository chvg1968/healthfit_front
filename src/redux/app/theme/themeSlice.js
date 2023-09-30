import { createSlice } from "@reduxjs/toolkit"

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {isDark: false},
    
    reducers: {
        themeSelector: (state, action) => {
            state.isDark = !state.isDark
          },
    }
})
export const { themeSelector } = themeSlice.actions;
