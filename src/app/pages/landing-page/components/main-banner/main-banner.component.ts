import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { CommonLandingComponentClass } from '../../../../shared';

@Component({
    selector: 'app-main-banner',
    templateUrl: './main-banner.component.html',
    styleUrl: './main-banner.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainBannerComponent extends CommonLandingComponentClass {
	constructor(inject: Injector) {
		super(inject);
	}

	get screenWidth() { return window.innerWidth; }

	ngOnInit(): void {
		console.log(window.innerWidth);
		
	}

}


