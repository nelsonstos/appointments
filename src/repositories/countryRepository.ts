import CountryModel, { Country } from "../models/CountryModel";

export class CountryRepository {
  private countryModel;

  // Inyección de dependencias a través del constructor
  constructor(countryModel: typeof CountryModel) {
    this.countryModel = countryModel;
  }

  // Crear un nuevo country
  async createPatient(countryData: Country): Promise<Country> {
    try {
      const newCountry = new this.countryModel(countryData);
      const result = await newCountry.save();
      return result as Country;
    } catch (error) {
      console.error("Error creating coutry:", error);
      throw new Error("Could not create coutry");
    }
  }
}