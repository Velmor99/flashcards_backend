import { Document, Types } from 'mongoose'

export interface IUser {
    name: string
    surname: string
    email: string
    password: string
    modules: Array<Types.ObjectId>
    stacks: Array<Types.ObjectId>
    token: string
    role: UserRole
    folders: Array<Types.ObjectId>

    haveLearntOnDay: number
    haveLearntInMonth: number
    progressOfProductivityFromScratch: number
    weeklyProductivity: number
    planingProductivityWithCurrentTempAYear: number
    progressOfModules: number
}

export interface IUserModel extends IUser, Document {}

export interface IRequestWithUser {
    id: string
    email: string
    token: string
}

export enum UserRole {
    Teacher = 'teacher',
    Student = 'student',
    Guest = 'guest',
}
