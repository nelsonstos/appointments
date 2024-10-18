
import DoctorModel, { Doctor } from "../models/DoctorModel";

export class DoctorRepository {
  private doctorModel;

  // Inyección de dependencias a través del constructor
  constructor(doctorModel: typeof DoctorModel) {
    this.doctorModel = doctorModel;
  }

  // Crear un nuevo Doctor
  async createDoctor(doctorData: Doctor): Promise<Doctor> {
    try {
      const newDoctor = new this.doctorModel(doctorData);
      const result = await newDoctor.save();
      return result as Doctor;
    } catch (error) {
      console.error("Error creating doctor:", error);
      throw new Error("Could not create doctor");
    }
  }

  async getDoctorById(doctorId: string): Promise<Doctor> {
    try {
      const doctor = await this.doctorModel.get(doctorId);
      if (!doctor) {
        throw new Error(`Doctor with ID ${doctorId} not found`);
      }
      return doctor;
    } catch (error) {
      console.error("Error fetching doctor:", error);
      throw new Error("Could not fetch doctor");
    }
  }

  async updateDoctor(doctorId: string, updatedData: Partial<Doctor>): Promise<Doctor> {
    try {
      const doctor = await this.doctorModel.get(doctorId);
      if (!doctor) {
        throw new Error(`Doctor with ID ${doctorId} not found`);
      }

      // Actualiza los datos del paciente
      Object.assign(doctor, updatedData);
      const updatedDoctor = await doctor.save();
      return updatedDoctor as Doctor;
    } catch (error) {
      console.error("Error updating docotor:", error);
      throw new Error("Could not update docotor");
    }
  }

  async deleteDoctor(doctorId: string): Promise<void> {
    try {
      await this.doctorModel.delete(doctorId);
    } catch (error) {
      console.error("Error deleting doctor:", error);
      throw new Error("Could not delete doctor");
    }
  }

  async getAllDoctors(): Promise<Doctor[]> {
    try {
      const doctors = await this.doctorModel.scan().exec();
      return doctors;
    } catch (error) {
      console.error("Error fetching all doctors:", error);
      throw new Error("Could not fetch doctors");
    }
  }
}
