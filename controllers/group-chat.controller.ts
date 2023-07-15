import { Request, Response } from 'express';
import { GroupChatService } from '../services/group-chat.service';

export class GroupChatController {
  public static async createGroupChat(req: Request, res: Response): Promise<void> {
    try {
      const { name, userIds } = req.body;
      const groupChat = await GroupChatService.createGroupChat(name, userIds);
      res.status(201).json(groupChat);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create group chat' });
    }
  }

  public static async addUserToGroupChat(req: Request, res: Response): Promise<void> {
    try {
      const { groupId, userId } = req.body;
      await GroupChatService.addUserToGroupChat(groupId, userId);
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add user to group chat' });
    }
  }
}
