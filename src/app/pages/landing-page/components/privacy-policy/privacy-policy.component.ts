import { ChangeDetectionStrategy, Component, Inject, Injector } from '@angular/core';
import { CommonLandingComponentClass } from '../../../../shared';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyPolicyComponent  extends CommonLandingComponentClass {
	constructor(inject: Injector) {
		super(inject);
	}
}
