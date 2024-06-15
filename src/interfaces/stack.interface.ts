import { Document, Types } from 'mongoose'

export interface IStack {
    name: string
    nativeLanguage: string
    targetLanguage: string
    worldCards: Array<any>
    totalWords: number
    haveLearnt: Array<any>
    barelyLearnt: Array<any>
    isntLearnt: Array<any>
    creator: Types.ObjectId
}

export interface IStackModel extends IStack, Document {}
