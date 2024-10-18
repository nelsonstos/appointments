import dynamoose from 'dynamoose';
import { Item } from 'dynamoose/dist/Item';
import { config } from '../config/config';

export interface Country extends Item {
    countryId: string;
    name: string;
    code?: number; // Opcional
  }
  

const CountrySchema = new dynamoose.Schema({
  countryId: {
    type: String,
    hashKey: true, // Clave de partición
  },
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: false,
  }
  
},
{
    timestamps: true,
    saveUnknown: true,
  }

);

const CountryModel = dynamoose.model<Country>(config.dynamoCountriesTable, CountrySchema);
export default CountryModel;
