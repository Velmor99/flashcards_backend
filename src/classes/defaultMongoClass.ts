import { Model, Types } from 'mongoose'

export class DefaultWorkWithMongo {
    model: Model<any>
    constructor(model: Model<any>) {
        this.model = model
    }
    private getObjectById(id: Types.ObjectId) {}
}
