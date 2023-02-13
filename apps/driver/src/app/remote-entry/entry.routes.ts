import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    loadChildren: () =>
      import('./landing-driver/landing-driver.module').then(
        (m) => m.LandingDriverModule
      ),
  },
];
