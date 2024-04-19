import {configureStore} from '@reduxjs/toolkit';
import userSlice from './reducers/user/userSlice.ts';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import projectsSlice from './reducers/projects/projectsSlice.ts';
import issuesSlice from './reducers/issues/issuesSlice.ts';
import drawerSlice from './reducers/drawer/drawerSlice.ts';

export const store = configureStore({
  reducer: {
    user: userSlice,
    projects: projectsSlice,
    issues: issuesSlice,
    drawer: drawerSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
