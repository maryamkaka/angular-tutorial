import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent as HerosComponent } from './heroes/heroes.component';
// ng generate module app-routing --flat --module=app
// flat -> puts the file in src/app 
// module=app register it as part of the AppModule 


/**
 * Determines which view to display when a user clicks a link 
 * or navigates to a url 
 */
const routes: Routes = [
	{ path: 'heros', component: HerosComponent }
];

@NgModule({
	exports: [RouterModule],
	imports: [RouterModule.forRoot(routes)],		//.forRoot() sets the routing method for the root of the app 
})
export class AppRoutingModule { }

