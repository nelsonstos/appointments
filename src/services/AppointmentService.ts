import AppointmentModel, { Appointment } from '../models/AppointmentModel';
import { AppointmentRepository } from '../repositories/AppointmentRepository';


class AppointmentService {
    private appointmentRepository: AppointmentRepository;

    constructor() {
        this.appointmentRepository = new AppointmentRepository(AppointmentModel); // Instancia el repositorio
    }

    async createAppointment(appointmentData: Appointment): Promise<Appointment> {
        return await this.appointmentRepository.createAppointment(appointmentData);
    }

    async getAllAppointments(): Promise<Appointment[]> {
        return await this.appointmentRepository.getAllAppointments();
    }

    async getAppointmentById(id: string): Promise<Appointment | null> {
        return await this.appointmentRepository.getAppointmentById(id);
    }

    async updateAppointment(id: string, appointmentData: Partial<Appointment>): Promise<Appointment | null> {
        return await this.appointmentRepository.updateAppintment(id, appointmentData);
    }

    async deleteAppointment(id: string): Promise<void> {
        await this.appointmentRepository.deleteAppointment(id);
    }

    async getAppointmentsByCountryId(countryId: string): Promise<Appointment[]> {
    return await this.appointmentRepository.getAppointmentsByCountryId(countryId);
    }

    async getAppointmentsByDoctorId(doctorId: string): Promise<Appointment[]> {
    return await this.appointmentRepository.getAppointmentsByDoctorId(doctorId);
    }

    async getAppointmentsByCountryAndDoctor(countryId: string, doctorId: string): Promise<Appointment[]> {
    return await this.appointmentRepository.getAppointmentsByCountryAndDoctor(countryId, doctorId);
    }
}

export default AppointmentService;
