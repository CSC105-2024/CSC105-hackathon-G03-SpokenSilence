import {AbstractController} from "../core/http/index.js";
import type {Context} from "hono";
import { FlowerModel } from "../models/index.js";

class FlowerCrud extends AbstractController {
    async create(c: Context) {
        const userId = c.get('userId')
        const body = await c.req.json()

        const flower = await FlowerModel.create(body, userId)
        return this.data(c, flower, 200, 'Flower created')
    }
    
    async readById(c: Context) {
        const id = c.get('userId')
        const flower = await FlowerModel.readById(id)

        return this.data(c, flower, 200, 'Flower found')
    }
    
    async validAccess(c: Context) {
        const { flower_id, access_key, user_id } = await c.req.json()
        const flower = await FlowerModel.validAccess(flower_id, access_key, user_id)

        return this.data(c, flower, 200, 'Flower valid')
    }

    async deleteById(c: Context) {
        const {id} = c.req.query()

        await FlowerModel.deleteById(parseInt(id))
        return this.json(c, 200, 'Post removed')
    }
    
    async updateById(c: Context) {
        const body = await c.req.json()
        await FlowerModel.updateById(body.id, body)
        return this.json(c, 200, 'Post updated')
    }
}

const FlowerController = new FlowerCrud()
export {FlowerController}