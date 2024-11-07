import { Sequelize } from 'sequelize-typescript';
import { Channel } from '../channel/channel.entity';
import { Message } from '../message/message.entity';
import { User } from '../user/user.entity';
import pg from "pg";

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
       host: 'bocxnrhccosiswskpz82-postgresql.services.clever-cloud.com',
        port: 50013,
        username: 'uqzm1kkmllkly5xhheet',
        password: '4QwqdfuWPtew9xA1LvkvZADnKB5apP',
        database: 'bocxnrhccosiswskpz82',
           dialectModule: pg
        //connectionString: 'postgresql://uqzm1kkmllkly5xhheet:4QwqdfuWPtew9xA1LvkvZADnKB5apP@bocxnrhccosiswskpz82-postgresql.services.clever-cloud.com:50013/bocxnrhccosiswskpz82'
              });

    /*  const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: process.env.DB_PASSWORD,
        database: 'link-chat-app'
      });*/
      sequelize.addModels([User, Message, Channel]);
      await sequelize.sync();
      return sequelize;
    }
  }
];
