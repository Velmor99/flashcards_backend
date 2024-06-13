import { IRequestWithUser } from '../interfaces/user.interfaces'

import * as express from 'express'

declare global {
    namespace Express {
        interface Request {
            user: IRequestWithUser[]
        }
    }
}
