import { dataSource } from '../data-source';
import { CreateUserService } from './createUserService';

describe('CreateUserService', () => {
  beforeAll(async () => {
    await dataSource.initialize();
    await dataSource.runMigrations();
  });
  afterAll(async () => {
    await dataSource.query('DELETE FROM users');
    await dataSource.destroy();
  });
  it('Deve retornar o id do usuário criado', async () => {
    const createUserUservice = new CreateUserService();
    const result = await createUserUservice.createUser({
      id: 'ddd2f14d-cf16-4601-af30-756730931c8d',
      nome: 'Daiane',
      email: 'email@email.com',
    });
    expect(result).toHaveProperty('id');
  });
});
