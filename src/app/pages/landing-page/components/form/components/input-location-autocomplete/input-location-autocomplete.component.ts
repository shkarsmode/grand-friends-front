import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
    ViewChild,
    forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import {
    Subject,
    ThrottleConfig,
    asyncScheduler,
    takeUntil,
    tap,
    throttleTime,
} from 'rxjs';
import { LocationAutocompleteService } from '../../services/location-autocomplete.service';
import { IGeoLocation } from './../../../../../../shared/interfaces/geo/geo-location.interface';

@Component({
    selector: 'app-input-location-autocomplete',
    templateUrl: './input-location-autocomplete.component.html',
    styleUrls: ['./input-location-autocomplete.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputLocationAutocompleteComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputLocationAutocompleteComponent
    implements ControlValueAccessor, OnDestroy
{
    @ViewChild('formInput') public inputRef: ElementRef<HTMLInputElement>;

    @Input() public isValid: boolean;
    @Output() public locations: EventEmitter<IGeoLocation[]> = new EventEmitter<
        IGeoLocation[]
    >();

    public value: string = '';
    public autocompleteLocations: IGeoLocation[] = [];
    public isLoading: boolean = false;
    public isValidAddress: boolean = false;

    private _destroy$: Subject<void> = new Subject<void>();
    private _autocompleteInputChanged$: Subject<Event> = new Subject<Event>();
    private _throttleConfig: ThrottleConfig = {
        leading: false,
        trailing: true,
    };

    constructor(
        private readonly _cdr: ChangeDetectorRef,
        private readonly _autocompleteService: LocationAutocompleteService
    ) {}

    public onChangeLocation(event: Event): void {
        const newValue = (event.target as HTMLInputElement).value;
        this.isValidAddress = false;
        this.writeValue(newValue);
        this._onChange(this.value);

        if (this._autocompleteInputChanged$.observers.length === 0) {
            this._autocompleteInputChanged$
                .pipe(
                    throttleTime(500, asyncScheduler, this._throttleConfig),
                    takeUntil(this._destroy$)
                )
                .subscribe(() => this._getAutocompleteLocation(event));
        }

        this.inputRef.nativeElement.focus();

        this._cdr.detectChanges();

        this._autocompleteInputChanged$.next(event);
    }

    private _getAutocompleteLocation(event: Event): void {
        const text = (event.target as HTMLInputElement).value;
        //   this._onChange('');

        if (text.length < 3) {
            this.autocompleteLocations = [];
            return;
        }

        this.isLoading = true;

        this._autocompleteService
            .getLocationAutocomplete(text)
            .pipe(tap(console.log), takeUntil(this._destroy$))
            .subscribe((locations) => {
                this.autocompleteLocations = locations;
                this.locations.emit(this.autocompleteLocations);
                this.isLoading = false;
                this._cdr.markForCheck();
            });
    }

    public _onInputBlur(): void {
        if (!this.isValidAddress) {
            // Clear the input value if it's not a valid selection
            this.writeValue('');
        }
    }

    public registerOnChange = (fn: any) => (this._onChange = fn);
    public registerOnTouched = (fn: any) => (this._onTouched = fn);
    public writeValue = (value: any) => {
        this.value = value ?? this.value;
    };

    public onSelectChange(
        optionChangeEvent: MatOptionSelectionChange<string>
    ): void {
        this.isValidAddress = true;
        const formattedPlace = optionChangeEvent.source.value;
        this.value = formattedPlace;
        this._onChange(formattedPlace);
        this._onTouched();
    }

    private _onChange: any = () => {};
    private _onTouched: any = () => {};

    public ngOnDestroy(): void {
        this.inputRef.nativeElement.removeEventListener(
            'input',
            this.onChangeLocation.bind(this)
        );
        this._destroy$.next();
        this._destroy$.complete();
    }
}
