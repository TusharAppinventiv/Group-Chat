import express from 'express';
import { GroupChatController } from '../controllers/group-chat.message';

const router = express.Router();

router.post('/message', GroupChatController.createMessage);
router.get('/messages', GroupChatController.getMessages);
router.delete('/messages/:groupId', GroupChatController.deleteMessages);

export default router;
