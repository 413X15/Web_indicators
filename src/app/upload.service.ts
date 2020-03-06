import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class UploadService {
  
  constructor(private afs: AngularFirestore) { }

  saveEntry(data): void {
    this.afs.collection('datas').add(data);
  }

  getAllEntries(): Observable<any> {
    return this.afs.collection('datas').valueChanges();
  }
}
