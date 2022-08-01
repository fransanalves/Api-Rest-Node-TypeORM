import { dataSource } from '../data-source';
import { MockData } from '../utils/mockData/mockData';
import { makeMockRequest } from '../utils/mocks/mockRequest';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { GetAllUserController } from './getAllUserController';

describe('GetAllUserController', () => {
  beforeAll(async () => {
    await dataSource.initialize();
    await dataSource.runMigrations();
  });
  afterAll(async () => {
    await dataSource.query('DELETE FROM users');
    await dataSource.destroy();
  });
  const mockData = new MockData();
  it('Deve retornar o status 200, quando obter todos os usuários', async () => {
    await mockData.mockData();
    const getAllUserController = new GetAllUserController();
    const request = makeMockRequest({});
    const response = makeMockResponse();
    await getAllUserController.getAllUsers(request, response);
    expect(response.state.status).toBe(200);
  });
});
