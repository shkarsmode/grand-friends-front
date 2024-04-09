import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FooterWidgetUiComponent } from './ui';
import { FooterWidgetComponent } from './view';

@NgModule({
    declarations: [FooterWidgetComponent, FooterWidgetUiComponent],
    imports: [CommonModule, AngularSvgIconModule],
	exports: [FooterWidgetComponent]
})
export class FooterWidgetModule {}
