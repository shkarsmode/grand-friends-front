import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { CommonLandingComponentClass, Reasons } from '../../../../shared';

@Component({
    selector: 'app-ads-block',
    templateUrl: './ads-block.component.html',
    styleUrl: './ads-block.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdsBlockComponent extends CommonLandingComponentClass {
    
    public defaultFormType: Reasons = Reasons.GeneralInquiry;
    public isFormSubmited: boolean = false;
    
    constructor(inject: Injector) {
        super(inject);
    }
    
    public listenFormSubmiting(): void {
        console.log('emited');
        this.isFormSubmited = true
    }
}
