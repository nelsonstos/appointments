import DoctorModel, { Doctor } from '../models/DoctorModel';
import { DoctorRepository } from '../repositories/doctorRepository';

class DoctorService {
    private doctorRepository: DoctorRepository;

    constructor() {
        this.doctorRepository = new DoctorRepository(DoctorModel); // Instancia el repositorio
    }

    async createDoctor(doctorData: Doctor): Promise<Doctor> {
        return await this.doctorRepository.createDoctor(doctorData);
    }

    async getAllDoctors(): Promise<Doctor[]> {
        return await this.doctorRepository.getAllDoctors();
    }

    async getDocotroById(id: string): Promise<Doctor | null> {
        return await this.doctorRepository.getDoctorById(id);
    }

    async updateDoctor(id: string, doctorData: Partial<Doctor>): Promise<Doctor | null> {
        return await this.doctorRepository.updateDoctor(id, doctorData);
    }

    async deleteDoctor(id: string): Promise<void> {
        await this.doctorRepository.deleteDoctor(id);
    }
}

export default DoctorService;
