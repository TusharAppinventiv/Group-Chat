// server.ts
import express from 'express';
import authRoutes from './routes/user.routes'
import groupChatRoutes from './routes/group-chat.routes';
import groupmessageRoutes from './routes/message.routes';
import { sequelize } from './database/databse';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/api', groupChatRoutes);
app.use('/mess', groupmessageRoutes)
// Sync the models with the database
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


