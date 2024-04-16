import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrl: './common-button.component.scss',
  standalone: true,
})
export class CommonButtonComponent {
  @Input() disabled: boolean = false;
}
