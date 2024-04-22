import { ChangeDetectionStrategy, ChangeDetectorRef, Directive, HostListener } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { ContactFormService } from '../../pages/landing-page/components/form';
import { Observable, catchError, debounceTime, map, of, tap } from 'rxjs';

type IsValid = boolean; 

@Directive({
  selector: '[appEmailAsyncValidator]',
  providers: [
    { 
      provide: NG_ASYNC_VALIDATORS, 
      useExisting: EmailAsyncValidatorDirective,
      multi: true
    }
  ],
})
export class EmailAsyncValidatorDirective implements AsyncValidator {
  
  private verifiedEmails: Map<string, IsValid> = new Map();

  constructor(private validationService: ContactFormService) { }


  validate(control: AbstractControl<any>): Observable<ValidationErrors | null> {
    const email = control.value as string;
    if (!email) {
      return of(null);
    }

    if(this.verifiedEmails.has(email)) { 
      let isValid = this.verifiedEmails.get(email) as boolean;
      if(isValid) return of(null)
      else return of({ emailInvalid: true })
    }

    console.log('go more');
    
    control.setErrors({ loading: true }); // Set loading state

    return this.validationService.verifyEmail(email).pipe(
      map(response => {
        delete control.errors?.['loading'] // Clear loading state
        this.verifiedEmails.set(email, response['isValid']);
        return response['isValid'] ? null : { emailInvalid: true };
      }),
      catchError(() => {
        delete control.errors?.['loading']
        // control.setErrors({ loading: false }); // Clear loading state
        return of(null);
      })
    );
  }
}
