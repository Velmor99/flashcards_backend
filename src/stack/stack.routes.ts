import { Router } from 'express'
import StackController from './stack.controller'
import UserController from '../user/user.controller'

const useRouter = Router()

useRouter.post('/create', UserController.authorize, StackController.createStack)

module.exports = useRouter
