
import PatientModel, { Patient } from '../models/PatientModel'; // Asegúrate de tener el modelo Patient definido
import { PatientRepository } from '../repositories/patientRepository';

class PatientService {
    private patientRepository: PatientRepository;

    constructor() {
        this.patientRepository = new PatientRepository(PatientModel); // Instancia el repositorio
    }

    async createPatient(patientData: Patient): Promise<Patient> {
        console.log("service-patient: ", patientData)
        return await this.patientRepository.createPatient(patientData);
    }

    async getAllPatients(): Promise<Patient[]> {
        return await this.patientRepository.getAllPatients();
    }

    async getPatientById(id: string): Promise<Patient | null> {
        return await this.patientRepository.getPatientById(id);
    }

    async updatePatient(id: string, patientData: Partial<Patient>): Promise<Patient | null> {
        return await this.patientRepository.updatePatient(id, patientData);
    }

    async deletePatient(id: string): Promise<void> {
        await this.patientRepository.deletePatient(id);
    }
}

export default PatientService;
