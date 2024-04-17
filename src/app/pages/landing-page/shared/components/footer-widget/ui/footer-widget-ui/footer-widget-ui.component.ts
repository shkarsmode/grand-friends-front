import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer-widget-ui',
    templateUrl: './footer-widget-ui.component.html',
    styleUrl: './footer-widget-ui.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterWidgetUiComponent {

    constructor(private router: Router) {}

    public navigateTo(path: string ) {
        this.router.navigate([path])
    }

}
