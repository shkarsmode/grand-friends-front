import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-header-widget',
    templateUrl: './header-widget.component.html',
    styleUrl: './header-widget.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderWidgetComponent {}
