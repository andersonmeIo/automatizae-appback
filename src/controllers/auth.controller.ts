import { Request, Response } from "express";
import { AuthServices } from "../respositories/auth.services";

export class AuthController {
    private authServices: AuthServices;

    constructor() {
        this.authServices = new AuthServices();
    }
    public buscarInstancias = async (req: Request, res: Response): Promise<Response> => {
        try {
            const result = await this.authServices.getInstances();

            return res.status(200).json(result);
        } catch (error: any) {
            return res.status(500).json({
                message: "Erro ao criar conexão",
                error: error.message || error
            });
        }
    }
}