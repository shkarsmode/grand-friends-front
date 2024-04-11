import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-header-widget',
    templateUrl: './header-widget.component.html',
    styleUrl: './header-widget.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderWidgetComponent {
    private previousValue: number = 0;
    public isHeaderIn: boolean = false;
    public isHeaderOut: boolean = false;

    @HostListener('window:scroll', ['$event'])
    public onWindowScroll(): void {
        const scrollTop =
            window.pageYOffset !== undefined
                ? window.pageYOffset
                : (
                    document.documentElement ||
                    document.body.parentNode ||
                    (document.body as any)
                ).scrollTop;

        this.isHeaderOut = scrollTop > 50 ? true : false;
        this.isHeaderIn =
            this.previousValue > scrollTop && scrollTop > 50 ? true : false;

        this.previousValue = scrollTop;
    }
}
