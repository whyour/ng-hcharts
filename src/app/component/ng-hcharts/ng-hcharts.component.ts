import { Component, ElementRef, Input, OnDestroy, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: '[ng-hcharts]',
  template: ''
})
export class NgHchartsComponent implements OnDestroy, OnChanges {
  hostElement: ElementRef;
  constructor(private el: ElementRef) {
    this.hostElement = el;
  };

  chart: any;
  Highcharts: any = Highcharts;
  @Input('ng-hcharts') optionsValue: any;
  @Input() oneToOne: Boolean;
  updateValue = false;
  currentWidth: number;
  currentHeight: number;
  updateOrCreateChart():void {
    if (this.chart && this.chart.update) {
      this.chart.update(this.optionsValue, true, this.oneToOne || false);
    } else {
      this.chart = this.Highcharts['chart'](
        this.hostElement.nativeElement,
        this.optionsValue,
        null
      );
      this.optionsValue.series = this.chart.userOptions.series;
    }
  }

  ngOnChanges() {
    this.updateOrCreateChart();
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

}