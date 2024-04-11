import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-header-widget-ui',
    templateUrl: './header-widget-ui.component.html',
    styleUrl: './header-widget-ui.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderWidgetUiComponent {
    @Input() public isOpenBurger: boolean = false;

    public onToggleNavigation = () => this.isOpenBurger = !this.isOpenBurger;
}
