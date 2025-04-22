import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIResponse } from "../../../models/actionResponse/types";
import { http } from "../../../helpers/request";
import { LoginRequest, LoginResponse, RegisterRequest } from "./types";

const baseUrl = '/auth'

export const loginAction = createAsyncThunk<APIResponse<LoginResponse> | undefined, LoginRequest>(
    'auth/login',
    async (data: LoginRequest) => {
        const result = await http<APIResponse<LoginResponse>, LoginRequest>(
            {
                path: `${baseUrl}/login`,
                method: 'post',
                body: data
            },
            false,
        );
        return result.parsedBody;
    },
);

export const registerAction = createAsyncThunk<APIResponse<LoginResponse> | undefined, RegisterRequest>(
    'auth/register',
    async (data: RegisterRequest) => {
        const result = await http<APIResponse<LoginResponse>, RegisterRequest>(
            {
                path: `${baseUrl}/register`,
                method: 'post',
                body: data
            },
            false,
        );
        return result.parsedBody;
    },
);