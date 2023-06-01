import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { fakeBackendProvider } from "./remote-entry/fakebackend";
@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { initialNavigation: 'enabledBlocking' }
    ),
    HttpClientModule,
  ],
  providers: [ fakeBackendProvider ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
