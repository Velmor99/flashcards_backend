import { Schema, model } from 'mongoose'
import { ICardModel } from '../interfaces/card.interface'

// ID
// targetLanguageName
// nativeLanguageName
// color
// tag
// synonims
// lastRepetition (isSpoiled)
// isProtected (don't set to spoiled)
// countOfSpoil
// targetLanguageDescription
// stackId
// userId

const cardSchema: Schema = new Schema({
    targetLanguageName: { type: String, required: true },
    nativeLanguageName: { type: String, required: true },
    color: { type: String, default: 'white' },
    tag: { type: String },
    synonims: [{ type: String }],
    lastRepetition: { type: Date },
    isProtected: { type: Boolean },
    countOfSpoil: { type: Number },
    targetLanguageDescription: { type: String },
    stackId: { type: Schema.Types.ObjectId },
    userId: { type: Schema.Types.ObjectId },
})

export default model<ICardModel>('Card', cardSchema)
