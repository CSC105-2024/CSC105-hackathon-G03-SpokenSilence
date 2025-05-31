import { post , get } from "@/utils/api.util.jsx"

export const create_api   = (body) => post('/users', body);
export const login_api = (body) => post('/login', body);
export const fetch_api = () => get('/users');
export const logout_api = () => post('/logout');
export const refresh_api = () => post('/refresh');