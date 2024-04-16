import { CountryCodesPickerComponent } from './../../../components/form/components/country-codes-picker/country-codes-picker.component';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { LandingWidgetRoutingModule } from './landing-widget.routing';
import { LandingWidgetUiComponent } from './ui';
import { LandingWidgetComponent } from './view';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AutocompleteHighlightPipe } from '../../../../../shared/pipes/autocomplete-highlight.pipe';
import { InputLocationAutocompleteComponent } from '../../../components/form/components/input-location-autocomplete/input-location-autocomplete.component';
import { GEO_API_KEY, GEO_PATH_API } from '../../../../../shared';
import { environment } from '../../../../../../environments/environment';
import { LocationAutocompleteService } from '../../../components/form/services/location-autocomplete.service';
import {MatIconModule} from '@angular/material/icon';
import { InputPhoneCountryCodeComponent } from '../../../components/form/components/input-phone-country-code/input-phone-country-code.component';

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
    ],
    providers: [
        LocationAutocompleteService,
        // Provide values for injection tokens
        { provide: GEO_PATH_API, useValue: environment.geoPathAPI },
        { provide: GEO_API_KEY, useValue: environment.geoApiKey }
      ]
})
export class LandingWidgetModule {}
