import { post, get } from '../utils/api.util.jsx';

export const accesss_api = (body) => post('/flowers/access', body);
export const create_api = (body) => post('/flowers', body);
export const get_api = () => get('/flowers');