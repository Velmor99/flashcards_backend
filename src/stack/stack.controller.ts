import { Request, Response, NextFunction } from 'express'
const stackModel = require('./stack.model')

class StackController {
    async createStack(req: Request, res: Response, next: NextFunction) {
        try {
            const stackData = req.body
            const stack = await stackModel.create(stackData)
            if (stack) {
                res.status(201).send({ message: 'Stack is created successfully', data: stack })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new StackController()
