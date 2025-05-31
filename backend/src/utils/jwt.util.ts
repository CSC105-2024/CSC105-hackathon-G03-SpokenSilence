import { SignJWT } from "jose";
import { setCookie } from "hono/cookie";
import { env } from "process";
import type { Context } from "hono";

export const generateNewJWTAndSetCookie = async (
    c: Context,
    userId: number,
) => {
    const [accessToken, refreshToken] = await Promise.all([
        new SignJWT({ userId })
            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime("1h")
            .sign(new TextEncoder().encode(env.JWT_ACCESS_SECRET)),
        new SignJWT({ userId })
            .setProtectedHeader({ alg: "HS256" })
            .setExpirationTime("30d")
            .sign(new TextEncoder().encode(env.JWT_REFRESH_SECRET)),
    ]);
    const now = new Date();
    setCookie(c, "accessToken", accessToken, {
        expires: new Date(now.getTime() + 60 * 60 * 1000),
    });
    setCookie(c, "refreshToken", refreshToken, {
        expires: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000),
    });
};