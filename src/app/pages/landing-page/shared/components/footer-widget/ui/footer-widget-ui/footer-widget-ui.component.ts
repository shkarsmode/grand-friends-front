import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-footer-widget-ui',
    templateUrl: './footer-widget-ui.component.html',
    styleUrl: './footer-widget-ui.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterWidgetUiComponent {}
