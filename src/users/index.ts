import {Request, Response, Express} from "express";
import UserController from "./controller/user.controller";

export class UserRoutes {
    public routes(app: Express): void {
        app.post('/users', UserController.register);
    }
}