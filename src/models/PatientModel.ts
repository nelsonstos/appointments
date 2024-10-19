import dynamoose from "dynamoose";
import { config } from "../config/config";
import { Item } from "dynamoose/dist/Item";

// Define la interfaz para el paciente
export interface Patient extends Item {
  patientId: string;
  name: string;
  age?: number; // Opcional
  address?: string; // Opcional
  email?: string; // Opcional
  phoneNumber?: string; // Opcional
  countryId: string;
}

// Define el esquema para la tabla de pacientes
const PatientSchema = new dynamoose.Schema(
  {
    patientId: {
      type: String,
      hashKey: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
     
    },
    age: {
      type: Number,
      required: false,
     
    },
    address: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    countryId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    saveUnknown: true,
  }
);

// Crea el modelo usando el esquema definido
const PatientModel = dynamoose.model<Patient>(config.dynamoPatientsTable, PatientSchema);

export default PatientModel;
