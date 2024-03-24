import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { CommonLandingComponentClass } from '../../../../shared';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent extends CommonLandingComponentClass {
    constructor(inject: Injector) {
        super(inject);
    }
}
