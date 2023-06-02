import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataSourceMaterialTable } from "ngx-liburg";

export interface Driver {
  personalInfo: {
    name: string,
    age: number,
    address: {
      street: string,
      houseNumber: number
    }
  }
}

@Component({
  selector: 'driver-landing',
  templateUrl: './landing.component.html',
  styleUrls: [ './landing.component.scss' ]
})
export class LandingComponent {

  dataSource = this._activatedRoute.snapshot.data[ 'drivers' ].map((driver: any) => {
    const model = {
      ...driver
    }
    this._landingService.markForCheck()
    return {
      actions: [ {
        iconClass: "fa_solid:gauge",
        classCss: "edit",
        method: (row: Driver) => console.log(row)
      } ],
      editable: true,
      model: {
        ...model
      }
    } as DataSourceMaterialTable<any>
  })

  constructor (
    private readonly _landingService: ChangeDetectorRef,
    private readonly _activatedRoute: ActivatedRoute){
  }
}
