import { Router } from 'express';
import AppointmentController from '../controllers/AppointmentController';

const AppointmentRouter =  Router();

AppointmentRouter.get('/',  AppointmentController.getAllAppointments);
AppointmentRouter.post('/',  AppointmentController.createAppointment);
AppointmentRouter.get('/country/:countryId', AppointmentController.getAppointmentsByCountryId);
AppointmentRouter.get('/doctor/:doctorId', AppointmentController.getAppointmentsByDoctorId);
AppointmentRouter.get('/country/:countryId/doctor/:doctorId', AppointmentController.getAppointmentsByCountryAndDoctor);

export default AppointmentRouter;
