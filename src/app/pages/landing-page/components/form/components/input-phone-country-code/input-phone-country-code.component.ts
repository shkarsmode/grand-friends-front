import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, Input, ViewChild, forwardRef } from '@angular/core';
import { ICountryCode } from '../../../../../../shared';
import { AbstractControl, AsyncValidatorFn, ControlValueAccessor, FormControl, FormControlName, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';
import { Observable, catchError, debounceTime, distinctUntilChanged, map, of, switchMap, take } from 'rxjs';
import { ContactFormService } from '../../services';

type IsValid = boolean;

@Component({
  selector: 'app-input-phone-country-code',
  templateUrl: './input-phone-country-code.component.html',
  styleUrl: './input-phone-country-code.component.scss',
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputPhoneCountryCodeComponent),
        multi: true,
    },
  ],
})
export class InputPhoneCountryCodeComponent implements ControlValueAccessor {
  @ViewChild('phoneWrap') phoneWrap: ElementRef;
  
  @HostListener('document:click', ['$event']) onClickOutside(event: MouseEvent) {
    if(!this.phoneWrap.nativeElement.contains(event.target)) {
      this.isDropdown = false;
    }
  }

  private onChange: any = () => {};
  private onTouched: any = () => {};

  public phoneInput: FormControl;
  public _isVerification: boolean; // for loading process
  private _isValid: boolean; // input state
  public verifiedNumbers: Map<string, IsValid> = new Map();

  public currentCountry: ICountryCode;
  public isDropdown: boolean = false;

  constructor(
    private contactFormService: ContactFormService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
      this.initCurrentCountry();
      this.phoneInput = new FormControl('')
      this.isVerification = false;
      this.isValid = true;
  }

  ngAfterViewInit(): void {
      this.listenPhoneInput();        
  }

  public initCurrentCountry(): void {
      this.currentCountry = {
        "name": "United States",
        "dial_code": "+1",
        "code": "US"
      }
  }

  public writeValue(value: string): void {
    this.phoneInput.setValue(value,{ emitEvent: false });
  }
  
  public registerOnChange = (fn: any) => (this.onChange = fn);
  public registerOnTouched = (fn: any) => (this.onTouched = fn);


  public onCountryChange(event: ICountryCode): void {
      this.currentCountry = event;
      this.onChange(this.getPhone)//!!!!
      this.onTouched();
      this.isDropdown = false;
      this.startVerificationAndValidationProcess();
  }

  private listenPhoneInput(): void {
      this.phoneInput
          ?.valueChanges.pipe(debounceTime(700))
          .subscribe((value) => {
              // this.startVerificationAndValidationProcess();
              this.handlePhoneInput(value);
              this.onChange(this.getPhone)//!!!!
              this.onTouched();
          });
  }

  private handlePhoneInput(inputValue: string): void {
      const formattedPhoneInput = this.formatPhoneInput(inputValue);
      this.phoneInput.patchValue(formattedPhoneInput, {
        emitEvent: false}
      ); 
  }

  private formatPhoneInput(inputValue: string): string {
      if (!inputValue) return '';
      let cleanedInput = this.cleanPhoneInput(inputValue);
      
      // Add spaces every three characters
      const formattedInput = this.addCaratEveryThreeCharacters(cleanedInput);
      return formattedInput;
  }

  private cleanPhoneInput(inputValue: string): string {
      // Remove any character that is not allowed in a phone number
      return inputValue.replace(/[^\d]/g, '');
  }

  private addCaratEveryThreeCharacters(inputValue: string): string {
    if (inputValue.length < 4) return inputValue;
    // Add spaces every three characters
    const groups = inputValue.match(/.{1,3}/g);
    const formattedValue = groups?.reduce((acc, group, index) => {
        // Add hyphen between groups except for the last one
        const separator = index < 2 ? '-' : '';
        return acc + group + separator;
    }, '');

    return formattedValue || '';
  }

  public get getPhone(): string {
      let phone = this.phoneInput?.value;
      return this.currentCountry.dial_code + phone.split('-').join('');
  }

  private getFullNumber(dialCode:string, number:string): string {
      return dialCode + number;
  }

  public onInputChange(): void {
    this.startVerificationAndValidationProcess();
  }


  public get isValid(): boolean { return this._isValid; }
  public get isVerification(): boolean { return this._isVerification }

  private set isValid(state: boolean) { this._isValid = state; }
  private set isVerification(state: boolean) { 
    this._isVerification = state 
  }

  public get value(): string { return this.phoneInput.value; }

  private startVerificationAndValidationProcess(): void {
      this.isVerification = false;
      this.cdr.detectChanges();
        
      // optimize verifcation
        if(this.value == '') { this.isValid = true; return }

        let currentCountry = Object.assign({}, this.currentCountry);
        let number = this.cleanPhoneInput(this.value);
        let fullNumber = this.getFullNumber(currentCountry.dial_code, number);        

        if(this.verifiedNumbers.has(fullNumber)) { 
            this.isValid  = this.verifiedNumbers.get(fullNumber) as boolean;        
            return;
        }

      // start verification process
      this.isVerification = true;
      this.cdr.detectChanges();
      
      
      this.contactFormService.verifyPhoneNumber(currentCountry.code, number)
          .pipe(debounceTime(700))
          .subscribe((res) => {
            if(res['isValid']) {
                this.isValid = true;
                this.verifiedNumbers.set(fullNumber, true);
            } else {
                this.isValid = false;
                this.verifiedNumbers.set(fullNumber, false);
            }

            this.isVerification = false;
            this.cdr.detectChanges()
      })
  
  }


   
  // private checkPhoneNumberVerification(): AsyncValidatorFn {
  //     return (control: AbstractControl): Observable<ValidationErrors | null> => {
  //         let number = control.value as string;
  //         number = this.cleanPhoneInput(number);

  //         if (!control.valueChanges || control.pristine) {
  //           return of(null);
  //         } else {
      
  //             return control.valueChanges.pipe(
  //                 debounceTime(500),
  //                 distinctUntilChanged(),
  //                 // take(1),
  //                 switchMap(() =>{ 
  //                   console.log('switch map');
                    
  //                   this.isVerification = true;
  //                   return this.contactFormService.verifyPhoneNumber(
  //                   this.currentCountry.code,
  //                   number
  //                 )}),
  //                 map(response => {

  //                   this.isVerification = false;
  //                   console.log('decided');
                    
  //                   const errors = !response.isValid ? { "exist": true } : null;
  //                       this.phoneInput?.setErrors(errors);
  //                         console.log(this.phoneInput.errors);
  //                         console.log('map end');
                          
                          
  //                       return errors;


  //                     // this.isVerification = false;
  //                     // return errors;
  //                 }),
  //                 catchError(() => {
  //                     this.isVerification = false;
  //                     console.log('catch error');
                      
  //                     return of(null)
  //                 }) 
  //             );
  //         }
  //     };
  // } 

  // private subscribeToPhoneControlChanges() {
  //   this.phoneInput.statusChanges.pipe(
  //     debounceTime(300),
  //     distinctUntilChanged()
  //   ).subscribe((status) => {
  //     console.log(this.phoneInput.errors);
      
  //     if (status === 'VALID') {
  //       this.isPhoneVerified = true; // Update the flag if the phone control is valid
  //       console.log('valid');
        
  //     } else {
  //       console.log('error');
  //       this.isPhoneVerified = false; // Update the flag if the phone control is invalid
  //     }
  //   });
  // }
  

}



 
