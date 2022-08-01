import { CreateUserService } from '../../services/createUserService';
import { v4 as uuid } from 'uuid';

class MockData {
  createUserService = new CreateUserService();
  async mockData() {
    await this.createUserService.createUser({
      id: uuid(),
      nome: 'Diego',
      email: 'diego@email.com',
    });
    await this.createUserService.createUser({
      id: uuid(),
      nome: 'Leonardo',
      email: '',
    });
  }
  async createUser() {
    const user = await this.createUserService.createUser({
      id: uuid(),
      nome: 'Diego',
      email: 'diego@email.com',
    });
    return user;
  }
}
export { MockData };
