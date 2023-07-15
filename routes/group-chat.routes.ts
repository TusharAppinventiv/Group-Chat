// routes/groupChatRoutes.ts
import { Router } from 'express';
import { GroupChatController } from '../controllers/group-chat.controller';

const router = Router();

router.post('/groupChats', GroupChatController.createGroupChat);
router.post('/groupChats/:groupId/users', GroupChatController.addUserToGroupChat);

export default router;
