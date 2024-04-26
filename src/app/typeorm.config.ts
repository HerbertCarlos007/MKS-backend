
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

// As configs não estão funcionando quando está funcionando quando o uso o process.env
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'srv887.hstgr.io',
  port: 3306,
  username: 'u379300444_herbert_carlos',
  password: '41568106hB',
  database: 'u379300444_database_herbe',
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  synchronize: true,
};

export default config;
