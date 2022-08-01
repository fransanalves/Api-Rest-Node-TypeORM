import { dataSource } from '../data-source';
import { Request } from 'express';
import { makeMockResponse } from '../utils/mocks/mockResponse';
import { CreateUserController } from './createUserController';

describe('createUserController', () => {
  beforeAll(async () => {
    await dataSource.initialize();
    await dataSource.runMigrations();
  });
  afterAll(async () => {
    await dataSource.query('DELETE FROM users');
    await dataSource.destroy();
  });
  const createUserController = new CreateUserController();
  const response = makeMockResponse();
  it('Deve retornar o status 201, quando o usuário criado', async () => {
    const request = {
      body: {
        nome: 'Maria',
        email: 'maria@email.com',
      },
    } as Request;
    await createUserController.createUser(request, response);
    expect(response.state.status).toBe(201);
  });
  it('Deve retornar status 400, quando o nome do usuário não for informado', async () => {
    const request = {
      body: {
        nome: '',
        email: 'email@email.com',
      },
    } as Request;
    await createUserController.createUser(request, response);
    expect(response.state.status).toBe(400);
  });
  it('Deve retornar o status 201, quando o email não for informado', async () => {
    const request = {
      body: {
        nome: 'Maria',
        email: '',
      },
    } as Request;
    await createUserController.createUser(request, response);
    expect(response.state.status).toBe(201);
  });
});
