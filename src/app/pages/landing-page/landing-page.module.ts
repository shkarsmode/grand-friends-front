import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
	AdditionalBannerBlockComponent,
	FaqBlockComponent,
	HowItWorksBlockComponent,
	InfoBlockComponent,
	MainBannerComponent,
} from './components';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page.routing';
import { FooterWidgetModule, HeaderWidgetModule } from './shared';
import { BenefitsBlockComponent } from './components/benefits-block/benefits-block.component';

@NgModule({
    declarations: [
        LandingPageComponent,
        MainBannerComponent,
        InfoBlockComponent,
        HowItWorksBlockComponent,
        FaqBlockComponent,
        AdditionalBannerBlockComponent,
        BenefitsBlockComponent,
    ],
    imports: [
        CommonModule,
        LandingPageRoutingModule,
        HeaderWidgetModule,
        FooterWidgetModule,
    ],
})
export class LandingPageModule {}
