
 import PatientModel, {Patient} from "../models/PatientModel";

export class PatientRepository {
  private patientModel;

  // Inyección de dependencias a través del constructor
  constructor(patientModel: typeof PatientModel) {
    this.patientModel = patientModel;
  }

  // Crear un nuevo paciente
  async createPatient(patientData: Patient): Promise<Patient> {
    try {
      const newPatient = new this.patientModel(patientData);
      const result = await newPatient.save();
      return result as Patient;
    } catch (error) {
      console.error("Error creating patient:", error);
      throw new Error("Could not create patient");
    }
  }

  // Obtener un paciente por ID
  async getPatientById(patientId: string): Promise<Patient> {
    try {
      const patient = await this.patientModel.get(patientId);
      if (!patient) {
        throw new Error(`Patient with ID ${patientId} not found`);
      }
      return patient;
    } catch (error) {
      console.error("Error fetching patient:", error);
      throw new Error("Could not fetch patient");
    }
  }

  // Actualizar un paciente
  async updatePatient(patientId: string, updatedData: Partial<Patient>): Promise<Patient> {
    try {
      const patient = await this.patientModel.get(patientId);
      if (!patient) {
        throw new Error(`Patient with ID ${patientId} not found`);
      }

      // Actualiza los datos del paciente
      Object.assign(patient, updatedData);
      const updatedPatient = await patient.save();
      return updatedPatient as Patient;
    } catch (error) {
      console.error("Error updating patient:", error);
      throw new Error("Could not update patient");
    }
  }

  // Eliminar un paciente
  async deletePatient(patientId: string): Promise<void> {
    try {
      await this.patientModel.delete(patientId);
    } catch (error) {
      console.error("Error deleting patient:", error);
      throw new Error("Could not delete patient");
    }
  }

  // Obtener todos los pacientes (opcional)
  async getAllPatients(): Promise<Patient[]> {
    try {
      const patients = await this.patientModel.scan().exec();
      return patients;
    } catch (error) {
      console.error("Error fetching all patients:", error);
      throw new Error("Could not fetch patients");
    }
  }
}
