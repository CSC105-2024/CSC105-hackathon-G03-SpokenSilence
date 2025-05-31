import { post , get } from "@/utils/api.util.jsx"

export const create_api   = (body) => post('/users', body);
export const login_api = (body) => post('/auth/log-in', body);
export const fetch_api = () => get('/users/me');
export const logout_api = () => post('/auth/log-out');
export const refresh_api = () => post('/auth/refresh');