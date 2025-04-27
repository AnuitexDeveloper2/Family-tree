import { createSlice } from '@reduxjs/toolkit';
import { MemberCardDetail } from '../../../models/member/types';

export interface MemberDetailType {
    cardModalId: string | undefined
    pending: boolean;
    memberDetail?: MemberCardDetail
}

const initialState: MemberDetailType = {
    cardModalId: undefined,
    pending: false,
    memberDetail: undefined
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
            state.cardModalId = action.payload?.id;
            state.memberDetail = action.payload?.data;
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