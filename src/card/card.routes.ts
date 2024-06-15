import { Router } from 'express'
import CardController from './card.controller'
import UserController from '../user/user.controller'

const useRouter = Router()

useRouter.post('/create', UserController.authorize, CardController.createCards)

// useRouter.get('/', (req, res, next) => {
//     return res.status(200).send('test respond')
// })

module.exports = useRouter
