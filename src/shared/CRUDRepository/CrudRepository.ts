import mongoose = require("mongoose");
import {Model} from 'mongoose';

class CrudRepository<T> {

    private _model: mongoose.Model<any>;

    constructor(schemaModel: mongoose.Model<any>) {
        this._model = schemaModel;
    }

    create(item: any) : Promise<T> {
        return this._model.create(item);
    }

    retrieve(callback: (error: any, result: mongoose.Document[]) => void) {
        this._model.find({}, callback)
    }

    update(_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
        this._model.update({ _id }, item);
    }

    delete(_id: string, callback: (error: any, result: any) => void) {
        this._model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));
    }

    findById(_id: string, callback: (error: any, result: T) => void) {
        this._model.findById(_id, callback);
    }


    private toObjectId(_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id)
    }

}

export = CrudRepository;