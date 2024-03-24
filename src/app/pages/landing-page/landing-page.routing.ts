import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';

const routes: Routes = [
	{ 
		path: '', 
		component: LandingPageComponent,
		children: [
			{
				path: '',
				loadChildren: 
				() => import('./shared')
					.then(m => m.LandingWidgetModule)
			},
			{
				path: 'about',
				loadChildren: 
				() => import('./shared')
					.then(m => m.LandingWidgetModule)
			},
			// {
			// 	path: 'community',
			// 	loadChildren: 
			// 	() => import('./shared')
			// 		.then(m => m.LandingWidgetModule)
			// },
			// {
			// 	path: 'schools',
			// 	loadChildren: 
			// 	() => import('./shared')
			// 		.then(m => m.LandingWidgetModule)
			// },
			// {
			// 	path: 'login',
			// 	loadChildren: 
			// 	() => import('./shared')
			// 		.then(m => m.LandingWidgetModule)
			// }
		]
	}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LandingPageRoutingModule {}
