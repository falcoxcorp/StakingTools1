import { lazy } from 'react';

const loadMainApp = () => import('./RootLayoutApp');
export const MainApp = lazy(loadMainApp);

const loadAdminApp = () => import('./AdminLayoutApp');
export const AdminApp = lazy(loadAdminApp);