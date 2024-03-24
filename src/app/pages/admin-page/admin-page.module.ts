import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminPageComponent } from './admin-page.component';
import { AdminPageRoutingModule } from './admin-page.routing';

@NgModule({
    declarations: [AdminPageComponent],
    imports: [CommonModule, AdminPageRoutingModule],
})
export class AdminPageModule {}
