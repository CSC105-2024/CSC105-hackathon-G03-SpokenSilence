import {prisma} from "../index.js";

class HistoryModelLo {
    async getAll(userId: number) {
        const history = await prisma.history.findMany({
            where: {
                flower: {
                    user: {
                        id: userId
                    }
                }
            },
            include: {
                user: true,
            }
        });
        
        return history;
    }
}

const HistoryModel = new HistoryModelLo();
export {HistoryModel}