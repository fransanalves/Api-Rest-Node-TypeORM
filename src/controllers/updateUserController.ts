import { Request, Response } from 'express';
import { UpdateUserService } from '../services/updateUserService';

class UpdateUserController {
  async updateUser(req: Request, res: Response) {
    const updateUserService = new UpdateUserService();
    const { id, nome, email } = req.body;
    if (id.length === 0) {
      return res.status(400).json({ mensagem: 'Id obrigatório' });
    }
    if (nome.length === 0) {
      return res.status(400).json({ mensagem: 'Nome obrigatório' });
    }
    await updateUserService.updateUser({ id, nome, email });
    return res.status(204);
  }
}
export { UpdateUserController };
