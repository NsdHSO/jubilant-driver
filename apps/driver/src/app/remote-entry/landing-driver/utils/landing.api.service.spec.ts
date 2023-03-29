import { TestBed } from '@angular/core/testing';
import { LandingApiService } from "./landing.api.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";


describe('LandingApiService', () => {
  let service: LandingApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(LandingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
