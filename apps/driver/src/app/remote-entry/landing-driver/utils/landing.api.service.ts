import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn:'root'
})
export class LandingApiService {

  getDrivers = this._httpClient.get(environment.apiUrl + 'drivers')

  constructor(private readonly _httpClient: HttpClient){

  }
}
