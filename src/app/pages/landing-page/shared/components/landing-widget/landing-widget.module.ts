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
        { provide: GEO_PATH_API, useValue: environment.geoPathAPI },
        { provide: GEO_API_KEY, useValue: environment.geoApiKey }
    ]
})
export class LandingWidgetModule {}
