import { Router } from 'express'
const userController = require('./user.controller')

const useRouter = Router()

useRouter.post('/sign-up', userController.register)
useRouter.get('/login', userController.login)

// useRouter.get('/', (req, res, next) => {
//     return res.status(200).send('test respond')
// })

module.exports = useRouter
