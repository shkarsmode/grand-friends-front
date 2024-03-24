import { ChangeDetectionStrategy, Component, Injector } from '@angular/core';
import { CommonLandingComponentClass } from '../../../../shared';

@Component({
	selector: 'app-faq-block',
	templateUrl: './faq-block.component.html',
	styleUrl: './faq-block.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqBlockComponent extends CommonLandingComponentClass {
    constructor(inject: Injector) {
        super(inject);
    }
}