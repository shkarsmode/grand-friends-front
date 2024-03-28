import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { CommonLandingComponentClass } from '../../../../shared';

@Component({
    selector: 'app-how-it-works-block',
    templateUrl: './how-it-works-block.component.html',
    styleUrl: './how-it-works-block.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HowItWorksBlockComponent extends CommonLandingComponentClass {
    constructor(inject: Injector) {
        super(inject);
    }
}
