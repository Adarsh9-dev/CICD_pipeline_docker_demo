import express from 'express';
import { healthyController } from '../controller/controller.js';

const Router = express.Router();

Router.get('/healthy', healthyController);

export default Router;