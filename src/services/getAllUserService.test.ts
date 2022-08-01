import { dataSource } from '../data-source';
import { GetAllUserService } from './getAllUserService';
import { MockData } from '../utils/mockData/mockData';

describe('GetAllUserService', () => {
  beforeAll(async () => {
    await dataSource.initialize();
    await dataSource.runMigrations();
  });
  afterAll(async () => {
    await dataSource.query('DELETE FROM users');
    await dataSource.destroy();
  });
  const mockData = new MockData();
  it('Deve retornar todos os usuários cadastrados', async () => {
    await mockData.mockData();
    const response = [
      {
        nome: 'Diego',
        email: 'diego@email.com',
      },
      {
        nome: 'Leonardo',
        email: '',
      },
    ];
    const getAllUserService = new GetAllUserService();
    const obj = await getAllUserService.getAllUsers();
    expect(obj).toMatchObject(response);
  });
});
