import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingWidgetComponent } from './view';

const routes: Routes = [
	{ 
		path: '', 
		component: LandingWidgetComponent
	}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LandingWidgetRoutingModule {}
