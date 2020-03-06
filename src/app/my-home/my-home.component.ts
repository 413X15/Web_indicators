import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartType = 'bar';
  public barChartLegend = true;
  
  barChartData: ChartDataSets [] = [{data: [], label: 'Clientes'}];
  barChartLabels: Label[];

  constructor() { }

  ngOnInit() {
  }

}
