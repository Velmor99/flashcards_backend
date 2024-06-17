import { NextFunction, Request, Response } from 'express'
import { Types } from 'mongoose'
import CardModel from './card.model'
import { ICard, ICardModel } from '../interfaces/card.interface'

class CardController {
    async cardsSorter(req: Request, res: Response, next: NextFunction) {
        const cardData = req.body
    }

    async createCards(cardsToCreate) {
        try {
            // const cardsWithIDs = cardsToCreate.map((card: ICard) => ({
            //     ...card,
            //     userId: new Types.ObjectId(req.user[0].id),
            //     stackId: new Types.ObjectId(card.stackId),
            // }))
            // console.log(cardsWithIDs)
            const addedCards = await CardModel.insertMany(cardsToCreate)
            if (addedCards) {
                return addedCards
            }
        } catch (error) {
            console.log(error)
        }
    }

    async updateCards(cardsToUpdate) {
        try {
        } catch (error) {
            console.log(error)
        }
    }

    async deleteCards(cardsToDelete) {
        try {
        } catch (error) {
            console.log(error)
        }
    }
}

export default new CardController()
