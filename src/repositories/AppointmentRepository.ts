
import AppointmentModel, { Appointment } from "../models/AppointmentModel";

export class AppointmentRepository {
  private appointmentModel;

  // Inyección de dependencias a través del constructor
  constructor(appointmentModel: typeof AppointmentModel) {
    this.appointmentModel = appointmentModel;
  }

  async createAppointment(appointmentData: Appointment): Promise<Appointment> {
    try {
      const newAppointment = new this.appointmentModel(appointmentData);
      const result = await newAppointment.save();
      return result as Appointment;
    } catch (error) {
      console.error("Error creating appointment:", error);
      throw new Error("Could not create appointment");
    }
  }

  async getAppointmentById(appointmentId: string): Promise<Appointment> {
    try {
      const appointment = await this.appointmentModel.get(appointmentId);
      if (!appointment) {
        throw new Error(`appointment with ID ${appointmentId} not found`);
      }
      return appointment;
    } catch (error) {
      console.error("Error fetching appointment:", error);
      throw new Error("Could not fetch appointment");
    }
  }

  async updateAppintment(appointmentId: string, updatedData: Partial<Appointment>): Promise<Appointment> {
    try {
      const appointment = await this.appointmentModel.get(appointmentId);
      if (!appointment) {
        throw new Error(`Appointment with ID ${appointmentId} not found`);
      }

      Object.assign(appointment, updatedData);
      const updatedAppointment = await appointment.save();
      return updatedAppointment as Appointment;
    } catch (error) {
      console.error("Error updating appointment:", error);
      throw new Error("Could not update appointment");
    }
  }

  async deleteAppointment(appointmentId: string): Promise<void> {
    try {
      await this.appointmentModel.delete(appointmentId);
    } catch (error) {
      console.error("Error deleting appintment:", error);
      throw new Error("Could not delete appintment");
    }
  }

  async getAllAppointments(): Promise<Appointment[]> {
    try {
      const appointments = await this.appointmentModel.scan().exec();
      return appointments;
    } catch (error) {
      console.error("Error fetching all appointments:", error);
      throw new Error("Could not fetch appointments");
    }
  }

  // Nuevo método para obtener citas por countryId
  async getAppointmentsByCountryId(countryId: string): Promise<Appointment[]> {
    try {
      const appointments = await this.appointmentModel.query("countryId").eq(countryId).exec();
      return appointments;
    } catch (error) {
      console.error("Error fetching appointments by country ID:", error);
      throw new Error("Could not fetch appointments by country ID");
    }
  }

  // Nuevo método para obtener citas por doctorId
  async getAppointmentsByDoctorId(doctorId: string): Promise<Appointment[]> {
    try {
      const appointments = await this.appointmentModel.query("doctorId").eq(doctorId).exec();
      return appointments;
    } catch (error) {
      console.error("Error fetching appointments by doctor ID:", error);
      throw new Error("Could not fetch appointments by doctor ID");
    }
  }

  // Método para obtener citas por countryId y doctorId
  async getAppointmentsByCountryAndDoctor(countryId: string, doctorId: string): Promise<Appointment[]> {
    console.log("countryId:", countryId, "doctorId: ", doctorId)
    try {
      const appointments = await this.appointmentModel.query("countryId").eq(countryId)
        .filter("doctorId").eq(doctorId).exec();
      return appointments;
    } catch (error) {
      console.error("Error fetching appointments by country ID and doctor ID:", error);
      throw new Error("Could not fetch appointments by country ID and doctor ID");
    }
  }
}
