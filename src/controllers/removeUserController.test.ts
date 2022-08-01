import { dataSource } from '../data-source';
import { MockData } from '../utils/mockData/mockData';
import { makeMockRequest } from '../utils/mocks/mockRequest';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { RemoveUserController } from './removeUserController';

describe('RemoveUserController', () => {
  beforeAll(async () => {
    await dataSource.initialize();
    await dataSource.runMigrations();
  });
  afterAll(async () => {
    await dataSource.destroy();
  });
  const mockData = new MockData();
  it('Deve retornar o status 204, quando o usuário for excluido', async () => {
    const { id } = await mockData.createUser();
    const removeUserController = new RemoveUserController();
    const request = makeMockRequest({
      params: {
        id: id,
      },
    });
    const response = makeMockResponse();
    await removeUserController.removeUser(request, response);
    expect(response.state.status).toBe(204);
  });
});
