import { TestBed } from '@angular/core/testing';
import { LandingResolver } from "./landing.resolver";
import { LandingService } from "./landing.service";
import { of } from "rxjs";


describe('LandingResolver', () => {
  let service: LandingResolver;
  let landingService: any;
  beforeEach(() => {
    landingService = {
      getDrivers$: of({})
    }
    TestBed.configureTestingModule({
      providers: [ {
        provide: LandingService,
        useValue: landingService
      } ]
    });
    service = TestBed.inject(LandingResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
