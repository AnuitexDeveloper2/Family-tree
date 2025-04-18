import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from './persistedState';
import  memberDetailSlice  from './reducers/memberDetailReducer/MemberDetailSlice';
import  authSlice  from './reducers/authReducer/AuthSlice';


const rootReducer = combineReducers({
    memberDetailSlice,
    authSlice
});

export const setupStore = () => {
    const persistedState = loadState();
    const store = configureStore({
        reducer: rootReducer,
        preloadedState: persistedState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
        devTools: process.env.NODE_ENV !== 'production',
    });
    store.subscribe(() => {
        saveState(store.getState());
    });
    return store;
};

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];
