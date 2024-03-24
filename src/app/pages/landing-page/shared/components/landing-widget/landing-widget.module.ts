import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
	AdditionalBannerBlockComponent,
	AdsBlockComponent,
	BenefitsBlockComponent,
	FaqBlockComponent,
	HowItWorksBlockComponent,
	InfoBlockComponent,
	MainBannerComponent,
} from '../../../components';
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
		AdsBlockComponent
    ],
    imports: [CommonModule, LandingWidgetRoutingModule],
})
export class LandingWidgetModule {}
