import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HighchartsChartComponent } from './highcharts-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
