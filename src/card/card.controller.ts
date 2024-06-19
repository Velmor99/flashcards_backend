import { NextFunction, Request, Response } from 'express'
import { Types } from 'mongoose'
import CardModel from './card.model'
import StackModel from '../stack/stack.model'
import { ICard, ICardModel } from '../interfaces/card.interface'

class CardController {
    // async cardsSorter(req: Request, res: Response, next: NextFunction) {
    //     const cardData = req.body
    // }

    async createCards(req: Request, res: Response, next: NextFunction) {
        try {
            const card = req.body
            const created = await CardModel.create({ ...card, userId: req.user[0].id })
            if (!created) {
                res.status(500).send({ message: 'something went wrong' })
            }
            const updatedStack = await StackModel.findByIdAndUpdate(
                created.stackId,
                {
                    $push: { worldCards: created._id },
                },
                { new: true }
            )
            console.log(updatedStack)
            res.status(201).send(created)
            // const cardsWithIDs = cardsToCreate.map((card: ICard) => ({
            //     ...card,
            //     userId: new Types.ObjectId(req.user[0].id),
            //     stackId: new Types.ObjectId(card.stackId),
            // }))
            // console.log(cardsWithIDs)
            // const addedCards = await CardModel.insertMany(cardsToCreate)
            // if (addedCards) {
            //     return addedCards
            // }
        } catch (error) {
            console.log(error)
        }
    }

    async updateCard(req: Request, res: Response, next: NextFunction) {
        const { _id } = req.body
        const updated = CardModel.findByIdAndUpdate(req.body)
        if (!updated) {
            res.status(404).send({ message: 'card not found' })
        }
        res.status(200).send({ updatedCard: updated })
        try {
        } catch (error) {
            console.log(error)
        }
    }

    async deleteCard(req: Request, res: Response, next: NextFunction) {
        try {
            const { _id } = req.body
            const card = await CardModel.findById(_id)
            if (!card) {
                res.status(404).send({ message: 'card not found' })
            }
            if (card?.userId)
                if (card.userId.toString() !== req.user[0].id.toString()) {
                    res.status(403).send({ message: 'You cannot delete this card' })
                }
            const deleted = await CardModel.findByIdAndDelete(_id)
            const stackWithoutDeletedCard = await StackModel.findByIdAndUpdate(
                card?.stackId,
                { $pull: { worldCards: card?._id } },
                { new: true }
            )
            console.log(stackWithoutDeletedCard)
            if (!deleted) {
                res.status(404).send({ message: 'card not found' })
            }
            res.status(200).send({ message: 'card was deleted' })
        } catch (error) {
            console.log(error)
        }
    }
}

export default new CardController()
