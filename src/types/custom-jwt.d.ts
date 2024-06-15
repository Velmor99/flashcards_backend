import 'jsonwebtoken'

declare module 'jsonwebtoken' {
    export interface JwtPayload {
        id?: string
        // Add other properties here as needed
    }
}
