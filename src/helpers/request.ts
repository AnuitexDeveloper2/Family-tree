import axios, { AxiosRequestConfig, Method, ResponseType } from "axios";
import { clearState, getAccessToken } from "../redux/persistedState";
import { alertService } from "./alertService";

export interface HttpResponse<RESB> extends Response {
  parsedBody?: RESB;
}

export interface HttpRequest<REQB> {
  path: string;
  method?: string;
  body?: REQB;
}

export const http = <RESB, REQB>(
  config: HttpRequest<REQB>,
  redirectError: boolean = true,
  headers?: any
): Promise<HttpResponse<RESB>> => {
  return new Promise((resolve, reject) => {
    let requestOptions: any = {
      method: config.method || "get",
      headers: {
        ...headers,
      },
    };

    if (config.body instanceof FormData) {
      requestOptions.body = config.body;
      // Do not set Content-Type header for FormData
    } else if (!!config.body && config.method !== "get") {
      requestOptions.body = JSON.stringify(config?.body || {});
      requestOptions.headers["Content-Type"] = "application/json";
    }

    const request = new Request(
      `${process.env.REACT_APP_API_URL}${config.path}`,
      requestOptions
    );
    const accessToken = getAccessToken();
    request.headers.set("authorization", `${accessToken}`);
    let response: HttpResponse<RESB>;
    fetch(request)
      .then((res) => {
        response = res;
        if (res.status === 204) return null;
        return res.json();
      })
      .then(async (body) => {
        if (!body) {
          resolve(response);
          return;
        }
        if (response.status === 401) {
          window.location.href = "/login";
          clearState();
          reject(response);
          return;
        }
        if (response.ok) {
          response.parsedBody = body;
          resolve(response);
        } else {
          if (
            (redirectError && response.status === 404) ||
            (redirectError && response.status === 403)
          ) {
            window.location.href = "/404";
            reject(response);
            return;
          }
          try {
            JSON.parse(body.message);
          } catch (error) { }
          alertService.error(body.message.toString(), { fade: false });
          window.scrollTo(0, 0);
          reject(body.message);
        }
      }).catch(() => {
        alertService.error('Something went wrong')
      });
  });
};

export const httpBuffer = async (
  path: string,
  responseType: ResponseType,
  method: Method,
  data?: any,
): Promise<any> => {
  try {
    const accessToken = getAccessToken();
    const options: AxiosRequestConfig = {
      responseType: responseType,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      method: method,
      data: data,
    };
    const response = await axios(`${path}`, options);
    return response.data;
  } catch (error) {
    window.scroll(0, 0);
    alertService.error((error as string).toString());
  }
};