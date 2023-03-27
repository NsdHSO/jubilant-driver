import { Component, OnInit } from '@angular/core';
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
  } ,{
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
  } ,{
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
  } ,{
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
  } ,{
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
  } ,{
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
  } ,{
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
  } ,{
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
  } ,{
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
  } ,{
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

  ngOnInit(): void{
    this.dataSource = this.listDriver.map(driver => {
        const model = {name: driver.personalInfo.name, age: driver.personalInfo.age}
        return{
          actions: [{ iconClass: '', classCss: '', method: (row: Driver) => console.log(row)}],
          editable: true,
          model: {
            ...model
          }
        } as DataSourceMaterialTable<any>
    })
  }
}
