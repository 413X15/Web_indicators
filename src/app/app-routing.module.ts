import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyHomeComponent } from './my-home/my-home.component';
import { MyDataComponent } from './my-data/my-data.component';
import { MyChartComponent } from './my-chart/my-chart.component';


const routes: Routes = [
  {path: 'home', component: MyHomeComponent},
  {path: 'data', component: MyDataComponent},
  {path: 'chart', component: MyChartComponent},
  {path: '**', component: MyHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
