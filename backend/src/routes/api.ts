import {Hono} from "hono";
import {
    UserController,
    AuthController,
    FlowerController,
    HistoryController
} from "../controllers/index.js";
import {
    authMiddleware,
} from "../middlewares/token.middleware.js";

const api = new Hono()
    .basePath('/api/v1');

//users
api.get('/users/me', authMiddleware, (c) => UserController.readByMe(c))
api.get('/users/:id', (c) =>  UserController.readById(c))
api.post('/users', (c) => UserController.create(c))

//auth
api.post('/auth/log-in', (c) => AuthController.login(c))
api.post('/auth/log-out', authMiddleware, (c) => AuthController.logout(c))
api.post('/auth/refresh', authMiddleware, (c) => AuthController.refresh(c))

//flower
api.get('/flowers', authMiddleware, (c) => FlowerController.readById(c))
api.post('/flowers', authMiddleware, (c) => FlowerController.create(c));
api.post('/flowers/access', (c) => FlowerController.validAccess(c))
api.patch('/flowers/update', authMiddleware, (c) => FlowerController.updateById(c))
api.delete('/flowers', (c) => FlowerController.deleteById(c))

api.get('/history', authMiddleware, (c) => HistoryController.getAll(c))

export { api }