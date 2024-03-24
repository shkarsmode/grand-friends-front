import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { CommonLandingComponentClass } from '../../../../shared';

@Component({
	selector: 'app-additional-banner-block',
	templateUrl: './additional-banner-block.component.html',
	styleUrl: './additional-banner-block.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdditionalBannerBlockComponent extends CommonLandingComponentClass {
	constructor(inject: Injector) {
		super(inject);
	}
}
