import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('GroupChat', 'postgres', 'tushar', {
  host: 'localhost',
  dialect: 'postgres',
});

