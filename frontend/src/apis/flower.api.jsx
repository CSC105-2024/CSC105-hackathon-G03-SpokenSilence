import { post, get, del, patch } from '../utils/api.util.jsx';

export const accesss_api = (body) => post('/flowers/access', body);
export const create_api = (body) => post('/flowers', body);
export const get_api = () => get('/flowers');
export const update_api = (body) => patch('/flowers/update', body);
export const delete_api = ({id}) => del('/flowers/update', {params: {id}});