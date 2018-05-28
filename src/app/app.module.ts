import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgHchartsComponent } from './component/ng-hcharts/ng-hcharts.component';


@NgModule({
  declarations: [
    AppComponent,
    NgHchartsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
