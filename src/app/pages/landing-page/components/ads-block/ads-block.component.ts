import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { CommonLandingComponentClass } from '../../../../shared';

@Component({
    selector: 'app-ads-block',
    templateUrl: './ads-block.component.html',
    styleUrl: './ads-block.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdsBlockComponent extends CommonLandingComponentClass {
    constructor(inject: Injector) {
        super(inject);
    }
}
