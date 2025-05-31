import {AbstractController} from "../core/http/index.js";
import type {Context} from "hono";
import { AuthModel } from "../models/index.js";
import {getCookie} from "hono/cookie";
import {HTTPException} from "hono/http-exception";


class AuthCrud extends AbstractController{
    async login(c: Context) {
        const { username, password } = await c.req.json()

        // if (getCookie(c, "accessToken") || getCookie(c, "refreshToken") ) {
        //     throw new HTTPException(400, {
        //         message: "Already logged"
        //     })
        // }
        await AuthModel.login(username, password, c)
        return this.json(c, 200, "Logged In")
    }
    async logout(c: Context) {
        await AuthModel.logout(c);
        return this.json(c, 200, "Logged Out")
    }
    async  refresh(c: Context) {
        return await AuthModel.refresh(c);
    }
}

const AuthController = new AuthCrud()
export {AuthController}