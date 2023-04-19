import { Router } from "express";
import { Request, Response } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    res.json({
      status: 200,
      message: "Server working, you are enable to use this API 👻👻👻",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send("Server Error (test.js)");
  }
});

export default router;
