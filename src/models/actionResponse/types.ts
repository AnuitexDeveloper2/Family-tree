export interface ActionResponse<T> {
  payload: {
    data: T;
  };
}

export interface CommonResponse {
  payload: {
    message: string;
  };
}

export interface APIResponse<T> {
  data: T;
  message: string;
  statusCode: number;
}
