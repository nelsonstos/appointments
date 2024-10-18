import { Request, Response } from 'express';
import PatientService from '../services/PatientService'; // Importa el servicio
import asyncMiddleware from "../middlewares/async.middleware"; 

class PatientController {
    private static patientService = new PatientService();
   
    // Crear un nuevo paciente
    static createPatient = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
        const patientData = req.body; 
        const newPatient = await this.patientService.createPatient(patientData);
        res.status(201).json(newPatient); 
    });

    // Obtener todos los pacientes
    static getAllPatient = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
        const patients = await this.patientService.getAllPatients(); 
        res.status(200).json(patients); 
    });

    // Obtener un paciente por ID
    static getById = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params; 
        const patient = await this.patientService.getPatientById(id); 
        if (patient) {
            res.status(200).json(patient); 
        } else {
            res.status(404).json({ message: "Patient not found" }); 
        }
    });

    // Actualizar un paciente
    static update = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params; 
        const patientData = req.body;
        const updatedPatient = await this.patientService.updatePatient(id, patientData); 
        if (updatedPatient) {
            res.status(200).json(updatedPatient); 
        } else {
            res.status(404).json({ message: "Patient not found" }); 
        }
    });

    // Borrar un paciente
    static delete = asyncMiddleware(async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params; 
        await this.patientService.deletePatient(id); 
        res.status(204).send(); 
    });
}

export default PatientController;
