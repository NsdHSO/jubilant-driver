import { TestBed } from '@angular/core/testing';

import { LandingService } from './landing.service';
import { LandingApiService } from "./landing.api.service";
import { of } from "rxjs";

describe('LandingService', () => {
  let service: LandingService;
  let landingApiService: any
  beforeEach(() => {
    landingApiService = {
      getDrivers: of({})
    }
    TestBed.configureTestingModule({
      providers: [ {
        provide: LandingApiService,
        useValue: landingApiService
      } ]
    });
    service = TestBed.inject(LandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
