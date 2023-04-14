import { Router } from 'express'
import { Request, Response } from "express"

const router = Router()

router.get("/", async (req: Request, res: Response) => {
    try {
        res.json({
            status:200,
            message: "Get data has sucessfully",
        });
    } catch (e) {
        console.log(e);
        return res.status(500).send("Server Error (test.js)")
    }
})

export default router