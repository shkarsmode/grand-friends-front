import { ChangeDetectionStrategy, Component, Input, Type } from '@angular/core';
import { ILandingBlocksInfo, LandingBlocks } from '../../../../../../../shared';

@Component({
	selector: 'app-landing-widget-ui',
	templateUrl: './landing-widget-ui.component.html',
	styleUrl: './landing-widget-ui.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingWidgetUiComponent {
	@Input() public blockData: ILandingBlocksInfo;
	@Input() public mapping: { [key: string]: Type<any> };
	
	public readonly LandingBlocks: typeof LandingBlocks = LandingBlocks;
}

