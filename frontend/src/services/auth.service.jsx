import {
    create_api,
    fetch_api,
    login_api,
    logout_api,
    refresh_api,
} from "@/apis/auth.api.jsx";

export const signUp = async ({ username, surname, password, name, url_user }) => {
    const body = { username, surname, password, name, url_user };
    return await create_api(body);
};

export const signIn = async ({ username, password }) => {
    const body = { username, password };
    return await login_api(body);
};

export const fetch = async () => {
    return await fetch_api();
}

export const signOut = async () => {
    return await logout_api();
}

export const refresh = async () => {
    return await refresh_api();
}