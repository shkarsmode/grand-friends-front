import { ICountryPhone, ICountryPhones } from '../interfaces/country-phone.interface';
import { InjectionToken } from "@angular/core";


export const COUNTRY_PHONES_DATA = new InjectionToken<ICountryPhones>("countryPhonesData");