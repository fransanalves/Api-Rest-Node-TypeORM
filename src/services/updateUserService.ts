import { dataSource } from '../data-source';
import { User } from '../entities/User';
import { IUser } from '../interfaces/user';

class UpdateUserService {
  async updateUser({ id, nome, email }: IUser) {
    const updateUser = await dataSource
      .getRepository(User)
      .createQueryBuilder()
      .update(User)
      .set({
        nome: nome,
        email: email,
      })
      .where('id = :id', { id })
      .execute();
    return updateUser.raw;
  }
}
export { UpdateUserService };
