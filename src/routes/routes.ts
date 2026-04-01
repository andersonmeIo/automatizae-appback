import { Router } from "express";

import { AuthController } from "../controllers/auth.controller";

export const router = Router();

const authController = new AuthController();

router.get('/instances', authController.buscarInstancias);
