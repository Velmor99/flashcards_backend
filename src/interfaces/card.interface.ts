import { Document, Types } from 'mongoose'

export interface ICard {
    targetLanguageName: string
    nativeLanguageName: string
    color: string
    tag: string
    synonims: Array<string>
    lastRepetition: Date
    isProtected: boolean
    countOfSpoil: number
    targetLanguageDescription: string
    stackId: Types.ObjectId
    userId: Types.ObjectId
    isDeleted?: boolean
}

export interface ICardModel extends ICard, Document {}
