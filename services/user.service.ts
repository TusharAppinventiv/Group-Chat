import User from '../models/user.model';

export class UserService {
  public static async createUser(username: string, password: string): Promise<User> {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      throw new Error('Username already exists');
    }
    const user = await User.create({ username, password });
    return user;
  }

  public static async login(username: string, password: string): Promise<User | null> {
    const user = await User.findOne({ where: { username, password } });
    if (!user) {
      return null;
    }
    return user;
  }
}
