import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeamsComponent } from './teams/teams.component';


const routes: Routes = [
  { path:'' , redirectTo:'/home' , pathMatch:'full' },
  { path:'home' , component:LandingPageComponent },
  { path:'about' , component:AboutComponent },
  { path:'teams' , component:TeamsComponent },
  { path:'**' , component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
