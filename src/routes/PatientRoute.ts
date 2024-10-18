import { Router } from 'express';

import PatientController from '../controllers/PatientController';

const PatientRouter =  Router();

PatientRouter.get('/', PatientController.getAllPatient);
PatientRouter.post('/', PatientController.createPatient);

export default PatientRouter;
