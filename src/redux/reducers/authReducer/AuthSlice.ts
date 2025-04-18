import { createSlice } from '@reduxjs/toolkit';

export interface AuthType {
    isLoginModalOpen: boolean;
    isRegisterModalOpen: boolean;
}

const initialState: AuthType = {
    isLoginModalOpen: false,
    isRegisterModalOpen: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        changeLoginModalState(state, action) {
            state.isLoginModalOpen = action.payload;
        },
        changeRegisterModalState(state, action) {
            state.isRegisterModalOpen = action.payload;
        },

    },
    extraReducers: (builder) => { },
});
export const {
    changeLoginModalState,
    changeRegisterModalState,
} = authSlice.actions;

export default authSlice.reducer;