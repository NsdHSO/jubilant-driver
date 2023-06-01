import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('frameDrawer/FrameComponent').then((c) => c.FrameComponent),
    outlet: 'primary',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./remote-entry/entry.module').then(
            (c) => c.RemoteEntryModule
          ),
        outlet: 'primary',
      },
      {
        path: 'parent',
        loadComponent: () =>
          import('frameDrawer/DrawerComponent').then((c) => c.FrameDrawerComponent),
        outlet: 'sidenav',
        children: [
          {
            path: 'edit',
            loadChildren: () =>
              import(
                './remote-entry/landing-driver/landing-driver.module'
              ).then((m) => m.LandingDriverModule),
          },
        ],
      },
    ],
  },
];
