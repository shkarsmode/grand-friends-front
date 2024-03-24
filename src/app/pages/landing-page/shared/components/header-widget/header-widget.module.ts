import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderWidgetUiComponent } from './ui';
import { HeaderWidgetComponent } from './view';

@NgModule({
    declarations: [HeaderWidgetComponent, HeaderWidgetUiComponent],
    imports: [CommonModule, RouterModule],
	exports: [HeaderWidgetComponent]
})
export class HeaderWidgetModule {}
