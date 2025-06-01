import {accesss_api, get_api, create_api, delete_api, update_api} from "../apis/flower.api.jsx";

export const access_service = async ({flower_id, access_key, user_id}) => {
    const body = {flower_id, access_key, user_id}
    return await accesss_api(body);
}

export const get_service = async () => {
    return await get_api();
}

export const create_service = async ({name, message, access_key, url_flower, url}) => {
    const body = {name, message, access_key, url_flower, url}
    return await create_api(body);
}

export const update_service = async ({flower_id, message}) => {
    const body = {flower_id, message}
    return await update_api(body);
}

export const delete_service = async ({id}) => {
    const body = {id};
    return await delete_api(body);
}
