import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonButtonComponent } from '../common-button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
  standalone: true,
  imports: [CommonButtonComponent, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationComponent {

  constructor(private router: Router) {}

  public navigateTo(path: string): void {
      this.router.navigate([path]);
  }
}
