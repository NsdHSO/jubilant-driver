import { Injectable } from '@angular/core';
import { LandingApiService } from "./landing.api.service";

@Injectable({ providedIn: "root" })
export class LandingService {

  getDrivers$ = this._landingApiService.getDrivers

  constructor(private readonly _landingApiService: LandingApiService){
  }
}
