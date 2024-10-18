// models/Doctor.js
import dynamoose from 'dynamoose';
import { Item } from 'dynamoose/dist/Item';
import { config } from '../config/config';

export interface Doctor extends Item {
    doctorId: string;
    name: string;
    speciality?: number; // Opcional
    countryId: string;
    availableTimes: [string]
  }

// Definición del esquema para Doctor
const DoctorSchema = new dynamoose.Schema({
  doctorId: {
    type: String,
    hashKey: true, // Clave de partición
  },
  name: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: false,
  },
  countryId: {
    type: String,
    required: true,
  },
  availableTimes: {
    type: Array,
    schema: [String],
    required: true,
  },

},
{
    timestamps: true,
    saveUnknown: true,
});

// Crear el modelo
const DoctorModel = dynamoose.model<Doctor>(config.dynamoDoctorsTable, DoctorSchema);

export default DoctorModel;
