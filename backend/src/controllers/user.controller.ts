import type { Context } from "hono";
import {AbstractController} from "../core/http/index.js";
import {UserModel} from "../models/index.js";


class UserCrud extends AbstractController {
    async create(c: Context) {
        const body = await c.req.json();

        await UserModel.create(body)
        return this.json(c,200, "User created")
    }

    async readById(c: Context) {
        const id = c.req.param("id");
        const newId = parseInt(id);

        const user = await UserModel.findById(newId)
        return this.data(c, user, 200, "User Found")
    }

    async readByMe(c: Context) {
        const id = c.get("userId")
        console.log(id)

        const user = await UserModel.findById(id)
        return this.data(c, user, 200, "User Found")
    }
}

const UserController = new UserCrud()
export {UserController}