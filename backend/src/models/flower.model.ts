import { prisma } from "../index.js";
import  type { Flower } from '../types/index.js'
import {HTTPException} from "hono/http-exception";

class FlowerModelLo {
    async create(data: Flower, userId: number) {
        try {
            return await prisma.flowers.create({
                data: {
                    name: data.name,
                    message: data.message,
                    url_flower: data.url_flower,
                    access_key: data.access_key,
                    url: data.url,
                    user: {
                        connect: {
                            id: userId
                        }
                    }
                },
            })
        } catch (error) {
            console.log(error)
            throw new HTTPException(400, {
                message: 'Cannot create flower',
                cause: {form: true},
            })
        }
    }

    async readById (id: number) {
        const flower = await prisma.flowers.findMany({
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
    
    async validAccess(
        flowerId: number,
        accessKey: number,
        userId:number
    ) {
        
        const flower = await prisma.flowers.findUnique({
            where: {
                id: flowerId,
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
                },
            })
        } else {
            await prisma.history.create({
                data: {
                    flower_id: flower.id,
                    user_id: userId,
                    view_count: 1,
                },
            })
        }
        return flower
    }
}

const FlowerModel = new FlowerModelLo()
export { FlowerModel }