import { Component, OnInit } from '@angular/core';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css']
})
export class MyDataComponent implements OnInit {
  data = {
    year: '',
    type: '',
    num: 0
  }

  constructor(private upload: UploadService) { }

  saveEntry() {
    this.upload.saveEntry(this.data);
  }

  ngOnInit() {
  }

}
