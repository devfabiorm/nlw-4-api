import { Router } from 'express';
import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveysController';
import { UserController } from './controllers/UserController';

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();
const router = Router();

router.post('/users', userController.create);
router.post('/surveys', surveysController.create);
router.get('/surveys', surveysController.show);
router.post('/sendMail', sendMailController.execute);

export { router };