import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-footer-widget',
    templateUrl: './footer-widget.component.html',
    styleUrl: './footer-widget.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterWidgetComponent {}
