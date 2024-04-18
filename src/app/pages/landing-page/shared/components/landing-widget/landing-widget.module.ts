import { CountryCodesPickerComponent } from './../../../components/form/components/country-codes-picker/country-codes-picker.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { environment } from '../../../../../../environments/environment';

import {
    AdditionalBannerBlockComponent,
    AdsBlockComponent,
    BenefitsBlockComponent,
    FaqBlockComponent,
    HowItWorksBlockComponent,
    InfoBlockComponent,
    MainBannerComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    FormComponent,
    InputLocationAutocompleteComponent,
    InputPhoneCountryCodeComponent,    
    LocationAutocompleteService,
    ContactFormService,
} from '@landing-blocks';

import { CommonButtonComponent, ConfirmationComponent,} from '@shared/ui'

import {AutocompleteHighlightPipe} from '@shared/pipes'

import { 
    GEO_API_KEY, 
    GEO_PATH_API,
    BASE_PATH_API, 
} from '@shared/tokens';


import { LandingWidgetRoutingModule } from './landing-widget.routing';
import { LandingWidgetUiComponent } from './ui';
import { LandingWidgetComponent } from './view';

@NgModule({
    declarations: [
        LandingWidgetComponent,
        LandingWidgetUiComponent,
        MainBannerComponent,
        InfoBlockComponent,
        HowItWorksBlockComponent,
        FaqBlockComponent,
        AdditionalBannerBlockComponent,
        BenefitsBlockComponent,
		AdsBlockComponent,
        FormComponent,
        InputLocationAutocompleteComponent,
        CountryCodesPickerComponent,
        InputPhoneCountryCodeComponent,
        PrivacyPolicyComponent,
        TermsConditionsComponent,
    ],
    imports: [
        CommonModule, 
        LandingWidgetRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatAutocompleteModule,
        AutocompleteHighlightPipe,
        MatIconModule,
        CommonButtonComponent,
        ConfirmationComponent,
    ],
    providers: [
        LocationAutocompleteService,
        ContactFormService, 
        { provide: GEO_PATH_API, useValue: environment.geoPathAPI },
        { provide: GEO_API_KEY, useValue: environment.geoApiKey },
        { provide: BASE_PATH_API, useValue: environment.basePathApi }, 
    ]
})
export class LandingWidgetModule {}
