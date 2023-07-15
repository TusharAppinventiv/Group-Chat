import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/databse';
import User from './user.model';

interface GroupChatAttributes {
  id: number;
  name: string;
}

class GroupChat extends Model<GroupChatAttributes> implements GroupChatAttributes {
  public id!: number;
  public name!: string;

  public addUser!: (user: User) => Promise<void>;
  public addUsers!: (users: User[]) => Promise<void>;
}

GroupChat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'group_chats',
  }
);

GroupChat.belongsToMany(User, { through: 'UserGroupChat' });

export default GroupChat;