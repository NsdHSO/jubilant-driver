import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { of } from "rxjs";
import { LandingService } from "../../utils/landing.service";
import { ActivatedRoute } from "@angular/router";

describe('LandingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;
  let landingService: any;
  let activatedRoute: any;

  beforeEach(async () => {
    landingService = {
      getDrivers$: of({})
    }
    activatedRoute = {
      snapshot: {
        data: {
          drivers: [
            {}
          ]
        }
      }
    }
    await TestBed.configureTestingModule({
      declarations: [ LandingComponent ],
      providers: [ {
        provide: LandingService,
        useValue: landingService
      }, {
        provide: ActivatedRoute,
        useValue: activatedRoute
      } ]
    }).compileComponents();

    fixture = TestBed.createComponent(LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
