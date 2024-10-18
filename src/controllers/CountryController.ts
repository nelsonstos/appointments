import { Request, Response } from "express";
import asyncMiddleware from "../middlewares/async.middleware";
import CountryService from "../services/ContryService";

class CountryController {
    private static countryService = new CountryService();
   
    // Crear un nuevo paciente
    static createCountry = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
        const patientData = req.body; 
        const newPatient = await this.countryService.createPatient(patientData);
        res.status(201).json(newPatient); 
    });

}

export default CountryController;