import { Router, Request, Response, NextFunction } from 'express';
import { UserRepository } from '../repository/user.repository';
import UserSchema, { UserModel } from '../model/user.model';
class UserController {

    // Repository
    private userReposiotry = new UserRepository(UserSchema);
    constructor() {
      this.register = this.register.bind(this);
    }

    async register(req: Request, res: Response, next: NextFunction) {

        const userCreation = this.userReposiotry.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            address: req.body.addrsss,
        });

        userCreation.then((data) => {
            res.send({
                message: "User Created successfully",
                user: data
             });

        }).catch((err) => {
            res.send({
                err,
            });
        })



    }
}

export default new UserController();