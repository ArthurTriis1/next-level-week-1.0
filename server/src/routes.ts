import express from 'express';
import knex from './database/connection';
import pointsController from './controllers/PointsController'
import itemsController from './controllers/ItemsController';

const routes = express.Router();


routes.get('/items', itemsController.index)

routes.get('/points/:id', pointsController.show)

routes.get('/points', pointsController.index);
routes.post('/points', pointsController.create);


export default routes;