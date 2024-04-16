import { Component, ElementRef, EventEmitter, HostListener, Inject, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { COUNTRY_CODES_DATA, ICountryCode, ICountryCodes } from '../../../../../../shared';
import { countryCodes } from '../../../../../../../assets/data/country-codes';

@Component({
  selector: 'app-country-codes-picker',
  templateUrl: './country-codes-picker.component.html',
  styleUrl: './country-codes-picker.component.scss',
  providers: [
    {
      provide: COUNTRY_CODES_DATA, useValue: countryCodes 
    }
  ]
})
export class CountryCodesPickerComponent {

  @Output() public onCountryChange: EventEmitter<ICountryCode> = new EventEmitter<ICountryCode>();

  @ViewChild('countriesWrap') countriesWrap: ElementRef;
  @ViewChild('searchedCountriesWrap') searchedCountriesWrap: ElementRef;

  public searchValue: string = "";
  public searchedCountries: ICountryCodes = [];

  constructor(
      private renderer: Renderer2,
      @Inject(COUNTRY_CODES_DATA) public countryCodes: ICountryCodes
  ){}

  ngAfterViewInit(): void {
      this.renderer.listen(this.countriesWrap.nativeElement, 'click', (event: MouseEvent) => {
        this.handleCountryClick(event);
      })

      this.renderer.listen(this.searchedCountriesWrap.nativeElement, 'click', (event: MouseEvent) => {
        this.handleCountryClick(event);
      })
  }
 
  public get isSearchValue(): boolean {return !!this.searchValue;}
   
  public onSearch(): void {
      let country = this.searchValue.trim().toLowerCase();
      this.searchedCountries = this.countryCodes.filter(el => {
          return el.name.toLowerCase().startsWith(country);
      });   
  }

  public clearSearch(): void { 
      this.searchValue = ""; 
      this.searchedCountries = [];
  }

  private handleCountryClick(event: MouseEvent): void {
    
        const target = event.target as HTMLElement;
        const countryOption = target.closest('.country-option');
        let dialCode = null;
        let country = null;

        if (countryOption) {
          dialCode = countryOption.getAttribute('data-dial-code');
        }
        
        if(dialCode) {
          country = this.findCountryByDialCode(dialCode);
        }

        if(country) {
          this.onCountryChange.emit(country);
        }
  }


  public findCountryByDialCode(dialCode: string): ICountryCode | null{
      return this.countryCodes.find(el => el.dial_code == dialCode) || null;
  }


}
