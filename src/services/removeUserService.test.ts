import { dataSource } from '../data-source';
import { MockData } from '../utils/mockData/mockData';
import { RemoveUserService } from './removeUserService';

describe('RemoveUserService', () => {
  beforeAll(async () => {
    await dataSource.initialize();
    await dataSource.runMigrations();
  });
  afterAll(async () => {
    await dataSource.destroy();
  });
  const mockData = new MockData();
  it('Deve retornar um array vazio, quando o usuário for excluido', async () => {
    const { id } = await mockData.createUser();
    const removeUserservice = new RemoveUserService();
    const removeUser = await removeUserservice.removeUser(id);
    expect(removeUser).toHaveLength(0);
  });
});
