import GroupChat from '../models/group-chat.model';
import User from '../models/user.model';

export class GroupChatService {
  public static async createGroupChat(name: string, userIds: number[]): Promise<GroupChat> {
    const groupChat = await GroupChat.create({ name });
    const users = await User.findAll({ where: { id: userIds } });
    await groupChat.addUsers(users);
    return groupChat;
  }

  public static async addUserToGroupChat(groupId: number, userId: number): Promise<void> {
    const groupChat = await GroupChat.findByPk(groupId);
    const user = await User.findByPk(userId);
    if (groupChat && user) {
      await groupChat.addUser(user);
    } else {
      throw new Error('Group chat or user not found');
    }
  }
}
