import { Router } from 'express';
import DoctorController from '../controllers/DoctorController';

const DoctorRouter =  Router();

DoctorRouter.get('/', DoctorController.getAllDoctor);
DoctorRouter.post('/', DoctorController.createDoctor);

export default DoctorRouter;
