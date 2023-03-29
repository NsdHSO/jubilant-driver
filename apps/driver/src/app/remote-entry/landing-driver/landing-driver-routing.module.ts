import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from "./components/landing/landing.component";
import { LandingResolver } from "./utils/landing.resolver";

const routes: Routes = [
  {
    path: '', component: LandingComponent,
    resolve: { drivers: LandingResolver }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LandingDriverRoutingModule {
}
