import CountryModel, { Country } from '../models/CountryModel';

import { CountryRepository } from '../repositories/countryRepository';

class CountryService {
    private countryRepository: CountryRepository;

    constructor() {
        this.countryRepository = new CountryRepository(CountryModel); // Instancia el repositorio
    }

    async createPatient(countryData: Country): Promise<Country> {
        return await this.countryRepository.createPatient(countryData);
    }

}

export default CountryService;

