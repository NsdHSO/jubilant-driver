import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingDriverRoutingModule } from './landing-driver-routing.module';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, LandingDriverRoutingModule],
})
export class LandingDriverModule {}
