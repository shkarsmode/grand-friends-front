import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page.routing';
import { FooterWidgetModule, HeaderWidgetModule } from './shared';


@NgModule({
    declarations: [
        LandingPageComponent,
    ],
    imports: [
        CommonModule,
        HeaderWidgetModule,
        FooterWidgetModule,
		LandingPageRoutingModule,
        ReactiveFormsModule
    ],
})
export class LandingPageModule {}
