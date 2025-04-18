import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetMemberRequest, GetMemberResponse } from "./types";
import { http } from "../../../helpers/request";
import { APIResponse } from "../../../models/actionResponse/types";

const baseUrl = '/member'

export const getMemberAction = createAsyncThunk<APIResponse<GetMemberResponse> | undefined, GetMemberRequest>(
    'member',
    async (data: GetMemberRequest) => {
        const result = await http<APIResponse<GetMemberResponse>, GetMemberRequest>(
            {
                path: `${baseUrl}/login`,
                method: 'post',
                body: data,
            },
            false,
        );
        if (result?.parsedBody?.statusCode === 200) {
            // localStorage.setItem('AMSession', result.parsedBody);
        }
        console.log('Login:');
        console.log(result.parsedBody);
        return result.parsedBody;
    },
);