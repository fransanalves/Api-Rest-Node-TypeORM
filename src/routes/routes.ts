import { Router, Request, Response } from 'express';
import { CreateUserController } from '../controllers/createUserController';
import { GetAllUserController } from '../controllers/getAllUserController';
import { RemoveUserController } from '../controllers/removeUserController';
import { UpdateUserController } from '../controllers/updateUserController';

const router = Router();
const getAllUsersController = new GetAllUserController();
const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const removeUserController = new RemoveUserController();

router.get('/', (req: Request, res: Response) => {
  return res.json({ mensagem: 'Hello World!' });
});
router.get('/users', getAllUsersController.getAllUsers);
router.post('/users', createUserController.createUser);
router.patch('/user', updateUserController.updateUser);
router.delete('/user/:id', removeUserController.removeUser);
export { router };
