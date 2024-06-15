import { Router } from 'express'
import UserController from './user.controller'

const useRouter = Router()

useRouter.post('/sign-up', UserController.register)
useRouter.get('/login', UserController.login)

// useRouter.get('/', (req, res, next) => {
//     return res.status(200).send('test respond')
// })

module.exports = useRouter
