import { Types } from 'mongoose'

export interface IUserModel {
    name: string
    surname: string
    email: string
    password: string
    modules: Array<Types.ObjectId>
    stacks: Array<Types.ObjectId>
    token: string

    haveLearntOnDay: number
    haveLearntInMonth: number
    progressOfProductivityFromScratch: number
    weeklyProductivity: number
    planingProductivityWithCurrentTempAYear: number
    progressOfModules: number
}

export interface IUserRegister {
    name: string
    surname: string
    password: string
    email: string
}

export interface IRequestWithUser {
    id: string
    email: string
    token: string
}
