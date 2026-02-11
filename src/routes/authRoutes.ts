import { Router, Request, Response } from "express";
import { register, login } from "../controllers/authController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.get(
  "/profile",
  authMiddleware,
  (req: Request, res: Response) => {
    const user = (req as any).user;
    res.json({ message: "Acesso autorizado", user });
  }
);

export default router;
