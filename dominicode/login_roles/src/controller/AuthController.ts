//import { getRepository } from 'typeorm'
import { Request, Response } from "express"
import {User} from '../entity/User'
import { AppDataSource } from "../data-source"

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

        res.send(user)

    }
}

export default AuthController;