import { AbstractControl, ValidatorFn } from "@angular/forms";



export function urlValidator(): ValidatorFn {

    let urlRegex: RegExp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/

    return (control: AbstractControl): { [key: string]: any } | null => {
        // try {
        //     let url = new URL(control.value);
        // } catch (error) {
        // return { 'url': { value: control.value } }; 
        // }
        if(control.value == "") return null


        if(!urlRegex.test(control.value)) return {'url': { value: control.value }} 

        return null;
    };
}