import { Request, Response, NextFunction } from "express"
import { User } from '../entity/User'
import { AppDataSource } from '../data-source'

export const checkRole = (roles: Array<string>) => {
    return async (req:Request, res:Response, next: NextFunction) => {
        const {userId} = res.locals.jwtPayload
        const userRepository = AppDataSource.getRepository(User)
        let user: User
    
        try {
            user = await userRepository.findOneOrFail({
                where: { id: parseInt(userId, 10)}
            })
        } catch (e) {
            return res.status(401).json({message: 'Ro not autorized'})
        }

        // Check 
        const {role} = user
        if(roles.includes(role)){
            next();
        } else {
            return res.status(401).json({message: 'Ro not autorized'})
        }
    }
}