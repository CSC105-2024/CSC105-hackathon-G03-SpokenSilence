import {
    create_api,
    fetch_api,
    login_api,
    logout_api,
    refresh_api,
} from "@/apis/auth.api.jsx";

export const signUp = async ({ username, surname, email, password, department, role }) => {
    const body = { username, surname, email, password, department, role };
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