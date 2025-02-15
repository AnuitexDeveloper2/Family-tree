import { createSlice } from '@reduxjs/toolkit';

export interface MemberDetailType {
    cardModalId: string | undefined
   pending: boolean;
}

const initialState: MemberDetailType = {
    cardModalId: undefined,
    pending: false,
};

export const memberDetailSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        resetSpin(state) {
            state.pending = false;
        },
        clearMemberDetailSlice(state) {
            state = initialState;
        },
        handleOpenMemberDetailPopup(state, action) {
            state.cardModalId = action.payload
        }
    },
    extraReducers: (builder) => { },
});
export const {
    resetSpin,
    clearMemberDetailSlice,
    handleOpenMemberDetailPopup
} = memberDetailSlice.actions;

export default memberDetailSlice.reducer;