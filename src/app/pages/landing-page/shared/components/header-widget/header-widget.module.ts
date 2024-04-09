import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HeaderWidgetUiComponent } from './ui';
import { HeaderWidgetComponent } from './view';

@NgModule({
    declarations: [HeaderWidgetComponent, HeaderWidgetUiComponent],
    imports: [CommonModule, RouterModule, AngularSvgIconModule],
    exports: [HeaderWidgetComponent],
})
export class HeaderWidgetModule {}
