import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableMaterialModule } from 'ngx-liburg';
import { LandingComponent } from './components/landing/landing.component';
import { LandingDriverRoutingModule } from './landing-driver-routing.module';

@NgModule({
  declarations: [ LandingComponent ],
  imports: [ CommonModule,
    LandingDriverRoutingModule,
    TableMaterialModule,
  ],

})
export class LandingDriverModule {
}
