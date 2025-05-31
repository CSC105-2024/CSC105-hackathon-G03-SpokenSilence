import {accesss_api, get_api, create_api} from "../apis/flower.api.jsx";

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

