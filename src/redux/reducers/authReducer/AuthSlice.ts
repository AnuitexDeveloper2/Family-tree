import { createSlice } from '@reduxjs/toolkit';
import { loginAction, registerAction } from '../../actions/auth';
import { StoredUser } from '../../../models/user/types';

export interface AuthType {
    isLoginModalOpen: boolean;
    isRegisterModalOpen: boolean;
    user?: StoredUser;
}

const initialState: AuthType = {
    isLoginModalOpen: false,
    isRegisterModalOpen: false,
    user: undefined
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
    extraReducers: (builder) => {
        builder
            .addCase(loginAction.fulfilled, (state, action) => {
                state.user = action.payload?.data.user;
                if (action.payload?.data.token) {
                    localStorage.setItem('session', action.payload?.data.token);
                }

            })
            .addCase(registerAction.fulfilled, (state, action) => {
                state.user = action.payload?.data.user;
                if (action.payload?.data.token) {
                    localStorage.setItem('session', action.payload?.data.token);
                }
            })

    },
});
export const {
    changeLoginModalState,
    changeRegisterModalState,
} = authSlice.actions;

export default authSlice.reducer;