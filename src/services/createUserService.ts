import { dataSource } from '../data-source';
import { User } from '../entities/User';
import { IUser } from '../interfaces/user';

class CreateUserService {
  async createUser({ id, nome, email }: IUser) {
    const userData = await dataSource
      .getRepository(User)
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          id: id,
          nome: nome,
          email: email,
        },
      ])
      .execute();
    return userData.identifiers[0];
  }
}
export { CreateUserService };
