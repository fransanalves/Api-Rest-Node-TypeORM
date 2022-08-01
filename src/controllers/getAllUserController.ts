import { Request, Response } from 'express';
import { GetAllUserService } from '../services/getAllUserService';

class GetAllUserController {
  async getAllUsers(req: Request, res: Response) {
    const getAllUserService = new GetAllUserService();
    const users = await getAllUserService.getAllUsers();
    return res.status(200).json(users);
  }
}
export { GetAllUserController };
