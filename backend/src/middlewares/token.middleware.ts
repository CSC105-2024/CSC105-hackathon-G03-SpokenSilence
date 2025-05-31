import { createMiddleware } from "hono/factory";
import { jwtVerify } from "jose";
import { getCookie, deleteCookie } from "hono/cookie";
import { env } from "process";
import { HTTPException } from "hono/http-exception";
import { generateNewJWTAndSetCookie } from "../utils/jwt.util.js";

export const authMiddleware = createMiddleware(async (c, next) => {
    const accessToken = getCookie(c, "accessToken");
    const refreshToken = getCookie(c, "refreshToken");

    if (!accessToken || !refreshToken) {
        throw new HTTPException(401, { message: "Unauthorized" });
    }

    try {
        const {
            payload: { userId },
        } = await jwtVerify<{ userId: number }>(
            accessToken,
            new TextEncoder().encode(env.JWT_ACCESS_SECRET),
        );

        c.set("userId", userId);
        await next();
    } catch {
        try {
            const {
                payload: { userId },
            } = await jwtVerify<{ userId: number }>(
                refreshToken,
                new TextEncoder().encode(env.JWT_REFRESH_SECRET),
            );

            generateNewJWTAndSetCookie(c, userId);
            c.set("userId", userId);
            await next();
        } catch {
            deleteCookie(c, "accessToken", { httpOnly: true });
            deleteCookie(c, "refreshToken", { httpOnly: true });
            throw new HTTPException(401, { message: "Unauthorized" });
        }
    }
});