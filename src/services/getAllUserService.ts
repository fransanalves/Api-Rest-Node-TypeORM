import { dataSource } from '../data-source';
import { User } from '../entities/User';

class GetAllUserService {
  async getAllUsers() {
    const users = await dataSource
      .getRepository(User)
      .createQueryBuilder('users')
      .select()
      .getMany();
    console.log(users);
    return users;
  }
}
export { GetAllUserService };
