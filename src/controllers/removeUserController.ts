import { Request, Response } from 'express';
import { RemoveUserService } from '../services/removeUserService';

class RemoveUserController {
  async removeUser(req: Request, res: Response) {
    const removeUserService = new RemoveUserService();
    const { id } = req.params;
    if (id === undefined) {
      return res.status(400).json({ mensagem: 'Informe o ID na rota' });
    }
    await removeUserService.removeUser(id);
    return res.status(204).json();
  }
}
export { RemoveUserController };
