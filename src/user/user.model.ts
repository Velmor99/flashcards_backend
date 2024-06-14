import { Schema, model } from 'mongoose'
import { IUserModel, UserRole } from '../interfaces/user.interfaces'

// name
// email
// password
// surname (maybe)
// modules
// stacks
// haveLearntOnDay
// haveLearntInMonth
// progressOfProductivityFromScratch
// weeklyProductivity
// planingProductivityWithCurrentTempAYear
// progressOfModules
// etc…

const userSchema = new Schema<IUserModel>({
    name: { type: String, require: true },
    surname: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    modules: [{ type: Schema.Types.ObjectId, ref: 'some ref' }],
    stacks: [{ type: Schema.Types.ObjectId, ref: 'some ref' }],
    folders: [{ type: Schema.Types.ObjectId, ref: 'some ref' }],
    token: { type: String, default: '' },
    role: { type: String, enum: Object.values(UserRole), required: true },

    haveLearntOnDay: { type: Number, default: 0 },
    haveLearntInMonth: { type: Number, default: 0 },
    progressOfProductivityFromScratch: { type: Number, default: 0 },
    weeklyProductivity: { type: Number, default: 0 },
    planingProductivityWithCurrentTempAYear: { type: Number, default: 0 },
    progressOfModules: { type: Number, default: 0 },
})

module.exports = model('User', userSchema)
