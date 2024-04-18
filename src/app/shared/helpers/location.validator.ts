import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { IGeoLocation } from '@shared/interfaces';

export function locationValidator(locations: IGeoLocation[]): ValidatorFn {

    return (control: AbstractControl): { [key: string]: any } | null => {
        const inputValue = control.value;
        
        console.log(control.value === '');

        if(control.value === '') return null;
        console.log(locations);


        if (!locations.find(location => location.city + ', ' + location.country ==  inputValue)) {
            return { invalidLocation: { value: inputValue } };
        }
        return null;
    };
}
