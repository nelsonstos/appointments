import { Router } from 'express';
import CountryController from '../controllers/CountryController';

const CountryRouter =  Router();

CountryRouter.post('/', CountryController.createCountry);

export default CountryRouter;