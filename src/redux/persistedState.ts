import Cookies from 'js-cookie';
import { RootState } from './store';
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (!serializedState) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

export const saveState = (state: RootState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (error) { }
};

export const clearState = () => {
    localStorage.clear();
    Cookies.remove('AMSession');
};

export const setCookies = (accessToken: string) => {
    Cookies.set('AMSession', accessToken);
};

export const checkCookies = () => {
    const smSession = Cookies.get('AMSession');

    if (!smSession) {
        setCookies(getAccessToken());
    }
};

export const getAccessToken = (): string => {
    const accessToken = localStorage.getItem('AMSession');
    return accessToken || '';
};
