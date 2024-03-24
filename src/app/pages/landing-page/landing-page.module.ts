import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page.routing';
import { FooterWidgetModule, HeaderWidgetModule } from './shared';

@NgModule({
    declarations: [LandingPageComponent],
    imports: [CommonModule, LandingPageRoutingModule, HeaderWidgetModule, FooterWidgetModule],
})
export class LandingPageModule {}
