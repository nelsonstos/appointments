
import dynamoose from 'dynamoose';
import { config } from '../config/config';
import { Item } from 'dynamoose/dist/Item';

export interface Appointment extends Item  {
  appointmentId: string;
  patientId: string;
  doctorId: string;
  appointmentDate: string;
  countryId: string;
  state: string

}

// Definición del esquema para Cita Médica
const AppointmentSchema = new dynamoose.Schema({
  appointmentId: {
    type: String,
    hashKey: true, // Clave de partición
  },
  patientId: {
    type: String,
    rangeKey: true, // Clave de ordenación para consultas por paciente
  },
  doctorId: {
    type: String,
    required: true,
  },
  appointmentDate: {
    type: String,
    required: true,
  },
  countryId: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
}, 
{
    timestamps: true,
    saveUnknown: true,
}, );

// Crear el modelo
const Appointment = dynamoose.model<Appointment>(config.dynamoAppointmentsTable, AppointmentSchema);

export default Appointment;
