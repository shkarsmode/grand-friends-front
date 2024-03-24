import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [
	{ 
		path: '', 
		component: LandingPageComponent,
		// children: [
		// 	{
		// 		path: '', redirectTo: '', pathMatch: 'full' 
		// 	},
		// 	// { path: '', component: MainLayoutComponent },
		// 	// { path: 'about-us', component: AboutUsLayoutComponent },
		// 	// { path: 'founders-story', component: FounderLayoutComponent },
		// 	// { path: 'compassionate-use', component: CompassionateLayoutComponent },
		// ]
	},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LandingPageRoutingModule {}
