import serveless from 'serverless-http';
import express, { Request, Response  } from 'express';
import dotenv from 'dotenv';

import PatientRouter from './routes/PatientRoute';
import DynamooseClient from './clients/dynamooseClient';
import CountryRouter from './routes/CoutryRoute';
import DoctorRouter from './routes/DoctorRoute';
import AppointmentRouter from './routes/AppointmentRoute';


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/', function (req: Request, res: Response) {
    res.send('Welcome to API!!')
});

// Inicializar el cliente Dynamoose
DynamooseClient.getClient();

app.use('/patients', PatientRouter);
app.use('/countries', CountryRouter);
app.use('/doctors', DoctorRouter);
app.use('/appointments', AppointmentRouter)


export const handler = serveless(app);