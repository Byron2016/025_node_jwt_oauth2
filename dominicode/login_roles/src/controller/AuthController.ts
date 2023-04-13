//import { getRepository } from 'typeorm'
import { Request, Response } from "express"
import {User} from '../entity/User'
import { AppDataSource } from "../data-source"
import * as jwt from 'jsonwebtoken'
import config from '../config/config'

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
}

export default AuthController;