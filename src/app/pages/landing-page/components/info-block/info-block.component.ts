import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { CommonLandingComponentClass } from '../../../../shared';

@Component({
    selector: 'app-info-block',
    templateUrl: './info-block.component.html',
    styleUrl: './info-block.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoBlockComponent extends CommonLandingComponentClass {
    constructor(inject: Injector) {
        super(inject);
    }
}
