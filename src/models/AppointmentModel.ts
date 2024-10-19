
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

export interface CreateOrUpdateAppointmentBody {
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
    index:{
      name: 'patientIndex', // Nombre del índice
      type: 'global' // Tipo de indice (global o local)
    }
  },
  doctorId: {
    type: String,
    required: true,
    index: {
      name: 'doctorIndex', // Nombre del índice
      type: 'global' // Tipo de indice (global o local)
    }
  },
  appointmentDate: {
    type: String,
    required: true,
  },
  countryId: {
    type: String,
    required: true,
    index:{
      name: 'countryIndex', // Nombre del índice
      type: 'global' // Tipo de indice (global o local)
    }
    
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
const AppointmentModel = dynamoose.model<Appointment>(config.dynamoAppointmentsTable, AppointmentSchema);

export default AppointmentModel;
