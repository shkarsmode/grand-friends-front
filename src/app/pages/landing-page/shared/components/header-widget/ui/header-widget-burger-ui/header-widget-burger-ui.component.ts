import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-header-widget-burger-ui',
    templateUrl: './header-widget-burger-ui.component.html',
    styleUrl: './header-widget-burger-ui.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderWidgetBurgerUiComponent {
    @Input() public isOpenBurger: boolean = false;

    @Output() public toggleNavigation: EventEmitter<void> = new EventEmitter();
}
