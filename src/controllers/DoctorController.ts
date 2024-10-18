import { Request, Response } from 'express';
import asyncMiddleware from "../middlewares/async.middleware"; 
import DoctorService from '../services/DoctorService';

class DoctorController {
    private static doctorService = new DoctorService();
   
    static createDoctor= asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
        const doctorData = req.body; 
        const newDoctor = await this.doctorService.createDoctor(doctorData);
        res.status(201).json(newDoctor); 
    });


    static getAllDoctor = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
        const doctors = await this.doctorService.getAllDoctors(); 
        res.status(200).json(doctors); 
    });
}

export default DoctorController;