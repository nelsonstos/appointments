import { Request, Response } from 'express';
import asyncMiddleware from "../middlewares/async.middleware"; 
import AppointmentService from '../services/AppointmentService';

class AppointmentController {
    private static appointmentService = new AppointmentService();
   
    static createAppointment= asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
        const appointmentData = req.body; 
        const newAppointment = await this.appointmentService.createAppointment(appointmentData);
        res.status(201).json(newAppointment); 
    });


    static getAllAppointments = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
        const appointments = await this.appointmentService.getAllAppointments(); 
        res.status(200).json(appointments); 
    });

    static getAppointmentsByCountryId = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
        const { countryId } = req.params;
        const appointments = await this.appointmentService.getAppointmentsByCountryId(countryId);
        res.status(200).json(appointments); 
    });

    static getAppointmentsByDoctorId = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
        const { doctorId } = req.params;
        const appointments = await this.appointmentService.getAppointmentsByDoctorId(doctorId);
        res.status(200).json(appointments); 
    });

    static getAppointmentsByCountryAndDoctor = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
        const { countryId, doctorId } = req.params;
        const appointments = await this.appointmentService.getAppointmentsByCountryAndDoctor(countryId, doctorId);
        res.status(200).json(appointments); 
    });
}

export default AppointmentController;