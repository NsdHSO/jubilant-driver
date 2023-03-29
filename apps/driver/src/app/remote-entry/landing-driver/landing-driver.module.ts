import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingDriverRoutingModule } from './landing-driver-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { TableMaterialModule } from "ngx-liburg";

@NgModule({
  declarations: [ LandingComponent ],
  imports: [ CommonModule,
    LandingDriverRoutingModule,
    TableMaterialModule,
  ],

})
export class LandingDriverModule {
}
