# Medical Appointment Scheduling System

This project is a RESTful API for managing medical appointments across multiple countries using **DynamoDB** and **Dynamoose**. It includes endpoints for managing **patients**, **doctors**, and **appointments**, ensuring scalability and efficiency by leveraging NoSQL technology.

## Features

- **Multi-country appointment scheduling:** Supports multiple countries for both doctors and patients.
- **RESTful API**: Endpoints for creating, reading, updating, and deleting appointments.
- **DynamoDB with Dynamoose**: Utilizes DynamoDB's NoSQL capabilities with Dynamoose as a schema modeler.
- **Global Secondary Index (GSI)**: For efficient querying by `countryId`.

## Prerequisites

- **Node.js** (v18 or higher)
- **Docker** (if running DynamoDB locally)
- **Serverless Framework** (v3)
- **AWS Services** (Lambda, APIGateway, DynamoDB, AIM, SQS and SNS)
- **Postman** (for testing API requests)

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Run DynamoDB Locally (Optional)
If you want to run DynamoDB locally using Docker, execute the following command:

```bash
docker run -d -p 4200:8000 amazon/dynamodb-local

```
### 3. Environment Configuration
Create a .env´ file based on .env.example and configure the following:

```bash
AWS_REGION=us-west-2
DYNAMODB_ENDPOINT=http://localhost:4200
AWS_ACCESS_KEY_ID=j4sb5n
AWS_SECRET_ACCESS_KEY=ja0e54
STAGE=dev

DYNAMODB_PATIENTS_TABLE=appointment-scheduler-dev-patients
DYNAMODB_DOCTORS_TABLE=appointment-scheduler-dev-doctors
DYNAMODB_APPOINTMENTS_TABLE=appointment-scheduler-dev-appointments
DYNAMODB_USERS_TABLE=appointment-scheduler-dev-users
DYNAMODB_COUNTRIES_TABLE=appointment-scheduler-dev-countries
```

### 4. Running the Application
To start the application, run:
```bash
npm run build
```
The API will be available at http://localhost:3000.

## API Endpoints

### 1. Create a Country

```bash
POST /countries
```
Body (JSON)

```bash
{
    "countryId": "002",
    "name":  "CHILE",
    "code": "CL"
}
```

### 2. Create a Doctor

```bash
POST /doctors
```
Body (JSON)

```bash
{
  "doctorId": "doctor001",
  "name": "Dr. Lorea",
  "speciality": "Estomatolog",
  "countryId": "002",
  "availableTimes": ["Monday 10am-4pm", "Wednesday 1pm-5pm"]
}

```

### 3. Create a Patient

```bash
POST /patients
```
Body (JSON)

```bash
{
  "patientId": "0315",
  "name": "Jorge Moros ",
  "age": 85,
  "address": "123 Main St, Anytown, USA",
  "email": "johndoe@example.com",
  "phoneNumber": "+1-555-555-5555",
  "countryId": "001"
}

```

### 4. Create a Appointment

```bash
POST /appointments
```
Body (JSON)

```bash
{
  "appointmentId": "appointment124",
  "patientId": "0315",
  "doctorId": "doctor001",
  "appointmentDate": "2024-10-25T10:00:00Z",
  "countryId": "US",
  "state": "scheduled"
}


```


# Key Points of the README:
- **Introduction**: Explains the project's purpose.
- **Prerequisites**: Lists necessary software like Node.js and Docker.
- **Setup**: Instructions for setting up the project locally.
- **API Endpoints**: Sample requests for creating doctors and appointments.
- **Database Schema**: Describes the Dynamoose schemas for `Doctor` and `Appointment`.
- **Testing**: How to test the API using Postman or cURL.
- **Docker with DynamoDB**: Instructions for running DynamoDB locally with Docker.

This **README** should provide clear guidance for setting up and using your medical appointment scheduling system.



