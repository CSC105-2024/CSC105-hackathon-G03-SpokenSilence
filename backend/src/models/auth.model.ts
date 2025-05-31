import type {Context} from "hono";
import {prisma} from "../index.js";
import {HTTPException} from "hono/http-exception";
import {generateNewJWTAndSetCookie} from "../utils/jwt.util.js";
import {deleteCookie, getCookie} from "hono/cookie";
import { jwtVerify } from 'jose'
import {env} from "process";

class AuthModelLo {
    async login (username: string, password: string, c: Context) {
        const user = await prisma.users.findFirst({
            where: {
                username,
            }
        })

        if (!user || user.password !== password) {
            throw new HTTPException(401, {
                message: "Invalid credentials",
                cause: {form: true},
            })
        }
        await generateNewJWTAndSetCookie(c, user.id);
        return user
    }

    async logout(c: Context) {
        deleteCookie(c, 'accessToken', {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
        });

        deleteCookie(c, 'refreshToken', {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
        });
    }

    async refresh(c: Context) {
        const refreshToken = getCookie(c, 'refreshToken')
        if (!refreshToken) {
            throw new HTTPException(401, {
                message: "Invalid refresh token",
            })
        }

        try {
            const {
                payload: { userId, role },
            } = await jwtVerify<{ userId: number}>(
                refreshToken,
                new TextEncoder().encode(env.JWT_REFRESH_SECRET)
            );
            await generateNewJWTAndSetCookie(c, userId);
            return c.json({success: true});
        } catch {
            throw new HTTPException(403, { message: "Token expired or invalid" });
        }
    }
}

const AuthModel = new AuthModelLo();
export {AuthModel};