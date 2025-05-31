import {prisma} from "../index.js";
import {type User } from "../types/index.js";
import {HTTPException} from "hono/http-exception";

class UserModelLo {
    async create(data: User) {
        const duplicate = await prisma.users.findFirst({
            where: {username: data.username},
            select: {username: true},
        })

        if (duplicate) {
            throw new HTTPException(400, {
                message: "username already exists",
                cause: {form: true},
            })
        }
        const { url_user, username, name, surname, password } = data;
        
        if (!url_user || !username || !password || !name || !surname) {
            throw new HTTPException(400, {
                message: 'Please out all required fields',
            })
        }
        
        return prisma.users.create({
            data: {
                username: data.username,
                name: data.name,
                surname: data.surname,
                password: data.password,
                url_user: data.url_user,
            }
        });
    }

    async findById(id: number) {
        if (!id || isNaN(id)) {
            throw new HTTPException(400, {
                message: "Doesn't have id",
            })
        }
        
        const user = await prisma.users.findUnique({
            where: {
                id: id
            },
        })

        if (!user) {
            throw new HTTPException(404, {
                message: "User not found",
            })
        }
        return user;
    }
}

const UserModel = new UserModelLo();
export {UserModel}