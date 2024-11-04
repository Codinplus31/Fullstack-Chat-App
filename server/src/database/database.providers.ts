import { Sequelize } from 'sequelize-typescript';
import { Channel } from 'src/channel/channel.entity';
import { Message } from 'src/message/message.entity';
import { User } from 'src/user/user.entity';
const pool = new Pool({
	    connectionString: "postgres://postgres.gdcvmyrcfgvbjlghntuk:TxDKcayEYb945xVs@aws-0-us-east-1.pooler.supabase.com:6543/postgres",
	// ssl: {
 //        rejectUnauthorized: false, // This allows self-signed certificates
 //        ca: fs.readFileSync(path.join(__dirname, process.env.SSL_CERT_FILE)).toString() // Load the certificate
 //    }
  
})
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        connectionString: 'postgresql://uqzm1kkmllkly5xhheet:4QwqdfuWPtew9xA1LvkvZADnKB5apP@bocxnrhccosiswskpz82-postgresql.services.clever-cloud.com:50013/bocxnrhccosiswskpz82'
              });
      sequelize.addModels([User, Message, Channel]);
      await sequelize.sync();
      return sequelize;
    }
  }
];
