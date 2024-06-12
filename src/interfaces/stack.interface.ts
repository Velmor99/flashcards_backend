import { Types } from 'mongoose'

export interface IStackModel {
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
