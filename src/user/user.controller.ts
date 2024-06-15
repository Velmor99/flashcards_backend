import { Request, Response, NextFunction } from 'express'
import { IRequestWithUser, IUser } from '../interfaces/user.interfaces'
import UserModel from './user.model'
import bcrypt from 'bcrypt'
import jwt, { Secret } from 'jsonwebtoken'

class UserController {
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const { name, surname, password, email }: Pick<IUser, 'name' | 'surname' | 'password' | 'email'> = req.body
            const user = await UserModel.findOne({
                email,
            })
            if (user) {
                return res.status(409).send({
                    message: 'User is already exist',
                })
            }
            const hashPassword = await bcrypt.hash(password, Number(process.env.SALT_NUM))
            const createUser = await UserModel.create({
                email,
                password: hashPassword,
                name,
                surname,
            })
            return res.send({
                user: {
                    email,
                },
            })
        } catch (error) {
            console.log(error)
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password }: Pick<IUser, 'password' | 'email'> = req.body
            const user = await UserModel.find({ email })
            if (!user) {
                return res.status(404).send({ message: 'User was not found' })
            }
            const isPasswordValid = await bcrypt.compare(password, user[0].password)
            if (!isPasswordValid) {
                return res.send({ message: 'Password is not valid' })
            }
            const token = await jwt.sign({ id: user[0].id }, process.env.TOKEN_SECRET as Secret, { expiresIn: '12h' })
            const updateUser = await UserModel.findByIdAndUpdate(user[0].id, { token }, { new: true })
            if (updateUser) {
                return res.send(UserController.validateUserResponce([updateUser]))
            }
        } catch (error) {}
    }

    async authorize(req: Request, res: Response, next: NextFunction) {
        try {
            const authorizationHeader = req.get('Authorization') || ''
            let token
            if (authorizationHeader) {
                token = authorizationHeader.split(' ')[1]
            }
            let userId
            if (token) {
                try {
                    // userId = await jwt.verify(token, (process.env.TOKEN_SECRET as Secret)).id
                    const verifiedToken = await jwt.verify(token, process.env.TOKEN_SECRET as Secret)
                    if (typeof verifiedToken === 'string') {
                        throw new Error('Decoded error token')
                    }
                    userId = verifiedToken.id
                } catch (error) {
                    console.log(error)
                }
            }

            const user = await UserModel.findById(userId)

            if (!user || user.token != token) {
                return res.status(401).send({ message: 'Authorization failed' })
            }
            req.user = UserController.validateUserResponce([user])
            next()
        } catch (error) {}
    }

    // TODO костыль в типизации, исправить
    static validateUserResponce(users: Record<string, any>[]): IRequestWithUser[] {
        return users.map((user) => {
            return {
                id: user._id,
                email: user.email,
                token: user.token,
            }
        })
    }
}

export default new UserController()
