import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderWidgetUiComponent } from './ui';
import { HeaderWidgetComponent } from './view';

@NgModule({
    declarations: [HeaderWidgetComponent, HeaderWidgetUiComponent],
    imports: [CommonModule],
	exports: [HeaderWidgetComponent]
})
export class HeaderWidgetModule {}
