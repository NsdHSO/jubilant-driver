import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { fakeBackendProvider } from "./remote-entry/fakebackend";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IconCoreModule } from "ngx-liburg-icon";

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    IconCoreModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./remote-entry/entry.module').then(
              (m) => m.RemoteEntryModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    HttpClientModule,
  ],
  providers: [ fakeBackendProvider ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
