import express, { Express } from 'express'
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./user/user.routes')
const stackRouter = require('./stack/stack.routes')
const cardRouter = require('./card/card.routes')
const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGODB_URL

module.exports = class FlashcardsAPI {
    server: Express
    constructor() {
        this.server = express()
    }

    start() {
        this.initMiddlewares()
        this.initRoutes()
        this.initDataBase()
        this.startListen()
    }

    initRoutes() {
        this.server.use('/api/user', userRouter)
        this.server.use('/api/stack', stackRouter)
        this.server.use('/api/card', cardRouter)
    }

    initMiddlewares() {
        this.server.use(express.json())
        this.server.use(cors({ origin: 'http:localhost:3000' }))
    }

    async initDataBase() {
        try {
            mongoose.connect(MONGO_URI)
            console.log('DB connected')
        } catch (error) {
            console.log('Connection with error')
            process.exit(1)
        }
    }

    startListen() {
        this.server.listen(PORT, () => {
            console.log('Server started listening on port ', PORT)
        })
    }
}
