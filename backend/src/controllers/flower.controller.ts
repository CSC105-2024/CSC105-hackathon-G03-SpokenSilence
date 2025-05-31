import {AbstractController} from "../core/http/index.js";
import type {Context} from "hono";
import { FlowerModel } from "../models/index.js";

class FlowerCrud extends AbstractController {
    async create(c: Context) {
        const userId = c.get('userId')
        const body = await c.req.json()

        await FlowerModel.create(body, userId)
        return this.json(c, 200, 'Flower created')
    }
    
    async readById(c: Context) {
        const id = c.get('userId')
        const flower = await FlowerModel.readById(id)

        return this.data(c, flower, 200, 'Flower found')
    }
    
    async validAccess(c: Context) {
        const { flowerId, access_key, userId } = await c.req.json()
        const flower = await FlowerModel.validAccess(flowerId, access_key, userId)

        return this.data(c, flower, 200, 'Flower valid')
    }
}

const FlowerController = new FlowerCrud()
export {FlowerController}