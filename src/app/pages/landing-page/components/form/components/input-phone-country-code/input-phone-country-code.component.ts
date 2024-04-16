import { Component, ElementRef, HostListener, Inject, ViewChild, forwardRef } from '@angular/core';
import { ICountryCode } from '../../../../../../shared';
import { ControlValueAccessor, FormControl, FormControlName, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime } from 'rxjs';

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

  public currentCountry: ICountryCode;
  public isDropdown: boolean = false;

  ngOnInit(): void {
      this.initCurrentCountry();
      this.phoneInput = new FormControl('');
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
  }

  private listenPhoneInput(): void {
      this.phoneInput
          ?.valueChanges.pipe(debounceTime(700))
          .subscribe((value) => {
              this.handlePhoneInput(value);
              console.log(this.getPhone);
              
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


}
