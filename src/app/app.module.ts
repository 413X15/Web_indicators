import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';
//, MatButtonModule, MatRadioModule, MatInputModule
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';

//angular
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

//pages
import { MyHomeComponent } from './my-home/my-home.component';
import { MyDataComponent } from './my-data/my-data.component';

//services
import { UploadService } from './upload.service';
import { MyChartComponent } from './my-chart/my-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyDataComponent,
    MyChartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    UploadService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
