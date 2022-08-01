import { dataSource } from '../data-source';
import { MockData } from '../utils/mockData/mockData';
import { UpdateUserService } from './updateUserService';

describe('UpdateUserService', () => {
  beforeAll(async () => {
    await dataSource.initialize();
    await dataSource.runMigrations();
  });
  afterAll(async () => {
    await dataSource.query('DELETE FROM users');
    await dataSource.destroy();
  });
  const mockData = new MockData();
  it('Deve atualizar o nome do usuário', async () => {
    const { id } = await mockData.createUser();
    const updateUserService = new UpdateUserService();
    const updateUser = await updateUserService.updateUser({
      id: id,
      nome: 'Maria',
    });
    expect(updateUser).toHaveLength(0);
  });
});
