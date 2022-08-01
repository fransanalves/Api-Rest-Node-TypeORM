import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: '',
  host: '',
  port: '',
  username: '',
  password: '',
  database: '',
  entities: [],
  migrations: [],
});
export { dataSource };
