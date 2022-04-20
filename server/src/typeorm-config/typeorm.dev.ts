// typeorm
import { ConnectionOptions } from 'typeorm';

// 3rd-party
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

// config
import { appConfig } from 'app-config';

// ==============================|| TYPEORM CONFIG ||============================== //

const typeormConfig: ConnectionOptions = {
  type: 'postgres',
  host: appConfig.DB_HOST,
  port: appConfig.DB_PORT,
  username: appConfig.DB_USER,
  password: appConfig.DB_PASSWORD,
  database: appConfig.DB_NAME,
  synchronize: true,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  namingStrategy: new SnakeNamingStrategy(),
};

export { typeormConfig };
