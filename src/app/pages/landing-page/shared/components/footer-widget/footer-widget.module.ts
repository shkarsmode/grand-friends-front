import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterWidgetUiComponent } from './ui';
import { FooterWidgetComponent } from './view';

@NgModule({
    declarations: [FooterWidgetComponent, FooterWidgetUiComponent],
    imports: [CommonModule],
	exports: [FooterWidgetComponent]
})
export class FooterWidgetModule {}
