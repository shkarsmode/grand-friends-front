import { ICountryCode, ICountryCodes } from '../interfaces/country-code.interface';
import { InjectionToken } from "@angular/core";


export const COUNTRY_CODES_DATA = new InjectionToken<ICountryCodes>("countryCodesData");