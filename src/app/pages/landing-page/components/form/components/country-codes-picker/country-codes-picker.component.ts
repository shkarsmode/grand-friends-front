import { Component, ElementRef, EventEmitter, HostListener, Inject, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { countryPhonesData } from '@data/country-phones.data';
import { ICountryPhone, ICountryPhones } from '@shared/interfaces';
import { COUNTRY_PHONES_DATA } from '@shared/tokens';

@Component({
  selector: 'app-country-codes-picker',
  templateUrl: './country-codes-picker.component.html',
  styleUrl: './country-codes-picker.component.scss',
  providers: [
    {
      provide: COUNTRY_PHONES_DATA, useValue: countryPhonesData
    }
  ]
})
export class CountryCodesPickerComponent {

  @Output() public onCountryChange: EventEmitter<ICountryPhone> = new EventEmitter<ICountryPhone>();

  @ViewChild('countriesWrap') countriesWrap: ElementRef;
  @ViewChild('searchedCountriesWrap') searchedCountriesWrap: ElementRef;

  public searchValue: string = "";
  public searchedCountries: ICountryPhones = [];

  constructor(
      private renderer: Renderer2,
      @Inject(COUNTRY_PHONES_DATA) public countryCodes: ICountryPhones
  ){}

  ngOnInit(): void {
    this.sortCountriesBySuggested();
  }

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
        let countryName = null;
        let country = null;

        if (countryOption) {
          countryName = countryOption.getAttribute('data-country-name');
        }
        
        if(countryName) {
          country = this.findCountryByName(countryName);
        }

        if(country) {
          this.onCountryChange.emit(country);
        }
  }


  public findCountryByName(name: string): ICountryPhone | null{
      return this.countryCodes.find(el => el.name == name) || null;
  }

  private sortCountriesBySuggested(): void {
    this.countryCodes = this.countryCodes.sort((a, b) => {
      if (a.suggested && !b.suggested) {
        return -1; // a is suggested, b is not
      } else if (!a.suggested && b.suggested) {
        return 1; // b is suggested, a is not
      } else {
        return 0; // both are suggested or both are not suggested
      }
    });
  }


}
