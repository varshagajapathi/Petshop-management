import { Injectable } from '@angular/core';
import{AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public afs:AngularFirestore) { }
  getallproducts(){
    return  this.afs.collection('/products').snapshotChanges
  }
}
