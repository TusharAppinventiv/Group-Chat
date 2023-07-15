import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/databse';

export interface MessageAttributes {
  id: number;
  userId: string;
  groupId: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Message extends Model<MessageAttributes> implements MessageAttributes {
  public id!: number;
  public userId!: string;
  public groupId!: string;
  public message!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    groupId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Message',
    tableName: 'messages',
    timestamps: true,
  }
);
