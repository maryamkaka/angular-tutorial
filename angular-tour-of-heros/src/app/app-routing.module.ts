import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HerosComponent as HerosComponent } from './heros/heros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// ng generate module app-routing --flat --module=app
// flat -> puts the file in src/app 
// module=app register it as part of the AppModule 


/**
 * Determines which view to display when a user clicks a link 
 * or navigates to a url 
 */
const routes: Routes = [
	{ path: '', redirectTo: "/dashboard", pathMatch: "full" },

	{ path: 'heros', component: HerosComponent },
	{ path: 'detail/:id', component: HeroDetailComponent },		//:id is a placeholder and will be replaced by the hero id 
	{ path: 'dashboard', component: DashboardComponent },
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(routes)],		//.forRoot() sets the routing method for the root of the app 
})
export class AppRoutingModule { }
