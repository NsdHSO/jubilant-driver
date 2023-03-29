import { Component, OnInit } from '@angular/core';
import { DataSourceMaterialTable } from "ngx-liburg";
import { LandingService } from "../../utils/landing.service";
import { Subject } from "rxjs";
import { ActivatedRoute } from "@angular/router";

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
  styleUrls: [ './landing.component.scss' ],
})
export class LandingComponent implements OnInit {
  dataSource: DataSourceMaterialTable<any>[] | undefined
  listDriver: Driver [] = [ {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  }, {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  }, {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  }, {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  }, {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  }, {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  }, {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  }, {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  }, {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  }, {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  }, {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  }, {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  }, {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  }, {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  }, {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  }, {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  }, {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  }, {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  }, {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  }, {
    personalInfo: {
      name: 'Ion',
      age: 2,
      address: {
        street: 'Ivan',
        houseNumber: 22
      }
    }
  } ]
  private _destroyed = new Subject();

  constructor(
    private readonly _landingService: LandingService,
    private readonly _activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void{

    this.dataSource = this._activatedRoute.snapshot.data[ 'drivers' ].map((driver: any) => {
      const model = {
        ...driver
      }
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
  }
}
