import {AbstractController} from "../core/http/index.js";
import type {Context} from "hono";
import { HistoryModel } from "../models/index.js";

class HistoryCrud extends AbstractController {
    async getAll(c: Context) {
        const userId = c.get("userId");
        
        if (!userId) {
            return c.json({ success: false, message: "Unauthorized" }, 401);
        }

        const history = await HistoryModel.getAll(userId)
        return this.data(c, history, 200, 'Flower created')
    }
}

const HistoryController = new HistoryCrud()
export {HistoryController}