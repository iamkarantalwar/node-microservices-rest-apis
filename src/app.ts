import express, { Express } from 'express';
import { json } from 'body-parser';
import  mongoose from "mongoose";
import { UserRoutes } from './users';
import { config } from 'dotenv';
import path = require('path');

const result = config({ path: path.join(__dirname, '..', `.env.${process.env.NODE_ENV}`) });

if(result.error) {
    throw result.error;

}
export class Application {

    public app: Express;
    private routePrv: UserRoutes = new UserRoutes();
    // This is the application constructor
    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void{
        this.app.use(json());
    }
}
// Application
const applicationObject = new Application();

const application = applicationObject.app;

console.log(application.get('env'));
const PORT = process.env.PORT ?  process.env.PORT : 3000;
console.log(process.env.PORT);
// TTo format in json
application.use(json());

let MONGO_URI: string = "http://localhost:27017/todos";

// Check If Mongo URI Exist
if(process.env.MONGO_URI)
    MONGO_URI = process.env.MONGO_URI;
else
    throw new Error("Mongo DB URI not found.");

export const moongose = mongoose.connect(MONGO_URI , {useNewUrlParser: true, useUnifiedTopology: true})
.then((res)=> {
    console.log("Mongo Connected successfully");
});


// Start the server
application.listen(PORT, () => console.log(`Application is running at port : ${PORT}`));

