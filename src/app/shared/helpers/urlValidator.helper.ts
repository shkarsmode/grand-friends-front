import { AbstractControl, ValidatorFn } from "@angular/forms";

export function urlValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        try {
        let url = new URL(control.value);
        } catch (error) {
        return { 'url': { value: control.value } }; 
        }
        return null;
    };
}