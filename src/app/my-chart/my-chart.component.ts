import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {
  public areaChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public areaChartLabels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  public areaChartType = 'line';
  public areaChartLegend = true;

  public areaChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Serie A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
