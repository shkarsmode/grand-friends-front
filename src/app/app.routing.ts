import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ 
		path: '', 
		loadChildren: 
			() => import('./pages')
				.then(m => m.LandingPageModule)
	},
	{ 
		path: 'admin', 
		loadChildren: 
			() => import('./pages')
				.then(m => m.AdminPageModule)
	},
	{
		path: '**', 
		pathMatch: 'full',
		redirectTo: ''
	}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
