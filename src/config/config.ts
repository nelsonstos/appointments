import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const config = {
  awsRegion: process.env.AWS_REGION || 'us-west-2',
  dynamoDbLocalEndpoint: process.env.DYNAMODB_ENDPOINT || '',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'j4sb5n', // Clave de acceso para dev
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'ja0e54', // Clave secreta para dev
  },
  stage: process.env.STAGE || 'dev',

  dynamoPatientsTable: process.env.DYNAMODB_PATIENTS_TABLE || '',
  dynamoDoctorsTable: process.env.DYNAMODB_DOCTORS_TABLE || '',
  dynamoAppointmentsTable: process.env.DYNAMODB_APPOINTMENTS_TABLE || '',
  dynamoUsersTable: process.env.DYNAMODB_USERS_TABLE || '',
  dynamoCountriesTable: process.env.DYNAMODB_COUNTRIES_TABLE || '',

  snsTopicArn: process.env.SNS_TOPIC_ARN || '',
  sqsQueueUrl: process.env.SQS_QUEUE_URL || ''
};

export { config };
