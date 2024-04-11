import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HeaderWidgetUiComponent } from './ui';
import { HeaderWidgetComponent } from './view';
import { HeaderWidgetBurgerUiComponent } from './ui/header-widget-burger-ui/header-widget-burger-ui.component';

@NgModule({
    declarations: [HeaderWidgetComponent, HeaderWidgetUiComponent, HeaderWidgetBurgerUiComponent],
    imports: [CommonModule, RouterModule, AngularSvgIconModule],
    exports: [HeaderWidgetComponent],
})
export class HeaderWidgetModule {}
