import { Schema, model } from 'mongoose'
import { IStackModel } from '../interfaces/stack.interface'

// ID
// name
// nativeLanguage
// targetLanguage
// wordCards
// totalWords
// haveLearnt
// barelyLearnt
// isntLearnt
// userId

const stackSchema: Schema = new Schema({
    name: { type: String, required: true },
    nativeLanguage: { type: String, required: true },
    targetLanguage: { type: String, required: true },
    worldCards: [{ type: String }],
    totalWords: { type: Number },
    haveLearnt: [{ type: String }],
    barelyLearnt: [{ type: String }],
    isntLearnt: [{ type: String }],
    // TODO
    // settings: [{type: string}],
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
})

export default model<IStackModel>('Stack', stackSchema)
