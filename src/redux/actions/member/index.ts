import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetMemberRequest, GetMemberResponse } from "./types";
import { http } from "../../../helpers/request";
import { APIResponse } from "../../../models/actionResponse/types";

const baseUrl = '/members'

export const getMemberAction = createAsyncThunk<APIResponse<GetMemberResponse> | undefined, GetMemberRequest>(
    'member',
    async (data: GetMemberRequest) => {
        const result = await http<APIResponse<GetMemberResponse>, GetMemberRequest>(
            {
                path: `${baseUrl}/get`,
                method: 'post',
                body: data,
            },
            false,
        );
        return result.parsedBody;
    },
);