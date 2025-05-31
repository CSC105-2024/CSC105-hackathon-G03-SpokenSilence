import { post } from '../utils/api.util.jsx';

export const createPost = (body) => post('/posts', body);
