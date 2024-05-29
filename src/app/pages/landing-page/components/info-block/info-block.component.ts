import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector } from '@angular/core';
import { CommonLandingComponentClass } from '../../../../shared';
import { Router } from '@angular/router';

@Component({
    selector: 'app-info-block',
    templateUrl: './info-block.component.html',
    styleUrl: './info-block.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoBlockComponent extends CommonLandingComponentClass {
    public switchImgAndButton: boolean = false;
    
    constructor(inject: Injector,
        private router: Router,
        private cdr: ChangeDetectorRef
    ) {
        super(inject);
    }

    ngOnInit(): void {
        this.checkScreenWidthForSwitch();
        window.addEventListener('resize', this.checkScreenWidthForSwitch.bind(this))
        
    }
    
    public onShowMoreClick(): void {
        this.router.navigate([this.data.linkButton?.link]);
    }

    public get isShowMore(): boolean { return 'showMoreLink' in this.data;}

    public checkScreenWidthForSwitch(): void {
        if(window.innerWidth < 1370) this.switchImgAndButton = true;
        else this.switchImgAndButton = false;
        this.cdr.detectChanges(); 
    }
}
