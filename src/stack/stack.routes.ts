import { Router } from 'express'
const stackController = require('./stack.controller')
const userController = require('../user/user.controller')

const useRouter = Router()

useRouter.post('/create', userController.authorize, stackController.createStack)

// useRouter.get('/', (req, res, next) => {
//     return res.status(200).send('test respond')
// })

module.exports = useRouter
