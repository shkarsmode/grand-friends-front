import { Location } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	Injector,
	OnInit,
	Type,
	inject,
} from '@angular/core';
import { landingInfo } from '../../../../../../../../assets/data/landing-info';
import { ILandingBlockInfo, ILandingBlocksInfo } from '../../../../../../../shared';
import { LandingBlocks } from '../../../../../../../shared/enum/landing-blocks.enum';
import { DYNAMIC_COMPONENT_DATA } from '../../../../../../../shared/tokens';
import {
	AdditionalBannerBlockComponent,
	AdsBlockComponent,
	BannerComponent,
	BenefitsBlockComponent,
	FaqBlockComponent,
	HowItWorksBlockComponent,
	InfoBlockComponent,
	MainBannerComponent,
} from '../../../../../components';

@Component({
    selector: 'app-landing-widget',
    templateUrl: './landing-widget.component.html',
    styleUrl: './landing-widget.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingWidgetComponent implements OnInit {
    public data: ILandingBlocksInfo;
    public componentMapping: { [key: string]: Type<any> } = {
        [LandingBlocks.Banner]: BannerComponent,
        [LandingBlocks.FaqBlock]: FaqBlockComponent,
        [LandingBlocks.AdsBlock]: AdsBlockComponent,
        [LandingBlocks.InfoBlock]: InfoBlockComponent,
        [LandingBlocks.MainBanner]: MainBannerComponent,
        [LandingBlocks.BenefitsBlock]: BenefitsBlockComponent,
        [LandingBlocks.HowItWorksBlock]: HowItWorksBlockComponent,
        [LandingBlocks.AdditionalBanner]: AdditionalBannerBlockComponent,
    };

    private readonly location: Location = inject(Location);

    public ngOnInit(): void {
        this.determineLandingDataBasedOnPath();
    }

	public customInjector = (blockInfo: ILandingBlockInfo): Injector => 
		Injector.create({
			providers: [{ 
				provide: DYNAMIC_COMPONENT_DATA, 
				useValue: blockInfo 
			}]
		});

    private determineLandingDataBasedOnPath(): void {
        const path = this.location.path();
        const key = path.length ? path.replace('/', '') : 'home';

        this.data = landingInfo[key].map((block: ILandingBlockInfo) => {
				const injector = this.customInjector(block);
				const tag = block.tag;
				return {
					injector,
					tag
				}
			})
    }
}
