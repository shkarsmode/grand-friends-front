import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
    ],
    imports: [
        CommonModule, 
        LandingWidgetRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
})
export class LandingWidgetModule {}
