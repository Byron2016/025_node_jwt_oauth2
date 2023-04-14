//import { getRepository } from 'typeorm'
import { Request, Response } from "express"
import {User} from '../entity/User'
import { AppDataSource } from "../data-source"
import * as jwt from 'jsonwebtoken'
import config from '../config/config'
import { validate } from "class-validator"


class AuthController {
    static login = async (req:Request, res:Response) => {
        const {username, password} = req.body

        if(!(username && password)){
            return res.status(400).json({message: 'UserName and password are required'})
        }

        //const userRepository = getRepository(User)
        const userRepository = AppDataSource.getRepository(User)
        let user: User

        try{
            user = await userRepository.findOneOrFail({where:{username}})
        }
        catch(e){
            return res.status(400).json({message: 'UserName or password incorrect'})
        }

        // Check password
        if(!user.checkPassowrd(password)){
            return res.status(400).json({message: 'UserName or password incorrect'})
        }

        const token = jwt.sign({userId: user.id, username: user.username}, config.jwtSecret, {expiresIn:'1h'})

        res.json({message: 'OK', token})

    }

    static changePassword = async (req:Request, res:Response) => {
        const {oldPassword, newPassword} = req.body
        // console.log('LOCALS --> ', res.locals)
        // console.log('LOCALS --> ', res.locals.jwtPayload)
        const {userId} = res.locals.jwtPayload;

        if(!(oldPassword && newPassword)){
            return res.status(400).json({message: 'oldPassword and newPassword are required'})
        }

        const userRepository = AppDataSource.getRepository(User)
        let user: User

        try{
            user = await userRepository.findOneOrFail({
                where: { id: parseInt(userId, 10)}
            })
        }
        catch(e){
            return res.status(400).json({message: 'Something goes wrong!'})
        }

        if(!user.checkPassowrd(oldPassword)){
            return res.status(401).json({message: 'Check your old password'})
        }

        user.password = newPassword
        // Validate
        const validationOpt = { validationError: {target: false, value: false}} //1.50.58
        const errors = await validate(user, validationOpt);
        if(errors.length > 0){
            res.status(404).json(errors)
        }

        // Hash password.
        user.hasPassword();
        userRepository.save(user)

        res.json({message: 'Password changed!'})
    }
}

export default AuthController;