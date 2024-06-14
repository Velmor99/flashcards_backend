import { Request, Response, NextFunction } from 'express'
import { IStackModel } from '../interfaces/stack.interface'
const stackModel = require('./stack.model')

class StackController {
    async createStack(req: Request, res: Response, next: NextFunction) {
        try {
            const stackData: Omit<IStackModel, 'creator'> = req.body
            const stack = await stackModel.create({ ...stackData, creator: req.user[0].id })
            if (stack) {
                res.status(201).send({ message: 'Stack is created successfully', data: stack })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new StackController()
