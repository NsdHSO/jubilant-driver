import { Injectable } from '@angular/core';
import { LandingService } from "./landing.service";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class LandingResolver implements Resolve<any> {
  public constructor(private readonly _landingSerivce: LandingService){
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
    return this._landingSerivce.getDrivers$;
  }
}
