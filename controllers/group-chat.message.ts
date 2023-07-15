import { Request, Response } from 'express';
import { GroupChatService } from '../services/message.service';

export class GroupChatController {
  public static async createMessage(req: Request, res: Response): Promise<void> {
    try {
      const { userId, groupId, message } = req.body;
      const newMessage = await GroupChatService.createMessage(userId, groupId, message);
      res.status(201).json(newMessage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create message' });
    }
  }

  public static async getMessages(req: Request, res: Response): Promise<void> {
    try {
      const { groupId, page, limit } = req.query;
      const messages = await GroupChatService.getMessages(String(groupId), Number(page), Number(limit));
      res.status(200).json(messages);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to get messages' });
    }
  }

  public static async deleteMessages(req: Request, res: Response): Promise<void> {
    try {
      const { groupId } = req.params;
      await GroupChatService.deleteMessages(groupId);
      res.status(204).json({ success: 'Messages deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete messages' });
    }
  }  
}

