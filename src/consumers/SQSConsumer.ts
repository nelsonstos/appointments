import { SQS } from 'aws-sdk';
import { config } from '../config/config';
import AppointmentService from '../services/AppointmentService';


class SQSConsumer {
    private  appointmentService = new AppointmentService();
    private sqs = new SQS();
    private queueUrl = config.sqsQueueUrl; // Reemplaza con tu URL de SQS

    async processMessages() {
        const params = {
            QueueUrl: this.queueUrl,
            MaxNumberOfMessages: 10, // El número máximo de mensajes a recibir
            WaitTimeSeconds: 20, // Esperar hasta 20 segundos por mensajes
        };

        try {
            const data = await this.sqs.receiveMessage(params).promise();

            if (data.Messages && data.Messages.length > 0) {
                for (const message of data.Messages) {
                    try {
                        // Verifica si el cuerpo del mensaje está presente
                        if (message.Body) {
                            const appointmentData = JSON.parse(message.Body);

                            // Procesa la cita (por ejemplo, guardarla en la base de datos)
                            await this.appointmentService.createAppointment(appointmentData);

                            // Elimina el mensaje de la cola después de procesarlo
                            if (message.ReceiptHandle) { // Verifica que ReceiptHandle esté definido
                                await this.sqs.deleteMessage({
                                    QueueUrl: this.queueUrl,
                                    ReceiptHandle: message.ReceiptHandle,
                                }).promise();
                            } else {
                                console.error('El mensaje no tiene un ReceiptHandle:', message);
                            }
                        } else {
                            console.error('El mensaje no contiene un cuerpo:', message);
                        }
                    } catch (err) {
                        // Maneja errores de JSON.parse o de procesamiento del mensaje
                        console.error('Error al procesar el mensaje:', err, 'Mensaje:', message);
                    }
                }
            } else {
                console.log('No se encontraron mensajes en la cola.');
            }
        } catch (error) {
            console.error('Error al recibir mensajes de SQS:', error);
        }
    }
}

export default SQSConsumer;
