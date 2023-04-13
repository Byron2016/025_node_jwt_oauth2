import { AppDataSource } from '../data-source'
import { Request, Response } from "express"
import { User } from "../entity/User"
import { validate } from "class-validator"

export class UserController  {
    // Get all users
    static getAll = async(req: Request, res: Response) =>{
        const userRepository = AppDataSource.getRepository(User)
        let users; 

        try {
            users = await userRepository.find()
        } catch (e) {
            res.status(404).json({message: 'Not result'})
        }

        if(users.length > 0){
            res.send(users);
        } else {
            res.status(404).json({message: 'Not result'})
        }
    }
    
    // Get one user
    static getById = async(req: Request, res: Response) =>{
        const {id} = req.params
        const userRepository = AppDataSource.getRepository(User)
        try{
            // parseInt(id, 10)
            const user = await userRepository.findOneOrFail({
                where: { id: parseInt(id, 10)}
            })
            res.send(user);
        }
        catch(e){
            res.status(404).json({message: 'Not result'})
        }
    }

    // Create a new user
    static newUser = async(req: Request, res: Response) =>{
        const {username, password, role} = req.body
        const user = new User()

        console.log(req)

        user.username = username;
        user.password = password;
        user.role = role;

        // Validate
        const validationOpt = { validationError: {target: false, value: false}} //1.50.58
        const errors = await validate(user, validationOpt);
        if(errors.length > 0){
            res.status(404).json(errors)
        }

        const userRepository = AppDataSource.getRepository(User)
        try{
            user.hasPassword()
            await userRepository.save(user) 
        }
        catch(e){
            res.status(409).json({message: 'Username already exist'})
        }

        res.send('User created');
    }

    // Edit user
    static editUser = async(req: Request, res: Response) =>{
        let user;
        const {id} = req.params
        const {username, role} = req.body

        const userRepository = AppDataSource.getRepository(User)

        try{
            user = await userRepository.findOneOrFail({
                where: { id: parseInt(id, 10)}
            }) 
            user.username = username;
            user.role = role;
        }
        catch(e){
            res.status(404).json({message: 'User no found'})
        }

        // Validate
        const validationOpt = { validationError: {target: false, value: false}}
        const errors = await validate(user, validationOpt);
        if(errors.length > 0){
            res.status(400).json(errors)
        }

        // Try to save user
        try{
            await userRepository.save(user) 
        }
        catch(e){
            res.status(409).json({message: 'Username already in use'})
        }

        res.status(201).send('User updated');
    }

    // Delete user
    static deleteUser = async(req: Request, res: Response) =>{
        const {id} = req.params
        const userRepository = AppDataSource.getRepository(User)
        let user: User;

        try{
            user = await userRepository.findOneOrFail({
                where: { id: parseInt(id, 10)}
            })
        }
        catch(e){
            res.status(404).json({message: 'User not found'})
        }
        
        // Remove user
        userRepository.delete(id)
        res.status(201).json({message: 'User deleted'})
    }

}

export default UserController