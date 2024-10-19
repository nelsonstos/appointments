import { DynamoDB } from '@aws-sdk/client-dynamodb'; // SDK V3
import dynamoose from 'dynamoose';
import { config } from '../config/config';

class DynamooseClient {
  private static instance: DynamoDB;

  // Constructor privado para evitar instanciación externa
  private constructor() {}

  // Método para obtener la instancia del cliente
  public static getClient(): DynamoDB {
    if (!this.instance) {
      // Validar configuraciones necesarias
      if (!config.awsRegion || !config.credentials.accessKeyId || !config.credentials.secretAccessKey) {
        throw new Error('Faltan configuraciones necesarias para DynamoDB.');
      }

      try {
        this.instance = new DynamoDB({
          region: config.awsRegion,
          endpoint: config.stage === 'dev' ? config.dynamoDbLocalEndpoint : undefined, // Configura solo si está en dev
          credentials: {
            accessKeyId: config.credentials.accessKeyId,
            secretAccessKey: config.credentials.secretAccessKey,
          },
        });

        // Configurar Dynamoose para usar el cliente de DynamoDB V3
        dynamoose.aws.ddb.set(this.instance);
        console.log(`Dynamoose configurado para el entorno: ${config.stage}`);
      } catch (error) {
        console.error('Error al crear la instancia de DynamoDB:', error);
        throw new Error('No se pudo inicializar el cliente de DynamoDB.');
      }
    }
    return this.instance;
  }
}

export default DynamooseClient;
