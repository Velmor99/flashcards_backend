import { Router } from 'express'
import CardController from './card.controller'
import UserController from '../user/user.controller'

const useRouter = Router()

useRouter.post('/create', UserController.authorize, CardController.createCards)
useRouter.patch('/update', UserController.authorize, CardController.updateCard)
useRouter.delete('/delete', UserController.authorize, CardController.deleteCard)

module.exports = useRouter
