import { Router } from 'express'
import UserController from './user.controller'

const useRouter = Router()

useRouter.post('/sign-up', UserController.register)
useRouter.get('/login', UserController.login)

module.exports = useRouter
