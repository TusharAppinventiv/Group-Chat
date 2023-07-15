import GroupChat from '../models/group-chat.model';
import User from '../models/user.model';

export class GroupChatService {
  public static async createGroupChat(name: string, userIds: number[]): Promise<GroupChat> {
    const groupChat = await GroupChat.create({ name });
    const users = await User.findAll({ where: { id: userIds } });
    await groupChat.addUsers(users);
    return groupChat;
  }

}
