import { dataSource } from '../data-source';
import { User } from '../entities/User';

class RemoveUserService {
  async removeUser(id: string) {
    const user = await dataSource
      .getRepository(User)
      .createQueryBuilder()
      .delete()
      .from(User)
      .where('id = :id', { id })
      .execute();
    return user;
  }
}
export { RemoveUserService };
