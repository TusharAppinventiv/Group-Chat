import { Message } from '../models/message.model';

export class GroupChatService {
  public static async createMessage(userId: string, groupId: string, message: string): Promise<Message> {
    const newMessage = await Message.create({ userId, groupId, message });
    return newMessage;
  }

  public static async getMessages(groupId: string, page: number, limit: number): Promise<Message[]> {
    const offset = (page - 1) * limit;
    const messages = await Message.findAll({
      where: { groupId },
      offset,
      limit,
      order: [['createdAt', 'DESC']],
    });
    return messages;
  }

  public static async deleteMessages(groupId: string): Promise<void> {
    await Message.destroy({ where: { groupId } });
  }
}

