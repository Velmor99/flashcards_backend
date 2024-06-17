import { Schema, model } from 'mongoose'
import { IStack, IStackModel } from '../interfaces/stack.interface'

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

const stackSchema: Schema = new Schema<IStack>({
    name: { type: String, required: true },
    nativeLanguage: { type: String, required: true },
    targetLanguage: { type: String, required: true },
    worldCards: [{ type: String, ref: 'Card' }],
    totalWords: { type: Number },
    haveLearnt: [{ type: String }],
    barelyLearnt: [{ type: String }],
    isntLearnt: [{ type: String }],
    // TODO
    // settings: [{type: string}],
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
})

export default model<IStackModel>('Stack', stackSchema)
