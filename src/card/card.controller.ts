import { NextFunction, Request, Response } from 'express'
import { Types } from 'mongoose'
import CardModel from './card.model'
import { ICard, ICardModel } from '../interfaces/card.interface'

class CardController {
    async createOrUpdateOrDeleteCards(req: Request, res: Response, next: NextFunction) {
        const cardData = req.body
    }

    async createCards(req: Request, res: Response, next: NextFunction) {
        try {
            const cardData: ICard[] = req.body
            const cardsWithIDs = cardData.map((card: ICard) => ({
                ...card,
                userId: new Types.ObjectId(req.user[0].id),
                stackId: new Types.ObjectId(card.stackId),
            }))
            console.log(cardsWithIDs)
            const addedCards = await CardModel.insertMany(cardsWithIDs)
            if (addedCards) {
                res.status(201).send(addedCards)
            }
        } catch (error) {
            console.log(error)
        }
    }

    async updateCards(req: Request, res: Response, next: NextFunction) {
        try {
        } catch (error) {
            console.log(error)
        }
    }
}

export default new CardController()
