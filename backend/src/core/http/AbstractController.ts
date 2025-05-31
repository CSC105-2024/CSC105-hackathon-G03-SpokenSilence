import type { Context } from "hono";
import type {SuccessResponse} from "../../types/index.js";

class AbstractController {
    protected data(c: Context, data: any, status: 200, msg: string) {
        return c.json<SuccessResponse<{data: any}>>({
            success: true,
            message: msg,
            data: {data: data}
        }, status)
    }

    protected json(c: Context, status: 200, msg: string) {
        return c.json<SuccessResponse>({
            success: true,
            message: msg,
        }, status);
    }
}

export { AbstractController }