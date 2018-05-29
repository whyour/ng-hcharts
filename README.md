# ng-hcharts [![npm version](https://img.shields.io/npm/v/ng-hcharts.svg)](https://img.shields.io/npm/v/ng-hcharts.svg) [![npm downloads](https://img.shields.io/npm/dt/ng-hcharts.svg)](https://npmjs.org/ng-hcharts) [![slack](https://ngx-slack.herokuapp.com/badge.svg)](https://ngx-slack.herokuapp.com)
Responsive highcharts for Angular2+ base on highcharts used attibute

[![NPM](https://nodei.co/npm/ng-hcharts.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/ng-hcharts)
[![NPM](https://nodei.co/npm-dl/ng-hcharts.png?&months=9)](https://npmjs.org/ng-hcharts)

- - -

### Installation

1. You can install ***ng-hcharts*** using npm

  ```bash
  npm install ng-hcharts --save
  ```
2. You need to install and include `highcharts.js` library in application via `html` or `webpack bundler` (more options can be found in official `highcharts.js` 

  ```bash
  npm install highcharts --save
  ```

### Usage & Demo
 <!-- Demo and API details of ***ng-hcharts*** can be found here:
  [demo](https://whyour.github.io/ng-hcharts/) and [source code](https://github.com/valor-software/ng2-charts/tree/master/demo) -->

Make a chart!
```typescript
import { NgHChartsModule } from 'ng-hcharts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgHChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

```html
<div id="chart1" [ng-hcharts]="chartConfig"></div>
```

<!-- The `chartConfig` object should be the same as a normal highcharts configuration. Any options that work in highcharts should work here also. 
### Chart types
There are one directive for all chart types: `base-chart`, and there are 6 types of charts: , `line`, `bar`, `radar`, `pie`, `polarArea`, `doughnut`. --> 

### Properties

**Note**: For more information about possible options please refer to original [highcharts](https://www.highcharts.com/docs) documentation

- `ng-hcharts` (`?any`) - chart options (as from [highcharts documentation](https://www.highcharts.com/docs))
- `oneToOne` (`?Boolean`) - When true, the series, xAxis and yAxis collections will be updated one to one, and items will be either added or removed to match the new updated options. For example, if the chart has two series and we call chart.update with a configuration containing three series, one will be added. If we call chart.update with one series, one will be removed. Setting an empty series array will remove all series, but leaving out the series property will leave all series untouched. If the series have id's, the new series options will be matched by id, and the remaining ones removed.


## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/whyour/ng-hcharts/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

This library is available under the MIT license. However it and is a wrapper for Highcharts. Highcharts itself has an own license. So make sure to follow their license as well (https://github.com/highcharts/highcharts/blob/master/license.txt)
