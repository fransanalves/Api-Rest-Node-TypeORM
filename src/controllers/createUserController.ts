import { Request, Response } from 'express';
import { CreateUserService } from '../services/createUserService';
import { v4 as uuid } from 'uuid';

class CreateUserController {
  async createUser(req: Request, res: Response) {
    const createUserService = new CreateUserService();
    const id = uuid();
    const nome = req.body.nome;
    const email = req.body.email;
    if (nome.length === 0) {
      return res.status(400).json({ mensagem: 'Usuário inválido.' });
    }
    const newUser = await createUserService.createUser({ id, nome, email });
    return res.status(201).json(newUser);
  }
}
export { CreateUserController };
