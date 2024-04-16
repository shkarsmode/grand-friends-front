import { CountryCodesPickerComponent } from './../../../components/form/components/country-codes-picker/country-codes-picker.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { environment } from '../../../../../../environments/environment';
import { GEO_API_KEY, GEO_PATH_API } from '../../../../../shared';
import { AutocompleteHighlightPipe } from '../../../../../shared/pipes/autocomplete-highlight.pipe';
import {
    AdditionalBannerBlockComponent,
    AdsBlockComponent,
    BenefitsBlockComponent,
    FaqBlockComponent,
    FormComponent,
    HowItWorksBlockComponent,
    InfoBlockComponent,
    MainBannerComponent,
} from '../../../components';
import { InputLocationAutocompleteComponent } from '../../../components/form/components/input-location-autocomplete/input-location-autocomplete.component';
import { LocationAutocompleteService } from '../../../components/form/services/location-autocomplete.service';
import { LandingWidgetRoutingModule } from './landing-widget.routing';
import { LandingWidgetUiComponent } from './ui';
import { LandingWidgetComponent } from './view';
import { InputPhoneCountryCodeComponent } from '../../../components/form/components/input-phone-country-code/input-phone-country-code.component';
import { CommonButtonComponent } from '../../../../../shared/ui/common-button/common-button.component';

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
    ],
    providers: [
        LocationAutocompleteService,
        { provide: GEO_PATH_API, useValue: environment.geoPathAPI },
        { provide: GEO_API_KEY, useValue: environment.geoApiKey }
    ]
})
export class LandingWidgetModule {}
