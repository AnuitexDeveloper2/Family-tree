import { StoredUser } from "../../../models/user/types";

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    user: StoredUser
    token: string;
}

export interface RegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}