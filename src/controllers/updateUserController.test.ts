import { Request } from 'express';
import { dataSource } from '../data-source';
import { MockData } from '../utils/mockData/mockData';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { UpdateUserController } from './updateUserController';

describe('UpdateUserController', () => {
  beforeAll(async () => {
    await dataSource.initialize();
    await dataSource.runMigrations();
  });
  afterAll(async () => {
    await dataSource.query('DELETE FROM users');
    await dataSource.destroy();
  });
  const mockData = new MockData();
  it('Deve retornar o status 204, quando o usuário for atualizado', async () => {
    const userId = await mockData.createUser();
    const updateUserController = new UpdateUserController();
    const request = {
      body: {
        id: userId,
        nome: 'Fran',
        email: 'fran@email.com',
      },
    } as Request;
    const response = makeMockResponse();
    await updateUserController.updateUser(request, response);
    expect(response.state.status).toBe(204);
  });
});
