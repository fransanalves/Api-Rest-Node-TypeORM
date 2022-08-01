import 'reflect-metadata';
import express from 'express';
import { router } from './routes/routes';
import { dataSource } from './data-source';

dataSource.initialize().then(() => {
  const server = express();
  server.use(express.json());
  server.use(router);
  server.listen(5000, () => {
    console.log('Servidor on na porta 5000.');
  });
});
