import express, { Express } from 'express';
import { json } from 'body-parser';
import  mongoose from "mongoose";
import { UserRoutes } from './users';

require ('custom-env').env('dev')
// Mongo DB configuration
require('./config/database.config');

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

const PORT = process.env.PORT ?  process.env.PORT : 3000;

// TTo format in json
application.use(json());

let MONGO_URI: string = "http://localhost:27017/todos";

// Check If Mongo URI Exist 
// if(process.env.MONGO_URI) 
//     MONGO_URI = process.env.MONGO_URI;
// else
//     throw new Error("Mongo DB URI not found.");
    
export const moongose = mongoose.connect("mongodb://localhost:27017/todos" , {useNewUrlParser: true, useUnifiedTopology: true})
.then((res)=> {
    console.log("Mongo Connected successfully");
});


// Start the server
application.listen(PORT, () => console.log(`Application is running at port : ${PORT}`));

