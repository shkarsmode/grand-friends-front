import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { CommonLandingComponentClass, Reasons } from '../../../../shared';

@Component({
    selector: 'app-ads-block',
    templateUrl: './ads-block.component.html',
    styleUrl: './ads-block.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdsBlockComponent extends CommonLandingComponentClass {
    
    defaultFormType: Reasons = Reasons.GeneralInquiry;
    
    constructor(inject: Injector) {
        super(inject);
    }

    
}
