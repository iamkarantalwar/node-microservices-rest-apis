import {Request, Response, Express} from "express";
import UserController from "./controller/user.controller";

export class UserRoutes {
    public routes(app: Express): void {
        app.get('/', (req, res) => { res.send( { "message" : "Hello world" } ) })
        app.post('/users', UserController.register);
    }
}