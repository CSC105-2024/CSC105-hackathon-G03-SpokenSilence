import { prisma } from "../index.js";
import  type { Flower } from '../types/index.js'
import {HTTPException} from "hono/http-exception";
import {useId} from "hono/dist/types/jsx/index.js";

class FlowerModelLo {
    async create(data: Flower, id:number, userId: number) {
        try {
            return await prisma.flowers.create({
                data: {
                    name: data.name,
                    message: data.message,
                    url_flower: data.url_flower,
                    access_key: data.access_key,
                    user: {
                        connect: {
                            id: id
                        }
                    }
                },
            })
        } catch (error) {
            throw new HTTPException(400, {
                message: 'Cannot create flower',
                cause: {form: true},
            })
        }
    }

    async readById (id: number) {
        const flower = await prisma.flowers.findFirst({
            where: {
                user_id: id
            },
            include: {
                user: true,
            }
        })

        if (!flower) {
            throw new HTTPException(400, {
                message: 'Flower not found',
            })
        }
        
        return flower
    }
    
    async validAccess(id: number, accessKey: number, userId:number) {
        
        const flower = await prisma.flowers.findUnique({
            where: {
                id: id,
            }
        })
                                
        if (!flower) {
            throw new HTTPException(404, {
                message: 'Flower not found',
                cause: {form: true},
            })
        }

        if (accessKey !== flower.access_key) {
            throw new HTTPException(400, {
                message: "AccessKey is invalid",
            })
        }
        
        const existView = await prisma.history.findFirst({
            where: {
                flower_id: flower.id,
            },
        });
        
        if (existView) {
            await prisma.history.update({
                where: { 
                    id: existView.id 
                },
                data: {
                    view_count: { 
                        increment: 1 
                    },
                    view_at: new Date(),
                },
            })
        } else {
            await prisma.history.create({
                data: {
                    flower_id: flower.id,
                    userId: userId,
                    view_count: 1,
                    view_at: new Date(),
                },
            })
        }
        return flower
    }
}

const FlowerModel = new FlowerModelLo()
export { FlowerModel }